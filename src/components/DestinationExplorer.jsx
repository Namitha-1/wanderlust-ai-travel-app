import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, Calendar, ArrowUpRight, Sparkles, CloudSun, DollarSign } from 'lucide-react';
import { calculateDistanceKm } from '../services/locationService';

export default function DestinationExplorer({ 
  destinations, 
  onSelectDestination,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  regions,
  userLocation,
  weatherCache
}) {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [sortBy, setSortBy] = useState('popularity');

  // Filter & Sort Logic
  const filtered = destinations.filter((dest) => {
    const matchesSearch = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;
    const matchesRegion = selectedRegion === 'All Regions' || dest.region === selectedRegion;

    return matchesSearch && matchesCategory && matchesRegion;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'distance' && userLocation?.lat) {
      const distA = calculateDistanceKm(userLocation.lat, userLocation.lng, a.coordinates.lat, a.coordinates.lng);
      const distB = calculateDistanceKm(userLocation.lat, userLocation.lng, b.coordinates.lat, b.coordinates.lng);
      return distA - distB;
    }
    return b.reviewsCount - a.reviewsCount; // Default: Popularity
  });

  return (
    <section id="explorer-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Global Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Explore <span className="gradient-text">World Wonders</span>
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-xl">
            Filter by continent, climate, or travel vibe. Click any location to discover live weather, famous places, and customized AI trip itineraries.
          </p>
        </div>

        {/* Results Counter & Sort Controls */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 font-medium">
            Showing <strong className="text-white">{sorted.length}</strong> of {destinations.length} destinations
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium rounded-xl px-3.5 py-2.5 outline-none focus:border-cyan-500"
          >
            <option value="popularity">Sort by: Popularity</option>
            <option value="rating">Sort by: Highest Rated</option>
            <option value="name">Sort by: Alphabetical</option>
            {userLocation?.lat && <option value="distance">Sort by: Nearest Distance</option>}
          </select>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-panel p-4 rounded-2xl mb-10 flex flex-col lg:flex-row items-center justify-between gap-4 border border-slate-800">
        
        {/* Search Bar */}
        <div className="relative w-full lg:w-96 flex items-center">
          <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            placeholder="Search city, country, or vibe..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 text-slate-100 text-sm rounded-xl pl-10 pr-4 py-2.5 outline-none border border-slate-800 focus:border-cyan-500 transition-all placeholder-slate-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/25'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Region Dropdown */}
        <div className="w-full sm:w-auto shrink-0 flex items-center gap-2">
          <Filter className="w-4 h-4 text-slate-400" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="bg-slate-950 border border-slate-800 text-slate-300 text-xs font-medium rounded-xl px-3.5 py-2.5 outline-none focus:border-cyan-500"
          >
            {regions.map((reg) => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Empty Search Results */}
      {sorted.length === 0 && (
        <div className="glass-panel p-12 rounded-3xl text-center max-w-lg mx-auto my-12 border border-slate-800">
          <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4 text-slate-500">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Destinations Found</h3>
          <p className="text-sm text-slate-400 mb-6">
            We couldn't find any destinations matching "{searchQuery}". Try clearing search filters or picking another category.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedRegion('All Regions'); }}
            className="px-6 py-2.5 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-all shadow-lg"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sorted.map((dest) => {
          const liveWeather = weatherCache?.[dest.id];
          const distKm = userLocation?.lat 
            ? calculateDistanceKm(userLocation.lat, userLocation.lng, dest.coordinates.lat, dest.coordinates.lng)
            : null;

          return (
            <div
              key={dest.id}
              onClick={() => onSelectDestination(dest)}
              className="glass-card rounded-3xl overflow-hidden cursor-pointer group flex flex-col h-full border border-slate-800/80 hover:border-cyan-500/40"
            >
              
              {/* Image & Badges Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dest.heroImage}
                  alt={dest.name}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop'; }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-cyan-300 text-xs font-semibold shadow-md">
                    {dest.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs font-bold shadow-md">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{dest.rating}</span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      <span>{dest.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {dest.country} ({dest.region})
                    </p>
                  </div>

                  {liveWeather && (
                    <div className="px-2.5 py-1 rounded-lg bg-cyan-950/90 border border-cyan-800/80 text-cyan-200 text-xs font-semibold flex items-center gap-1 backdrop-blur-md">
                      <span>{liveWeather.icon}</span>
                      <span>{liveWeather.temp}°C</span>
                    </div>
                  )}
                </div>

              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400 italic mb-4 line-clamp-2">
                    "{dest.tagline}"
                  </p>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                    {dest.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="truncate max-w-[120px]" title={dest.bestTimeToVisit}>{dest.bestTimeToVisit}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-900 text-amber-300 font-bold border border-slate-800">
                      {dest.budget}
                    </span>

                    {distKm && (
                      <span className="text-[11px] text-cyan-400 font-semibold">
                        {distKm} km
                      </span>
                    )}
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
