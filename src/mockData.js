// Mock data for CyberShield AI - Karnataka State Police

export const KSP_STATIONS = [
  { id: 'bengaluru-central', name: 'Bengaluru Central Cyber Crime CID', district: 'Bengaluru Urban', activeCases: 42, threatScore: 88 },
  { id: 'mysuru-cyber', name: 'Mysuru Division Cyber Crime PS', district: 'Mysuru', activeCases: 19, threatScore: 64 },
  { id: 'mangaluru-coastal', name: 'Mangaluru Coastal Cyber Cell', district: 'Dakshina Kannada', activeCases: 28, threatScore: 76 },
  { id: 'hubballi-dharwad', name: 'Hubballi-Dharwad Cyber Cell', district: 'Dharwad', activeCases: 15, threatScore: 52 },
  { id: 'kalaburagi-north', name: 'Kalaburagi Cyber Division', district: 'Kalaburagi', activeCases: 11, threatScore: 45 },
  { id: 'belagavi-west', name: 'Belagavi Border Cyber Unit', district: 'Belagavi', activeCases: 14, threatScore: 58 }
];

export const MOCK_INCIDENTS = [
  {
    id: 'INC-2026-8941',
    title: 'KSP Cyber Cell Phishing Impersonation Scheme',
    type: 'Phishing',
    target: 'State Electricity Board Portal Users',
    district: 'Bengaluru Urban',
    timestamp: '2026-07-25 12:42:10',
    severity: 'Critical',
    riskScore: 94,
    status: 'Under Active Investigation',
    assignedOfficer: 'Ins. R. Veeresh (CID Cyber Cell)',
    description: 'Fake BESCOM bill payment URLs circulating via WhatsApp with automated APK dropper harvesting OTPs & bank logins.',
    ipAddresses: ['185.220.101.45', '194.26.29.112'],
    domains: ['bescom-online-pay-karnataka.info', 'ksp-verify-account.top'],
    cryptoWallets: ['0x71C7656EC7ab88b098defB751B7401B5f6d8976F', '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa'],
    suspects: ['Ramesh @ CyberKidd (Jamtara Syndicate)', 'Unknown Actor (SE Asia Scam Compound)'],
    financialLossEstimate: '₹ 1.42 Crores across 84 victims'
  },
  {
    id: 'INC-2026-8940',
    title: 'LockBit 3.0 Ransomware Targeting Health Directorate Sub-servers',
    type: 'Ransomware',
    target: 'District Hospital MIS Network',
    district: 'Mysuru',
    timestamp: '2026-07-25 11:15:33',
    severity: 'Critical',
    riskScore: 98,
    status: 'Containment Protocols Initiated',
    assignedOfficer: 'DySP Archana M.',
    description: 'Lateral movement detected in Mysuru District Healthcare data center. Exfiltration of patient records initiated before server isolate action.',
    ipAddresses: ['45.154.255.89', '91.240.118.172'],
    domains: ['dark-leak-vault.onion', 'c2-health-system.cc'],
    cryptoWallets: ['bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'],
    suspects: ['Group APT-440 (Eastern Europe Proxy)'],
    financialLossEstimate: 'Ransom Demand: $250,000 in Monero'
  },
  {
    id: 'INC-2026-8938',
    title: 'Digital Arrest Scam Operation (CBI / KSP Impersonation)',
    type: 'Online Fraud',
    target: 'Senior Citizens & IT Professionals',
    district: 'Bengaluru Urban',
    timestamp: '2026-07-25 09:30:12',
    severity: 'High',
    riskScore: 86,
    status: 'Mule Accounts Frozen',
    assignedOfficer: 'Insp. Chethan Kumar',
    description: 'Fraudulent Skype/WhatsApp video calls pretending to be KSP Cyber Branch Officers claiming courier packages contain contraband.',
    ipAddresses: ['103.174.152.12'],
    domains: ['ksp-cyber-notice.online', 'cbi-digital-court.site'],
    cryptoWallets: ['3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy'],
    suspects: ['Mule Network Lead - Kamptee Hub'],
    financialLossEstimate: '₹ 88.5 Lakhs (₹ 42L frozen in real-time)'
  },
  {
    id: 'INC-2026-8935',
    title: 'Fake Karnataka State Police Constable Recruitment APK',
    type: 'Fake APK',
    target: 'Job Applicants Across Districts',
    district: 'Hubballi / Belagavi',
    timestamp: '2026-07-25 08:05:44',
    severity: 'High',
    riskScore: 82,
    status: 'Domain Takedown Sent',
    assignedOfficer: 'Insp. S. Patil',
    description: 'Trojanized APK file named "KSP_Constable_HallTicket_2026.apk" asking for SMS permissions to intercept banking OTPs.',
    ipAddresses: ['193.109.114.71'],
    domains: ['ksp-recruitment-gov-in.click'],
    cryptoWallets: ['0x32Be343B94f860124dC4fEe278FDCBD38C102D88'],
    suspects: ['Local Fraud Gang (Mewat Connection)'],
    financialLossEstimate: '3,200 Downloads Recorded'
  }
];

