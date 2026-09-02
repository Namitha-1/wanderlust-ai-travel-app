import React, { useState } from 'react';
import { MapPin, Navigation, CloudSun, AlertCircle, Search, RefreshCw, Compass } from 'lucide-react';
import { getCurrentLocation, reverseGeocode, calculateDistanceKm } from '../services/locationService';
import { getWeatherByCoords } from '../services/weatherService';

export default function LocationBanner({ 
  userLocation, 
  setUserLocation, 
  destinations, 
  onSelectDestination 
}) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [manualCity, setManualCity] = useState('');
  const [showManualInput, setShowManualInput] = useState(false);

  const handleDetectLocation = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const coords = await getCurrentLocation();
      const locationInfo = await reverseGeocode(coords.lat, coords.lng);
      const weather = await getWeatherByCoords(coords.lat, coords.lng);

      setUserLocation({
        lat: coords.lat,
        lng: coords.lng,
        displayName: locationInfo.displayName,
        city: locationInfo.city,
        country: locationInfo.country,
        weather
      });
      setShowManualInput(false);
    } catch (err) {
      console.warn('Location detection failed:', err);
      setErrorMsg(err.message || 'Could not detect location. You can choose a location manually below.');
      setShowManualInput(true);
    } finally {
      setLoading(false);
    }
  };

  const handleManualSearch = async (e) => {
    e.preventDefault();
    if (!manualCity.trim()) return;

    setLoading(true);
    setErrorMsg(null);
    try {
      // Use OpenStreetMap geocoding for manual city search
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(manualCity)}&limit=1`, {
        headers: { 'User-Agent': 'TravelApp-DesignEsthetics/1.0' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lng = parseFloat(data[0].lon);
          const displayName = data[0].display_name.split(',')[0] + ', ' + (data[0].display_name.split(',').slice(-1)[0] || '');
          const weather = await getWeatherByCoords(lat, lng);

          setUserLocation({
            lat,
            lng,
            displayName,
            city: data[0].display_name.split(',')[0],
            country: '',
            weather
          });
          setManualCity('');
          setShowManualInput(false);
          return;
        }
      }
      throw new Error(`Could not find coordinates for "${manualCity}". Please try another city.`);
    } catch (err) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Find nearest destination from user's current location
  let nearestDest = null;
  if (userLocation?.lat && userLocation?.lng && destinations?.length > 0) {
    let minDistance = Infinity;
    destinations.forEach((dest) => {
      const dist = calculateDistanceKm(userLocation.lat, userLocation.lng, dest.coordinates.lat, dest.coordinates.lng);
      if (dist < minDistance) {
        minDistance = dist;
        nearestDest = { ...dest, distanceKm: dist };
      }
    });
  }

  return (
    <div className="w-full bg-slate-900/90 border-y border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Location Status */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-cyan-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">Location Awareness</span>
              {userLocation?.weather?.source && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                  {userLocation.weather.source}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              {userLocation ? (
                <>
                  <span>{userLocation.displayName}</span>
                  {userLocation.weather && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm font-semibold">
                      <span>{userLocation.weather.icon}</span>
                      <span>{userLocation.weather.temp}°C</span>
                      <span className="text-xs text-slate-400 font-normal">({userLocation.weather.description})</span>
                    </span>
                  )}
                </>
              ) : (
                <span className="text-slate-300">Location not set. Share your location or choose a city.</span>
              )}
            </h3>

            {errorMsg && (
              <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errorMsg}
              </p>
            )}
          </div>
        </div>

        {/* Right Side: Geolocation / Manual City Search Actions */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
          
          {nearestDest && (
            <button
              onClick={() => onSelectDestination(nearestDest)}
              className="px-3.5 py-2 rounded-xl bg-slate-800/90 hover:bg-slate-700/80 border border-slate-700 text-xs text-cyan-300 font-medium flex items-center gap-2 transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Nearest: {nearestDest.name} ({nearestDest.distanceKm} km away)</span>
            </button>
          )}

          {showManualInput ? (
            <form onSubmit={handleManualSearch} className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Enter city (e.g. Tokyo, London)..."
                value={manualCity}
                onChange={(e) => setManualCity(e.target.value)}
                className="bg-slate-950 text-slate-100 text-sm rounded-xl px-3.5 py-2 outline-none border border-slate-700 focus:border-cyan-500 w-48 sm:w-56"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold transition-all"
              >
                Set
              </button>
              <button
                type="button"
                onClick={() => setShowManualInput(false)}
                className="px-3 py-2 text-xs text-slate-400 hover:text-slate-200"
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <button
                onClick={handleDetectLocation}
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-500/20 transition-all flex items-center gap-2 disabled:opacity-50"
              >
                {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Navigation className="w-4 h-4" />}
                <span>{userLocation ? 'Update My Location' : 'Use My Geolocation'}</span>
              </button>

              <button
                onClick={() => setShowManualInput(true)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-medium border border-slate-700 transition-all flex items-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Search City</span>
              </button>
            </>
          )}

        </div>

      </div>
    </div>
  );
}
