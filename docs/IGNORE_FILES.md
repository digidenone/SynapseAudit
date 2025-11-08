# .synapseaudit-ignore File Guide

## Overview

The `.synapseaudit-ignore` file allows you to exclude specific files and directories from SynapseAudit security scans, similar to how `.gitignore` works for Git. This gives you fine-grained control over which files are analyzed during workspace scans.

## Quick Start

### Creating the Ignore File

1. **Via Command Palette:**
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Search for "SynapseAudit: Create .synapseaudit-ignore File"
   - This creates a file with default patterns in your workspace root

2. **Manual Creation:**
   - Create a file named `.synapseaudit-ignore` in your workspace root
   - Add patterns (one per line) to exclude files/directories

## Pattern Syntax

### Basic Patterns

```plaintext
# Ignore specific file
config.local.js

# Ignore all files with extension
*.log
*.cache

# Ignore directory and all its contents
build/
dist/
node_modules/

# Ignore files in any subdirectory
**/temp/
**/*.test.js
```

### Advanced Patterns

```plaintext
# Ignore all .js files EXCEPT one
*.js
!important.js

# Ignore nested directories
src/**/generated/

# Ignore by path prefix
public/static/
```

### Pattern Rules

1. **Comments**: Lines starting with `#` are comments
2. **Negation**: Prefix with `!` to un-ignore previously ignored patterns
3. **Wildcards**:
   - `*` - Matches any characters except `/`
   - `**` - Matches zero or more directories
   - `?` - Matches any single character
4. **Directories**: End with `/` to match only directories
5. **Blank Lines**: Ignored automatically

## Default Patterns

When you create a `.synapseaudit-ignore` file using the command, these patterns are included by default:

```plaintext
# Dependencies
node_modules/
bower_components/
vendor/
packages/

# Build outputs
dist/
build/
out/
target/
bin/
obj/

# IDE/Editor files
.vscode/
.idea/
*.swp
*.swo
*~

# Version control
.git/
.svn/
.hg/

# Minified files
*.min.js
*.min.css

# Cache and temporary files
.cache/
tmp/
temp/
*.tmp

# Documentation
docs/
documentation/

# Test files
**/*.test.js
**/*.spec.js
**/*.test.ts
**/*.spec.ts
__tests__/
```

## Usage Examples

### Example 1: Standard Web Project

```plaintext
# Ignore build outputs
dist/
build/

# Ignore dependencies
node_modules/

# Ignore environment files
.env
.env.local
.env.*.local

# Keep security-sensitive config checked
!.env.example
```

### Example 2: Python Project

```plaintext
# Virtual environment
venv/
env/
.venv/

# Python cache
__pycache__/
*.pyc
*.pyo

# Build artifacts
*.egg-info/
dist/
build/

# Keep requirements file checked
!requirements.txt
```

### Example 3: Java/Maven Project

```plaintext
# Maven build output
target/

# IDE files
.idea/
*.iml

# Compiled classes
*.class

# Keep source code checked
!src/
```

## How It Works

1. **File Discovery**: Extension finds all code files in workspace
2. **Pattern Matching**: IgnoreService checks each file against patterns
3. **Filtering**: Ignored files are excluded from analysis
4. **Notification**: You'll see how many files were ignored in the scan

## Features

### Hot Reload
The ignore file is watched for changes. If you modify `.synapseaudit-ignore`, the new patterns take effect immediately on the next scan.

### Performance
- Patterns are compiled and cached for fast matching
- Large directories (like `node_modules`) are completely skipped

### Transparency
When running a workspace scan, you'll see:
- Total files found
- Number of files ignored
- Number of files actually analyzed

Example output:
```
Analyzing 42 files (158 files ignored by .synapseaudit-ignore)
```

## Commands

### Create Ignore File
- **Command**: `SynapseAudit: Create .synapseaudit-ignore File`
- **Action**: Creates file with default patterns
- **Note**: If file exists, opens it for editing

### Analyze Workspace
- **Command**: `SynapseAudit: Analyze Entire Workspace`
- **Shortcut**: `Ctrl+Shift+W` (or `Cmd+Shift+W` on Mac)
- **Action**: Scans workspace respecting ignore patterns

## Best Practices

### ✅ DO

1. **Ignore build outputs** - No need to scan generated code
2. **Ignore dependencies** - Third-party code should be vetted separately
3. **Ignore minified files** - Already processed and hard to analyze
4. **Ignore test fixtures** - Test data often contains intentional "vulnerabilities"
5. **Use comments** - Document why certain patterns are ignored

### ❌ DON'T

1. **Ignore all source files** - Defeats the purpose of security scanning
2. **Ignore configuration** - Config files often contain security issues
3. **Over-ignore** - Start minimal, add patterns as needed
4. **Forget negation** - Use `!` to include specific files from ignored directories

## Troubleshooting

### Files Still Being Scanned

**Problem**: Files matching patterns are still analyzed

**Solutions**:
1. Check pattern syntax (see Pattern Syntax section)
2. Ensure `.synapseaudit-ignore` is in workspace root
3. Try absolute path patterns: `**/node_modules/**`
4. Check for typos in file/directory names

### Too Many Files Ignored

**Problem**: Important files are being skipped

**Solutions**:
1. Review your patterns - may be too broad
2. Use negation patterns (`!`) to un-ignore specific files
3. Test patterns incrementally (add one at a time)
4. Check for conflicting patterns

### Ignore File Not Working

**Problem**: Ignore file seems to have no effect

**Solutions**:
1. Verify file name is exactly `.synapseaudit-ignore`
2. Check file is in workspace root directory
3. Ensure patterns are one per line
4. Try running workspace scan again
5. Check VS Code Output panel for IgnoreService logs

## Technical Details

### Implementation

- **Location**: `extension/src/ignorePatterns.ts`
- **Class**: `IgnoreService`
- **Pattern Engine**: Custom glob matcher with VS Code URI support
- **File Watcher**: Monitors `.synapseaudit-ignore` for real-time updates

### Integration Points

1. **analyzeWorkspace()** - Filters files before security analysis
2. **syncService** - Respects ignore patterns when uploading scan results
3. **File Discovery** - Pre-filters using VS Code's native exclude patterns

### Performance Metrics

- Pattern compilation: < 1ms per pattern
- File filtering: < 10ms for 1000 files
- Memory usage: ~50KB for pattern cache
- File watcher overhead: Negligible

## Examples in Action

### Before Adding Ignore File
```
🔍 Analyzing workspace files...
Files found: 2,847
Files with issues: 423
Issues detected: 1,291
```

### After Adding Ignore File
```
🔍 Analyzing workspace files...
Analyzing 127 files (2,720 files ignored by .synapseaudit-ignore)
Files found: 127
Files with issues: 12
Issues detected: 34
```

**Result**: Faster scans, focused on your actual code!

## Related Documentation

- [Configuration Guide](./configuration.md)
- [Workspace Scanning](./QUICKSTART.md#workspace-analysis)
- [Performance Optimization](./ADVANCED_FEATURES.md#performance)

## Feedback & Support

If you have questions or suggestions about the ignore file feature:

1. Check [Troubleshooting Guide](./troubleshooting.md)
2. Open an issue on [GitHub](https://github.com/digidenone/SynapseAudit/issues)
3. Contact support: support@digidenone.tech

---

**Version**: 2.0.0  
**Last Updated**: 2025-01-11  
**Feature Status**: ✅ Stable
