import React from 'react';
import { 
  Lock, 
  HelpCircle, 
  CheckCircle2, 
  Layers, 
  FileText, 
  ShieldAlert, 
  Sliders, 
  Cpu 
} from 'lucide-react';

export default function ExplainableAI() {
  const modelFactors = [
    { factor: 'Domain Age < 7 Days', weight: '+35 Risk Points', impact: 'Critical' },
    { factor: 'SMS Gateway Anomaly Spike', weight: '+25 Risk Points', impact: 'High' },
    { factor: 'Trojanized APK Permission (SMS Read)', weight: '+30 Risk Points', impact: 'Critical' },
    { factor: 'C2 IP TOR Exit Node Match', weight: '+10 Risk Points', impact: 'Medium' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <Lock className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Explainable AI (XAI) Model Auditability & Rule Traceability
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Full transparency on why AI flags cyber threats, showing neural weights, risk factors, and precedent legal cases
            </p>
          </div>
        </div>

        <span className="cyber-badge badge-low text-xs">COURTROOM ADMISSIBLE XAI LOGS</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Risk Factor Weights Matrix (7 Cols) */}
        <div className="lg:col-span-7 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <Sliders className="w-4 h-4 text-cyan-400" />
            Neural Network Risk Factor Decomposition
          </h3>

          <div className="space-y-3">
            {modelFactors.map((fact, idx) => (
              <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-white font-rajdhani">{fact.factor}</div>
                  <div className="text-[10px] font-mono text-cyan-400">Weight Contribution: {fact.weight}</div>
                </div>
                <span className={`cyber-badge ${
                  fact.impact === 'Critical' ? 'badge-critical' : 'badge-high'
                }`}>
                  {fact.impact}
                </span>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 space-y-1">
            <div className="text-cyan-400 font-bold">MODEL DECISION EQUATION:</div>
            <div className="text-[11px] text-slate-400">
              RiskScore = Σ (Factor_Weight * Confidence) = 35(0.98) + 30(0.95) + 25(0.92) + 10(0.85) = <strong>94.2 / 100</strong>
            </div>
          </div>
        </div>

        {/* Precedent Historical Cases (5 Cols) */}
        <div className="lg:col-span-5 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            Similar Precedent Cyber Crime Cases
          </h3>

          <div className="space-y-3">
            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-1 text-xs">
              <div className="flex justify-between font-mono text-[10px] text-slate-400">
                <span>CASE REF: KSP-2025-4102</span>
                <span className="text-emerald-400">96.4% MATCH</span>
              </div>
              <div className="font-bold text-white font-rajdhani">BESCOM Bill Scam Syndicate (Hebbal Hub)</div>
              <p className="text-slate-400 text-[11px]">Identical SMS dropper template & Canara bank mule routing pattern used.</p>
            </div>

            <div className="p-3 bg-slate-900 border border-slate-800 rounded-lg space-y-1 text-xs">
              <div className="flex justify-between font-mono text-[10px] text-slate-400">
                <span>CASE REF: KSP-2025-8819</span>
                <span className="text-emerald-400">91.2% MATCH</span>
              </div>
              <div className="font-bold text-white font-rajdhani">GoldPickaxe Trojan Dropper Operations</div>
              <p className="text-slate-400 text-[11px]">Matching APK signing key hash detected in 2025 CID seizure.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
