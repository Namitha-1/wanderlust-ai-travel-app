import React, { useState, useEffect } from 'react';
import { X, MapPin, Star, Calendar, Clock, DollarSign, CloudSun, Wind, Droplets, Sparkles, Navigation, Compass, Info, CheckCircle2, ChevronRight } from 'lucide-react';
import FamousPlacesSection from './FamousPlacesSection';
import InteractiveMap from './InteractiveMap';
import { getWeatherByCoords } from '../services/weatherService';

export default function DestinationDetailModal({ 
  destination, 
  onClose, 
  onOpenChat, 
  onOpenItinerary,
  userLocation,
  apiKeySettings
}) {
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    if (!destination) return;
    let isMounted = true;
    setLoadingWeather(true);

    getWeatherByCoords(destination.coordinates.lat, destination.coordinates.lng, apiKeySettings?.openWeatherKey)
      .then((data) => {
        if (isMounted) {
          setWeather(data);
          setLoadingWeather(false);
        }
      })
      .catch((err) => {
        console.error('Weather fetch error:', err);
        if (isMounted) setLoadingWeather(false);
      });

    return () => { isMounted = false; };
  }, [destination, apiKeySettings]);

  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header Action Controls */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-3 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 shadow-xl transition-all hover:scale-110"
          title="Close detail page"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          
          {/* Hero Banner Header */}
          <div className="relative h-80 sm:h-96 w-full overflow-hidden">
            <img
              src={destination.heroImage}
              alt={destination.name}
              onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop'; }}
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

            {/* Banner Floating Content */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                  {destination.category}
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold flex items-center gap-1 backdrop-blur-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  {destination.rating} ({destination.reviewsCount} reviews)
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold font-display text-white tracking-tight leading-none mb-2">
                {destination.name}
              </h1>

              <p className="text-lg text-slate-200 font-medium flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>{destination.country} &bull; {destination.region}</span>
              </p>
            </div>
          </div>

          {/* Main Detail Body Content */}
          <div className="p-6 sm:p-8 space-y-10">
            
            {/* Overview & Quick Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left 2 Cols: Description & Local Tips */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-white mb-3">About {destination.name}</h3>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {destination.overview}
                  </p>
                </div>

                {/* Local Tips Grid */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Essential Local Tips
                  </h4>
                  <ul className="space-y-2.5">
                    {destination.localTips.map((tip, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Col: Live Weather & Key Facts Widget */}
              <div className="space-y-6">
                
                {/* Live Weather Card */}
                <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-slate-900 via-slate-900/90 to-cyan-950/30">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CloudSun className="w-5 h-5 text-amber-400" />
                      <span className="text-xs uppercase font-bold text-slate-300 tracking-wider">Live Weather</span>
                    </div>
                    {weather?.source && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-medium">
                        {weather.source}
                      </span>
                    )}
                  </div>

                  {loadingWeather ? (
                    <div className="py-6 text-center text-slate-400 text-xs animate-pulse">
                      Fetching live weather metrics...
                    </div>
                  ) : weather ? (
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-5xl">{weather.icon}</span>
                          <div>
                            <span className="text-4xl font-extrabold text-white">{weather.temp}°C</span>
                            <p className="text-xs text-slate-300 capitalize">{weather.description}</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <Wind className="w-4 h-4 text-cyan-400" />
                          <span>Wind: {weather.windSpeed} km/h</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-blue-400" />
                          <span>Humidity: {weather.humidity}%</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400">Weather service unavailable.</div>
                  )}
                </div>

                {/* Quick Facts Specs */}
                <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 text-xs">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Facts</h4>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Currency</span>
                    <span className="text-white font-semibold">{destination.quickStats.currency}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Language</span>
                    <span className="text-white font-semibold">{destination.quickStats.language}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/80">
                    <span className="text-slate-400">Time Zone</span>
                    <span className="text-white font-semibold">{destination.quickStats.timezone}</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Ideal Stay</span>
                    <span className="text-cyan-300 font-semibold">{destination.quickStats.idealStay}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Famous Places Section (Requirement 3) */}
            <div className="pt-6 border-t border-slate-800">
              <FamousPlacesSection 
                destination={destination}
                onAddToItinerary={() => onOpenItinerary(destination)}
              />
            </div>

            {/* Interactive Map View */}
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-display text-white">Interactive Location Map</h3>
                  <p className="text-xs text-slate-400">Explore points of interest and attractions in {destination.name}</p>
                </div>
              </div>

              <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <InteractiveMap destination={destination} />
              </div>
            </div>

            {/* AI Assistant & Itinerary CTAs */}
            <div className="glass-panel p-8 rounded-3xl bg-gradient-to-r from-indigo-950/80 via-slate-900 to-cyan-950/80 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                  AI Travel Companion
                </span>
                <h3 className="text-2xl font-bold font-display text-white mb-1">
                  Plan your trip to {destination.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                  Chat with our AI assistant for custom answers or generate a visual day-by-day day plan instantly.
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onOpenChat(destination)}
                  className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm border border-slate-700 hover:border-cyan-400 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Ask AI Question
                </button>

                <button
                  onClick={() => onOpenItinerary(destination)}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Build Itinerary</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
