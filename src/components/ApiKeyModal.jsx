import React, { useState } from 'react';
import { X, Key, Check, Info, ShieldCheck, Sparkles, CloudSun, Image } from 'lucide-react';

export default function ApiKeyModal({ isOpen, onClose, apiKeySettings, onSaveSettings }) {
  const [openWeatherKey, setOpenWeatherKey] = useState(apiKeySettings?.openWeatherKey || '');
  const [geminiKey, setGeminiKey] = useState(apiKeySettings?.geminiKey || '');
  const [unsplashKey, setUnsplashKey] = useState(apiKeySettings?.unsplashKey || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveSettings({
      openWeatherKey: openWeatherKey.trim(),
      geminiKey: geminiKey.trim(),
      unsplashKey: unsplashKey.trim()
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
      
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-white">API Key Configuration</h3>
              <p className="text-xs text-slate-400">Configure custom keys or use live defaults</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2 mb-6">
          <div className="flex items-center gap-2 font-semibold text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero-Config Out-of-the-Box Ready</span>
          </div>
          <p className="text-slate-400 leading-relaxed">
            The app connects automatically to live Open-Meteo weather and built-in AI travel fallback engines. If you have your own API keys, enter them below for direct provider features!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* OpenWeather Key */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
              <CloudSun className="w-4 h-4 text-amber-400" />
              OpenWeather API Key
            </label>
            <input
              type="password"
              placeholder="Enter OpenWeather API Key..."
              value={openWeatherKey}
              onChange={(e) => setOpenWeatherKey(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none border border-slate-800 focus:border-cyan-500 transition-all font-mono"
            />
          </div>

          {/* Gemini Key */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              Google Gemini API Key
            </label>
            <input
              type="password"
              placeholder="Enter Google Gemini API Key..."
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none border border-slate-800 focus:border-indigo-500 transition-all font-mono"
            />
          </div>

          {/* Unsplash Key */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-2">
              <Image className="w-4 h-4 text-teal-400" />
              Unsplash Access Key
            </label>
            <input
              type="password"
              placeholder="Enter Unsplash Access Key..."
              value={unsplashKey}
              onChange={(e) => setUnsplashKey(e.target.value)}
              className="w-full bg-slate-950 text-slate-100 text-xs rounded-xl px-4 py-3 outline-none border border-slate-800 focus:border-teal-500 transition-all font-mono"
            />
          </div>

          {/* Save Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>Settings Saved!</span>
                </>
              ) : (
                <span>Save Key Settings</span>
              )}
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}
