const { execSync } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
const artifact = require('@actions/artifact');
const fs = require('fs');
const https = require('https');
const path = require('path');

async function run() {
    const startTime = Date.now();

    try {
        // === Read Inputs ===
        const apiKey = core.getInput('api-key');
        const target = core.getInput('target');
        const scanType = core.getInput('scan-type');
        const failOnCritical = core.getInput('fail-on-critical') === 'true';
        const autoFix = core.getInput('auto-fix') === 'true';
        const configUrl = core.getInput('config-url');
        const deltaScan = core.getInput('delta-scan') === 'true';
        const githubToken = core.getInput('github-token');
        const baselineFile = core.getInput('baseline-file');
        const slackWebhook = core.getInput('slack-webhook');
        const uploadSbom = core.getInput('upload-sbom') === 'true';

        core.info('SynapseAudit Security Scanner v3.1 - Extended Edition');
        


        // === 1. Centralized Policy ===
        if (configUrl) {
            core.startGroup('Fetching remote configuration');
            try {
                await fetchUrl(configUrl, '.synapseaudit.json');
                core.info(`Configuration loaded from ${configUrl}`);
            } catch (e) {
                core.warning(`Failed to fetch config: ${e.message}`);
            }
            core.endGroup();
        }

        // === 2. Load Baseline for Suppression ===
        let baseline = [];
        if (fs.existsSync(baselineFile)) {
            try {
                baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf-8'));
                core.info(`Loaded ${baseline.length} suppressed findings from baseline.`);
            } catch (e) {
                core.warning(`Failed to parse baseline: ${e.message}`);
            }
        }

        // === Install CLI ===
        core.startGroup('Installing SynapseAudit CLI');
        try {
            execSync('npm install -g @digidenone/synapseaudit@latest', { stdio: 'pipe', timeout: 120000 });
            core.info('CLI installed successfully');
        } catch (e) {
            core.warning('Using npx to run CLI');
        }
        core.endGroup();

        if (apiKey) process.env.SYNAPSE_API_KEY = apiKey;
        process.env.CI = 'true';

        // === 3. Delta Analysis ===
        let finalTarget = target;
        if (deltaScan && process.env.GITHUB_EVENT_PATH) {
            core.startGroup('Calculating Delta (Diff Scan)');
            try {
                const diffFiles = getDiffFiles();
                if (diffFiles.length === 0) {
                    core.info('No relevant files changed. Skipping scan.');
                    return;
                }
                fs.writeFileSync('synapse-delta.txt', diffFiles.join('\n'));
                core.info(`Delta Scan: Found ${diffFiles.length} changed files.`);
            } catch (e) {
                core.warning(`Delta scan failed: ${e.message}. Falling back to full scan.`);
            }
            core.endGroup();
        }

        // === Build Scan Command ===
        // If scanType is 'all' or 'comprehensive', run multiple scans
        const scanTypes = scanType === 'all' || scanType === 'comprehensive' 
            ? ['static', 'sca', 'secrets', 'iac', 'license'] 
            : [scanType];
        
        let allVulnerabilities = [];
        let allLicenses = [];
        let sbomData = null;

        // === Run All Scans ===
        for (const currentScanType of scanTypes) {
            core.startGroup(`Running ${currentScanType.toUpperCase()} Scan`);
            
            let cmd = 'npx synapse-audit';
            if (['sca', 'secrets', 'iac', 'sbom', 'license'].includes(currentScanType)) {
                cmd += ` security ${currentScanType} "${finalTarget}" --output json`;
            } else if (currentScanType.includes('-scan')) {
                cmd += ` ${currentScanType} "${finalTarget}"`;
            } else {
                cmd += ` analyze "${finalTarget}" --output json`;
            }
            
            core.info(`Executing: ${cmd}`);
            let output = '';
            try {
                output = execSync(cmd, { encoding: 'utf-8', timeout: 300000, maxBuffer: 10 * 1024 * 1024 });
            } catch (cmdError) {
                output = cmdError.stdout || cmdError.stderr || '';
            }
            
            // Parse and aggregate results
            try {
                const parsed = JSON.parse(output);
                if (parsed.vulnerabilities) {
                    allVulnerabilities.push(...parsed.vulnerabilities.map(v => ({ ...v, scanType: currentScanType })));
                }
                if (parsed.licenses) {
                    allLicenses.push(...parsed.licenses);
                }
                if (parsed.sbom) {
                    sbomData = parsed.sbom;
                }
            } catch (e) {
                core.warning(`${currentScanType} scan returned non-JSON output`);
            }
            
            core.endGroup();
        }
        
        // Run fallback secrets scan if no vulnerabilities found
        if (allVulnerabilities.length === 0) {
            core.info('Running fallback secrets scan...');
            allVulnerabilities = runFallbackSecretsScan(finalTarget);
        }

        // === Aggregate Results ===
        let results = { vulnerabilities: allVulnerabilities, licenses: allLicenses, sbom: sbomData };

        // === 5. Baseline Suppression ===
        const baselineIds = new Set(baseline.map(b => `${b.type}:${b.file}:${b.line}`));
        const filteredVulns = (results.vulnerabilities || []).filter(v => {
            const id = `${v.type}:${v.file}:${v.line}`;
            return !baselineIds.has(id);
        });
        const suppressedCount = (results.vulnerabilities?.length || 0) - filteredVulns.length;
        if (suppressedCount > 0) core.info(`Suppressed ${suppressedCount} baseline findings.`);

        const vulnCount = filteredVulns.length;
        const criticalCount = filteredVulns.filter(v => v.severity === 'critical').length;
        const highCount = filteredVulns.filter(v => v.severity === 'high').length;
        const mediumCount = filteredVulns.filter(v => v.severity === 'medium').length;

        // === 6. Calculate Security Score ===
        const score = calculateSecurityScore(criticalCount, highCount, mediumCount, vulnCount);
        core.info(`Security Score: ${score}`);

        // === Set Outputs ===
        const duration = ((Date.now() - startTime) / 1000).toFixed(2);
        core.setOutput('vulnerability-count', vulnCount);
        core.setOutput('critical-count', criticalCount);
        core.setOutput('high-count', highCount);
        core.setOutput('scan-duration', duration);
        core.setOutput('scan-results', JSON.stringify(results));
        core.setOutput('security-score', score);

        // === 7. Inline PR Annotations ===
        filteredVulns.forEach(v => {
            const msg = `[${v.severity?.toUpperCase()}] ${v.type}: ${v.description}`;
            const props = { file: v.file, startLine: v.line || 1 };
            if (v.severity === 'critical' || v.severity === 'high') {
                core.error(msg, props);
            } else {
                core.warning(msg, props);
            }
        });

        // === 8. Direct PR Comment (Always) ===
        if (githubToken && github.context.payload.pull_request) {
            await postPRComment(githubToken, filteredVulns, score);
        }

        // === 9. Generate and Upload SARIF ===
        const sarif = generateSARIF(filteredVulns, target);
        fs.writeFileSync('synapse-results.sarif', JSON.stringify(sarif, null, 2));
        core.setOutput('sarif-file', 'synapse-results.sarif');
        
        // Upload SARIF to GitHub Code Scanning
        if (githubToken) {
            await uploadSarifToCodeScanning(githubToken, 'synapse-results.sarif');
        }

        // === 10. SBOM Upload ===
        if (uploadSbom && results.sbom) {
            const sbomPath = 'synapse-sbom.json';
            fs.writeFileSync(sbomPath, JSON.stringify(results.sbom, null, 2));
            core.setOutput('sbom-file', sbomPath);
            try {
                const artifactClient = artifact.create();
                await artifactClient.uploadArtifact('SynapseAudit-SBOM', [sbomPath], '.', { continueOnError: true });
                core.info('SBOM artifact uploaded.');
            } catch (e) {
                core.warning(`SBOM upload failed: ${e.message}`);
            }
        }

        // === 11. License Compliance Output ===
        if (results.licenses && results.licenses.length > 0) {
            core.setOutput('license-report', JSON.stringify(results.licenses));
        }

        // === 12. Slack Notification ===
        if (slackWebhook && vulnCount > 0) {
            await sendSlackNotification(slackWebhook, vulnCount, criticalCount, score);
        }

        // === 13. Job Summary with Trend ===
        await core.summary
            .addHeading('SynapseAudit Security Scan')
            .addTable([
                [{ data: 'Metric', header: true }, { data: 'Value', header: true }],
                ['Target', target],
                ['Scan Type', scanType],
                ['Duration', `${duration}s`],
                ['Total Findings', vulnCount.toString()],
                ['Critical', criticalCount.toString()],
                ['High', highCount.toString()],
                ['Security Score', score],
            ])
            .write();

        // === Fail Check ===
        if (failOnCritical && criticalCount > 0) {
            core.setFailed(`Found ${criticalCount} critical vulnerabilities`);
        } else {
            core.info(`Scan completed: ${vulnCount} vulnerabilities`);
        }

    } catch (error) {
        core.setFailed(`Failed: ${error.message}`);
    }
}

