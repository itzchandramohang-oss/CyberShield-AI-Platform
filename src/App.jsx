import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AIThreatModule from './components/AIThreatModule';
import InvestigationWorkspace from './components/InvestigationWorkspace';
import ThreatGraph from './components/ThreatGraph';
import PredictiveIntelligence from './components/PredictiveIntelligence';
import ThreatFeed from './components/ThreatFeed';
import KarnatakaHeatmap from './components/KarnatakaHeatmap';
import EvidenceVault from './components/EvidenceVault';
import ExplainableAI from './components/ExplainableAI';
import EmergencyResponse from './components/EmergencyResponse';
import AdminDashboard from './components/AdminDashboard';
import { MOCK_INCIDENTS } from './mockData';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedIncident, setSelectedIncident] = useState(MOCK_INCIDENTS[0]);

  return (
    <div className="min-h-screen bg-[#050914] text-slate-200 scanline">
      {/* Navbar Header */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Content View Switcher */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {currentView === 'dashboard' && (
          <Dashboard 
            setCurrentView={setCurrentView} 
            setSelectedIncident={setSelectedIncident} 
          />
        )}

        {currentView === 'ai-module' && (
          <AIThreatModule 
            onNavigateToInvestigation={() => setCurrentView('investigation')} 
          />
        )}

        {currentView === 'investigation' && (
          <InvestigationWorkspace incident={selectedIncident} />
        )}

        {currentView === 'threat-graph' && (
          <ThreatGraph />
        )}

        {currentView === 'predictive' && (
          <PredictiveIntelligence />
        )}

        {currentView === 'threat-feed' && (
          <ThreatFeed />
        )}

        {currentView === 'heatmap' && (
          <KarnatakaHeatmap />
        )}

        {currentView === 'evidence-vault' && (
          <EvidenceVault />
        )}

        {currentView === 'explainable-ai' && (
          <ExplainableAI />
        )}

        {currentView === 'emergency-response' && (
          <EmergencyResponse />
        )}

        {currentView === 'admin' && (
          <AdminDashboard />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-[#03060f] py-4 text-center text-xs font-rajdhani text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-2">
          <div>
            © 2026 Karnataka State Police (KSP) • Cyber Crime Investigation Division
          </div>
          <div className="font-mono text-[10px] text-cyan-500/70">
            SECURE SOC PORTAL • RESTRICTED POLICE ACCESS ONLY
          </div>
        </div>
      </footer>
    </div>
  );
}
