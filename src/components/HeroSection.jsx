import React, { useState, useRef } from 'react';
import { Search, Play, Pause, Volume2, VolumeX, Sparkles, ChevronDown, Compass, MapPin } from 'lucide-react';

export default function HeroSection({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  categories,
  onExploreClick,
  onOpenChat
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop"
        className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-90 transition-all duration-700"
      >
        <source src="https://cdn.coverr.co/videos/coverr-waves-crashing-on-rocky-shore-5236/1080p.mp4" type="video/mp4" />
        <source src="https://cdn.coverr.co/videos/coverr-japan-bamboo-forest-4737/1080p.mp4" type="video/mp4" />
      </video>

      {/* Aesthetic Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/30 to-slate-950/80" />

      {/* Video Controls Badge */}
      <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-2 rounded-full border border-slate-700/60 shadow-xl">
        <button
          onClick={togglePlay}
          className="p-2 rounded-full hover:bg-slate-800 text-slate-200 hover:text-cyan-400 transition-colors"
          title={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-2 rounded-full hover:bg-slate-800 text-slate-200 hover:text-cyan-400 transition-colors"
          title={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-12 pb-20">
        
        {/* Subtitle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-cyan-950/50 animate-float">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Curated Global Destinations & AI Travel Intelligence</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display text-white leading-tight mb-6 drop-shadow-2xl">
          Where will your <span className="gradient-text">curiosity</span> take you next?
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Explore iconic destinations, monitor real-time weather, discover notable places, and build tailored day-by-day itineraries with AI.
        </p>

        {/* Hero Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="glass-panel p-2.5 rounded-2xl shadow-2xl border border-slate-700/80 flex flex-col sm:flex-row items-center gap-2">
            <div className="relative flex-1 w-full flex items-center">
              <Search className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search destinations (e.g., Kyoto, Amalfi, Paris, Bali...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onExploreClick();
                }}
                className="w-full bg-slate-900/90 text-slate-100 placeholder-slate-400 text-base rounded-xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-800 transition-all"
              />
            </div>
            
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base shadow-lg shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Compass className="w-5 h-5" />
              Explore Now
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                onExploreClick();
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all backdrop-blur-md ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30 border border-cyan-400'
                  : 'bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 border border-slate-800 hover:text-cyan-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 text-sm font-medium border border-slate-700/80 transition-all flex items-center gap-2 backdrop-blur-md hover:border-cyan-500/50"
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            Browse 12+ Destinations
          </button>
          <button
            onClick={onOpenChat}
            className="px-6 py-3 rounded-full bg-indigo-950/70 hover:bg-indigo-900/80 text-indigo-200 text-sm font-medium border border-indigo-500/30 transition-all flex items-center gap-2 backdrop-blur-md hover:border-indigo-400"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            Ask AI Assistant
          </button>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div 
        onClick={onExploreClick}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest font-medium">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4" />
      </div>

    </div>
  );
}
