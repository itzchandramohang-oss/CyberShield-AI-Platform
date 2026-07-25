import React, { useState } from 'react';
import { 
  FileLock2, 
  Hash, 
  ShieldCheck, 
  FileText, 
  Upload, 
  Download, 
  Lock, 
  Clock, 
  CheckCircle2, 
  Eye 
} from 'lucide-react';
import { EVIDENCE_VAULT_ITEMS } from '../mockData';

export default function EvidenceVault() {
  const [selectedVaultItem, setSelectedVaultItem] = useState(EVIDENCE_VAULT_ITEMS[0]);
  const [verifyStatus, setVerifyStatus] = useState(null);

  const handleVerifyHash = () => {
    setVerifyStatus('verifying');
    setTimeout(() => {
      setVerifyStatus('verified');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <FileLock2 className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Digital Evidence Vault & Immutable Custody Log
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Secure forensic store for Chat Logs, Screenshots, Trojan APKs, and Bank Records with SHA-256 hash verification
            </p>
          </div>
        </div>

        <button className="cyber-button text-xs font-bold">
          <Upload className="w-4 h-4" /> Ingest Digital Evidence File
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Evidence Items List (7 Cols) */}
        <div className="lg:col-span-7 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyan-400" />
            Vaulted Case Artifacts (Sec 65B Certified)
          </h3>

          <div className="space-y-3">
            {EVIDENCE_VAULT_ITEMS.map((item) => (
              <div 
                key={item.id}
                onClick={() => {
                  setSelectedVaultItem(item);
                  setVerifyStatus(null);
                }}
                className={`p-3.5 bg-slate-900 border rounded-xl cursor-pointer transition flex items-center justify-between gap-3 ${
                  selectedVaultItem.id === item.id 
                    ? 'border-cyan-400 bg-cyan-950/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]' 
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-1 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-cyan-400 font-bold">{item.id}</span>
                    <span className="cyber-badge badge-medium text-[10px]">{item.type}</span>
                  </div>
                  <div className="font-bold text-sm text-white font-rajdhani truncate">{item.name}</div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">SHA256: {item.hash.substring(0, 32)}...</div>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-mono text-slate-300 font-bold">{item.size}</div>
                  <div className="text-[10px] font-mono text-slate-500">{item.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Evidence Detail & Chain of Custody (5 Cols) */}
        <div className="lg:col-span-5 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 border-b border-slate-800 pb-2">
            Forensic Integrity & Chain of Custody
          </h3>

          {selectedVaultItem ? (
            <div className="space-y-4 text-xs font-rajdhani">
              
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-2">
                <div className="text-[10px] font-mono text-cyan-400">ARTIFACT NAME:</div>
                <div className="font-orbitron font-bold text-sm text-white">{selectedVaultItem.name}</div>
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>Type: {selectedVaultItem.type}</span>
                  <span>Size: {selectedVaultItem.size}</span>
                </div>
              </div>

              {/* SHA 256 Hash Verification Box */}
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 space-y-2 font-mono">
                <div className="flex justify-between items-center text-[10px]">
                  <span className="text-slate-400">CRYPTOGRAPHIC SHA-256 HASH:</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-[10px] text-cyan-300 break-all bg-slate-900 p-2 rounded border border-slate-800">
                  {selectedVaultItem.hash}
                </div>

                <button 
                  onClick={handleVerifyHash}
                  disabled={verifyStatus === 'verifying' || verifyStatus === 'verified'}
                  className="w-full py-1.5 bg-cyan-950 border border-cyan-500/40 text-cyan-300 rounded hover:bg-cyan-900 transition text-[11px] font-bold"
                >
                  {verifyStatus === 'verifying' ? 'Verifying Hash on Blockchain Ledger...' :
                   verifyStatus === 'verified' ? '✓ HASH VERIFIED & UNTAMPERED' :
                   'Verify Integrity Hash'}
                </button>
              </div>

              {/* Chain of Custody Log */}
              <div className="space-y-2">
                <h4 className="font-orbitron font-bold text-xs text-slate-300">Chain of Custody History:</h4>
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1 font-mono text-[11px]">
                  <div className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Immutable Log Entry
                  </div>
                  <div className="text-slate-300 mt-1">{selectedVaultItem.custody}</div>
                </div>
              </div>

              <div className="pt-2">
                <button className="cyber-button w-full justify-center text-xs">
                  <Download className="w-4 h-4" /> Download Encrypted Forensic Container (.E01)
                </button>
              </div>

            </div>
          ) : (
            <div className="text-xs text-slate-500 font-mono text-center py-10">
              Select an evidence item to verify hash and custody log.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
