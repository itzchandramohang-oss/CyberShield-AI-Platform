import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldAlert, 
  Flame, 
  AlertTriangle, 
  Radio, 
  Layers, 
  PhoneCall, 
  Users, 
  Building2 
} from 'lucide-react';
import { KARNATAKA_DISTRICTS_DATA } from '../mockData';

export default function KarnatakaHeatmap() {
  const [selectedDistrict, setSelectedDistrict] = useState(KARNATAKA_DISTRICTS_DATA[0]);

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="glass-card p-4 rounded-xl border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400">
            <MapPin className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h2 className="font-orbitron font-bold text-lg text-white">
              Karnataka District-Wise Cyber Crime Heatmap & Incident Density
            </h2>
            <p className="text-xs text-slate-300 font-rajdhani">
              Geospatial SOC mapping across all 31 Karnataka districts for real-time tactical deployment
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="cyber-badge badge-critical animate-pulse">LIVE SENSOR FEED: ON</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Map Visualization Container (8 Cols) */}
        <div className="lg:col-span-8 glass-card p-4 rounded-xl relative min-h-[480px] flex flex-col justify-between overflow-hidden grid-background">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 z-10">
            <h3 className="font-orbitron font-bold text-sm text-cyan-300 flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-500" />
              State Crime Intensity Layer (KSP Command Grid)
            </h3>
            <span className="text-[11px] font-mono text-slate-400">Click district pins to inspect local cyber cell telemetry</span>
          </div>

          {/* Graphical Map Representation of Karnataka Districts */}
          <div className="relative w-full h-[380px] my-2 flex items-center justify-center">
            
            {/* Outline simulation graphic */}
            <div className="absolute inset-0 opacity-15 border border-cyan-500/30 rounded-xl flex items-center justify-center font-mono text-[10px] text-cyan-400">
              STATE BOUNDARY: KARNATAKA (191,791 km²) • 31 DISTRICTS ACTIVE
            </div>

            {/* Pins positioned geographically */}
            <div className="relative w-full h-full p-6">
              {KARNATAKA_DISTRICTS_DATA.map((dist, idx) => {
                const isSelected = selectedDistrict.name === dist.name;
                return (
                  <div 
                    key={idx}
                    onClick={() => setSelectedDistrict(dist)}
                    className={`absolute cursor-pointer transition transform hover:scale-110 flex items-center gap-1.5 p-2 rounded-lg border backdrop-blur-md ${
                      dist.threatLevel === 'Critical' ? 'bg-red-950/80 border-red-500 text-red-400 shadow-[0_0_15px_rgba(255,0,85,0.4)]' :
                      dist.threatLevel === 'High' ? 'bg-amber-950/80 border-amber-500 text-amber-300' :
                      'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                    } ${isSelected ? 'ring-2 ring-white z-20 scale-105' : ''}`}
                    style={{
                      left: `${((dist.lng - 74.0) / 4.5) * 80 + 10}%`,
                      top: `${((18.0 - dist.lat) / 5.5) * 80 + 10}%`
                    }}
                  >
                    <MapPin className={`w-4 h-4 ${dist.threatLevel === 'Critical' ? 'text-red-500 animate-bounce' : 'text-cyan-400'}`} />
                    <div>
                      <div className="font-bold text-[11px] font-rajdhani leading-none text-white">{dist.name}</div>
                      <div className="text-[9px] font-mono opacity-80">{dist.incidents} Incidents</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs font-mono text-slate-400 z-10 border-t border-slate-800 pt-2">
            <div>Legend:</div>
            <div className="flex gap-4">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500"></span> Critical (Bengaluru)</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> High Density</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400"></span> Moderate</span>
            </div>
          </div>

        </div>

        {/* District Detail Inspector (4 Cols) */}
        <div className="lg:col-span-4 glass-card p-4 rounded-xl space-y-4">
          <h3 className="font-orbitron font-bold text-sm text-cyan-300 border-b border-slate-800 pb-2">
            District Cyber Command Telemetry
          </h3>

          {selectedDistrict ? (
            <div className="space-y-4 text-xs font-rajdhani">
              
              <div className="p-3 bg-slate-900 rounded-lg border border-cyan-500/40">
                <div className="flex justify-between items-center">
                  <div className="font-orbitron font-bold text-base text-white">{selectedDistrict.name}</div>
                  <span className={`cyber-badge ${
                    selectedDistrict.threatLevel === 'Critical' ? 'badge-critical' : 'badge-high'
                  }`}>
                    {selectedDistrict.threatLevel}
                  </span>
                </div>
                <div className="text-slate-400 font-mono text-[10px] mt-1">Coordinates: {selectedDistrict.lat}° N, {selectedDistrict.lng}° E</div>
              </div>

              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">ACTIVE INCIDENTS:</span>
                  <div className="text-cyan-400 font-bold text-base">{selectedDistrict.incidents}</div>
                </div>
                <div className="p-2 bg-slate-950 rounded border border-slate-800">
                  <span className="text-slate-400 text-[10px]">CRIME DENSITY INDEX:</span>
                  <div className="text-red-400 font-bold text-base">{selectedDistrict.crimeDensity}/100</div>
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-slate-400">DOMINANT THREAT VECTOR:</span>
                <div className="font-bold text-white text-sm">{selectedDistrict.topThreat}</div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <button className="cyber-button w-full justify-center text-xs">
                  Dispatch CID Cyber Tactical Response Unit
                </button>
                <button className="cyber-button cyber-button-danger w-full justify-center text-xs">
                  Issue District Citizen Security Alert
                </button>
              </div>

            </div>
          ) : (
            <div className="text-xs text-slate-500 font-mono text-center py-10">
              Select a district pin on the map to inspect local crime density.
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
