import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix Leaflet default marker icons in Vite/React environment
const customDestinationIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-cyan.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const customPlaceIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export default function InteractiveMap({ destination }) {
  if (!destination || !destination.coordinates) return null;

  const center = [destination.coordinates.lat, destination.coordinates.lng];

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={center}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main Destination Marker */}
        <Marker position={center} icon={customDestinationIcon}>
          <Popup>
            <div className="p-1">
              <h4 className="font-bold text-sm text-cyan-300">{destination.name}</h4>
              <p className="text-xs text-slate-300">{destination.country}</p>
            </div>
          </Popup>
        </Marker>

        {/* Famous Places Markers */}
        {destination.famousPlaces && destination.famousPlaces.map((place, idx) => {
          // Offsets for places around center coordinates for demonstration pin mapping
          const placeLat = destination.coordinates.lat + (idx % 2 === 0 ? 0.015 * (idx + 1) : -0.012 * (idx + 1));
          const placeLng = destination.coordinates.lng + (idx % 2 === 0 ? -0.018 * (idx + 1) : 0.014 * (idx + 1));

          return (
            <Marker key={place.id || idx} position={[placeLat, placeLng]} icon={customPlaceIcon}>
              <Popup>
                <div className="p-1 max-w-[200px]">
                  <h4 className="font-bold text-xs text-amber-300">{place.name}</h4>
                  <p className="text-[11px] text-slate-300 line-clamp-2 mt-0.5">{place.description}</p>
                </div>
              </Popup>
            </Marker>
          );
        })}

      </MapContainer>
    </div>
  );
}
