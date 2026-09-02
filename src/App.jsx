import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LocationBanner from './components/LocationBanner';
import DestinationExplorer from './components/DestinationExplorer';
import DestinationDetailModal from './components/DestinationDetailModal';
import AiChatbotDrawer from './components/AiChatbotDrawer';
import ItineraryPlanner from './components/ItineraryPlanner';
import ApiKeyModal from './components/ApiKeyModal';
import Footer from './components/Footer';

import { DESTINATIONS, CATEGORIES, REGIONS } from './data/destinations';
import { getWeatherByCoords } from './services/weatherService';

export default function App() {
  const [activeTab, setActiveTab] = useState('explorer');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Geolocation & User Weather
  const [userLocation, setUserLocation] = useState(null);
  
  // Destination Live Weather Cache
  const [weatherCache, setWeatherCache] = useState({});

  // Modals & Drawers
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // API Key Settings
  const [apiKeySettings, setApiKeySettings] = useState(() => {
    try {
      const saved = localStorage.getItem('travel_app_keys');
      return saved ? JSON.parse(saved) : { openWeatherKey: '', geminiKey: '', unsplashKey: '' };
    } catch (e) {
      return { openWeatherKey: '', geminiKey: '', unsplashKey: '' };
    }
  });

  const handleSaveSettings = (newKeys) => {
    setApiKeySettings(newKeys);
    try {
      localStorage.setItem('travel_app_keys', JSON.stringify(newKeys));
    } catch (e) {
      console.warn('Could not save keys to localStorage:', e);
    }
  };

  // Pre-fetch live weather for initial top destinations
  useEffect(() => {
    let isMounted = true;

    async function fetchInitialWeather() {
      const initialDest = DESTINATIONS.slice(0, 6);
      const newCache = {};

      for (const dest of initialDest) {
        try {
          const w = await getWeatherByCoords(dest.coordinates.lat, dest.coordinates.lng, apiKeySettings.openWeatherKey);
          newCache[dest.id] = w;
        } catch (e) {
          console.warn(`Weather pre-fetch failed for ${dest.name}:`, e);
        }
      }

      if (isMounted) {
        setWeatherCache(prev => ({ ...prev, ...newCache }));
      }
    }

    fetchInitialWeather();

    return () => { isMounted = false; };
  }, [apiKeySettings.openWeatherKey]);

  const handleOpenChatForDestination = (dest = null) => {
    if (dest) setSelectedDestination(dest);
    setIsChatOpen(true);
  };

  const handleOpenItineraryForDestination = (dest = null) => {
    if (dest) setSelectedDestination(dest);
    setIsItineraryOpen(true);
  };

  const scrollToExplorer = () => {
    const el = document.getElementById('explorer-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Glassmorphic Navbar */}
      <Navbar
        userLocation={userLocation}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenLocation={() => {
          const bannerEl = document.getElementById('location-banner');
          if (bannerEl) bannerEl.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenChat={() => setIsChatOpen(true)}
        onOpenItinerary={() => setIsItineraryOpen(true)}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Hero Video Landing Experience */}
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
        onExploreClick={scrollToExplorer}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Location Awareness Banner */}
      <div id="location-banner">
        <LocationBanner
          userLocation={userLocation}
          setUserLocation={setUserLocation}
          destinations={DESTINATIONS}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
        />
      </div>

      {/* Destination Explorer & Famous Places Grid */}
      <main className="flex-1">
        <DestinationExplorer
          destinations={DESTINATIONS}
          onSelectDestination={(dest) => setSelectedDestination(dest)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={CATEGORIES}
          regions={REGIONS}
          userLocation={userLocation}
          weatherCache={weatherCache}
        />
      </main>

      {/* Destination Detail View Modal */}
      {selectedDestination && (
        <DestinationDetailModal
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
          onOpenChat={(dest) => handleOpenChatForDestination(dest)}
          onOpenItinerary={(dest) => handleOpenItineraryForDestination(dest)}
          userLocation={userLocation}
          apiKeySettings={apiKeySettings}
        />
      )}

      {/* AI Chatbot Drawer */}
      <AiChatbotDrawer
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        activeDestination={selectedDestination}
        apiKeySettings={apiKeySettings}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Itinerary Planner Modal */}
      <ItineraryPlanner
        isOpen={isItineraryOpen}
        onClose={() => setIsItineraryOpen(false)}
        destinations={DESTINATIONS}
        initialDestination={selectedDestination}
        apiKeySettings={apiKeySettings}
      />

      {/* API Key Modal */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        apiKeySettings={apiKeySettings}
        onSaveSettings={handleSaveSettings}
      />

      {/* Footer */}
      <Footer
        onOpenChat={() => setIsChatOpen(true)}
        onOpenItinerary={() => setIsItineraryOpen(true)}
      />

    </div>
  );
}
