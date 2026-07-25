import React, { useState } from 'react';
import { 
  Search, 
  UserX, 
  Globe, 
  CreditCard, 
  Smartphone, 
  Coins, 
  Link, 
  Clock, 
  ShieldAlert, 
  FileCheck, 
  Share2, 
  Bot, 
  Send,
  AlertCircle
} from 'lucide-react';
import { MOCK_INCIDENTS } from '../mockData';

export default function InvestigationWorkspace({ incident = MOCK_INCIDENTS[0] }) {
  const [activeTab, setActiveTab] = useState('evidence');
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: `Welcome Inspector. Case ${incident.id} is loaded. How can I assist your investigation?` },
    { sender: 'ai', text: `AI analysis shows financial trail leads to 2 mule accounts in Canara Bank (Mysuru branch) and 1 USDT Crypto Wallet.` }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputPrompt.trim()) return;

    const userMsg = inputPrompt;
    setChatMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputPrompt('');

    setTimeout(() => {
      let aiReply = "Analyzing inquiry across Karnataka Police Cyber Database...";
      if (userMsg.toLowerCase().includes('bengaluru') || userMsg.toLowerCase().includes('phishing')) {
        aiReply = "Found 14 connected phishing reports in Bengaluru Urban targeting BESCOM bill payments. Key suspect IP is 185.220.101.45 (TOR exit node).";
      } else if (userMsg.toLowerCase().includes('account') || userMsg.toLowerCase().includes('fraud')) {
        aiReply = "Linked Fraud Account: Canara Bank A/C 1102xxxx8831 registered under Rahul M. Total frozen balance: ₹ 42,500.";
      } else if (userMsg.toLowerCase().includes('predict') || userMsg.toLowerCase().includes('next')) {
        aiReply = "Predictive model suggests next target campaign will exploit Mysuru Electricity Supply Co (MESCOM) users over the upcoming weekend.";
      } else {
        aiReply = `Understood Officer. Compiled evidence summary for ${incident.id}: Threat classification score is ${incident.riskScore}/100. Hash signatures verified.`;
      }
      setChatMessages(prev => [...prev, { sender: 'ai', text: aiReply }]);
    }, 800);
  };

  return (
    <div className="space-y-6">
      
      {/* Incident Case Header Banner */}
      <div className="glass-card p-4 rounded-xl border-l-4 border-cyan-400 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-bold text-cyan-400">{incident.id}</span>
            <span className="cyber-badge badge-critical">{incident.type}</span>
            <span className="cyber-badge badge-high">RISK: {incident.riskScore}/100</span>
          </div>
          <h2 className="font-orbitron font-bold text-xl text-white mt-1">
            {incident.title}
          </h2>
          <p className="text-xs text-slate-300 font-rajdhani mt-0.5">
            District: <strong className="text-cyan-300">{incident.district}</strong> | Assigned Officer: <strong className="text-white">{incident.assignedOfficer}</strong>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="cyber-button text-xs">
            <FileCheck className="w-4 h-4" /> Export FIR Summary
          </button>
          <button className="cyber-button cyber-button-danger text-xs">
            <ShieldAlert className="w-4 h-4" /> Freeze Linked Accounts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (8 Cols): Investigation Timeline & Evidence Cards */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Sub Navigation Tabs */}
          <div className="flex border-b border-slate-800 gap-2">
            <button 
              onClick={() => setActiveTab('evidence')} 
              className={`px-4 py-2 font-rajdhani font-bold text-xs rounded-t-lg transition ${
                activeTab === 'evidence' ? 'bg-cyan-950 border-t border-x border-cyan-500/50 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Linked Evidence & Entities
            </button>
            <button 
              onClick={() => setActiveTab('timeline')} 
              className={`px-4 py-2 font-rajdhani font-bold text-xs rounded-t-lg transition ${
                activeTab === 'timeline' ? 'bg-cyan-950 border-t border-x border-cyan-500/50 text-cyan-300' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Attack Chain & Case Timeline
            </button>
          </div>

          {/* TAB 1: Evidence & Linked Entities Grid */}
          {activeTab === 'evidence' && (
            <div className="space-y-4">
              
              {/* Linked Suspects & Accounts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Suspects */}
                <div className="glass-card p-4 rounded-xl space-y-3">
                  <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
                    <UserX className="w-4 h-4 text-red-400" />
                    Identified Suspects & Syndicate Nodes
                  </h3>
                  <div className="space-y-2">
                    {incident.suspects.map((suspect, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">{suspect}</span>
                        <span className="cyber-badge badge-critical text-[10px]">WARRANT ACTIVE</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Loss & Wallets */}
                <div className="glass-card p-4 rounded-xl space-y-3">
                  <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
                    <Coins className="w-4 h-4 text-gold" />
                    Cryptocurrency & Bank Mule Trails
                  </h3>
                  <div className="space-y-2">
                    {incident.cryptoWallets.map((wallet, idx) => (
                      <div key={idx} className="p-2.5 bg-slate-900 border border-slate-800 rounded-lg space-y-1 text-xs">
                        <div className="text-[10px] text-slate-400 font-mono">CRYPTO WALLET:</div>
                        <div className="font-mono text-cyan-300 truncate">{wallet}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Infrastructure IOC Cards */}
              <div className="glass-card p-4 rounded-xl space-y-3">
                <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  Network & Web Infrastructure Indicators
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
                  {/* Domains */}
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>PHISHING DOMAIN</span>
                      <span className="text-red-400">FLAGGED</span>
                    </div>
                    {incident.domains.map((dom, i) => (
                      <div key={i} className="text-cyan-300 font-bold truncate">{dom}</div>
                    ))}
                  </div>

                  {/* IP Addresses */}
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-1">
                    <div className="flex justify-between items-center text-[10px] text-slate-400">
                      <span>COMMAND & CONTROL IP</span>
                      <span className="text-purple-400">TOR NODE</span>
                    </div>
                    {incident.ipAddresses.map((ip, i) => (
                      <div key={i} className="text-red-400 font-bold truncate">{ip}</div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Case Timeline Visualization */}
          {activeTab === 'timeline' && (
            <div className="glass-card p-4 rounded-xl space-y-4">
              <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                Chronological Cyber Attack Chain
              </h3>

              <div className="relative border-l-2 border-cyan-500/40 ml-4 space-y-6 py-2">
                
                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950"></span>
                  <div className="font-mono text-[11px] text-cyan-400">2026-07-25 08:30:00</div>
                  <h4 className="font-bold text-sm text-white font-rajdhani">Phishing SMS Dispatched via SMS Gateway</h4>
                  <p className="text-xs text-slate-400 font-rajdhani mt-0.5">Bulk messages sent to 1,200 numbers in Bengaluru area containing fake BESCOM payment link.</p>
                </div>

                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber-400 border-4 border-slate-950"></span>
                  <div className="font-mono text-[11px] text-amber-400">2026-07-25 10:15:12</div>
                  <h4 className="font-bold text-sm text-white font-rajdhani">Trojan APK Installed on Victim Device</h4>
                  <p className="text-xs text-slate-400 font-rajdhani mt-0.5">Victim downloaded "BESCOM_Verify_Payment.apk" which requested SMS reading permissions.</p>
                </div>

                <div className="relative pl-6">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500 border-4 border-slate-950"></span>
                  <div className="font-mono text-[11px] text-red-400">2026-07-25 12:42:10</div>
                  <h4 className="font-bold text-sm text-white font-rajdhani">OTP Intercepted & Funds Layered</h4>
                  <p className="text-xs text-slate-400 font-rajdhani mt-0.5">₹ 1,42,000 transferred to Canara Bank account then instantly converted to USDT on crypto exchange.</p>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Right Column (4 Cols): AI Chat Investigation Assistant */}
        <div className="lg:col-span-4">
          <div className="glass-card p-4 rounded-xl flex flex-col h-[560px] border border-cyan-500/40">
            
            {/* Assistant Header */}
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-400">
                <Bot className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-sm text-white">
                  KSP AI Copilot Assistant
                </h3>
                <span className="text-[10px] font-mono text-cyan-400">Active Case Intelligence Context</span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto my-3 space-y-3 pr-1 text-xs">
              {chatMessages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-lg max-w-[90%] font-rajdhani leading-relaxed ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-cyan-600/30 border border-cyan-400/50 text-white'
                      : 'bg-slate-900 border border-slate-800 text-slate-200'
                  }`}
                >
                  {msg.sender === 'ai' && (
                    <div className="font-mono text-[10px] text-cyan-400 mb-1 flex items-center gap-1 font-bold">
                      <Bot className="w-3 h-3" /> CYBERSHIELD AI:
                    </div>
                  )}
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Suggested Quick Prompts */}
            <div className="flex flex-wrap gap-1 mb-2">
              <button 
                onClick={() => setInputPrompt('Show phishing attacks in Bengaluru')}
                className="px-2 py-1 bg-slate-900 border border-slate-700 text-[10px] font-mono rounded text-cyan-300 hover:bg-slate-800"
              >
                Bengaluru Attacks?
              </button>
              <button 
                onClick={() => setInputPrompt('Find linked fraud accounts')}
                className="px-2 py-1 bg-slate-900 border border-slate-700 text-[10px] font-mono rounded text-cyan-300 hover:bg-slate-800"
              >
                Linked Fraud Accs?
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input 
                type="text" 
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask AI Copilot about suspects, IPs, or next steps..."
                className="flex-1 bg-slate-950 border border-slate-800 rounded px-3 py-2 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
              />
              <button type="submit" className="cyber-button px-3 py-2">
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>

      </div>

    </div>
  );
}
