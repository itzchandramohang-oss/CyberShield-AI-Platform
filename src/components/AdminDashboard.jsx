import React from 'react';
import { 
  SlidersHorizontal, 
  Users, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  Database, 
  Key, 
  Layers 
} from 'lucide-react';
import { KSP_STATIONS } from '../mockData';

export default function AdminDashboard() {
  const users = [
    { name: 'SP R. Prakash', role: 'CID Cyber Chief Admin', station: 'Bengaluru HQ', access: 'Level 5 (Full Command)' },
    { name: 'DySP Archana M.', role: 'Senior Investigator', station: 'Mysuru Division', access: 'Level 4 (Case Lead)' },
    { name: 'Ins. R. Veeresh', role: 'Cyber CID Specialist', station: 'Bengaluru Urban', access: 'Level 3 (Operational)' },
    { name: 'Insp. Chethan Kumar', role: 'Field Officer', station: 'Mangaluru Cell', access: 'Level 2 (Read/Write)' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <SlidersHorizontal className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              CyberShield System Administration & Governance
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              User role management, audit logs, AI model operational status, and API integration gateways
            </p>
          </div>
        </div>

        <span className="cyber-badge badge-low text-xs">SYSTEM HEALTH: 99.98%</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* User Management & Roles (7 Cols) */}
        <div className="lg:col-span-7 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <Users className="w-4 h-4 text-cyan-400" />
            Karnataka Police Officer Roles & Clearance Matrix
          </h3>

          <div className="space-y-2.5">
            {users.map((u, idx) => (
              <div key={idx} className="p-3 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white font-rajdhani">{u.name}</div>
                  <div className="text-[10px] font-mono text-slate-400">{u.role} • {u.station}</div>
                </div>
                <span className="cyber-badge badge-medium text-[10px]">{u.access}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI Model Status & API Integrations (5 Cols) */}
        <div className="lg:col-span-5 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            AI Engine & API Gateway Health
          </h3>

          <div className="space-y-3 text-xs font-mono">
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
              <span>KSP Neural Model LLM-v4:</span>
              <span className="text-emerald-400 font-bold">ONLINE (0.12s Latency)</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
              <span>NPCI Bank Freeze API:</span>
              <span className="text-emerald-400 font-bold">CONNECTED</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
              <span>DoT Takedown Portal:</span>
              <span className="text-emerald-400 font-bold">ACTIVE</span>
            </div>
            <div className="p-2.5 bg-slate-900 rounded border border-slate-800 flex justify-between items-center">
              <span>CERT-In Alert Sync:</span>
              <span className="text-emerald-400 font-bold">SYNCED</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
