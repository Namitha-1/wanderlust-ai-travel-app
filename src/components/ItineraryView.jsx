import React, { useState } from 'react';
import { Sun, Sunset, Moon, MapPin, Clock, DollarSign, Lightbulb, Printer, Share2, ArrowLeft, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ItineraryView({ plan, destination, days, providerInfo, onReset }) {
  const [activeDayTab, setActiveDayTab] = useState(1);

  if (!plan || !Array.isArray(plan) || plan.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-400">Unable to load itinerary plan.</p>
        <button onClick={onReset} className="mt-4 px-4 py-2 bg-cyan-600 text-white text-xs rounded-xl">
          Try Again
        </button>
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const selectedDayData = plan.find((d) => d.day === activeDayTab) || plan[0];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Top Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Customize Parameters</span>
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 text-xs font-bold">
              {days}-Day Customized Plan
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
              {providerInfo || 'AI Generated'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
            {destination.name} <span className="gradient-text">Itinerary</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {destination.country} &bull; Handcrafted day-by-day activity itinerary
          </p>
        </div>

        {/* Top Print / Export Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {plan.map((dayItem) => (
          <button
            key={dayItem.day}
            onClick={() => setActiveDayTab(dayItem.day)}
            className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-2 ${
              activeDayTab === dayItem.day
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 border border-cyan-400'
                : 'bg-slate-900/80 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            <span>Day {dayItem.day}</span>
            <span className="text-[10px] font-normal opacity-80 max-w-[100px] truncate">
              {dayItem.theme}
            </span>
          </button>
        ))}
      </div>

      {/* Active Day Detail Timeline View */}
      {selectedDayData && (
        <div className="space-y-6">
          
          {/* Day Theme Title */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold text-cyan-400 tracking-wider">Day {selectedDayData.day} Focus</span>
              <h3 className="text-2xl font-bold font-display text-white">{selectedDayData.theme}</h3>
            </div>
          </div>

          {/* Time Slot Cards: Morning, Afternoon, Evening */}
          <div className="grid grid-cols-1 gap-6">
            
            {/* Morning Slot */}
            {selectedDayData.morning && (
              <TimeSlotCard 
                icon={<Sun className="w-5 h-5 text-amber-400" />}
                periodName="Morning"
                data={selectedDayData.morning}
                accentColor="amber"
              />
            )}

            {/* Afternoon Slot */}
            {selectedDayData.afternoon && (
              <TimeSlotCard 
                icon={<Sunset className="w-5 h-5 text-orange-400" />}
                periodName="Afternoon"
                data={selectedDayData.afternoon}
                accentColor="orange"
              />
            )}

            {/* Evening Slot */}
            {selectedDayData.evening && (
              <TimeSlotCard 
                icon={<Moon className="w-5 h-5 text-indigo-400" />}
                periodName="Evening"
                data={selectedDayData.evening}
                accentColor="indigo"
              />
            )}

          </div>

        </div>
      )}

    </div>
  );
}

function TimeSlotCard({ icon, periodName, data, accentColor }) {
  return (
    <div className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row gap-6">
      
      {/* Time Badge Left */}
      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-start gap-3 w-full md:w-40 shrink-0 border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
            {icon}
          </div>
          <span className="text-sm font-bold text-white uppercase tracking-wider">{periodName}</span>
        </div>

        <div className="flex flex-col gap-1 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            {data.duration || '2 hours'}
          </span>
          <span className="flex items-center gap-1 font-semibold text-emerald-400">
            <DollarSign className="w-3.5 h-3.5" />
            {data.estimatedCost || 'Free'}
          </span>
        </div>
      </div>

      {/* Activity Info Right */}
      <div className="flex-1 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h4 className="text-lg font-bold font-display text-white">{data.title}</h4>
          {data.location && (
            <span className="px-3 py-1 rounded-full bg-slate-950 text-cyan-300 border border-cyan-900 text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3 h-3 text-cyan-400" />
              {data.location}
            </span>
          )}
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {data.description}
        </p>

        {data.insiderTip && (
          <div className="p-3 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span><strong>Insider Tip:</strong> {data.insiderTip}</span>
          </div>
        )}
      </div>

    </div>
  );
}
