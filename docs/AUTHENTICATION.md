# SynapseAudit GitHub Authentication

## Overview

SynapseAudit now requires GitHub authentication to access all its security analysis features. This ensures secure access to AI-powered analysis and enables GitHub integration capabilities.

## Authentication Features

### 🔐 GitHub Authentication Required
- All SynapseAudit features now require GitHub authentication
- Uses VS Code's built-in GitHub authentication provider
- Secure OAuth flow with proper scopes

### 🎯 Required Scopes
- `user:email` - Access to user profile and email
- `repo` - Repository access for security analysis
- `read:org` - Organization membership (for enterprise features)

### 🚀 Authentication Flow

1. **First Launch**: Extension prompts for GitHub sign-in
2. **Welcome Screen**: Shows authentication requirements
3. **Command Palette**: Use `SynapseAudit: Sign In to GitHub`
4. **Status Bar**: Shows authentication status
5. **Sidebar**: Displays current user and sign-out option

## Commands

### Authentication Commands
- `synapse-audit.signIn` - Sign in to GitHub
- `synapse-audit.signOut` - Sign out from GitHub
- `synapse-audit.showAuthStatus` - Show current authentication status

### Protected Commands
All analysis commands now require authentication:
- `synapse-audit.analyzeCurrentFile` - Analyze current file
- `synapse-audit.analyzeWorkspace` - Analyze workspace
- `synapse-audit.clearResults` - Clear analysis results
- `synapse-audit.exportReport` - Export security report
- `synapse-audit.createGitHubIssue` - Create GitHub issue
- `synapse-audit.createSecurityAdvisory` - Create security advisory

## User Interface

### Status Bar
- Shows GitHub authentication status
- Displays current username when authenticated
- Click to show authentication menu

### Sidebar
- Authentication status panel
- Sign in/out buttons
- Current user information
- Warning when not authenticated

### Welcome Screen
- Updated to emphasize authentication requirement
- Direct sign-in button
- Security information about required scopes

## Security Benefits

### 🛡️ Enhanced Security
- Proper authentication flow
- Secure token handling
- No hardcoded credentials

### 🔗 GitHub Integration
- Seamless issue creation
- Security advisory support
- Repository access for analysis

### 🎯 User Context
- Personalized experience
- User-specific settings
- Activity tracking

## Migration Guide

### For Existing Users
1. Update to the latest version
2. Extension will prompt for GitHub authentication
3. All existing settings are preserved
4. No data loss during migration

### For New Users
1. Install the extension
2. Welcome screen guides through authentication
3. Sign in with GitHub account
4. Start using security analysis features

## Configuration

### Settings
The extension respects existing configuration settings:
- `synapseAudit.ai.provider` - AI provider selection
- `synapseAudit.ai.model` - AI model configuration
- `synapseAudit.backend.host` - Backend server host
- `synapseAudit.backend.port` - Backend server port

### Context Variables
- `synapseAudit.authenticated` - Authentication state
- `synapseAudit.active` - Extension active state

## Troubleshooting

### Common Issues

#### Cannot Sign In
- Check internet connection
- Verify GitHub account access
- Try signing out and back in
- Restart VS Code

#### Commands Not Working
- Ensure GitHub authentication is completed
- Check status bar for authentication indicator
- Use Command Palette to sign in

#### Token Expired
- Extension will prompt for re-authentication
- Use "Sign Out" then "Sign In" again
- Check GitHub account settings

### Support
For issues and support:
1. Check authentication status in sidebar
2. Review VS Code output panel
3. Use extension's built-in diagnostics
4. Report issues on GitHub repository

## Privacy

### Data Collection
- Only collects necessary authentication data
- No code is sent to external servers without consent
- User data is handled according to GitHub's privacy policy

### Permissions
- Authentication scopes are minimal and necessary
- No access to private repositories without explicit permission
- User can revoke access at any time

## Best Practices

### Security
- Keep VS Code updated
- Monitor GitHub authentication sessions
- Review granted permissions periodically
- Use strong GitHub account security

### Usage
- Sign in once per VS Code session
- Use status bar to monitor authentication
- Sign out when sharing workspace
- Regular security analysis for best results

## Future Enhancements

### Planned Features
- Single sign-on (SSO) support
- Enterprise authentication
- Advanced permission controls
- Audit logging and tracking

### Feedback
We welcome feedback on the authentication experience:
- User experience improvements
- Additional authentication providers
- Security enhancements
- Integration suggestions
