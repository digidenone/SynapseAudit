# SynapseAudit - AI-Powered Security Code Analysis

**Professional-grade security analysis and tester for your code, powered by AI. Works seamless, intelligent, and instant.**

## 🚀 Features

### 🔍 **Real-Time Security Analysis**
- **50+ Vulnerability Types**: SQL injection, XSS, code injection, hardcoded secrets and more
- **Multi-Language Support**: JavaScript, TypeScript, Python, Java, PHP, C/C++, and more
- **Instant Feedback**: Visual indicators directly in your code with severity levels
- **One-Click Fixes**: Apply security improvements with a single click

### 🧠 **AI-Powered Intelligence**
- **Multi-LLM Support**: Integrated with OpenAI GPT-4, Google Gemini, Anthropic Claude, and Ollama
- **Smart Recommendations**: Context-aware improvement suggestions with implementation details
- **Auto-Generated Test Cases**: Automatically creates comprehensive security test cases
- **Intelligent Analysis**: Goes beyond pattern matching with deep code understanding

### 🎯 **Developer-Friendly Experience**
- **Seamless Integration**: Works naturally within your VS Code workflow
- **Visual Indicators**: Inline decorations show vulnerabilities like spelling errors
- **Comprehensive Sidebar**: Professional results panel with detailed explanations
- **Keyboard Shortcuts**: `Ctrl+Shift+S` for instant analysis (customizable)

### 🐙 **GitHub Integration**
- **Auto-Create Issues**: Convert vulnerabilities into GitHub issues with one click
- **Security Advisories**: Generate comprehensive security advisory drafts
- **CI/CD Workflows**: Auto-generate GitHub Actions security scanning workflows
- **SARIF Integration**: Upload results to GitHub Security tab

### 🧪 **Comprehensive Testing Framework**
- **Auto-Generated Test Cases**: Creates security test cases for detected vulnerabilities
- **Built-in Test Runner**: Execute tests directly within VS Code
- **20+ Test Categories**: SQL injection, XSS, authentication, cryptography, and more
- **Interactive Test Helper**: Step-by-step testing guidance and validation
- **Watch Mode Testing**: Real-time test execution during development
- **Mocha Integration**: Professional testing framework with detailed reporting

## 🔧 Quick Start

### Analyze Your Code
1. **Open any file** in VS Code
2. **Press `Ctrl+Shift+S`** (Windows/Linux) or `Cmd+Shift+S` (Mac)
3. **View results** in the SynapseAudit sidebar
4. **Apply fixes** with one-click buttons


## 🛡️ Security Detection

### Critical Vulnerabilities
- **SQL Injection** - Unsafe database queries
- **Code Injection** - eval(), exec() functions
- **Path Traversal** - File system vulnerabilities
- **Hardcoded Secrets** - API keys, passwords in code

### High Severity Issues
- **XSS (Cross-Site Scripting)** - DOM manipulation risks
- **CSRF Vulnerabilities** - State validation issues
- **Weak Cryptography** - Insecure algorithms
- **Authentication Bypass** - Logic vulnerabilities

### Additional Checks
- Input validation issues
- Information disclosure
- Session management
- CORS configuration
- Error handling
- Code quality issues

## ⚙️ Configuration

Access settings via `Ctrl+,` and search "synapseAudit":

## 🚀 Advanced Features

### AI Provider Configuration
Configure your preferred AI provider for enhanced analysis:
- OpenAI GPT-4
- Google Gemini
- Anthropic Claude
- Local Ollama models

### GitHub Integration Setup
1. Generate a GitHub personal access token
2. Add token in VS Code settings: `synapseAudit.github.token`
3. Create issues directly from security findings

### Test Generation
- Automatically generate security test cases
- Run tests with built-in test runner
- 20+ test categories covered
- Integration with Mocha framework
- Watch mode for continuous testing
- Interactive test guidance and validation

### Testing Workflow
1. **Analyze Code**: Run security analysis on your files
2. **Generate Tests**: Auto-create test cases for found vulnerabilities
3. **Execute Tests**: Run tests directly in VS Code terminal
4. **View Results**: See pass/fail status with detailed reports
5. **Continuous Testing**: Watch mode for real-time test execution

## 🔍 How It Works

