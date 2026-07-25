import React, { useState } from 'react';
import { 
  Share2, 
  User, 
  UserX, 
  CreditCard, 
  Phone, 
  Mail, 
  Coins, 
  Globe, 
  Link, 
  ShieldAlert, 
  Filter,
  Maximize2
} from 'lucide-react';
import { THREAT_GRAPH_NODES, THREAT_GRAPH_EDGES } from '../mockData';

export default function ThreatGraph() {
  const [selectedNode, setSelectedNode] = useState(THREAT_GRAPH_NODES[2]); // Suspect node default
  const [filterGroup, setFilterGroup] = useState('all');

  const filteredNodes = filterGroup === 'all' 
    ? THREAT_GRAPH_NODES 
    : THREAT_GRAPH_NODES.filter(n => n.group === filterGroup);

  const getIconForGroup = (group) => {
    switch (group) {
      case 'victim': return User;
      case 'suspect': return UserX;
      case 'bank': return CreditCard;
      case 'phone': return Phone;
      case 'email': return Mail;
      case 'crypto': return Coins;
      case 'ip': return Globe;
      case 'domain': return Link;
      case 'darkweb': return ShieldAlert;
      default: return Share2;
    }
  };

  const getColorForGroup = (group) => {
    switch (group) {
      case 'victim': return 'border-cyan-400 bg-cyan-950/80 text-cyan-300';
      case 'suspect': return 'border-red-500 bg-red-950/90 text-red-400';
      case 'bank': return 'border-amber-400 bg-amber-950/80 text-amber-300';
      case 'phone': return 'border-emerald-400 bg-emerald-950/80 text-emerald-300';
      case 'email': return 'border-blue-400 bg-blue-950/80 text-blue-300';
      case 'crypto': return 'border-purple-400 bg-purple-950/80 text-purple-300';
      case 'ip': return 'border-rose-400 bg-rose-950/80 text-rose-300';
      default: return 'border-slate-600 bg-slate-900 text-slate-300';
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner Header */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <Share2 className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Multi-Entity Cyber Threat Intelligence Graph
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Interactive network visualization connecting Victims, Suspects, Mule Banks, IP Addresses, Crypto Wallets & Dark Web Mentions
            </p>
          </div>
        </div>

        {/* Filter toolbar */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select 
            value={filterGroup} 
            onChange={(e) => setFilterGroup(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded text-xs font-mono text-cyan-300 p-2 focus:outline-none"
          >
            <option value="all">Show All Entities (13)</option>
            <option value="suspect">Suspects Only</option>
            <option value="bank">Bank Mule Accounts</option>
            <option value="crypto">Crypto Wallets</option>
            <option value="ip">IP Addresses / C2</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Canvas Area (8 Cols) */}
        <div className="lg:col-span-8 glass-card p-4 rounded-xl relative min-h-[500px] flex flex-col justify-between overflow-hidden grid-background">
          
          <div className="flex items-center justify-between z-10">
            <span className="text-xs font-mono text-cyan-400 bg-slate-950/80 px-3 py-1 rounded border border-cyan-500/30">
              NETWORK GRAPH ENGINE: ACTIVE LINK ANALYSIS
            </span>
            <span className="text-[11px] font-mono text-slate-400">Click any entity node to inspect correlation</span>
          </div>

          {/* Graphical Node Web Simulation */}
          <div className="relative w-full h-[400px] my-4 flex items-center justify-center">
            
            {/* Visual background Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <line x1="20%" y1="20%" x2="50%" y2="40%" stroke="#ff0055" strokeWidth="2" />
              <line x1="50%" y1="40%" x2="80%" y2="20%" stroke="#00f0ff" strokeWidth="2" />
              <line x1="50%" y1="40%" x2="30%" y2="75%" stroke="#ffaa00" strokeWidth="2" />
              <line x1="30%" y1="75%" x2="70%" y2="80%" stroke="#9d00ff" strokeWidth="2" />
            </svg>

            {/* Interactive Rendered Nodes */}
            <div className="grid grid-cols-3 gap-6 w-full max-w-2xl">
              {filteredNodes.map((node) => {
                const IconComp = getIconForGroup(node.group);
                const colorStyle = getColorForGroup(node.group);
                const isSelected = selectedNode?.id === node.id;

                return (
                  <div 
                    key={node.id} 
                    onClick={() => setSelectedNode(node)}
                    className={`p-3 rounded-lg border cursor-pointer transition transform hover:scale-105 flex items-center gap-2 shadow-lg ${colorStyle} ${
                      isSelected ? 'ring-2 ring-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.6)]' : ''
                    }`}
                  >
                    <IconComp className="w-5 h-5 shrink-0" />
                    <div className="overflow-hidden">
                      <div className="text-[10px] font-mono opacity-80 uppercase">{node.group}</div>
                      <div className="font-bold text-xs truncate font-rajdhani">{node.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-10 border-t border-slate-800/80 pt-2">
            <div>Entities Displayed: {filteredNodes.length} / 13</div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Suspect</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400"></span> Bank Mule</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Crypto</span>
            </div>
          </div>

        </div>

        {/* Selected Entity Inspector Panel (4 Cols) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 border-b border-slate-800 pb-2">
            Entity Correlation Inspector
          </h3>

          {selectedNode ? (
            <div className="space-y-4 text-xs font-rajdhani">
              
              <div className="p-3 bg-slate-900 rounded-lg border border-cyan-500/40">
                <div className="text-[10px] font-mono text-cyan-400 uppercase">ENTITY TYPE: {selectedNode.group}</div>
                <div className="font-orbitron font-bold text-base text-white mt-1">{selectedNode.label}</div>
                <div className="text-slate-400 font-mono text-[10px] mt-1">ID: {selectedNode.id}</div>
              </div>

              <div className="space-y-2">
                <h4 className="font-orbitron font-bold text-xs text-slate-300">Linked Graph Connections (Edges):</h4>
                
                {THREAT_GRAPH_EDGES.filter(e => e.from === selectedNode.id || e.to === selectedNode.id).map((edge, idx) => (
                  <div key={idx} className="p-2 bg-slate-950 border border-slate-800 rounded font-mono text-[11px] space-y-1">
                    <div className="text-cyan-400 font-bold">{edge.label}</div>
                    <div className="text-slate-400 flex items-center justify-between">
                      <span>{edge.from}</span>
                      <span>→</span>
                      <span>{edge.to}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <button className="cyber-button w-full justify-center text-xs">
                  Issue Subpoena / Bank Notice (Sec 91)
                </button>
                <button className="cyber-button cyber-button-danger w-full justify-center text-xs">
                  Add Entity to State Watchlist
                </button>
              </div>

            </div>
          ) : (
            <div className="text-xs text-slate-500 font-mono text-center py-10">
              Select any node in the graph to view intelligence relations.
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
