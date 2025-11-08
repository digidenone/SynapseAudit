# SynapseAudit User Guide
## PROD-024: Complete User Documentation

## Table of Contents
1. [Getting Started](#getting-started)
2. [Installation](#installation)
3. [Dashboard Features](#dashboard-features)
4. [VS Code Extension](#vs-code-extension)
5. [Scans & Analysis](#scans--analysis)
6. [Managing Vulnerabilities](#managing-vulnerabilities)
7. [Team Collaboration](#team-collaboration)
8. [Integrations](#integrations)
9. [Subscription Plans](#subscription-plans)
10. [Troubleshooting](#troubleshooting)

---

## Getting Started

### What is SynapseAudit?

SynapseAudit is an AI-powered code security platform that helps developers identify and fix security vulnerabilities in their code. It combines:

- **Real-time Code Scanning**: Scan code as you write
- **AI-Powered Analysis**: Advanced vulnerability detection
- **Dashboard Analytics**: Comprehensive security insights
- **Team Collaboration**: Work together on security
- **VS Code Integration**: Seamless workflow integration

### Quick Start (5 Minutes)

1. **Sign Up**: Visit [synapseaudit.digidenone.tech](https://synapseaudit.digidenone.tech)
2. **Install Extension**: Search "SynapseAudit" in VS Code marketplace
3. **Authenticate**: Click "Sign in with Clerk" in the extension
4. **Run First Scan**: Press `Ctrl+Shift+P` → "SynapseAudit: Scan File"
5. **View Results**: See vulnerabilities in VS Code and dashboard

---

## Installation

### Dashboard Access

1. Go to [synapseaudit.digidenone.tech](https://synapseaudit.digidenone.tech)
2. Click "Sign Up" or "Sign In"
3. Choose authentication method:
   - Email + Password
   - GitHub OAuth
   - Google OAuth

### VS Code Extension

#### Method 1: VS Code Marketplace
1. Open VS Code
2. Press `Ctrl+Shift+X` (Extensions)
3. Search "SynapseAudit"
4. Click "Install"

#### Method 2: VSIX File
1. Download `.vsix` file from releases
2. Open VS Code
3. Press `Ctrl+Shift+P`
4. Type "Install from VSIX"
5. Select downloaded file

---

## Dashboard Features

### Dashboard Home

**Overview Panel**:
- Security score (0-100)
- Active vulnerabilities
- Recent scans
- Team activity

**Quick Actions**:
- Start new scan
- View latest reports
- Manage projects
- Invite team members

### Projects Management

**Create Project**:
1. Click "New Project"
2. Enter project name
3. Add repository URL (optional)
4. Set security settings
5. Invite team members

**Project Settings**:
- Scan frequency
- Notification preferences
- Security thresholds
- Integration connections

### Scans View

**View All Scans**:
- Filter by project
- Sort by date/severity
- Search by filename
- Export results

**Scan Details**:
- Vulnerability breakdown
- Code snippets
- Recommendations
- Fix history

---

## VS Code Extension

### Extension Commands

Access via `Ctrl+Shift+P`:

| Command | Description | Shortcut |
|---------|-------------|----------|
| `SynapseAudit: Scan File` | Scan current file | `Ctrl+Alt+S` |
| `SynapseAudit: Scan Workspace` | Scan entire workspace | `Ctrl+Alt+W` |
| `SynapseAudit: View Dashboard` | Open dashboard | `Ctrl+Alt+D` |
| `SynapseAudit: Sync Now` | Sync with dashboard | - |
| `SynapseAudit: Settings` | Extension settings | - |

### Status Bar

**Indicators**:
- 🟢 **Green**: No vulnerabilities
- 🟡 **Yellow**: Low/medium issues
- 🔴 **Red**: High/critical issues
- ⚪ **Gray**: Scanning in progress

**Click Actions**:
- Single click: Show vulnerability panel
- Right click: Quick actions menu

### Sidebar Panel

**Vulnerabilities Tab**:
- List of all issues
- Group by severity
- Filter by type
- Quick fix buttons

**Commands Tab**:
- Recent commands
- Usage statistics
- Command history

**Settings Tab**:
- Auto-scan on save
- Sync frequency
- Notification preferences
- Theme customization

---

## Scans & Analysis

### Running Scans

#### File Scan
1. Open file in VS Code
2. Press `Ctrl+Alt+S`
3. Wait for analysis
4. View results in sidebar

#### Workspace Scan
1. Press `Ctrl+Alt+W`
2. Select scan type:
   - Quick scan (fast)
   - Full scan (thorough)
   - Custom scan (selective)
3. Review results

#### Scheduled Scans
1. Go to Project Settings
2. Enable "Auto Scan"
3. Set frequency (hourly/daily/weekly)
4. Configure notifications

### Scan Types

**Quick Scan**:
- Fast analysis
- Common vulnerabilities
- Modified files only
- ~30 seconds

**Full Scan**:
- Deep analysis
- All vulnerability types
- Entire codebase
- 2-10 minutes

**AI-Powered Scan**:
- ML-based detection
- Context-aware analysis
- Custom rules
- Premium feature

---

## Managing Vulnerabilities

### Vulnerability Lifecycle

```
Discovered → Triaged → In Progress → Fixed → Verified → Closed
```

### Taking Action

**Fix Vulnerability**:
1. Click vulnerability
2. View code snippet
3. See recommendations
4. Apply suggested fix
5. Mark as "Fixed"
6. Run verification scan

**Ignore False Positive**:
1. Open vulnerability details
2. Click "Mark as False Positive"
3. Add reason
4. Confirm action

**Assign to Team Member**:
1. Select vulnerability
2. Click "Assign"
3. Choose team member
4. Add notes
5. Send notification

### Bulk Actions

**Select Multiple**:
1. Check vulnerabilities
2. Click "Bulk Actions"
3. Choose action:
   - Assign to member
   - Change status
   - Export
   - Delete

---

## Team Collaboration

### Inviting Team Members

1. Go to Team Settings
2. Click "Invite Member"
3. Enter email address
4. Select role:
   - **Owner**: Full access
   - **Admin**: Manage settings
   - **Developer**: View & fix
   - **Viewer**: Read-only
5. Send invitation

### Role Permissions

| Action | Owner | Admin | Developer | Viewer |
|--------|-------|-------|-----------|--------|
| View scans | ✓ | ✓ | ✓ | ✓ |
| Run scans | ✓ | ✓ | ✓ | ✗ |
| Fix vulnerabilities | ✓ | ✓ | ✓ | ✗ |
| Manage team | ✓ | ✓ | ✗ | ✗ |
| Billing | ✓ | ✗ | ✗ | ✗ |
| Delete project | ✓ | ✗ | ✗ | ✗ |

### @Mentions & Comments

**Add Comment**:
1. Open vulnerability
2. Scroll to comments
3. Type message
4. Use `@username` to mention
5. Click "Post"

**Notifications**:
- Email for @mentions
- In-app notifications
- Extension alerts

---

## Integrations

### GitHub Integration

**Connect Repository**:
1. Go to Integrations
2. Click "Connect GitHub"
3. Authorize SynapseAudit
4. Select repositories
5. Configure webhooks

**Features**:
- Auto-scan on push
- PR checks
- Issue creation
- Status badges

### Slack Integration

**Setup**:
1. Go to Integrations
2. Click "Connect Slack"
3. Choose workspace
4. Select channel
5. Configure notifications

**Notifications**:
- New vulnerabilities
- Scan completions
- Team mentions
- Daily summaries

### Jira Integration

**Connect**:
1. Enter Jira URL
2. Provide API token
3. Select project
4. Map fields
5. Test connection

**Features**:
- Create tickets
- Sync status
- Link vulnerabilities
- Update progress

---

## Subscription Plans

### Free Plan
- **5 scans/month**
- **1 project**
- **1 team member**
- Basic features
- Community support

### Pro Plan ($19/month)
- **100 scans/month**
- **5 projects**
- **5 team members**
- AI-powered analysis
- Priority support
- Integrations

### Premium Plan ($49/month)
- **Unlimited scans**
- **Unlimited projects**
- **15 team members**
- Advanced AI
- Custom rules
- Dedicated support
- SSO

### Enterprise Plan (Custom)
- Everything in Premium
- **Unlimited team**
- On-premise deployment
- SLA guarantee
- Custom integration
- Training & onboarding

**Upgrade**: Dashboard → Settings → Billing → Upgrade

---

## Troubleshooting

### Common Issues

#### Extension Not Syncing

**Solution**:
1. Check internet connection
2. Verify authentication: `Ctrl+Shift+P` → "Sign in"
3. Check status bar for errors
4. Restart VS Code
5. Reinstall extension if needed

#### Scan Taking Too Long

**Solution**:
- Use Quick Scan instead of Full Scan
- Exclude node_modules in settings
- Check network connection
- Reduce workspace size
- Contact support if persistent

#### Missing Vulnerabilities in Dashboard

**Solution**:
1. Ensure extension is authenticated
2. Click "Sync Now" in extension
3. Check dashboard filters
4. Verify project selection
5. Wait 30 seconds for sync

#### Authentication Errors

**Solution**:
1. Clear browser cache
2. Sign out and sign in again
3. Check email for verification
4. Try different browser
5. Contact support@synapseaudit.com

### Getting Help

**Documentation**: [docs.synapseaudit.com](https://docs.synapseaudit.com)  
**Community**: [community.synapseaudit.com](https://community.synapseaudit.com)  
**Support**: digidenone@gmail.com  
**Status**: [status.synapseaudit.com](https://status.synapseaudit.com)

### Reporting Bugs

1. Go to [github.com/chiragnahata/SynapseAudit-Website/issues](https://github.com/chiragnahata/SynapseAudit-Website/issues)
2. Click "New Issue"
3. Choose "Bug Report"
4. Fill in details:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots
   - Environment details
5. Submit

---

## FAQ

**Q: Is my code sent to your servers?**  
A: Only vulnerability metadata is sent. Full code stays local.

**Q: Can I use SynapseAudit offline?**  
A: Extension works offline, but sync requires internet.

**Q: How accurate is the AI detection?**  
A: 95%+ accuracy with regular updates and improvements.

**Q: Can I customize scan rules?**  
A: Yes, in Pro and Premium plans.

**Q: Do you support languages other than JavaScript?**  
A: Yes! We support 10+ languages including Python, Java, C++, Go, etc.

---

## Keyboard Shortcuts

| Action | Windows/Linux | macOS |
|--------|---------------|-------|
| Scan File | `Ctrl+Alt+S` | `Cmd+Opt+S` |
| Scan Workspace | `Ctrl+Alt+W` | `Cmd+Opt+W` |
| Open Dashboard | `Ctrl+Alt+D` | `Cmd+Opt+D` |
| Toggle Panel | `Ctrl+Alt+P` | `Cmd+Opt+P` |
| Next Issue | `F8` | `F8` |
| Previous Issue | `Shift+F8` | `Shift+F8` |

---

**Version**: 2.0  
**© 2025 SynapseAudit. All rights reserved.**
