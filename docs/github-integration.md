# GitHub Integration Documentation

## Overview

SynapseAudit's GitHub Integration provides seamless connectivity between your security analysis results and GitHub's ecosystem, enabling automated issue creation, security advisory management, and CI/CD workflow generation.

## Features

### 🐛 Automated Issue Creation
- **Smart Issue Generation**: Convert detected vulnerabilities into comprehensive GitHub issues
- **Detailed Descriptions**: Each issue includes vulnerability type, severity, location, and remediation steps
- **Automatic Labeling**: Issues are tagged with `security`, `vulnerability`, and `automated` labels
- **Interactive Selection**: Choose which specific vulnerabilities to report

### 🛡️ Security Advisory Management
- **Advisory Drafts**: Generate security advisory templates for multiple vulnerabilities
- **Severity Assessment**: Automatic CVSS severity calculation based on vulnerability types
- **Comprehensive Coverage**: Summarize multiple security issues in a single advisory
- **Compliance Ready**: Format follows GitHub's security advisory standards

### ⚙️ CI/CD Security Workflows
- **Automated Workflow Generation**: Create comprehensive GitHub Actions security workflows
- **Multi-Tool Integration**: Includes CodeQL, Trivy, npm audit, and dependency checks
- **Scheduled Scanning**: Weekly automated security scans
- **SARIF Integration**: Results uploaded to GitHub Security tab

## Setup Guide

### Prerequisites
- Active GitHub repository with appropriate permissions
- GitHub Personal Access Token with required scopes
- VS Code with SynapseAudit extension installed

### Configuration Steps

#### 1. Generate GitHub Token
1. Navigate to GitHub → Settings → Developer Settings → Personal Access Tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Select the following scopes:
   ```
   ✓ repo (Full control of private repositories)
   ✓ security_events (Read and write security events)
   ✓ workflow (Update GitHub Action workflows)
   ```
4. Copy the generated token

#### 2. Configure VS Code Settings
Add the following to your VS Code settings:

```json
{
  "synapseAudit.githubToken": "ghp_xxxxxxxxxxxxxxxxxxxx",
  "synapseAudit.enableGitHubIntegration": true
}
```

**Security Note**: Store tokens securely. Consider using VS Code's secure storage or environment variables.

## Usage Instructions

### Creating GitHub Issues

1. **Run Security Analysis**
   - Open a file in VS Code
   - Run Command: `SynapseAudit: Analyze Current File`
   - Wait for analysis to complete

2. **Create Issue**
   - In the SynapseAudit sidebar, locate vulnerabilities
   - Click "Create GitHub Issue" button
   - Select the specific vulnerability from the dropdown
   - Issue will be automatically created with detailed information

3. **Issue Content Structure**
   ```markdown
   ## 🚨 Security Vulnerability Detected

   **Type:** SQL Injection
   **Severity:** High  
   **Line:** 25

   ### Description
   [Detailed vulnerability description]

   ### Recommendation
   [Specific remediation steps]

   ### Details
   [Additional context and examples]
   ```

### Adding Security Workflows

1. **Generate Workflow**
   - Click "Add Security Workflow" in the GitHub Integration section
   - Choose to either:
     - Add directly to `.github/workflows/security.yml`
     - Preview the workflow content first

2. **Workflow Features**
   - **Triggers**: Push to main/develop, pull requests, weekly schedule
   - **Security Tools**: CodeQL, Trivy, npm audit, dependency-check
   - **Reporting**: SARIF upload to GitHub Security tab
   - **Artifacts**: Security reports saved as build artifacts

3. **Customization**
   - Edit the generated workflow for your specific needs
   - Add custom security tools or modify scanning parameters
   - Configure notifications and failure handling

### Security Advisory Creation

1. **Bulk Advisory Creation**
   - Run Command: `SynapseAudit: Create Security Advisory`
   - Advisory will include all detected vulnerabilities
   - Review and edit before publishing

2. **Advisory Structure**
   - Summary of all vulnerabilities found
   - Severity assessment (critical/high/medium/low)
   - Affected package information
   - Mitigation recommendations

## Command Reference

### VS Code Commands
| Command | Description | Keyboard Shortcut |
|---------|-------------|-------------------|
| `synapse-audit.createGitHubIssue` | Create GitHub issue for selected vulnerability | - |
| `synapse-audit.createSecurityAdvisory` | Generate security advisory draft | - |
| `synapse-audit.addSecurityWorkflow` | Add GitHub Actions security workflow | - |

