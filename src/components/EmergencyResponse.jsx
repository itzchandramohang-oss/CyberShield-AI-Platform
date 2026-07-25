import React, { useState } from 'react';
import { 
  Zap, 
  Lock, 
  Bell, 
  ShieldAlert, 
  Globe, 
  Share2, 
  FileCheck, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EmergencyResponse() {
  const [actionStates, setActionStates] = useState({
    freeze: false,
    alertPolice: false,
    notifyCert: false,
    blockDomain: false,
    shareIntel: false,
    generateReport: false
  });

  const triggerAction = (key) => {
    setActionStates(prev => ({ ...prev, [key]: true }));
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border-l-4 border-red-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-red-950/40 via-slate-900 to-slate-900">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-red-500/20 rounded-xl border border-red-500 animate-pulse">
            <Zap className="w-8 h-8 text-red-500" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Emergency Tactical Cyber Response Center
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              One-click enforcement protocols for bank freezes, ISP domain blocks, CERT alerts, and CID tactical dispatches
            </p>
          </div>
        </div>

        <span className="cyber-badge badge-critical text-xs">DIRECT KSP ENFORCEMENT HOOKS</span>
      </div>

      {/* 6 One-Click Action Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        {/* Action 1: Freeze Accounts */}
        <div className="glass-card p-4 rounded-xl border border-red-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-red-400 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Freeze Suspicious Accounts
            </h3>
            {actionStates.freeze && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Automated API dispatch to NPCI & Nodal Banks to freeze 142 flagged mule bank accounts & UPI VPAs.
          </p>
          <button 
            onClick={() => triggerAction('freeze')}
            disabled={actionStates.freeze}
            className={`cyber-button w-full justify-center text-xs ${actionStates.freeze ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : 'cyber-button-danger'}`}
          >
            {actionStates.freeze ? '✓ Accounts Frozen (NPCI Ack)' : 'Execute Instant Bank Freeze'}
          </button>
        </div>

        {/* Action 2: Alert Cyber Police */}
        <div className="glass-card p-4 rounded-xl border border-cyan-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
              <Bell className="w-4 h-4" /> Alert District Cyber Police
            </h3>
            {actionStates.alertPolice && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Broadcast high-priority dispatch order to Bengaluru Urban & Mysuru Cyber Crime Station commanders.
          </p>
          <button 
            onClick={() => triggerAction('alertPolice')}
            disabled={actionStates.alertPolice}
            className={`cyber-button w-full justify-center text-xs ${actionStates.alertPolice ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : ''}`}
          >
            {actionStates.alertPolice ? '✓ Station Units Alerted' : 'Dispatch Tactical Alert'}
          </button>
        </div>

        {/* Action 3: Notify CERT-In */}
        <div className="glass-card p-4 rounded-xl border border-amber-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-amber-400 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Notify CERT-In & NCIIPC
            </h3>
            {actionStates.notifyCert && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Escalate critical healthcare & state infrastructure threat vectors to National CERT portal automatically.
          </p>
          <button 
            onClick={() => triggerAction('notifyCert')}
            disabled={actionStates.notifyCert}
            className={`cyber-button w-full justify-center text-xs ${actionStates.notifyCert ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : ''}`}
          >
            {actionStates.notifyCert ? '✓ CERT Notice Dispatched' : 'Submit National CERT Alert'}
          </button>
        </div>

        {/* Action 4: Block Malicious Domain */}
        <div className="glass-card p-4 rounded-xl border border-purple-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-purple-300 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Block Malicious Domain
            </h3>
            {actionStates.blockDomain && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Issue emergency Takedown order for domain `bescom-online-pay-karnataka.info` to Department of Telecom.
          </p>
          <button 
            onClick={() => triggerAction('blockDomain')}
            disabled={actionStates.blockDomain}
            className={`cyber-button w-full justify-center text-xs ${actionStates.blockDomain ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : ''}`}
          >
            {actionStates.blockDomain ? '✓ DoT Takedown Transmitted' : 'Trigger ISP DNS Block'}
          </button>
        </div>

        {/* Action 5: Share Intelligence */}
        <div className="glass-card p-4 rounded-xl border border-blue-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-blue-300 flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share Inter-State Intel
            </h3>
            {actionStates.shareIntel && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Sync suspect indicators with Jharkhand (Jamtara) & Telangana Cyber Security Bureaus.
          </p>
          <button 
            onClick={() => triggerAction('shareIntel')}
            disabled={actionStates.shareIntel}
            className={`cyber-button w-full justify-center text-xs ${actionStates.shareIntel ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : ''}`}
          >
            {actionStates.shareIntel ? '✓ Intel Synced with States' : 'Push Inter-State Intelligence'}
          </button>
        </div>

        {/* Action 6: Generate Report */}
        <div className="glass-card p-4 rounded-xl border border-emerald-500/40 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-orbitron font-bold text-sm text-emerald-300 flex items-center gap-2">
              <FileCheck className="w-4 h-4" /> Generate Investigation Report
            </h3>
            {actionStates.generateReport && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
          </div>
          <p className="text-xs text-slate-400 font-rajdhani">
            Compile complete court-ready PDF dossier containing timeline, evidence hashes, and AI risk justifications.
          </p>
          <button 
            onClick={() => triggerAction('generateReport')}
            disabled={actionStates.generateReport}
            className={`cyber-button w-full justify-center text-xs ${actionStates.generateReport ? 'bg-emerald-950 text-emerald-400 border-emerald-500' : ''}`}
          >
            {actionStates.generateReport ? '✓ PDF Dossier Exported' : 'Generate Comprehensive PDF'}
          </button>
        </div>

      </div>

    </div>
  );
}
