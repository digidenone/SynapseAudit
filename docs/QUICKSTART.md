# 🚀 Quick Start Guide - SynapseAudit

Get up and running with SynapseAudit in under 5 minutes!

## 📋 Prerequisites

- VS Code 1.82.0 or higher
- GitHub account for authentication
- Internet connection for cloud sync and AI features

## 🔧 Installation Steps

### Step 1: Install the Extension

**Option A: From VS Code Marketplace (Recommended)**
1. Open VS Code
2. Press `Ctrl+Shift+X` to open Extensions
3. Search for "SynapseAudit"
4. Click "Install"

**Option B: Install VSIX File**
1. Download `synapse-audit-2.0.0.vsix` from [Releases](https://github.com/chiragnahata/SynapseAudit-Website/releases)
2. In VS Code: `Ctrl+Shift+P` → "Extensions: Install from VSIX"
3. Select the downloaded file

### Step 2: Authenticate with GitHub

1. After installation, the extension will prompt for GitHub authentication
2. Click "Sign in with GitHub"
3. Authorize the extension in your browser
4. Extension automatically connects to the SaaS platform

### Step 3: Test Your First Analysis

1. Create a test file `test.js`:
```javascript
// Intentionally vulnerable code for testing
function loginUser(username) {
    const query = "SELECT * FROM users WHERE name = '" + username + "'";
    const password = "admin123";
    document.getElementById('msg').innerHTML = 'Welcome ' + username;
    return database.execute(query);
}
```

2. Open the file in VS Code
3. Press `Ctrl+Shift+S` to analyze
4. Check the SynapseAudit sidebar for results!
5. Visit your [dashboard](https://synapseaudit.digidenone.tech/) to see synced results

## 🎯 Expected Results

You should see:
- 🚨 **1 Critical**: SQL Injection vulnerability
- 🚨 **1 High**: Hardcoded password
- 🟠 **1 Medium**: XSS via innerHTML
- 💡 **AI suggestions** for improvements
- Results automatically synced to your dashboard

## ✅ Verification Checklist

- [ ] Extension appears in sidebar
- [ ] GitHub authentication completed
- [ ] Analysis command works (`Ctrl+Shift+S`)
- [ ] Results appear in sidebar
- [ ] Inline decorations visible (colored underlines)
- [ ] Results visible in web dashboard

## 🚨 Common Issues & Quick Fixes

### Issue: "GitHub Authentication Failed"
**Fix:** Try signing in again
1. `Ctrl+Shift+P` → "SynapseAudit: Sign In"
2. Clear browser cache if needed

### Issue: "Sync Connection Failed"
**Fix:** Check internet and retry sync
1. `Ctrl+Shift+P` → "SynapseAudit: Sync with Dashboard Now"

### Issue: "No vulnerabilities found"
**Fix:** Make sure you're testing with vulnerable code (use the test file above)

### Issue: Port 8000 already in use (legacy)
**Fix:** This is no longer applicable in SaaS version - no local backend needed

## 🧪 Testing Features

**Explore the new testing infrastructure:**

### **1. Run Built-in Tests**
```bash
# Basic vulnerability detection tests
npm run test:simple

# Interactive testing guide
npm run test:help

# Watch mode for continuous testing
npm run test:watch
```

### **2. Generate Auto Test Cases**
1. Open any JavaScript/TypeScript file with your code
2. Press `Ctrl+Shift+P`
3. Type "SynapseAudit: Generate Test Cases"
4. Review auto-generated security test cases
5. Run tests: `npm run test:generated`

### **3. Advanced AI Suggestions**
1. Right-click in any code file
2. Select "SynapseAudit: Generate AI Suggestions"
3. Get context-aware security recommendations
4. Apply suggestions with one-click fixes

### **4. Testing Categories Available**
- 🔍 SQL Injection Detection (15+ patterns)
- 🚨 Cross-Site Scripting (XSS) (12+ patterns)
- 🔑 Hardcoded Secrets (10+ patterns)
- 🔐 Weak Cryptography (8+ patterns)
- 💻 Command Injection (6+ patterns)
- 📁 Path Traversal (5+ patterns)
- 🧠 AI-Generated Patterns (25+ patterns)
- 🛡️ Advanced Security Patterns (20+ patterns)

## 🎉 You're Ready!

Congratulations! SynapseAudit is now ready to secure your code.

### Next Steps:
1. **Analyze real projects**: Use `Ctrl+Shift+S` on your actual code files
2. **Explore dashboard**: Visit [https://synapseaudit.digidenone.tech/](https://synapseaudit.digidenone.tech/) for comprehensive analytics
3. **Configure AI providers**: Set up OpenAI, Gemini, Anthropic, or Ollama for enhanced AI features
4. **Customize settings**: Adjust `synapseAudit.*` settings in VS Code
5. **Enable auto-analysis**: Set `"synapseAudit.autoAnalyze": true`
6. **Try multi-platform features**: Test the web app, PWA, and Chrome extension
7. **Generate security reports**: Export comprehensive security analysis reports
8. **Explore features**: Try right-click context menus and command palette

### 🔗 Useful Links:
- [Full Documentation](README.md)
- [Configuration Guide](configuration.md)
- [Troubleshooting](troubleshooting.md)
- [GitHub Repository](https://github.com/chiragnahata/SynapseAudit-Website)
- [Web Dashboard](https://synapseaudit.digidenone.tech/)

---

**Need help?** Check our [troubleshooting guide](troubleshooting.md) or [open an issue](https://github.com/yourusername/synapseaudit/issues).
