import React, { useState } from 'react';
import { 
  Brain, 
  TrendingUp, 
  MapPin, 
  Target, 
  Zap, 
  BarChart2, 
  ShieldAlert, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Legend 
} from 'recharts';
import { PREDICTIVE_TRENDS } from '../mockData';

export default function PredictiveIntelligence() {
  const [selectedHorizon, setSelectedHorizon] = useState('30days');

  const sectorRisks = [
    { sector: 'Banking & Financial Portals (UPI)', risk: 92, status: 'Critical Threat' },
    { sector: 'State Govt Portals (BESCOM/KPTCL)', risk: 88, status: 'High Vulnerability' },
    { sector: 'Healthcare & Hospital MIS', risk: 74, status: 'Targeted Ransomware' },
    { sector: 'E-Commerce / OTP Delivery', risk: 65, status: 'Credential Stuffing' },
    { sector: 'Constable Recruitment Platforms', risk: 81, status: 'Fake Trojan APKs' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <Brain className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              AI Cyber Crime Growth Forecast & Predictive Analytics
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Predictive models forecast emerging attack vectors, high-risk Karnataka districts, and fraud hotspots before occurrence
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">FORECAST HORIZON:</span>
          <select 
            value={selectedHorizon} 
            onChange={(e) => setSelectedHorizon(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 p-2 rounded focus:outline-none"
          >
            <option value="30days">Next 30 Days Forecast</option>
            <option value="90days">Q3 2026 Prediction</option>
            <option value="annual">Annual Threat Projection</option>
          </select>
        </div>
      </div>

      {/* Main Charts & Prediction Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Chart 1: Interactive Growth Forecast Chart (8 Cols) */}
        <div className="lg:col-span-8 glass-card p-4 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-base text-cyan-300 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              Karnataka Cyber Crime Attack Trend Projections (2026)
            </h3>
            <span className="cyber-badge badge-high text-[10px]">AI PREDICTION MODEL v3.2</span>
          </div>

          {/* Recharts Area Chart */}
          <div className="h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PREDICTIVE_TRENDS}>
                <defs>
                  <linearGradient id="colorPhishing" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorFraud" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff0055" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ff0055" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#090d16', borderColor: '#00f0ff', borderRadius: '8px', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="fraud" name="Online Financial Fraud" stroke="#ff0055" fillOpacity={1} fill="url(#colorFraud)" />
                <Area type="monotone" dataKey="phishing" name="Phishing / APK Droppers" stroke="#00f0ff" fillOpacity={1} fill="url(#colorPhishing)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-3 text-xs font-mono border-t border-slate-800 pt-3">
            <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div className="text-slate-400">EXPECTED PHISHING RISE:</div>
              <div className="text-cyan-400 font-bold text-sm">+28.5% in July</div>
            </div>
            <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div className="text-slate-400">DEEPFAKE FRAUD SURGE:</div>
              <div className="text-red-400 font-bold text-sm">+42.0% Projected</div>
            </div>
            <div className="p-2 bg-slate-900/80 rounded border border-slate-800">
              <div className="text-slate-400">PREDICTED SAVINGS:</div>
              <div className="text-emerald-400 font-bold text-sm">₹ 3.8 Cr via Proactive Block</div>
            </div>
          </div>
        </div>

        {/* Targeted Sectors & High-Risk Predictions (4 Cols) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <Target className="w-4 h-4 text-red-400" />
            Most Targeted Sectors (Next 30 Days)
          </h3>

          <div className="space-y-3">
            {sectorRisks.map((sec, idx) => (
              <div key={idx} className="p-2.5 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                <div className="flex justify-between items-center text-xs font-rajdhani font-bold text-white">
                  <span>{sec.sector}</span>
                  <span className="font-mono text-red-400">{sec.risk}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-red-500 rounded-full" 
                    style={{ width: `${sec.risk}%` }}
                  ></div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 flex justify-between">
                  <span>Threat Vector:</span>
                  <span className="text-cyan-300 font-semibold">{sec.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-lg text-xs font-rajdhani text-slate-300 space-y-1">
            <div className="font-bold text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> AI Predictive Hotspot Warning:
            </div>
            <p>
              High probability of synchronized Digital Arrest scam calls targeting IT workers in <strong>Bengaluru Urban (Whitefield/Electronic City)</strong> over weekend hours.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
