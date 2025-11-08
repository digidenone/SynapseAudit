# SynapseAudit Extension Commands

## Available Commands

### Basic Commands
- **SynapseAudit: Analyze Current File** - `synapse-audit.analyzeCurrentFile`
- **SynapseAudit: Analyze Workspace** - `synapse-audit.analyzeWorkspace`
- **SynapseAudit: Clear Results** - `synapse-audit.clearResults`
- **SynapseAudit: Export Report** - `synapse-audit.exportReport`
- **SynapseAudit: Open Settings** - `synapse-audit.openSettings`
- **SynapseAudit: Show Welcome Guide** - `synapse-audit.showWelcome`

### AI-Powered Commands
- **SynapseAudit: Generate Test Cases** - `synapse-audit.generateTestCases`
  - Auto-generates comprehensive security test cases for your code
  - Creates tests for SQL injection, XSS, authentication vulnerabilities
  - Compatible with popular testing frameworks
  
- **SynapseAudit: Generate AI Suggestions** - `synapse-audit.generateAdvancedAISuggestions`
  - Provides context-aware security recommendations
  - Goes beyond simple pattern matching
  - Includes implementation guidance and risk assessment

### Advanced Analysis Commands
- **SynapseAudit: Structural Similarity** - `synapse-audit.structuralSimilarity`
- **SynapseAudit: Cross-Repo Comparison** - `synapse-audit.crossRepoComparison`
- **SynapseAudit: Detect AI Watermark** - `synapse-audit.detectAIWatermark`
- **SynapseAudit: Network Anomaly Alert** - `synapse-audit.networkAnomalyAlert`
- **SynapseAudit: Side-by-Side Comparison** - `synapse-audit.sideBySideComparison`
- **SynapseAudit: Natural Language Explanation** - `synapse-audit.naturalLanguageExplanation`
- **SynapseAudit: Generate Evidence Bundle** - `synapse-audit.generateEvidenceBundle`
- **SynapseAudit: Historical Trend Analysis** - `synapse-audit.historicalTrendAnalysis`
- **SynapseAudit: Check Content Safety** - `synapse-audit.checkContentSafety`
- **SynapseAudit: Anonymized Processing** - `synapse-audit.anonymizedProcessing`

### Utility Commands
- **SynapseAudit: Show Output Logs** - `synapse-audit.showLogs`
- **SynapseAudit: Create GitHub Issue** - `synapse-audit.createGitHubIssue`
- **SynapseAudit: Create Security Advisory** - `synapse-audit.createSecurityAdvisory`
- **SynapseAudit: Add Security Workflow** - `synapse-audit.addSecurityWorkflow`
- **SynapseAudit: View Activity Logs** - `synapse-audit.viewActivityLogs`

## 🧪 Testing Commands (NPM Scripts)

### Basic Testing
```bash
# Run comprehensive vulnerability detection tests (20+ test cases)
npm run test:simple

# Show interactive testing guide and help
npm run test:help

# Run tests in watch mode for continuous development
npm run test:watch
```

### Advanced Testing
```bash
# Run comprehensive vulnerability test suite (requires all dependencies)
npm run test:vulnerabilities

# Run auto-generated test cases
npm run test:generated

# Run generated tests in watch mode
npm run test:generated:watch
```

### Extension Development
```bash
# Compile TypeScript extension code
npm run compile

# Watch mode for TypeScript compilation
npm run watch

# Package extension into VSIX file
npm run package

# Build and package extension
npm run build
```

## Command Usage Examples

### **Generate Test Cases**
1. Open a JavaScript/TypeScript file with potential security issues
2. Press `Ctrl+Shift+P`
3. Type "SynapseAudit: Generate Test Cases"
4. Review the auto-generated test file
5. Run tests with `npm run test:generated`

### **Get AI Suggestions**
1. Right-click in any code file
2. Select "SynapseAudit: Generate AI Suggestions"
3. Review context-aware security recommendations
4. Apply suggestions using one-click fixes

### **Run Testing Suite**
1. Open terminal in project root
2. Run `npm run test:help` to see available options
3. Run `npm run test:simple` for basic vulnerability tests
4. Check results for detected security patterns