1. **Code Analysis**: Parses your code using AST and pattern matching
2. **Vulnerability Detection**: Identifies security issues with confidence scoring
3. **Smart Recommendations**: Provides actionable fixes and improvements
4. **Visual Feedback**: Shows results directly in your editor

## 📋 Requirements

- VS Code 1.82.0 or higher
- 2GB RAM recommended
- Internet connection for AI features (optional)

## 🛠️ Troubleshooting

### Extension Not Working?
1. Reload VS Code: `Ctrl+Shift+P` → "Developer: Reload Window"
2. Check logs: "SynapseAudit: Show Output Logs"
3. Restart backend: "SynapseAudit: Start Backend Server"

### Can't See Results?
1. Open SynapseAudit sidebar from Activity Bar
2. Run "View: Focus on SynapseAudit View"
3. Ensure file contains code that can be analyzed

## 📚 Documentation

- [Quick Start Guide](https://github.com/digidenone/SynapseAudit/blob/main/docs/QUICKSTART.md)
- [Configuration Guide](https://github.com/digidenone/SynapseAudit/blob/main/docs/configuration.md)
- [GitHub Integration](https://github.com/digidenone/SynapseAudit/blob/main/docs/github-integration.md)
- [Troubleshooting](https://github.com/digidenone/SynapseAudit/blob/main/docs/troubleshooting.md)

## 👥 Team

SynapseAudit is built by a passionate team of security researchers and developers:

<table align="center">
  <tr>
    <td align="center">
      <a href="https://github.com/chiragnahata">
        <img src="https://github.com/chiragnahata.png" width="100px;" alt="Chirag Nahata"/>
        <br />
        <sub><b>Chirag Nahata</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/snig-code16">
        <img src="https://github.com/snig-code16.png" width="100px;" alt="Snigdha Ghosh"/>
        <br />
        <sub><b>Snigdha Ghosh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/somyadipghosh">
        <img src="https://github.com/somyadipghosh.png" width="100px;" alt="Somyadip Ghosh"/>
        <br />
        <sub><b>Somyadip Ghosh</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Shamonnoy">
        <img src="https://github.com/Shamonnoy.png" width="100px;" alt="Shamonnoy Halder"/>
        <br />
        <sub><b>Shamonnoy Halder</b></sub>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/Rajarshi8">
        <img src="https://github.com/Rajarshi8.png" width="100px;" alt="Rajarshi Bhowmik"/>
        <br />
        <sub><b>Rajarshi Bhowmik</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hub-ARIYAN">
        <img src="https://github.com/hub-ARIYAN.png" width="100px;" alt="Ariyan Bhattarcharjee"/>
        <br />
        <sub><b>Ariyan Bhattarcharjee</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hitwesh">
        <img src="https://github.com/hitwesh.png" width="100px;" alt="Hitesh Kumar Roy"/>
        <br />
        <sub><b>Hitesh Kumar Roy</b></sub>
      </a>
    </td>
  </tr>
</table>

## 🤝 Support & Community

- **Issues**: [Report bugs](https://github.com/digidenone/SynapseAudit/issues)
- **Discussions**: [Community forum](https://github.com/digidenone/SynapseAudit/discussions)
- **Email**: digidenone@gmail.com
- **Documentation**: [Full guides](https://github.com/digidenone/SynapseAudit/wiki)

## 📄 License

See [LICENSE](https://github.com/digidenone/SynapseAudit/blob/main/LICENSE) for details.

## ⚠️ Disclaimer

SynapseAudit provides tools and insights to assist with application security. However, no system can guarantee 100% detection or prevention of all security issues. Users are advised to combine automated tools with manual review processes. Digidenone assumes no liability for losses resulting from the usage or misinterpretation of outputs generated by the platform.

## 📊 Stats

- **50+** Vulnerability types detected
- **20+** Programming languages supported
- **25+** VS Code commands available
- **1000+** Security patterns recognized
- **20+** Test categories for comprehensive validation
- **Auto-generated** test cases with Mocha integration

---

**🔐 Secure your code before it ships. Deploy with confidence.**

[⭐ Rate this extension](https://marketplace.visualstudio.com) | [🐙 GitHub](https://github.com/digidenone/SynapseAudit) | [📖 Documentation](https://github.com/digidenone/SynapseAudit/wiki)

*Made with ❤️ by Digidenone for developers*
