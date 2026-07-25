import React from 'react';
import { 
  ShieldAlert, 
  Shield,
  Globe, 
  Activity, 
  Cpu, 
  TrendingUp, 
  AlertTriangle, 
  FileText, 
  Lock, 
  DollarSign, 
  Server, 
  Eye, 
  Zap, 
  ExternalLink,
  ChevronRight,
  Database,
  ArrowUpRight
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, Cell 
} from 'recharts';
import { MOCK_INCIDENTS, LIVE_THREAT_FEED, KARNATAKA_DISTRICTS_DATA, PREDICTIVE_TRENDS } from '../mockData';

export default function Dashboard({ setCurrentView, setSelectedIncident }) {
  const kpis = [
    { title: 'Total Threats Detected', value: '14,892', change: '+18.4%', isUp: true, color: 'cyan', icon: Activity },
    { title: 'Critical Incidents', value: '42', change: '+6 active', isUp: true, color: 'red', icon: ShieldAlert },
    { title: 'Active Investigations', value: '184', change: '84% in progress', isUp: true, color: 'purple', icon: FileText },
    { title: 'High-Risk IPs Blocked', value: '3,109', change: '+240 today', isUp: true, color: 'blue', icon: Server },
    { title: 'Suspicious Domains', value: '894', change: '12 takedowns', isUp: false, color: 'gold', icon: Globe },
    { title: 'Scam Reports (1930 Helpline)', value: '1,420', change: 'Past 24 hrs', isUp: true, color: 'emerald', icon: Zap },
  ];

  return (
    <div className="space-y-6">
      
      {/* Top Banner Alert & Threat Status */}
      <div className="glass-card p-4 rounded-xl border-l-4 border-l-red-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gradient-to-r from-red-950/40 via-slate-900/80 to-slate-900">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-500/20 rounded-xl border border-red-500/40 animate-pulse">
            <ShieldAlert className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="cyber-badge badge-critical">STATE THREAT ADVISORY LEVEL 4</span>
              <span className="font-mono text-xs text-slate-400">Ref: KSP-CYBER-2026-0725</span>
            </div>
            <h2 className="font-orbitron font-bold text-lg text-white mt-1">
              Active Campaign Detected: State Electricity Bill (BESCOM) Phishing Droppers
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani mt-0.5">
              Automated Trojanized APKs targeting Karnataka banking apps. Real-time interception enabled across 8 Cyber Police Stations.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 self-end md:self-center">
          <button 
            onClick={() => setCurrentView('emergency-response')} 
            className="cyber-button cyber-button-danger text-xs font-bold"
          >
            <Zap className="w-4 h-4" /> Trigger Emergency Takedown
          </button>
          <button 
            onClick={() => setCurrentView('ai-module')} 
            className="cyber-button text-xs font-bold"
          >
            <Cpu className="w-4 h-4" /> Analyze Threat Payload
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-card p-3 rounded-lg flex flex-col justify-between hover:border-cyan-400/50 transition">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-rajdhani font-semibold text-slate-400 uppercase tracking-wide">
                  {kpi.title}
                </span>
                <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div className="mt-2">
                <div className="font-orbitron font-bold text-xl text-white tracking-tight">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1 mt-1 text-[10px] font-mono text-cyan-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>{kpi.change}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main SOC Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Columns: Live World Map & Realtime Timeline */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Simulated Cyber Attack Map Visualizer */}
          <div className="glass-card p-4 rounded-xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-orbitron font-bold text-base text-cyan-300 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  Live Cyber Threat Attack Map & Ingress Vectors
                </h3>
                <p className="text-xs text-slate-400 font-rajdhani">
                  Real-time attack telemetry targeting Karnataka servers from global nodes
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  RADAR ACTIVE
                </span>
              </div>
            </div>

            {/* Futuristic Vector Attack Graphic Visual */}
            <div className="relative h-64 w-full bg-[#030712] rounded-lg border border-slate-800 overflow-hidden flex items-center justify-center grid-background">
              
              {/* World outline graphic */}
              <div className="absolute inset-0 opacity-20 flex items-center justify-center font-mono text-xs text-cyan-600 select-none pointer-events-none">
                <pre className="text-[9px] leading-3">
{`
          .---.                         .---.                     
         /     \\                       /     \\   KARNATAKA SOC    
        | GLOBAL|====================>|  KSP  |  CYBER DEPT      
         \\     /                       \\     /                    
          '---'                         '---'                     
`}
                </pre>
              </div>

              {/* Simulated Nodes & Attack Beam Animations */}
              <div className="relative w-full h-full p-4 flex flex-col justify-between">
                
                {/* Node Top Left: SE Asia Compound */}
                <div className="absolute top-6 left-10 p-2 bg-red-950/80 border border-red-500/60 rounded-md text-[11px] font-mono shadow-[0_0_12px_rgba(255,0,85,0.4)]">
                  <div className="text-red-400 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    CAMBODIA / SE ASIA SCAM HUB
                  </div>
                  <div className="text-[10px] text-slate-300">Targeting: Bengaluru Cyber Cell</div>
                  <div className="text-[9px] text-slate-400">Vector: VoIP Digital Arrest Scam</div>
                </div>

                {/* Node Center Right: Karnataka Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-cyan-950/90 border-2 border-cyan-400 rounded-xl text-center shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                  <div className="font-orbitron font-bold text-sm text-cyan-300 flex items-center justify-center gap-1">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    KSP CYBER COMMAND HQ
                  </div>
                  <div className="text-[10px] font-mono text-white mt-1">BENGALURU SOC CENTRE</div>
                  <div className="text-[9px] font-mono text-emerald-400">Active Defenses: OPTIMAL</div>
                </div>

                {/* Node Bottom Left: Eastern Europe TOR Node */}
                <div className="absolute bottom-6 left-12 p-2 bg-purple-950/80 border border-purple-500/60 rounded-md text-[11px] font-mono">
                  <div className="text-purple-300 font-bold">TOR EXIT NODE #89 (NL)</div>
                  <div className="text-[10px] text-slate-300">LockBit C2 Payload Stream</div>
                </div>

                {/* Node Right: Jamtara Mule Syndicate */}
                <div className="absolute top-10 right-8 p-2 bg-amber-950/80 border border-amber-500/60 rounded-md text-[11px] font-mono">
                  <div className="text-amber-400 font-bold">JAMTARA MULE NETWORK</div>
                  <div className="text-[10px] text-slate-300">UPI Fraud Laundering</div>
                </div>

                {/* Animated beam lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="15%" y1="20%" x2="50%" y2="50%" stroke="#ff0055" strokeWidth="2" strokeDasharray="5,5" className="animate-pulse" />
                  <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="#9d00ff" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="80%" y1="25%" x2="50%" y2="50%" stroke="#ffaa00" strokeWidth="2" strokeDasharray="5,5" />
                </svg>

              </div>
            </div>

            {/* Threat Type Quick Badges */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-slate-400">Ingress Vectors Filter:</span>
              <div className="flex gap-2">
                <span className="cyber-badge badge-critical">Phishing 42%</span>
                <span className="cyber-badge badge-high">Ransomware 24%</span>
                <span className="cyber-badge badge-medium">Digital Arrest 18%</span>
                <span className="cyber-badge badge-low">Fake APKs 16%</span>
              </div>
            </div>
          </div>

          {/* AI-Generated Threat Summary */}
          <div className="glass-card p-4 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-slate-900 to-cyan-950/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-400/50">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-orbitron font-bold text-base text-white">
                    CyberShield AI Real-Time Executive Brief
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400">
                    Generated automatically by Neural Model KSP-LLM-v4 • 2 mins ago
                  </span>
                </div>
              </div>
              <span className="cyber-badge badge-low">98.4% CONFIDENCE</span>
            </div>

            <div className="text-xs text-slate-300 space-y-2 leading-relaxed font-rajdhani text-sm">
              <p>
                🚨 <strong className="text-white">High Alert:</strong> Over the last 6 hours, Karnataka State Police sensors registered a <span className="text-cyan-400 font-bold">+34% spike</span> in SMS-based phishing campaigns impersonating the Karnataka Electricity Supply Companies (BESCOM/MESCOM). Attackers are leveraging rogue domain <code className="text-cyan-300">bescom-online-pay-karnataka.info</code> to harvest net banking credentials.
              </p>
              <p>
                🛡️ <strong className="text-white font-bold">Mitigation Undertaken:</strong> 142 fraudulent UPI VPA handles were frozen via NPCI coordination, saving an estimated ₹ 42.5 Lakhs in potential citizen losses. KSP Emergency Response Team has issued automated block requests to ISP gateways.
              </p>
            </div>
          </div>

          {/* Active Incidents List Table */}
          <div className="glass-card p-4 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-orbitron font-bold text-base text-cyan-300 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Active Cyber Crime Cases Under Investigation
              </h3>
              <button 
                onClick={() => setCurrentView('investigation')} 
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
              >
                View Investigation Workspace <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {MOCK_INCIDENTS.map((incident) => (
                <div 
                  key={incident.id} 
                  onClick={() => {
                    setSelectedIncident(incident);
                    setCurrentView('investigation');
                  }}
                  className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-cyan-400/60 transition cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-cyan-400 font-bold">{incident.id}</span>
                      <span className={`cyber-badge ${
                        incident.severity === 'Critical' ? 'badge-critical' : 'badge-high'
                      }`}>
                        {incident.severity}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">[{incident.district}]</span>
                    </div>
                    <h4 className="font-semibold text-sm text-white font-rajdhani">{incident.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-1 font-rajdhani">{incident.description}</p>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <div className="text-right">
                      <div className="text-xs font-mono text-red-400 font-bold">Risk: {incident.riskScore}/100</div>
                      <div className="text-[10px] text-slate-500 font-mono">{incident.timestamp}</div>
                    </div>
                    <button className="p-2 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900">
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right 1 Column: Live Threat Feed & Karnataka Map Heatmap Preview */}
        <div className="space-y-6">
          
          {/* Live Cyber Threat Feed Widget */}
          <div className="glass-card p-4 rounded-xl flex flex-col h-[400px]">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <h3 className="font-orbitron font-bold text-sm text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
                Live Ingress Threat Stream
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                120 MSG/SEC
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {LIVE_THREAT_FEED.map((feed) => (
                <div key={feed.id} className="p-2.5 bg-slate-900/90 border border-slate-800/80 rounded font-mono text-xs hover:border-cyan-500/30 transition">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span className="text-cyan-400 font-bold">[{feed.time}]</span>
                    <span className="text-slate-300">{feed.location}</span>
                  </div>
                  <div className="text-white font-semibold flex items-center gap-1.5 truncate text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {feed.type}: <span className="text-cyan-200">{feed.indicator}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between">
                    <span className={`cyber-badge text-[9px] ${
                      feed.severity === 'Critical' ? 'badge-critical' : feed.severity === 'High' ? 'badge-high' : 'badge-medium'
                    }`}>
                      {feed.severity}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">{feed.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setCurrentView('threat-feed')} 
              className="mt-3 w-full py-2 bg-slate-900 border border-cyan-500/30 rounded text-xs font-rajdhani font-bold text-cyan-300 hover:bg-cyan-950 transition"
            >
              Open Full Telemetry Stream →
            </button>
          </div>

          {/* District Crime Intensity Widget */}
          <div className="glass-card p-4 rounded-xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Karnataka District Heatmap
              </h3>
              <button onClick={() => setCurrentView('heatmap')} className="text-xs font-mono text-cyan-400 hover:underline">
                Full Map
              </button>
            </div>

            <div className="space-y-2.5">
              {KARNATAKA_DISTRICTS_DATA.slice(0, 5).map((dist, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-rajdhani font-semibold">
                    <span className="text-white">{dist.name}</span>
                    <span className="font-mono text-cyan-400">{dist.incidents} Incidents</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${
                        dist.threatLevel === 'Critical' ? 'bg-gradient-to-r from-red-500 to-red-600' :
                        dist.threatLevel === 'High' ? 'bg-gradient-to-r from-amber-500 to-amber-600' : 'bg-cyan-500'
                      }`} 
                      style={{ width: `${dist.crimeDensity}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Quick Action Button Panel */}
          <div className="glass-card p-4 rounded-xl border border-red-500/30 bg-gradient-to-b from-red-950/20 to-slate-900">
            <h3 className="font-orbitron font-bold text-sm text-red-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Instant Response Actions
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-rajdhani font-bold">
              <button 
                onClick={() => setCurrentView('emergency-response')} 
                className="p-2 bg-red-950/80 border border-red-500/50 rounded text-red-300 hover:bg-red-900 transition"
              >
                Freeze Mule Accs
              </button>
              <button 
                onClick={() => setCurrentView('emergency-response')} 
                className="p-2 bg-slate-900 border border-cyan-500/40 rounded text-cyan-300 hover:bg-cyan-950 transition"
              >
                Notify CERT-In
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
