import React from 'react';
import { Compass, Heart, Github, Globe, Sparkles } from 'lucide-react';

export default function Footer({ onOpenChat, onOpenItinerary }) {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-xl font-extrabold font-display text-white tracking-tight">
              Wander<span className="text-cyan-400">lust</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Built for Design Esthetics Front-End Developer Assessment. Designed with React, Tailwind CSS, OpenWeather, Open-Meteo, and Google Gemini AI.
          </p>
        </div>

        {/* Quick Links Center */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-300">
          <button 
            onClick={() => document.getElementById('explorer-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="hover:text-cyan-400 transition-colors"
          >
            Explore Destinations
          </button>
          <button 
            onClick={() => onOpenChat()}
            className="hover:text-cyan-400 transition-colors"
          >
            AI Travel Assistant
          </button>
          <button 
            onClick={() => onOpenItinerary()}
            className="hover:text-cyan-400 transition-colors"
          >
            Day-by-Day Planner
          </button>
        </div>

        {/* Rights Right */}
        <div className="text-xs text-slate-500 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Design Esthetics Project</p>
          <p className="mt-1 text-[11px] text-slate-500">Crafted with precision & visual restraint.</p>
        </div>

      </div>
    </footer>
  );
}