// === Helper Functions ===

function fetchUrl(url, destPath) {
    return new Promise((resolve, reject) => {
        const proto = url.startsWith('https') ? https : require('http');
        proto.get(url, (res) => {
            if (res.statusCode !== 200) return reject(new Error(`Status ${res.statusCode}`));
            const file = fs.createWriteStream(destPath);
            res.pipe(file);
            file.on('finish', () => { file.close(); resolve(); });
        }).on('error', reject);
    });
}

function getDiffFiles() {
    try {
        execSync('git fetch origin main --depth=1', { stdio: 'pipe' });
        const diff = execSync('git diff --name-only origin/main HEAD', { encoding: 'utf-8' });
        return diff.split('\n').filter(f => f.trim() && !f.startsWith('.git'));
    } catch {
        return [];
    }
}

function commitChanges() {
    execSync('git config user.name "SynapseAudit Bot"');
    execSync('git config user.email "contact@digidenone.tech"');
    execSync('git add .');
    try {
        execSync('git commit -m "fix: apply automated security remediation"');
        execSync('git push');
        core.info('Changes committed and pushed.');
    } catch {
        core.info('No changes to commit.');
    }
}

function calculateSecurityScore(critical, high, medium, total) {
    if (critical > 0) return 'F';
    if (high > 2) return 'D';
    if (high > 0 || medium > 5) return 'C';
    if (medium > 0 || total > 10) return 'B';
    return 'A';
}

