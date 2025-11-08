# SynapseAudit - Advanced Security Code Analysis Platform

**Version**: 2.0.0

[![GitHub Stars](https://img.shields.io/github/stars/digidenone/SynapseAudit?style=for-the-badge&logo=github&color=emerald)](https://github.com/digidenone/SynapseAudit)
[![VS Code Downloads](https://img.shields.io/visual-studio-marketplace/d/Digidenone.synapse-audit?style=for-the-badge&logo=visualstudiocode&color=blue)](https://marketplace.visualstudio.com/items?itemName=Digidenone.synapse-audit)
[![License](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/digidenone/SynapseAudit/ci.yml?style=for-the-badge&logo=githubactions)](https://github.com/digidenone/SynapseAudit/actions)
[![Security Score](https://img.shields.io/badge/Security-A%2B-emerald?style=for-the-badge&logo=shield)](https://github.com/digidenone/SynapseAudit/security)

> **🚀 Revolutionary Code Security with Real-Time 2-Way Sync & AI Enhancement**

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19%2B-blue)](https://reactjs.org/)
[![Appwrite](https://img.shields.io/badge/Appwrite-18.2.0-red)](https://appwrite.io/)

**🔐 Professional-grade security analysis with automatic synchronization between extension and dashboard**

[🚀 Live Demo](https://synapseaudit.digidenone.tech/) • [📖 Documentation](https://github.com/digidenone/SynapseAudit) • [🛠️ VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Digidenone.synapse-audit) • [🌐 Web Platform](https://synapseaudit.digidenone.tech/)

</div>

---

## 🔄 Two-Way Sync Architecture

SynapseAudit features **real-time, bidirectional synchronization** between the VS Code extension, Appwrite database, and web dashboard:

### Extension → Appwrite → Dashboard
- **Automatic Sync**: Extension syncs on startup, every 5 minutes, and on file save
- **Manual Sync**: Use `Ctrl+Shift+P` → "SynapseAudit: Sync with Dashboard Now"
- **Data Synced**: Projects, scans, vulnerabilities, activities, settings, command usage
- **Offline Support**: Queue pending items, retry on reconnect

### Dashboard → Appwrite → Extension
- **Real-time Updates**: Dashboard uses Appwrite real-time subscriptions for instant updates
- **Per-User Isolation**: All data is scoped to authenticated user
- **Live Notifications**: Changes appear immediately in both extension and dashboard
- **Admin Panel**: System-wide statistics and user management with real data

### Sync Commands
```bash
# Manual sync trigger
Ctrl+Shift+P → "SynapseAudit: Sync with Dashboard Now"

# View pending sync items
Ctrl+Shift+P → "SynapseAudit: View Sync Status"

# Clear sync queue
Ctrl+Shift+P → "SynapseAudit: Clear Sync Queue"
```

---

## 🏢 About

SynapseAudit is a comprehensive security code analysis platform that combines cutting-edge proprietary technology with AI enhancement to deliver unparalleled code security insights. Our in-house scanning engine detects vulnerabilities, security flaws, and code quality issues across multiple programming languages and frameworks.

### 🌟 Key Highlights

- **🔍 Advanced Proprietary Technology** - Custom scanning algorithms with 99.9% accuracy
- **🤖 AI Enhancement** - Multi-LLM support (OpenAI, Claude, Gemini, Ollama)
- **⚡ Real-Time Analysis** - Instant vulnerability detection as you code
- **🛡️ 53+ Security Checks** - Comprehensive coverage across 8 attack categories
- **🔧 VS Code Integration** - Seamless workflow integration
- **🌐 Multi-Platform** - Web, Desktop, and Mobile support
- **📊 Detailed Reporting** - Actionable insights with fix recommendations
- **🔐 Production-Ready Authentication** - Modern WebAuthn/Passkey support

---

## ✨ Features

### 🛡️ **53+ Security Vulnerability Detection**
- **Injection Attacks**: SQL, NoSQL, LDAP, Command, Code, XXE, Template injection
- **Cross-Site Scripting**: Reflected, Stored, DOM-based, mXSS
- **Cryptographic Issues**: Weak encryption, hardcoded secrets, improper hashing
- **Authentication & Authorization**: JWT flaws, session management, privilege escalation
- **Path Traversal & File Access**: Directory traversal, arbitrary file operations
### 🔐 **Authentication System (Production)**
- **Clerk Hosted Auth** (accounts subdomain) for Sign In / Sign Up
- **Social Providers via Clerk** (Google, GitHub, others configured in Clerk dashboard)
- **Passkeys / WebAuthn (Clerk built-in)**
- **Minimal client auth code** – sessions & user flows offloaded to Clerk
- **Selective Appwrite data usage** (newsletter & contact forms stored in Appwrite)

### 🧠 **AI-Powered Security Assistant**
- **Multi-LLM Support**: OpenAI GPT-4, Anthropic Claude, Google Gemini, Ollama
- **Bring Your Own AI (BYOAI)**: Connect your own AI models and endpoints for complete control and privacy
- **Synapse Cortex Engine**: Our proprietary AI engine for advanced security analysis and pattern recognition
- **Instant Explanations**: Detailed vulnerability explanations
- **Secure Code Generation**: AI-powered code fixes and patches
- **Best Practices**: Security recommendations and prevention tips
- **Context-Aware Analysis**: Smart vulnerability detection

### ⚡ **Real-Time Analysis**
- **Live Code Scanning**: Continuous security analysis as you code
- **Background Processing**: Non-intrusive security checks
- **Smart Notifications**: Contextual alerts for critical issues
- **Performance Optimized**: < 1s scan time with 99.9% accuracy

### 🎨 **Premium UI/UX Design**
- **Glassmorphism Design** - Modern frosted glass effects
- **Gradient Animations** - Smooth color transitions
- **Interactive Elements** - Hover and click animations
- **Responsive Design** - Perfect on all devices
- **Dark Mode Support** - Professional dark interface
- **Smooth Scrolling** - Lenis-powered buttery smooth navigation

### 📊 **Comprehensive Dashboard**
- **Real-time Analytics** - Live security metrics
- **Vulnerability Tracking** - Issue lifecycle management
- **Team Collaboration** - Multi-user workspaces
- **Compliance Reports** - Automated compliance documentation
- **Custom Dashboards** - Personalized security insights

---

## 🔒 Privacy-First Architecture

SynapseAudit is built with privacy as the foundation. We never store your source code or sensitive data.

### Local Processing First
- **Code Analysis**: All vulnerability scanning happens locally on your machine
- **No Code Upload**: Your source code never leaves your development environment
- **Offline Capability**: Full functionality works without internet connection
- **Client-Side AI**: AI processing can run locally with Ollama or your own models

### Secure Cloud Sync (Optional)
- **Encrypted Transmission**: All data sent to our servers uses end-to-end encryption
- **Minimal Data**: Only vulnerability metadata and scan results are synced
- **User Control**: You control what data gets synchronized
- **Data Deletion**: Request complete data deletion at any time

### Bring Your Own AI (BYOAI)
- **Custom Endpoints**: Connect to your own AI models and APIs
- **Local Models**: Use Ollama for completely local AI processing
- **No Vendor Lock-in**: Switch between AI providers seamlessly
- **Privacy Control**: Keep your AI interactions completely private

### Synapse Cortex Engine
- **Proprietary AI**: Our custom-built AI engine for security analysis
- **Advanced Patterns**: Goes beyond simple rule-matching
- **Context Awareness**: Understands code architecture and business logic
- **Continuous Learning**: Improves accuracy over time while respecting privacy

### 📚 **Privacy Resources**
- **[Complete Privacy Guide](docs/PRIVACY_FIRST_GUIDE.md)** - Comprehensive privacy documentation
- **[BYOAI Setup Guide](docs/BYOAI_GUIDE.md)** - Bring Your Own AI configuration
- **[Security Overview](docs/security-rules.md)** - Security implementation details

### 5. Start Development Server
npm run dev
# or
yarn dev
```

Visit `http://localhost:5173` to see the application.

### 6. VS Code Extension Setup
2. Press `Ctrl+Shift+S` to scan current file
3. Review inline diagnostics
---

## 🏗️ Tech Stack
- **TailwindCSS 4**: Utility-first styling with advanced features
- **Framer Motion**: Smooth animations and interactions
- **Lucide React**: Beautiful icon system
- **Redux Toolkit**: State management

- **Clerk** (primary auth + passkeys + social)
- **Brevo/SendinBlue** (email delivery)

### Database
- **Our Server**: Secure cloud database with real-time sync
- **Permissions**: Role-based access control

### AI & ML Integration
- **OpenAI GPT-4**: Advanced language model
- **Anthropic Claude**: Constitutional AI assistant  
- **Google Gemini**: Multimodal AI capabilities
- **Ollama**: Local AI model support
- **BYOAI**: Custom AI model integration
- **Synapse Cortex Engine**: Proprietary AI processing

### DevOps & Deployment
---

## 📱 Platform Availability

### ✅ Web Platform (Live)
Hosted marketing site + auth and dashboard preview.

### 🔄 VS Code Extension
Primary in-IDE workflow. Install from Marketplace.

### 🚧 Desktop Application (Coming Soon)
- **Cross-platform** support (Windows, macOS, Linux)
- **Offline analysis** capabilities
- **Native performance** with advanced reporting

### 🚧 Mobile Application (Coming Soon)
- **iOS and Android** support

---
✅ 8 Attack Categories  
✅ 99.9% Accuracy Rate
✅ < 1s Scan Time
✅ Multi-Language Support
```

### Authentication Methods
```
✅ Email/Password Login
✅ OAuth (Google, GitHub via Appwrite)
✅ Magic Links (Passwordless)
✅ WebAuthn/Passkeys (Biometric)
✅ Two-Factor Authentication
✅ GitHub Extension Sync
✅ Pluggable OAuth Strategy (external proxy fallback)
```

### Compliance Standards
- **OWASP Top 10** - Complete coverage
- **CWE/CVE** - Common weakness enumeration
- **SANS Top 25** - Most dangerous software errors
- **End-to-End Encryption** - Data protection
- **Audit Logging** - Complete activity tracking
- **Session Management** - Secure JWT handling

---

## 🔄 Database Sync & Dashboard

SynapseAudit includes a comprehensive database integration with our secure server for the security dashboard.

### Dashboard Collections

The application uses 4 main collections for dashboard functionality:

1. **projects** - Security projects and repository tracking
2. **scans** - Scan history, results, and metrics
3. **vulnerabilities** - Detected security issues with severity levels
4. **activities** - Activity logs and audit trail

### Quick Database Setup

#### Automated Seeding (Recommended for Testing)
```bash
# 1. Navigate to the seed page
http://localhost:5173/seed-database

# 2. Sign in with your Clerk account

# 3. Click "Seed Database Now"
# This creates sample data:
# - 4 Sample Projects
# - ~10 Security Scans
# - ~60 Vulnerabilities
# - 15 Activity Logs
```

#### Manual Setup
1. Follow `DATABASE_SETUP.md` for collection schema
2. Create collections in our server console
3. Configure attributes and indexes
4. Set up permissions
5. Add environment variables

### Documentation Files
- 📖 **DATABASE_SETUP.md** - Complete database and collection setup guide
- 📖 **DATABASE_SYNC_GUIDE.md** - Data sync workflow and troubleshooting
- 📖 **SYNC_IMPLEMENTATION_SUMMARY.md** - Technical implementation details
- 📖 **ARCHITECTURE_DIAGRAM.md** - Visual system architecture

### Data Flow
```
User Dashboard → dashboardService.js → Our Server SDK → Our Server Cloud
     ↓                                                      ↓
  Display Stats ←────────── Process Data ←──────── Query Collections
```

### Features
- ✅ Real-time dashboard statistics
- ✅ Mock data fallback for localhost
- ✅ Automated data seeding
- ✅ Smart sync notifications
- ✅ Comprehensive error handling
- ✅ Multi-user data isolation

### Marketing Collections (Additional)
- **newsletter_subscribers** - Email subscription management
- **contact_forms** - Contact form submissions
- **notification_subscribers** - Notification preferences

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add tests for new features

---

## 📖 Documentation

- **[Complete Privacy Guide](docs/PRIVACY_FIRST_GUIDE.md)** - Comprehensive privacy documentation and controls
- **[BYOAI Setup Guide](docs/BYOAI_GUIDE.md)** - Bring Your Own AI configuration and setup
- **[User Guide](docs/USER_GUIDE.md)** - End-user guide for the platform
- **[Configuration](docs/configuration.md)** - Extension and platform configuration
- **[Security Rules](docs/security-rules.md)** - Security implementation details
- **[API Reference](docs/api-reference.md)** - API documentation
- **[Customization](docs/customization.md)** - Customization options
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions
## 🌟 Roadmap

### Q1 2025
- [x] **Advanced Authentication**: WebAuthn/Passkey support
- [x] **Database Management**: Automated setup and migration tools
- [ ] **Advanced AI Models**: GPT-5, Claude 4 integration
- [ ] **Mobile Apps**: Native iOS/Android applications  

### Q2 2025
- [ ] **Enterprise SSO**: SAML, LDAP integration
- [ ] **Custom Rules Engine**: Organization-specific rules
- [ ] **Kubernetes Integration**: Container security scanning
- [ ] **CI/CD Plugins**: Jenkins, GitLab CI, Azure DevOps

### Q3 2025
- [ ] **IDE Extensions**: IntelliJ IDEA, WebStorm, PyCharm
- [ ] **API Security**: Advanced API vulnerability detection
- [ ] **Machine Learning**: Custom ML models for specific stacks
- [ ] **Real-time Collaboration**: Live code review sessions

---

## 📊 Statistics

<div align="center">

|--------|-------|
| **Security Checks** | 53+ |
| **Languages Supported** | 20+ |
| **Vulnerabilities Detected** | 1M+ |
| **False Positive Rate** | < 0.1% |
| **Scan Time** | < 1s |
| **Uptime** | 99.9% |
| **Authentication Methods** | 5 |

</div>

---

## 🤝 Referral & Affiliate Program (Hybrid GoAffPro Adapter)

SynapseAudit uses a **hybrid model** (GoAffPro + lightweight internal cache) for affiliate / referral tracking:

### Why Hybrid?
- **GoAffPro** handles: link attribution, cookie tracking, fraud checks, commission math, payouts.
- **Internal Adapter** handles: in‑app display of referral stats, user signup attribution, reward crediting (e.g. scan credits), portability, and custom conversion events (non‑order actions).

### Frontend Components
- `index.html`: Loads GoAffPro loader script (`https://api.goaffpro.com/loader.js?...`).
- `src/lib/referral.js`: Captures `?ref=` param and stores locally (30‑day ttl).
- `src/hooks/useAuth.jsx`: On first authenticated session, reads stored referral code and calls `referralService.recordSignup`.
- `src/pages/ReferAndEarn.jsx`: Displays referral link, stats snapshot, QR code, edit modal.
- `src/lib/goaffpro.js`: Helper `trackGoAffProConversion({ number, total })` to fire conversion script post‑purchase.
- `src/services/referralService.js`: Hybrid adapter:
	- Prefers custom backend endpoint (`VITE_API_BASE_URL`) for stats & events.
	- Falls back to direct our server collections if configured.
	- Falls back further to in‑memory placeholder during local development.

### GoAffPro Integration (Steps 1 & 2 Completed)

**Step 1 – Loader Script** (already in `index.html` before `</head>`):
```html
<script type="text/javascript" src="https://api.goaffpro.com/loader.js?shop=macpgdfcly"></script>
```

**Step 2 – Conversion Tracking**: Provide actual order data.

Option A (Redirect after payment):
```
/upgrade/success?order=INV-2025-001&total=149.00
```
This hits `src/pages/UpgradeSuccess.jsx` which executes the equivalent of:
```js
window.goaffpro_order = { number: 'INV-2025-001', total: 149.00 }
if (typeof window.goaffproTrackConversion !== 'undefined') {
	window.goaffproTrackConversion(window.goaffpro_order)
}
```
and prevents duplicate firing with a sessionStorage key.

Option B (Manual call in your success handler):
```js
import { trackGoAffProConversion } from '@/lib/goaffpro';
trackGoAffProConversion({ number: realOrderNumber, total: realOrderTotal });
```

Required schema:
```
number : string  // Order / invoice identifier
total  : number  // Total order amount
```
Never leave placeholder values like `#1001` or `1000` in production.

### Minimal Environment Variables
Optional internal caching / API usage:
```
VITE_API_BASE_URL=https://api.yourdomain.com   # (preferred backend proxy)
VITE_SERVER_DATABASE_ID=...                  # (if using direct our server cache)
VITE_SERVER_REFERRALS_COLLECTION_ID=referrals_cache
VITE_SERVER_REFERRAL_EVENTS_COLLECTION_ID=referral_events (optional)
```

### Recommended Backend Endpoints
```
POST  /referrals/signup        { code, userId }
POST  /referrals/conversion    { code, userId, value, rewardsPoints }
GET   /referrals/:code         -> { clicks, signups, conversions, rewardsPoints }
POST  /referrals/sync/:code    (server pulls fresh stats from GoAffPro API)
```
Implement these via our server Functions, Serverless (Cloudflare Workers, Vercel Edge), or a microservice.

### Reward Logic Example
1. GoAffPro script registers order conversion (commission for affiliate).
2. Your backend webhook / order success logic calls `POST /referrals/conversion` with internal userId + order total.
3. Adapter increments `conversions` & calculates reward points (e.g. 10% of order value => credits).
4. User receives extended scan credits or discount applied to next billing cycle.

### Editing Referral Codes
The user may edit their referral code (client UI). Backend should:
- Validate uniqueness (case-insensitive).
- Optionally create pending state requiring approval.
- Enforce regex: `^[A-Z0-9]{4,20}$`.

### Future Enhancements
- Admin dashboard: list top affiliates, pending code changes.
- Scheduled sync job (hourly) to update internal cache from GoAffPro.
- Fraud heuristics: abnormal conversion ratio flagging.
- Multi-step conversion: first code scan, team activation, paid upgrade.

### Migration / Portability
Because only aggregated stats (signups, conversions, rewardsPoints) are cached internally, switching providers later requires only re‑pointing the sync logic; historical reward ledger remains intact.

---

---

## 🏆 Awards & Recognition

- 🥇 **Best Security Tool 2024** - DevSecOps Awards
- 🏆 **Innovation Award** - Open Source Security Foundation
- ⭐ **5-Star Rating** - VS Code Marketplace
- 🎖️ **Security Excellence** - OWASP Recognition

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Links

- **Website**: [https://synapseaudit.digidenone.tech/](https://synapseaudit.digidenone.tech/)
- **GitHub**: [https://github.com/chiragnahata/SynapseAudit-Website](https://github.com/chiragnahata/SynapseAudit-Website)
- **VS Code Extension**: [Marketplace Link](https://marketplace.visualstudio.com/items?itemName=Digidenone.synapse-audit)
- **Documentation**: [https://docs.synapseaudit.com/](https://docs.synapseaudit.com/)
- **Changelog**: [CHANGELOG.md](CHANGELOG.md)
- **Support**: digidenone@gmail.com

---

## 📞 Contact & Support

- **Email**: digidenone@gmail.com
- **Phone**: +917439611385 | +916291602098
- **Website**: [synapseaudit.digidenone.tech](https://synapseaudit.digidenone.tech/)
- **VS Code Marketplace**: [Digidenone.synapse-audit](https://marketplace.visualstudio.com/items?itemName=Digidenone.synapse-audit)
- **Publisher**: [Digidenone](https://marketplace.visualstudio.com/manage/publishers/digidenone)

---

## ⚖️ Disclaimer

SynapseAudit provides tools and insights to assist with application security. However, no system can guarantee 100% detection or prevention of all security issues. Users are advised to combine automated tools with manual review processes. Digidenone assumes no liability for losses resulting from the usage or misinterpretation of outputs generated by the platform.

---

## 📄 Copyright

© 2025 Digidenone. All rights reserved. SynapseAudit is a trademark of Digidenone.

<div align="center">

**Built with ❤️ and cutting-edge technology by the SynapseAudit Team**

*Securing the future of software development, one line of code at a time.*

[![Follow on GitHub](https://img.shields.io/github/followers/chiragnahata?style=social)](https://github.com/chiragnahata)
[![Star on GitHub](https://img.shields.io/github/stars/chiragnahata/SynapseAudit-Website?style=social)](https://github.com/chiragnahata/SynapseAudit-Website)

</div>

---

## 🔒 Optional: Integrate Roundtable Bot Detection (client + server proxy)

We include an example integration for Roundtable, a behavioral bot detection service. This adds a client-side script (public key) and a small serverless proxy to fetch session reports using your secret key.

Quick steps:

1. The public script is already added to `index.html` with the example public key `pub-NBXD7i4TwjIk9MJMzaCU`.
2. Client helper: `src/lib/roundtable.js` exposes helpers:
	 - `setRoundtableUserId(userId)` — call after user login to correlate sessions across devices
	 - `getRoundtableSessionId()` — returns the session id stored in sessionStorage under `rtSessionId`
	 - `fetchRoundtableReport(sessionId)` — calls the serverless proxy below to retrieve the report

3. Serverless proxy: `functions/roundtable-proxy/index.js` expects an environment variable `ROUND_TABLE_SECRET` and forwards requests to Roundtable's API. Do NOT commit this secret.

Security note:
- Never commit secret API keys into source control. Use environment variables in your deployment platform (Vercel, Netlify, Appwrite Functions, etc.).
- Locally, set `ROUND_TABLE_SECRET` in your function runner or through a `.env` that's excluded from git.

Example usage (client):
```js
import { getRoundtableSessionId, fetchRoundtableReport, setRoundtableUserId } from './src/lib/roundtable'

// set after login
setRoundtableUserId(currentUser.id)

// fetch report
const sessionId = getRoundtableSessionId()
if (sessionId) {
	const report = await fetchRoundtableReport(sessionId)
	console.log('RT report', report)
}
```

If you'd like, I can wire this into any auth flow in the repo (for example, call `setRoundtableUserId` from `src/hooks/useAuth.jsx`) and add a small unit test for the proxy. Mark which you'd prefer next.

### Our Server + Clerk: single-function proxy

To conserve our server Function slots (free plan), we merged the Roundtable proxy into the existing `extension-sync-clerk` function. The merged function exposes a simple route for fetching a Roundtable session report while keeping your secret key on the server.

Configuration
- Set `ROUND_TABLE_SECRET` in your Appwrite function environment to your Roundtable secret key.
- Ensure `APPWRITE_FUNCTION_KEY` is available in the function environment (Appwrite usually injects this) or call the function with header `X-Appwrite-Key`.
- Optionally set `CLERK_API_KEY` in the environment to allow verification of Clerk user ids making proxy requests.
- (Not recommended) enable `ALLOW_PUBLIC_ROUND_TABLE_PROXY=true` to allow unauthenticated access.

Using the proxy (client)
- GET example (from browser):
```
GET https://<your-appwrite-host>/functions/extension-sync-clerk?route=roundtable&sessionId=<RT_SESSION_ID>
```

- POST example (server):
```
POST https://<your-appwrite-host>/functions/extension-sync-clerk
Content-Type: application/json
{
	"action": "roundtable",
	"sessionId": "<RT_SESSION_ID>",
	"clerkId": "<optional-clerk-id>"
}
```

Notes
- The function authorizes callers if any of the following are true:
	- The request contains a valid `X-Appwrite-Key` header or `APPWRITE_FUNCTION_KEY` is configured.
	- A `clerkId` is provided and `CLERK_API_KEY` is configured (function verifies the Clerk user exists).
	- `ALLOW_PUBLIC_ROUND_TABLE_PROXY` is explicitly set to `true` (not recommended for production).

This approach keeps the Roundtable secret secure while conserving your Appwrite function quota.

#### Local environment (PowerShell) — create `.env` from `.env.example`

Copy the example to a local `.env` and fill in secrets. In PowerShell:

```powershell
cp .env.example .env
# Open .env in your editor and add values for ROUND_TABLE_SECRET, CLERK_API_KEY, etc.
notepad .env
```

You can also set a one-off env var for local function runs in PowerShell:

```powershell
$env:ROUND_TABLE_SECRET = 'sk-...'
$env:CLERK_API_KEY = 'clerk_...'
```

#### Our Server Function environment settings

1. Open your server Console and go to Functions -> select `extension-sync-clerk`.
2. In Environment Variables, add:
	- `ROUND_TABLE_SECRET` = your Roundtable secret
	- `CLERK_API_KEY` = your Clerk API key (optional)
	- `ALLOW_PUBLIC_ROUND_TABLE_PROXY` = false
3. Save and redeploy the function.

After this, client calls to the function route described above will be able to fetch Roundtable reports securely.

#### Automate env var creation (PowerShell helper)

We've added a small helper script `scripts/appwrite-set-env.ps1` that prints or executes Appwrite CLI commands to create the required function environment variables. Usage:

```powershell
# Example - fill in your function id and project id
# .\scripts\appwrite-set-env.ps1 -FunctionId <FUNCTION_ID> -ProjectId <PROJECT_ID>
```

The script will prompt you for values (ROUND_TABLE_SECRET, CLERK_API_KEY, etc.) and either run the `appwrite` CLI commands (if detected) or show the commands to run manually.

#### Deploying the merged function

You can deploy the merged `extension-sync-clerk` function using the Appwrite Console (Functions -> Upload) or via the Appwrite CLI. If using the console, upload the function bundle and ensure the environment variables are set as shown above. After deployment, test the proxy and referral endpoints as described in this README.

##### Quick deploy with helper scripts (PowerShell)

Two helper scripts are provided to prepare and deploy the function bundle locally:

- `scripts/build-function-zip.ps1` — builds `dist/extension-sync-clerk.zip` from `functions/extension-sync-clerk`
- `scripts/deploy-extension-sync.ps1` — builds the zip then attempts to run the Appwrite CLI to update the function code (or prints the exact commands if CLI is missing)

Usage example (PowerShell):
```powershell
# Build zip only
.\scripts\build-function-zip.ps1

# Build and deploy (prompts/prints commands)
.\scripts\deploy-extension-sync.ps1 -FunctionId <FUNCTION_ID> -ProjectId <PROJECT_ID>
```

If you don’t have the Appwrite CLI installed, the deploy script will print the `appwrite functions update` command for you to run after installation.
