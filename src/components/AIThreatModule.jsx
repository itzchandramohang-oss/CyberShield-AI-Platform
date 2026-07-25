import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Zap, 
  ArrowRight, 
  FileText, 
  Search, 
  Lock,
  CornerDownRight
} from 'lucide-react';

export default function AIThreatModule({ onNavigateToInvestigation }) {
  const [reportInput, setReportInput] = useState(`Cyber Crime Report Incident #8941:
Received WhatsApp message from +91 98450 11920 claiming BESCOM electricity bill unpaid. Urged user to click on http://bescom-online-pay-karnataka.info and download BESCOM_Verify_Payment.apk. Victim attempted transaction of ₹ 2,500; OTP intercepted and ₹ 1,42,000 debited from Canara Bank account.`);
  
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    threatType: 'SMS Phishing & Android Trojan Dropper (BESCOM Impersonation)',
    riskScore: 94,
    confidence: 98.6,
    riskCategory: 'CRITICAL',
    explainability: [
      'Identified spoofed domain (bescom-online-pay-karnataka.info) registered 48 hours ago via Privacy Protect proxy in Seychelles.',
      'APK payload matches known signature of "GoldPickaxe" Android Trojan designed to forward banking OTP SMS.',
      'High transaction velocity detected: 14 similar reports received across Bengaluru Urban district in past 3 hours.',
      'C2 IP 185.220.101.45 flagged in KSP Intelligence Database linked to Jamtara cyber syndicate.'
    ],
    indicators: {
      domains: ['bescom-online-pay-karnataka.info'],
      ips: ['185.220.101.45', '194.26.29.112'],
      wallets: ['0x71C7656EC7ab88b098defB751B7401B5f6d8976F'],
      phones: ['+91 98450 11920']
    },
    suggestedActions: [
      { action: 'Issue Emergency Domain Block to DoT / Karnataka TSPs', urgent: true },
      { action: 'Automated Account Freeze request sent to Canara Bank nodal officer', urgent: true },
      { action: 'Push public advisory banner on KSP Citizen Portal & WhatsApp Bot', urgent: false },
      { action: 'Dispatch cyber forensic team for victim device extraction', urgent: false }
    ]
  });

  const handleRunAnalysis = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
    }, 1200);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <Cpu className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              AI Cyber Threat Classification & Risk Scoring Engine
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Powered by Karnataka Police Neural Engine (KSP-LLM-v4) for multi-vector threat ingestion & automated triage
            </p>
          </div>
        </div>

        <span className="cyber-badge badge-low text-xs">MODEL: ACTIVE & OPTIMIZED</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Ingestion Panel (Left 5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="glass-card p-4 rounded-xl space-y-4">
            <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Incoming Cyber Crime Report Ingestion
            </h3>

            <div className="space-y-2">
              <label className="text-xs font-mono text-slate-400">Paste FIR Copy, Citizen Complaint, or Threat Payload Text:</label>
              <textarea 
                rows={9}
                value={reportInput}
                onChange={(e) => setReportInput(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-xs font-mono text-slate-200 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 leading-relaxed"
              ></textarea>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={handleRunAnalysis}
                disabled={analyzing}
                className="cyber-button w-full justify-center text-xs font-bold"
              >
                {analyzing ? (
                  <>
                    <Cpu className="w-4 h-4 animate-spin" /> Neural Processing In Progress...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4" /> Run AI Threat Analysis
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Incident Type Classifier Badges */}
          <div className="glass-card p-4 rounded-xl space-y-3">
            <h4 className="font-orbitron font-bold text-xs text-slate-300">Supported Crime Classifications</h4>
            <div className="flex flex-wrap gap-1.5 text-xs">
              <span className="cyber-badge badge-critical">Phishing / Spoofing</span>
              <span className="cyber-badge badge-critical">Ransomware C2</span>
              <span className="cyber-badge badge-high">Digital Arrest Scam</span>
              <span className="cyber-badge badge-high">Identity Theft</span>
              <span className="cyber-badge badge-medium">Online Financial Fraud</span>
              <span className="cyber-badge badge-medium">Fake APK Droppers</span>
              <span className="cyber-badge badge-low">Crypto Laundering</span>
            </div>
          </div>
        </div>

        {/* AI Analysis Output Panel (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="glass-card p-5 rounded-xl border border-cyan-400/40 relative overflow-hidden space-y-5">
            
            {/* Header Result */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <div className="text-[11px] font-mono text-cyan-400">DETECTED THREAT CLASSIFICATION</div>
                <h3 className="font-orbitron font-bold text-base text-white mt-0.5">
                  {analysisResult.threatType}
                </h3>
              </div>

              {/* Risk Gauge */}
              <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 rounded-lg p-2.5 px-4">
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400">AI RISK SCORE</div>
                  <div className="font-orbitron font-extrabold text-2xl text-red-500">{analysisResult.riskScore}<span className="text-xs text-slate-500">/100</span></div>
                </div>
                <div className="h-8 w-px bg-slate-800"></div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-slate-400">CONFIDENCE</div>
                  <div className="font-orbitron font-bold text-lg text-emerald-400">{analysisResult.confidence}%</div>
                </div>
              </div>
            </div>

            {/* Explainable AI Diagnostics */}
            <div className="space-y-3">
              <h4 className="font-orbitron font-bold text-xs text-cyan-300 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                Why AI Marked This Threat Suspicious (Explainable Reasoning):
              </h4>

              <div className="space-y-2">
                {analysisResult.explainability.map((item, i) => (
                  <div key={i} className="p-2.5 bg-slate-950/80 border border-slate-800/80 rounded-md flex items-start gap-2.5 text-xs text-slate-300 font-rajdhani font-medium">
                    <CornerDownRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracted IOC Artifacts */}
            <div className="space-y-2">
              <h4 className="font-orbitron font-bold text-xs text-slate-300">Extracted Indicators of Compromise (IOCs):</h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">DOMAINS:</span>
                  <div className="text-cyan-300 font-bold truncate">{analysisResult.indicators.domains[0]}</div>
                </div>
                <div className="p-2 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">C2 IP ADDRESS:</span>
                  <div className="text-red-400 font-bold truncate">{analysisResult.indicators.ips[0]}</div>
                </div>
                <div className="p-2 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">SUSPECT WALLET:</span>
                  <div className="text-purple-300 font-bold truncate">{analysisResult.indicators.wallets[0]}</div>
                </div>
                <div className="p-2 bg-slate-900 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">ORIGIN PHONE:</span>
                  <div className="text-amber-400 font-bold truncate">{analysisResult.indicators.phones[0]}</div>
                </div>
              </div>
            </div>

            {/* AI Suggested Police Actions */}
            <div className="space-y-3 pt-2">
              <h4 className="font-orbitron font-bold text-xs text-cyan-300 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                Suggested Police Operational Actions:
              </h4>

              <div className="space-y-2">
                {analysisResult.suggestedActions.map((act, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-rajdhani font-semibold text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 ${act.urgent ? 'text-red-500' : 'text-cyan-400'}`} />
                      {act.action}
                    </span>
                    <button className="px-2.5 py-1 bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-mono text-[10px] rounded hover:bg-cyan-900">
                      Execute
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Investigation Action */}
            <div className="pt-2">
              <button 
                onClick={onNavigateToInvestigation} 
                className="cyber-button w-full justify-center text-xs font-bold py-2.5"
              >
                Send IOCs to Interactive Case Investigation Workspace <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