async function postPRComment(token, vulns, score) {
    const octokit = github.getOctokit(token);
    const context = github.context;
    
    let body = `### 🛡️ SynapseAudit Security Report\n\n`;
    body += `**Security Score: ${score}**\n\n`;
    
    if (vulns.length === 0) {
        body += `✅ **No vulnerabilities detected!** Your code looks secure.\n\n`;
        body += `_Keep up the great work! Regular scans help maintain security._`;
    } else {
        body += `Found **${vulns.length}** vulnerabilities:\n\n`;
        body += `| Severity | Type | File | Line |\n|---|---|---|---|\n`;
        
        vulns.slice(0, 10).forEach(v => {
            const icon = v.severity === 'critical' ? '🔴' : (v.severity === 'high' ? '🟠' : '⚪');
            body += `| ${icon} ${v.severity} | ${v.type} | \`${v.file}\` | ${v.line} |\n`;
        });
        
        if (vulns.length > 10) body += `\n*...and ${vulns.length - 10} more.*`;
    }
    
    body += `\n\n---\n_Scanned by [SynapseAudit](https://synapseaudit.digidenone.tech)_`;

    await octokit.rest.issues.createComment({
        ...context.repo,
        issue_number: context.payload.pull_request.number,
        body
    });
}

async function sendSlackNotification(webhookUrl, vulnCount, criticalCount, score) {
    const payload = JSON.stringify({
        text: `SynapseAudit Scan Complete`,
        blocks: [
            { type: 'section', text: { type: 'mrkdwn', text: `*SynapseAudit Security Scan*` } },
            { type: 'section', fields: [
                { type: 'mrkdwn', text: `*Score:* ${score}` },
                { type: 'mrkdwn', text: `*Vulnerabilities:* ${vulnCount}` },
                { type: 'mrkdwn', text: `*Critical:* ${criticalCount}` },
            ]}
        ]
    });

    return new Promise((resolve, reject) => {
        const url = new URL(webhookUrl);
        const req = https.request({
            hostname: url.hostname,
            path: url.pathname,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }, (res) => {
            if (res.statusCode === 200) {
                core.info('Slack notification sent.');
                resolve();
            } else {
                reject(new Error(`Slack error: ${res.statusCode}`));
            }
        });
        req.on('error', reject);
        req.write(payload);
        req.end();
    });
}

