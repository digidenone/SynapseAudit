# SynapseAudit Settings

Configure SynapseAudit to match your security analysis preferences.

## Configuration Options

### General Settings

- **`synapseAudit.enabled`** (boolean, default: `true`)
  - Enable or disable SynapseAudit extension
  
- **`synapseAudit.autoScan`** (boolean, default: `false`)
  - Automatically scan files when opened
  
- **`synapseAudit.scanOnSave`** (boolean, default: `true`)
  - Automatically scan files when saved

### Analysis Settings

- **`synapseAudit.severityLevel`** (string, default: `"medium"`)
  - Minimum severity level to report: `"low"`, `"medium"`, `"high"`, `"critical"`
  
- **`synapseAudit.enabledLanguages`** (array, default: `["javascript", "typescript", "python", "java", "php", "csharp"]`)
  - Programming languages to analyze

- **`synapseAudit.excludePatterns`** (array, default: `["**/node_modules/**", "**/dist/**", "**/build/**"]`)
  - Glob patterns for files/folders to exclude from analysis

### AI Integration

- **`synapseAudit.aiProvider`** (string, default: `"local"`)
  - AI provider: `"local"`, `"openai"`, `"anthropic"`
  
- **`synapseAudit.apiKey`** (string, default: `""`)
  - API key for external AI providers (stored securely)
  
- **`synapseAudit.backendUrl`** (string, default: `"http://localhost:8000"`)
  - URL for SynapseAudit backend server

### Display Settings

- **`synapseAudit.showInlineDecorations`** (boolean, default: `true`)
  - Show vulnerability indicators inline in the editor
  
- **`synapseAudit.showStatusBar`** (boolean, default: `true`)
  - Show security status in the status bar
  
- **`synapseAudit.compactView`** (boolean, default: `false`)
  - Use compact view in the sidebar

### Notifications

- **`synapseAudit.notifyOnCritical`** (boolean, default: `true`)
  - Show notifications for critical vulnerabilities
  
- **`synapseAudit.notifyOnCompletion`** (boolean, default: `false`)
  - Show notification when analysis completes

## Example Configuration

Add these settings to your VS Code `settings.json`:

```json
{
  "synapseAudit.enabled": true,
  "synapseAudit.autoScan": false,
  "synapseAudit.scanOnSave": true,
  "synapseAudit.severityLevel": "medium",
  "synapseAudit.enabledLanguages": [
    "javascript",
    "typescript",
    "python",
    "java"
  ],
  "synapseAudit.excludePatterns": [
    "**/node_modules/**",
    "**/dist/**",
    "**/build/**",
    "**/*.test.js",
    "**/*.spec.ts"
  ],
  "synapseAudit.showInlineDecorations": true,
  "synapseAudit.showStatusBar": true,
  "synapseAudit.notifyOnCritical": true,
  "synapseAudit.backendUrl": "http://localhost:8000"
}
```

## Quick Setup

1. Open VS Code Settings (`Ctrl+,` or `Cmd+,`)
2. Search for "SynapseAudit"
3. Configure your preferences
4. Restart VS Code if needed

## Advanced Configuration

For enterprise environments, you can configure SynapseAudit through workspace settings or group policies. Contact your administrator for organization-specific settings.

## Troubleshooting

If settings are not taking effect:

1. Reload VS Code window (`Ctrl+Shift+P` → "Developer: Reload Window")
2. Check for syntax errors in your `settings.json`
3. Verify that the SynapseAudit extension is enabled
4. Check the output panel for error messages

## Support

For configuration assistance, please refer to:
- [Configuration Guide](./configuration.md)
- [Troubleshooting Guide](./troubleshooting.md)
- [GitHub Issues](https://github.com/chiragnahata/SynapseAudit/issues)
