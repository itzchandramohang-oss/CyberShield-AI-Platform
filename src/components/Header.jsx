import React from 'react';
import { 
  Shield, 
  MapPin, 
  Cpu, 
  Search, 
  Share2, 
  Brain, 
  Radio, 
  FileLock2, 
  SlidersHorizontal, 
  Lock, 
  Zap, 
  Bell, 
  UserCheck, 
  ShieldAlert,
  ChevronDown
} from 'lucide-react';

export default function Header({ currentView, setCurrentView, alertCount = 7, threatLevel = 'CRITICAL' }) {
  const navItems = [
    { id: 'dashboard', label: 'SOC Dashboard', icon: Radio },
    { id: 'ai-module', label: 'AI Intelligence', icon: Cpu },
    { id: 'investigation', label: 'Investigation Workspace', icon: Search },
    { id: 'threat-graph', label: 'Threat Graph', icon: Share2 },
    { id: 'predictive', label: 'Predictive AI', icon: Brain },
    { id: 'threat-feed', label: 'Live Feed', icon: Radio },
    { id: 'heatmap', label: 'KSP Heatmap', icon: MapPin },
    { id: 'evidence-vault', label: 'Evidence Vault', icon: FileLock2 },
    { id: 'explainable-ai', label: 'Explainable AI', icon: Lock },
    { id: 'emergency-response', label: 'Emergency Center', icon: Zap },
    { id: 'admin', label: 'Admin Dashboard', icon: SlidersHorizontal }
  ];

  return (
    <header className="glass-card style-header mb-4 border-b border-cyan-500/30 px-4 py-3 sticky top-0 z-50 bg-[#050914]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3">
        
        {/* Left branding */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('dashboard')}>
          <div className="relative">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-400/50 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              <Shield className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-orbitron font-extrabold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-200 to-indigo-300">
                CYBERSHIELD AI
              </h1>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                v4.8 SOC
              </span>
            </div>
            <p className="font-rajdhani text-xs font-semibold text-slate-400 tracking-wide flex items-center gap-1.5">
              <span>KARNATAKA STATE POLICE</span>
              <span className="text-cyan-500">•</span>
              <span className="text-gold">CYBER CRIME THREAT INTELLIGENCE PLATFORM</span>
            </p>
          </div>
        </div>

        {/* Center: Threat level indicator */}
        <div className="flex items-center gap-3 bg-slate-900/80 border border-slate-700/60 rounded-lg px-3 py-1.5 shadow-inner">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-500 animate-pulse" />
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">STATE DEFCON:</span>
            <span className={`font-orbitron text-xs font-bold px-2 py-0.5 rounded ${
              threatLevel === 'CRITICAL' ? 'bg-red-500/20 text-red-400 border border-red-500/50 shadow-[0_0_8px_rgba(255,0,85,0.4)]' : 'bg-amber-500/20 text-amber-400'
            }`}>
              {threatLevel} LEVEL 4
            </span>
          </div>

          <div className="h-4 w-px bg-slate-700 hidden sm:block"></div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            LIVE FEEDS ACTIVE (8 STATIONS)
          </div>
        </div>

        {/* Right side officer status & notifications */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <button className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500 transition relative">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white font-mono text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {alertCount}
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2.5 bg-slate-900/90 border border-cyan-500/30 rounded-lg p-1.5 pr-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center font-bold font-orbitron text-white text-xs shadow-md">
              KSP
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-semibold text-white font-rajdhani flex items-center gap-1">
                <span>SP R. PRAKASH (CID)</span>
                <UserCheck className="w-3 h-3 text-cyan-400" />
              </div>
              <div className="text-[10px] text-slate-400 font-mono">HQ Command • Bengaluru</div>
            </div>
          </div>
        </div>

      </div>

      {/* Navigation tabs horizontal bar */}
      <nav className="max-w-7xl mx-auto mt-3 pt-2 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md font-rajdhani font-semibold text-xs transition-all whitespace-nowrap ${
                isActive 
                  ? 'bg-gradient-to-r from-cyan-500/30 to-blue-600/30 text-cyan-300 border border-cyan-400/60 shadow-[0_0_12px_rgba(0,240,255,0.25)]' 
                  : 'text-slate-400 hover:text-cyan-200 hover:bg-slate-800/50 border border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
