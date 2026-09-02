import React from 'react';
import { Star, Clock, Compass, Plus, Check, MapPin, Sparkles } from 'lucide-react';

export default function FamousPlacesSection({ destination, onAddToItinerary }) {
  if (!destination || !destination.famousPlaces || destination.famousPlaces.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Notable Places & Landmarks</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Famous Places in <span className="gradient-text">{destination.name}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Top attractions, historical monuments, and iconic experiences you can't miss.
          </p>
        </div>
      </div>

      {/* Places Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {destination.famousPlaces.map((place) => (
          <div
            key={place.id}
            className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
          >
            
            {/* Top Media & Tags */}
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

                {/* Category & Hours Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-300 text-[11px] font-semibold">
                    {place.category}
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 text-[11px] font-medium flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {place.openingHours}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-300 text-xs font-bold">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{place.rating}</span>
                </div>
              </div>

              {/* Place Info Content */}
              <div className="p-5 space-y-3">
                <h4 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                  {place.name}
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {place.description}
                </p>

                {/* Highlights Tags */}
                {place.highlights && place.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {place.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300 font-medium"
                      >
                        #{h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Card Footer Action Bar */}
            <div className="px-5 py-3.5 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                Est. time: <strong className="text-slate-200">{place.recommendedDuration}</strong>
              </span>

              <button
                onClick={onAddToItinerary}
                className="px-3 py-1.5 rounded-lg bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 font-semibold transition-all flex items-center gap-1 hover:text-white"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Trip</span>
              </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