export const LIVE_THREAT_FEED = [
  { id: 1, time: '12:52:01', type: 'Phishing URL', indicator: 'http://karnataka-electricity-bill-pay.xyz', severity: 'High', location: 'Bengaluru', status: 'Blocked' },
  { id: 2, time: '12:50:44', type: 'Malicious IP', indicator: '185.220.101.45 (C2 Server)', severity: 'Critical', location: 'Global/TOR Node', status: 'Blacklisted' },
  { id: 3, time: '12:48:10', type: 'Financial Fraud', indicator: 'UPI: ksp-fine-verify@okaxis', severity: 'Critical', location: 'Mangaluru', status: 'Account Frozen' },
  { id: 4, time: '12:45:30', type: 'Botnet Spike', indicator: 'Mirai Variant scanning port 8080', severity: 'Medium', location: 'Belagavi', status: 'Filtered' },
  { id: 5, time: '12:41:15', type: 'Dark Web Alert', indicator: 'Leaked Database: 50k Mobile Numbers (Karnataka circle)', severity: 'High', location: 'Darknet Forum', status: 'Vaulted' },
  { id: 6, time: '12:38:00', type: 'Fake APK', indicator: 'KSP_E_Challan_Discount.apk (SHA256: 4e8b...)', severity: 'Critical', location: 'Mysuru', status: 'Alerted CERT' }
];

export const KARNATAKA_DISTRICTS_DATA = [
  { name: 'Bengaluru Urban', threatLevel: 'Critical', incidents: 428, crimeDensity: 94, topThreat: 'Digital Arrest & Phishing', lat: 12.9716, lng: 77.5946 },
  { name: 'Mysuru', threatLevel: 'High', incidents: 142, crimeDensity: 68, topThreat: 'Ransomware & Healthcare Targets', lat: 12.2958, lng: 76.6394 },
  { name: 'Dakshina Kannada (Mangaluru)', threatLevel: 'High', incidents: 189, crimeDensity: 74, topThreat: 'Crypto Scam & Banking Fraud', lat: 12.9141, lng: 74.8560 },
  { name: 'Dharwad (Hubballi)', threatLevel: 'Medium', incidents: 96, crimeDensity: 52, topThreat: 'Fake Job APK Droppers', lat: 15.3647, lng: 75.1240 },
  { name: 'Kalaburagi', threatLevel: 'Medium', incidents: 68, crimeDensity: 46, topThreat: 'SIM Swap Operations', lat: 17.3297, lng: 76.8343 },
  { name: 'Belagavi', threatLevel: 'Medium', incidents: 82, crimeDensity: 58, topThreat: 'Border Payment Gateway Abuse', lat: 15.8497, lng: 74.4977 },
  { name: 'Shivamogga', threatLevel: 'Low', incidents: 38, crimeDensity: 28, topThreat: 'Social Media Hijacking', lat: 13.9299, lng: 75.5681 },
  { name: 'Ballari', threatLevel: 'Medium', incidents: 54, crimeDensity: 39, topThreat: 'Mining Corp Phishing', lat: 15.1394, lng: 76.9214 }
];

export const PREDICTIVE_TRENDS = [
  { month: 'Jan', phishing: 320, ransomware: 45, deepfake: 12, fraud: 610 },
  { month: 'Feb', phishing: 380, ransomware: 52, deepfake: 28, fraud: 690 },
  { month: 'Mar', phishing: 450, ransomware: 60, deepfake: 45, fraud: 820 },
  { month: 'Apr', phishing: 510, ransomware: 48, deepfake: 72, fraud: 950 },
  { month: 'May', phishing: 620, ransomware: 68, deepfake: 110, fraud: 1120 },
  { month: 'Jun', phishing: 740, ransomware: 85, deepfake: 165, fraud: 1380 },
  { month: 'Jul (Est)', phishing: 890, ransomware: 102, deepfake: 230, fraud: 1640 }
];