### Sidebar Actions
- **Create GitHub Issue**: Convert vulnerability to GitHub issue
- **Add Security Workflow**: Generate comprehensive security scanning workflow
- **View in GitHub**: Direct links to created issues and workflows

## Best Practices

### Security Token Management
- **Minimal Permissions**: Use tokens with only required scopes
- **Regular Rotation**: Rotate tokens every 90 days
- **Secure Storage**: Never commit tokens to version control
- **Environment Variables**: Consider using environment variables for CI/CD

### Issue Management Workflow
1. **Triage**: Review auto-created issues promptly
2. **Prioritization**: Use GitHub labels and milestones
3. **Assignment**: Assign issues to appropriate team members
4. **Tracking**: Link issues to fixing pull requests
5. **Verification**: Close issues after vulnerability resolution

### Workflow Integration
- **Branch Protection**: Require security checks to pass before merging
- **Notification Setup**: Configure team notifications for security failures
- **Regular Monitoring**: Review security workflow results weekly
- **Custom Rules**: Add project-specific security requirements

## Troubleshooting

### Common Issues

#### "No Git repository detected"
**Cause**: Working directory is not a Git repository or has no GitHub remote
**Solution**: 
- Ensure you're in a Git repository: `git init`
- Add GitHub remote: `git remote add origin https://github.com/user/repo.git`

#### "GitHub token required"
**Cause**: No GitHub token configured in settings
**Solution**: 
- Generate a GitHub token with appropriate permissions
- Add to VS Code settings: `"synapseAudit.githubToken": "your_token"`

#### "Failed to create GitHub issue"
**Cause**: Insufficient permissions or repository access
**Solution**:
- Verify token has `repo` and `issues` permissions
- Ensure you have write access to the repository
- Check GitHub API rate limits

#### "Repository not found"
**Cause**: GitHub remote URL parsing failed
**Solution**:
- Verify remote URL: `git remote -v`
- Ensure format is: `https://github.com/owner/repo.git`

### Error Messages

| Error | Meaning | Resolution |
|-------|---------|------------|
| `Authentication failed` | Invalid or expired token | Generate new token with correct permissions |
| `Rate limit exceeded` | Too many API requests | Wait for rate limit reset or use different token |
| `Repository not accessible` | No access to repository | Verify repository permissions and token scopes |
| `Workflow creation failed` | Cannot write to .github/workflows/ | Check repository write permissions |

## Advanced Configuration

### Custom Issue Templates
You can customize issue templates by modifying the `generateIssueBody` method in `github-integration.ts`:

```typescript
private static generateIssueBody(vulnerability: any): string {
    return `## 🚨 Custom Security Alert
    
**Vulnerability Type:** ${vulnerability.type}
**Risk Level:** ${vulnerability.severity}
**Location:** Line ${vulnerability.line_number}

[Your custom template here]
`;
}
```

### Workflow Customization
Modify the `generateSecurityWorkflow` method to add custom security tools:

```yaml
- name: Custom Security Scan
  run: |
    # Your custom security scanning commands
    custom-security-tool --scan .
```

### Integration with External Tools
- **Slack Notifications**: Add webhook notifications to workflows
- **JIRA Integration**: Auto-create JIRA tickets from GitHub issues
- **Security Dashboards**: Export results to external monitoring tools

## API Reference

### GitHubIntegration Class Methods

#### `createSecurityIssue(vulnerability: any): Promise<void>`
Creates a GitHub issue for a specific vulnerability.

**Parameters:**
- `vulnerability`: Vulnerability object containing type, severity, description, etc.

#### `createSecurityAdvisory(vulnerabilities: any[]): Promise<void>`
Creates a security advisory draft for multiple vulnerabilities.

**Parameters:**
- `vulnerabilities`: Array of vulnerability objects

#### `suggestSecurityWorkflow(): Promise<void>`
Generates and optionally creates a GitHub Actions security workflow.

## Contributing

To contribute to the GitHub integration features:

1. Fork the SynapseAudit repository
2. Create a feature branch: `git checkout -b feature/github-enhancement`
3. Make your changes to `src/github-integration.ts`
4. Test with various repository configurations
5. Submit a pull request with detailed description

## License

The GitHub integration features are part of SynapseAudit and are licensed under the same terms as the main project.

---

For additional support, please visit the [SynapseAudit GitHub repository](https://github.com/chiragnahata/SynapseAudit) or contact the development team.
