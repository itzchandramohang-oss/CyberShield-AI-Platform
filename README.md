# 🛡️ CyberShield AI – Cyber Crime Threat Intelligence Platform
### **Karnataka State Police (KSP) SOC Command System**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-cyan.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple.svg)](https://vitejs.dev/)
[![Tailwind / Glassmorphism](https://img.shields.io/badge/Design-Cyber_SOC_Glassmorphism-00f0ff.svg)](#)

---

## 📌 1. Prototype Brief

### **Problem Statement Addressed**
Cybercrime in Karnataka has surged across various vectors—including state electricity bill (BESCOM/MESCOM) phishing trojans, "Digital Arrest" impersonation calls, LockBit ransomware targeting health & district infrastructure, and Jamtara financial laundering networks. Police officers lack an integrated, real-time Security Operations Center (SOC) visualizer that combines live threat telemetry, AI risk scoring, explainable reasoning, inter-entity relation graphs, and one-click tactical enforcement hooks.

### **Key Features & Functionalities**
1. **Real-time SOC Dashboard & Attack Radar**: Displays State DEFCON threat level (Level 4 Critical), live attack ingress vectors, real-time KPI metrics, AI executive brief, and active case trackers.
2. **AI Threat Intelligence & Risk Scoring Engine**: Automated ingestion of FIRs and citizen reports, risk scoring ($0–100$), confidence estimation, and Explainable AI (XAI) diagnostics.
3. **Incident Investigation Workspace**: Interactive evidence management, multi-stage attack chain timeline, linked entity cards, and a **Conversational AI Investigation Copilot**.
4. **Multi-Entity Threat Intelligence Graph**: Network graph correlating Victims, Suspects, Mule Bank Accounts, Phone Numbers, Crypto Wallets, IP Addresses, and Dark Web mentions.
5. **AI Predictive Analytics & Forecast**: Trend projection charts predicting attack vector growth, vulnerable state sectors, and high-risk district fraud hotspots.
6. **Live Ingress Threat Telemetry Feed**: Real-time stream of malicious URLs, C2 IPs, Trojan hashes, and dark web leaks.
7. **District-Wise Karnataka Heatmap**: Geospatial SOC mapping across all 31 Karnataka districts highlighting crime density.
8. **Digital Evidence Vault**: Cryptographically hashed (SHA-256) evidence store with immutable chain-of-custody tracking.
9. **Explainable AI (XAI) Audit Matrix**: Transparent breakdown of neural weights and precedent court cases for legal admissibility.
10. **One-Click Emergency Response Center**: Rapid enforcement triggers for bank account freezing (NPCI API), DoT domain blocking, CERT alerts, and PDF dossier generation.
11. **Admin Governance & System Health**: Officer role matrix, clearance levels, AI model latency, and API health checks.

### **Technology Stack**
- **Frontend Framework**: React 18 with Vite
- **UI Architecture**: Glassmorphism Cyber Theme, Custom CSS Design System, Responsive Layouts
- **Icons & Visuals**: Lucide React, Custom Vector Radar & Attack Beam SVG Canvas
- **Charts & Data Visualization**: Recharts (Area Charts, Bar Charts)
- **Effects & Micro-animations**: Canvas-Confetti, CSS Pulsing Animations

### **Proposed Impact & Use Case**
- **Tactical Police Operations**: Reduces triage time for incoming cyber crime reports from hours to seconds.
- **Financial Fraud Prevention**: Prevents money laundering by enabling real-time bank account freezing before funds are moved.
- **Inter-State Coordination**: Direct intelligence sharing between Karnataka CID, Jamtara hubs, and CERT-In.

---

## 🚀 2. Local Setup & Execution Instructions

### **Prerequisites**
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (v9.0.0 or higher)

### **Installation Steps**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/CyberShield-AI-Platform.git
   cd CyberShield-AI-Platform
   ```

2. **Install Dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the Local Development Server:**
   ```bash
   npm run dev
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:5173/`.

5. **Build for Production Deployment:**
   ```bash
   npm run build
   ```

---

## 📂 Project Structure
```text
CyberShield-AI-Platform/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx                # Modern Navbar with DEFCON & Officer Badge
│   │   ├── Dashboard.jsx             # SOC Command Center & Live Attack Map
│   │   ├── AIThreatModule.jsx        # AI Ingestion, Scoring & XAI Diagnostics
│   │   ├── InvestigationWorkspace.jsx# Case Timeline & AI Chat Copilot
│   │   ├── ThreatGraph.jsx           # Multi-Entity Threat Visualizer Graph
│   │   ├── PredictiveIntelligence.jsx# Recharts Forecasting & Sector Vulnerabilities
│   │   ├── ThreatFeed.jsx            # Real-Time Telemetry Stream
│   │   ├── KarnatakaHeatmap.jsx      # Geospatial District Density Map
│   │   ├── EvidenceVault.jsx         # SHA-256 Evidence Ledger & Chain of Custody
│   │   ├── ExplainableAI.jsx         # Neural Weights & Legal Precedent Matrix
│   │   ├── EmergencyResponse.jsx     # 1-Click Enforcement Triggers
│   │   └── AdminDashboard.jsx        # Officer Access Control & System Health
│   ├── mockData.js                   # Telemetry & KSP Intelligence Dataset
│   ├── App.jsx                       # Main App Routing & View Switcher
│   ├── App.css
│   ├── index.css                     # Design System Tokens & Glassmorphism Styling
│   └── main.jsx
├── package.json
├── README.md                         # Comprehensive Submission Documentation
└── vite.config.js
```

---

## ⚖️ License
This project is licensed under the MIT License - see the `LICENSE` file for details. Developed for Karnataka State Police (KSP) Cyber Crime Intelligence Division.