export const THREAT_GRAPH_NODES = [
  { id: 'V1', label: 'Victim: Dr. K. N. Rao (Bengaluru)', group: 'victim', icon: 'User' },
  { id: 'V2', label: 'Victim: Tech Park Staff (Whitefield)', group: 'victim', icon: 'User' },
  { id: 'S1', label: 'Suspect: @CyberKidd (Jamtara Node)', group: 'suspect', icon: 'UserX' },
  { id: 'S2', label: 'Suspect: Rahul M. (Mule Account Holder)', group: 'suspect', icon: 'UserX' },
  { id: 'B1', label: 'Bank Acc: SBI 4099xxxx2104 (Frozen)', group: 'bank', icon: 'CreditCard' },
  { id: 'B2', label: 'Bank Acc: Canara 1102xxxx8831', group: 'bank', icon: 'CreditCard' },
  { id: 'P1', label: 'Phone: +91 98450 xxxxx', group: 'phone', icon: 'Phone' },
  { id: 'P2', label: 'Phone: +91 81055 xxxxx', group: 'phone', icon: 'Phone' },
  { id: 'E1', label: 'Email: support-bescom-verify@gmail.com', group: 'email', icon: 'Mail' },
  { id: 'C1', label: 'Wallet: 0x71C765...8976F (USDT 45k)', group: 'crypto', icon: 'Coins' },
  { id: 'IP1', label: 'IP: 185.220.101.45 (TOR Exit)', group: 'ip', icon: 'Globe' },
  { id: 'D1', label: 'Domain: bescom-online-pay-karnataka.info', group: 'domain', icon: 'Link' },
  { id: 'DW1', label: 'DarkWeb: BreachForums User #8821', group: 'darkweb', icon: 'ShieldAlert' }
];

export const THREAT_GRAPH_EDGES = [
  { from: 'S1', to: 'E1', label: 'Controls Email' },
  { from: 'E1', to: 'D1', label: 'Registered Domain' },
  { from: 'D1', to: 'V1', label: 'Phished Creds' },
  { from: 'D1', to: 'V2', label: 'Phished Creds' },
  { from: 'V1', to: 'B1', label: 'Transferred ₹ 4.5L' },
  { from: 'B1', to: 'B2', label: 'Layered Funds ₹ 3.2L' },
  { from: 'B2', to: 'C1', label: 'Converted to USDT' },
  { from: 'S1', to: 'P1', label: 'WhatsApp Call' },
  { from: 'S2', to: 'B1', label: 'Account Holder' },
  { from: 'IP1', to: 'D1', label: 'C2 Traffic Host' },
  { from: 'S1', to: 'DW1', label: 'Sells Data' }
];

export const EVIDENCE_VAULT_ITEMS = [
  { id: 'EV-901', name: 'BESCOM_Phishing_Chat_Logs.pdf', type: 'Chat Log', size: '4.2 MB', hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', timestamp: '2026-07-25 10:12', custody: 'Captured by Insp. Veeresh -> Cryptographically Hashed' },
  { id: 'EV-902', name: 'KSP_Constable_HallTicket_2026.apk', type: 'Malware Sample', size: '18.6 MB', hash: '5f4dcc3b5aa765d61d8327deb882cf992b95990a414a99182522c0d83e200881', timestamp: '2026-07-25 08:30', custody: 'Extracted from Victim Device #BK-04' },
  { id: 'EV-903', name: 'Bank_Mule_Account_Statement_SBI.csv', type: 'Financial Record', size: '890 KB', hash: '7c222fb2927d828af22f592134e8932480637c0d6ee053547b7444b88d85f8f5', timestamp: '2026-07-24 16:45', custody: 'Requisitioned under Sec 91 CrPC' },
  { id: 'EV-904', name: 'Skype_Digital_Arrest_Video_Frame.jpg', type: 'Screenshot', size: '2.1 MB', hash: 'a1b2c3d4e5f67890123456789abcdef0123456789abcdef0123456789abcdef0', timestamp: '2026-07-24 14:20', custody: 'Provided by Victim Dr. Rao' }
];
