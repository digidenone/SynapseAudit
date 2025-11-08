# 🚀 SynapseAudit Extension - Installation & Setup Guide

## 📦 Package Information
- **Extension Name**: SynapseAudit - AI Security Code Analysis
- **Version**: 1.0.0
- **Package File**: `synapse-audit-1.0.0.vsix`
- **Package Size**: 879.82KB
- **Total Files**: 417 files

## 🔧 Installation Methods

### Method 1: Install VSIX File (Recommended for Local Use)

1. **Download the VSIX file**: `synapse-audit-1.0.0.vsix`

2. **Install in VS Code**:
   ```
   Option A: Command Palette
   - Press Ctrl+Shift+P (Windows/Linux) or Cmd+Shift+P (Mac)
   - Type "Extensions: Install from VSIX"
   - Select the downloaded synapse-audit-1.0.0.vsix file
   - Click "Install"
   
   Option B: Extensions Panel
   - Open Extensions panel (Ctrl+Shift+X)
   - Click the "..." menu in the top-right
   - Select "Install from VSIX..."
   - Choose the synapse-audit-1.0.0.vsix file
   ```

3. **Restart VS Code** when prompted

4. **Verify installation**:
   - SynapseAudit should appear in the Activity Bar (left sidebar)
   - Commands should be available in Command Palette

### Method 2: VS Code Marketplace Publishing (For Public Distribution)

**Publishing is FREE** for open source extensions! Here's how:

1. **Create Azure DevOps Account** (free):
   - Go to [dev.azure.com](https://dev.azure.com)
   - Sign up with Microsoft account

2. **Get Personal Access Token**:
   - Go to User Settings → Personal Access Tokens
   - Create new token with "Marketplace (manage)" scope

3. **Publish to Marketplace**:
   ```bash
   # Install publishing tool
   npm install -g @vscode/vsce
   
   # Login with your token
   vsce login your-publisher-name
   
   # Publish the extension
   vsce publish
   ```

**Note**: Publishing to VS Code Marketplace is **completely FREE**. Microsoft doesn't charge for extension hosting.

## 🏃‍♂️ Quick Setup After Installation

### 1. Start Backend Server
```bash
# Method A: VS Code Command
Ctrl+Shift+P → "SynapseAudit: Start Backend Server"

# Method B: Manual Terminal
cd ~/.vscode/extensions/synapseaudit.synapse-audit-1.0.0/backend
pip install -r requirements.txt
python start.py
```

### 2. Test with Sample Code
Create a test file `vulnerable-test.js`:
```javascript
// Test file with intentional vulnerabilities
function loginUser(username, password) {
    const query = "SELECT * FROM users WHERE id = '" + username + "'";
    const apiKey = "sk-1234567890abcdef";
    document.getElementById('output').innerHTML = 'Welcome ' + username;
    return database.execute(query);
}
```

### 3. Run Analysis
- Open the test file
- Press `Ctrl+Shift+S`
- Check SynapseAudit sidebar for results

## ✨ Key Features Available

### 🔍 **Security Analysis**
- **SQL Injection Detection**: ✅ Working
- **XSS Vulnerability Scanning**: ✅ Working  
- **Hardcoded Secrets Detection**: ✅ Working
- **Input Validation Checks**: ✅ Working

### 🧠 **AI-Powered Features**
- **Requirement Gap Analysis**: ✅ Working
- **Code Improvement Suggestions**: ✅ Working
- **Context-Aware Recommendations**: ✅ Working

### 🎯 **Developer Experience**
- **Inline Decorations**: ✅ Visual indicators in code
- **Sidebar Panel**: ✅ Comprehensive results
- **Keyboard Shortcuts**: ✅ Ctrl+Shift+S for analysis
- **Command Palette Integration**: ✅ All commands available
- **Context Menu Integration**: ✅ Right-click to analyze

### ⚙️ **Configuration Options**
- **Auto-analyze on save**: Configurable
- **Severity filtering**: All/High/Critical
- **File exclusion patterns**: Customizable
- **Backend URL configuration**: For custom setups

## 🎮 Usage Commands

| Command | Shortcut | Description |
|---------|----------|-------------|
| Analyze Current File | `Ctrl+Shift+S` | Analyze the active file for vulnerabilities |
| Analyze Workspace | - | Scan all supported files in workspace |
| Clear Results | - | Clear analysis results and decorations |
| Export Report | - | Export security findings to file |
| Start Backend | - | Start the Python analysis backend |
| Stop Backend | - | Stop the backend server |

## 📊 Expected Output

When you analyze vulnerable code, you should see:

**Sidebar Results:**
```
🚨 Critical Vulnerabilities (1)
├── SQL Injection (Line 2)
│   └── Fix: Use parameterized queries

🚨 High Vulnerabilities (1)  
├── Hardcoded API Key (Line 3)
│   └── Fix: Use environment variables

🟠 Medium Vulnerabilities (1)
└── XSS via innerHTML (Line 4)
    └── Fix: Use textContent instead

💡 AI Recommendations (2)
├── Add input validation
└── Implement error handling
```

**Inline Decorations:**
- Red squiggly underlines on vulnerable lines
- Orange/yellow underlines for medium/low severity
- Hover tooltips with fix suggestions
- Severity icons in the gutter

## 🛡️ Supported Languages

- JavaScript (.js)
- TypeScript (.ts)
- Python (.py)
- Java (.java)
- PHP (.php)
- C/C++ (.c, .cpp, .h)
- HTML (.html)
- CSS (.css)
- SQL (.sql)
- And 15+ more languages!

## 🔧 Configuration Examples

### Basic Setup
```json
{
  "synapseAudit.backendUrl": "http://localhost:8000",
  "synapseAudit.autoAnalyze": false,
  "synapseAudit.enableInlineDecorations": true
}
```

### Power User Setup
```json
{
  "synapseAudit.autoAnalyze": true,
  "synapseAudit.severityFilter": "high",
  "synapseAudit.excludePatterns": [
    "node_modules/**",
    "dist/**",
    "*.test.js",
    "coverage/**"
  ]
}
```

## 🚨 Troubleshooting

**Common Issue**: "Backend Connection Failed"
```bash
# Solution: Start the backend manually
cd backend
python start.py
```

**Common Issue**: "Python not found"
```bash
# Solution: Install Python 3.8+
# Download from python.org
# Add to PATH during installation
```

**Common Issue**: "No vulnerabilities found"
```
# Solution: Test with the vulnerable code sample above
# Make sure severity filter is set to "all"
```

## 📞 Support & Resources

- 📖 **Full Documentation**: `docs/README.md`
- 🚀 **Quick Start Guide**: `docs/QUICKSTART.md`
- ⚙️ **Configuration Guide**: `docs/configuration.md`
- 🔧 **Troubleshooting**: `docs/troubleshooting.md`
- 🐛 **Report Issues**: GitHub Issues
- 💬 **Community**: GitHub Discussions

## 🎉 You're All Set!

SynapseAudit is now ready to secure your code! The extension provides:

- ✅ **Real-time security analysis**
- ✅ **Visual vulnerability indicators**  
- ✅ **AI-powered recommendations**
- ✅ **One-click fixes**
- ✅ **Professional-grade results**

Start analyzing your code with `Ctrl+Shift+S` and make your applications more secure!

---

**Made with ❤️ for developers by developers**

*Happy Secure Coding! 🔐*
