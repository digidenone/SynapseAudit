# SynapseAudit Ecosystem

**The Next-Generation AI-Powered Security Platform.**
*Secure your code from the first keystroke to production deployment.*

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Version](https://img.shields.io/badge/version-3.0.0-green.svg)]()
[![Status](https://img.shields.io/badge/status-Production-success.svg)]()

[**Documentation Hub**](./docs/INDEX.md) • [**Website**](https://synapseaudit.digidenone.tech) • [**Dashboard**](https://synapseaudit.digidenone.tech/dashboard)

## Overview

**SynapseAudit** is a holistic security ecosystem designed for the modern SDLC. It combines **Static Analysis (SAST)**, **Dynamic Analysis (DAST)**, and **Agentic AI** to provide zero-false-positive results.

> [!NOTE]
> **SynapseAudit v3.0 is live!** featuring the new **Hybrid Analysis Engine** and **MCP Server** for Claude/Cursor integration.

## The Ecosystem

This monorepo houses the entire platform. Each component is designed to work independently or as part of the unified suite.

| Component | Status | Description | Documentation |
| :--- | :--- | :--- | :--- |
| **CLi** | `v3.0.0` | The command-line powerhouse for local scans & CI pipelines. | [View Docs](./cli/README.md) |
| **Extension** | `v3.0.0` | VS Code extension for real-time security alerts. | [View Docs](./extension/Github%20README.md) |
| **MCP Server** | `v3.0.0` | Model Context Protocol server enabling LLMs to "see" security context. | [View Docs](./mcp-server/README.md) |
| **Cortex** | `Stable` | The core intelligence library shared across all tools. | [View Docs](./cortex-engine/README.md) |
| **Functions** | `Deployed` | Serverless backend powering the cloud synchronization. | [View Docs](./functions/SynpaseAudit%20Functions/README.md) |
| **GitHub Action** | `v3.0.0` | Automated security scanning for CI/CD pipelines. | [View Docs](./github-action/README.md) |

## Quick Start

### Option 1: The CLI (Fastest)

```bash
# 1. Install Globally
npm install -g @digidenone/synapseaudit

# 2. Login to Cloud (Optional)
synapse-audit auth login

# 3. Analyze Current Directory
synapse-audit scan .
```

### Option 2: VS Code Extension

1. Open VS Code.
2. Search **"SynapseAudit"** in the Marketplace.
3. Install and press `Ctrl+Shift+S` to scan.

## Contributing

We welcome contributions from the community! Please read our [**Contributing Guide**](./docs/developers/CONTRIBUTING.md) to get started.

1. Fork the repo: `https://github.com/digidenone/SynapseAudit`.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: add amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## Support & Enterprise

For commercial licensing, SLAs, and dedicated instances:

- **Email**: [support@digidenone.tech](mailto:support@digidenone.tech)
- **Security**: [security@digidenone.tech](mailto:security@digidenone.tech)

© 2025 Digidenone. All Rights Reserved.