function generateSARIF(vulns, target) {
    return {
        version: "2.1.0",
        "$schema": "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json",
        runs: [{
            tool: { driver: { name: "SynapseAudit", version: "3.1.0", rules: [] } },
            results: vulns.map((vuln, i) => ({
                ruleId: vuln.cwe || `SYNAPSE-${i}`,
                level: vuln.severity === 'critical' ? 'error' : 'warning',
                message: { text: vuln.description || 'Security issue' },
                locations: [{ physicalLocation: { artifactLocation: { uri: vuln.file || target }, region: { startLine: vuln.line || 1 } } }]
            }))
        }]
    };
}

async function uploadSarifToCodeScanning(token, sarifPath) {
    const octokit = github.getOctokit(token);
    const context = github.context;
    
    try {
        const sarifContent = fs.readFileSync(sarifPath, 'utf-8');
        const gzipped = require('zlib').gzipSync(sarifContent);
        const base64Sarif = gzipped.toString('base64');
        
        await octokit.rest.codeScanning.uploadSarif({
            ...context.repo,
            commit_sha: context.sha,
            ref: context.ref,
            sarif: base64Sarif
        });
        
        core.info('SARIF uploaded to GitHub Code Scanning.');
    } catch (error) {
        core.warning(`SARIF upload failed: ${error.message}`);
    }
}

function runFallbackSecretsScan(target) {
    const vuln = [];
    const secretPatterns = [
        { name: 'AWS Access Key', regex: /AKIA[0-9A-Z]{16}/g },
        { name: 'AWS Secret Key', regex: /(?<![A-Za-z0-9/+=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])/g },
        { name: 'Generic API Key', regex: /api[_-]?key['\"]?\s*[:=]\s*['\"]?[A-Za-z0-9_-]{20,}/gi },
        { name: 'Private Key', regex: /-----BEGIN (RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/g },
        { name: 'GitHub Token', regex: /gh[pousr]_[A-Za-z0-9_]{36,}/g },
        { name: 'Slack Token', regex: /xox[baprs]-[0-9]{10,13}-[0-9]{10,13}[a-zA-Z0-9-]*/g }
    ];
    
    const walkDir = (dir) => {
        try {
            const files = fs.readdirSync(dir);
            for (const file of files) {
                const filePath = path.join(dir, file);
                const stat = fs.statSync(filePath);
                if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
                    walkDir(filePath);
                } else if (stat.isFile() && stat.size < 1024 * 1024) {
                    try {
                        const content = fs.readFileSync(filePath, 'utf-8');
                        const lines = content.split('\n');
                        lines.forEach((line, idx) => {
                            for (const pattern of secretPatterns) {
                                if (pattern.regex.test(line)) {
                                    vuln.push({
                                        severity: 'high',
                                        type: pattern.name,
                                        description: `Potential ${pattern.name} detected`,
                                        file: filePath.replace(/\\/g, '/'),
                                        line: idx + 1
                                    });
                                    pattern.regex.lastIndex = 0;
                                }
                            }
                        });
                    } catch (e) {}
                }
            }
        } catch (e) {}
    };
    
    walkDir(target === '.' ? process.cwd() : target);
    core.info(`Fallback scan found ${vuln.length} potential secrets.`);
    return vuln;
}

run();

