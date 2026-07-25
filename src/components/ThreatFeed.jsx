import React, { useState } from 'react';
import { 
  Radio, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldAlert, 
  Filter,
  RefreshCw
} from 'lucide-react';
import { LIVE_THREAT_FEED } from '../mockData';

export default function ThreatFeed() {
  const [searchTerm, setSearchTerm] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (indicator, id) => {
    navigator.clipboard.writeText(indicator);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <Radio className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Real-Time Cyber Threat Ingress Telemetry Stream
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Continuous live intelligence feed: Malicious URLs, Botnet IP addresses, Fake APK droppers & Dark Web leaks
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Search IP, URL, Hash, Domain..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs font-mono text-cyan-300 focus:outline-none focus:border-cyan-400 w-64"
            />
          </div>
        </div>
      </div>

      {/* Stream Table Card */}
      <div className="glass-card p-4 rounded-xl space-y-4">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-orbitron font-bold text-sm text-cyan-300">LIVE FEED STREAMING (KSP SOC GATEWAY)</span>
          </div>
          <button className="px-3 py-1 bg-slate-900 border border-slate-700 rounded text-xs font-mono text-cyan-300 hover:bg-slate-800 flex items-center gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" /> Refresh Telemetry
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400">
                <th className="p-2.5">TIMESTAMP</th>
                <th className="p-2.5">THREAT VECTOR</th>
                <th className="p-2.5">INDICATOR / IOC</th>
                <th className="p-2.5">SEVERITY</th>
                <th className="p-2.5">ORIGIN / TARGET</th>
                <th className="p-2.5">SOC STATUS</th>
                <th className="p-2.5 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {LIVE_THREAT_FEED.map((feed) => (
                <tr key={feed.id} className="hover:bg-slate-900/60 transition">
                  <td className="p-2.5 text-cyan-400">{feed.time}</td>
                  <td className="p-2.5 font-bold text-white font-rajdhani">{feed.type}</td>
                  <td className="p-2.5 text-cyan-300 max-w-xs truncate">{feed.indicator}</td>
                  <td className="p-2.5">
                    <span className={`cyber-badge ${
                      feed.severity === 'Critical' ? 'badge-critical' : feed.severity === 'High' ? 'badge-high' : 'badge-medium'
                    }`}>
                      {feed.severity}
                    </span>
                  </td>
                  <td className="p-2.5 text-slate-300">{feed.location}</td>
                  <td className="p-2.5 text-emerald-400 font-bold">{feed.status}</td>
                  <td className="p-2.5 text-right">
                    <button 
                      onClick={() => handleCopy(feed.indicator, feed.id)}
                      className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                      title="Copy IOC"
                    >
                      {copiedId === feed.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
