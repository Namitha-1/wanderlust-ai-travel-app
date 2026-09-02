import React from 'react';
import { Compass, MapPin, Sparkles, Calendar, Key, CloudSun, Globe } from 'lucide-react';

export default function Navbar({ 
  onOpenLocation, 
  onOpenChat, 
  onOpenItinerary, 
  onOpenSettings,
  userLocation,
  activeTab,
  setActiveTab 
}) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setActiveTab('explorer'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-all duration-300">
            <Compass className="w-6 h-6 text-white animate-pulse-slow" />
          </div>
          <div>
            <span className="text-2xl font-extrabold tracking-tight font-display text-white group-hover:text-cyan-400 transition-colors">
              Wander<span className="text-cyan-400">lust</span>
            </span>
            <span className="block text-[10px] tracking-widest uppercase font-semibold text-slate-400 -mt-1">
              Design Esthetics AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800">
          <button
            onClick={() => { setActiveTab('explorer'); document.getElementById('explorer-section')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
              activeTab === 'explorer' 
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Globe className="w-4 h-4" />
            Explore
          </button>

          <button
            onClick={onOpenLocation}
            className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-2 group"
          >
            <MapPin className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" />
            <span>{userLocation?.displayName ? userLocation.displayName : 'Near Me'}</span>
            {userLocation?.weather && (
              <span className="ml-1 text-xs px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/50 text-cyan-300 font-semibold flex items-center gap-1">
                <CloudSun className="w-3 h-3 text-amber-400" />
                {userLocation.weather.temp}°C
              </span>
            )}
          </button>

          <button
            onClick={onOpenItinerary}
            className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-indigo-400" />
            Trip Planner
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenChat}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-cyan-500/35 transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI Assistant</span>
          </button>

          <button
            onClick={onOpenSettings}
            title="API Keys & Settings"
            className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-all hover:scale-105"
          >
            <Key className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
