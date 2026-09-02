import React, { useState } from 'react';
import { X, Calendar, Sparkles, Compass, DollarSign, Clock, Check, RefreshCw } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';
import ItineraryView from './ItineraryView';

export default function ItineraryPlanner({ 
  isOpen, 
  onClose, 
  destinations, 
  initialDestination = null,
  apiKeySettings
}) {
  const [selectedDestId, setSelectedDestId] = useState(initialDestination?.id || destinations[0]?.id || '');
  const [days, setDays] = useState(3);
  const [travelStyle, setStyle] = useState('Balanced Explorer');
  const [budget, setBudget] = useState('Moderate');
  const [selectedInterests, setSelectedInterests] = useState(['Culture', 'Food', 'Highlights']);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [providerInfo, setProviderInfo] = useState(null);

  if (!isOpen) return null;

  const activeDest = destinations.find(d => d.id === selectedDestId) || destinations[0];

  const travelStyles = [
    'Balanced Explorer',
    'Cultural Heritage',
    'Relaxed & Leisure',
    'Food & Culinary',
    'Adventure & Outdoor'
  ];

  const budgetLevels = ['Budget ($)', 'Moderate ($$)', 'Luxury ($$$)'];

  const availableInterests = ['Culture', 'Food', 'Nature', 'Landmarks', 'Photography', 'Nightlife'];

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      const res = await generateItinerary(
        {
          destination: activeDest,
          days,
          travelStyle,
          budget,
          interests: selectedInterests
        },
        apiKeySettings?.geminiKey
      );
      setGeneratedPlan(res.plan);
      setProviderInfo(res.provider);
    } catch (err) {
      console.error('Itinerary generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-950/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold font-display text-white">AI Itinerary Architect</h2>
              <p className="text-xs text-slate-400">Generate a visual day-by-day trip schedule</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
          
          {generatedPlan ? (
            <ItineraryView 
              plan={generatedPlan}
              destination={activeDest}
              days={days}
              providerInfo={providerInfo}
              onReset={() => setGeneratedPlan(null)}
            />
          ) : (
            <div className="space-y-8 max-w-2xl mx-auto py-2">
              
              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select Destination
                </label>
                <select
                  value={selectedDestId}
                  onChange={(e) => setSelectedDestId(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-slate-100 text-sm font-semibold rounded-2xl px-4 py-3.5 outline-none focus:border-cyan-500 transition-all"
                >
                  {destinations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}, {d.country} ({d.category})
                    </option>
                  ))}
                </select>
              </div>

              {/* Trip Duration Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Trip Duration
                  </label>
                  <span className="px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 font-bold text-xs">
                    {days} {days === 1 ? 'Day' : 'Days'}
                  </span>
                </div>
                
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-medium">
                  <span>1 Day Quick Trip</span>
                  <span>4 Days Balanced</span>
                  <span>7 Days Full Tour</span>
                </div>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Travel Vibe & Style
                </label>
                <div className="flex flex-wrap gap-2">
                  {travelStyles.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setStyle(style)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        travelStyle === style
                          ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 border border-cyan-400'
                          : 'bg-slate-950 text-slate-300 hover:bg-slate-800 border border-slate-800'
                      }`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Level */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Budget Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {budgetLevels.map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setBudget(lvl)}
                      className={`py-3 rounded-xl text-xs font-semibold transition-all border ${
                        budget === lvl
                          ? 'bg-indigo-600/30 text-indigo-300 border-indigo-500 shadow-md'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Interests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Key Interests
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableInterests.map((interest) => {
                    const isSelected = selectedInterests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium flex items-center gap-1.5 transition-all ${
                          isSelected
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                            : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-slate-300'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-400" />}
                        <span>{interest}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Generate CTA Button */}
              <div className="pt-4">
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-base shadow-xl shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Architecting Day-by-Day Itinerary...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 text-amber-300" />
                      <span>Generate {days}-Day Itinerary for {activeDest.name}</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
