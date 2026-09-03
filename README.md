# Wanderlust - Design-Led AI Travel & Destination Explorer

A modern, highly-aesthetic React web application built for the **Design Esthetics** Front-End Developer Assessment. The application helps users explore global destinations, view real-time weather, discover famous places with rich visual presentation, utilize location awareness, chat with an AI travel assistant (powered by Google Gemini API), and generate visual day-by-day trip itineraries.

🔗 **Live Application**: [https://wanderlust-ai-travel-app.netlify.app](https://wanderlust-ai-travel-app.netlify.app)  
📁 **GitHub Repository**: [https://github.com/Namitha-1/wanderlust-ai-travel-app](https://github.com/Namitha-1/wanderlust-ai-travel-app)

---

## 🌟 Features Completed

| # | Requirement | Implementation & Highlights |
|---|---|---|
| 01 | **Landing Experience** | Full-screen looping video hero experience with overlay typography, play/pause & mute controls, dynamic search, category pills, and scroll animation. |
| 02 | **Destination Explorer** | Interactive destination browser with live search, category filtering (*Tropical, Historical, Mountain, Modern Cities, Culture & Nature*), region filtering, sorting (*Popularity, Rating, Name, Distance*), and dedicated destination detail pages. |
| 03 | **Famous Places** | Every destination showcases its top landmarks and notable attractions as rich visual cards with high-res photos, category tags, rating stars, opening hours, descriptions, highlights, and an "Add to Itinerary" trigger. |
| 04 | **Location Awareness** | HTML5 Geolocation integration requesting user location, displaying current city weather, calculating distance in kilometers (Haversine formula) to each destination, with fallback city search for users who deny permission. |
| 05 | **Real-Time Weather** | Real-time weather integration with OpenWeather API support and automatic zero-config fallback to Open-Meteo's live public weather API (temperature, feels like, min/max, wind speed, humidity, and condition icons). |
| 06 | **Dynamic Images** | Dynamic image loader fetching high-resolution photography via Unsplash API with curated fallback URLs for all destinations and famous places. |
| 07 | **AI Chatbot** | Conversational travel assistant ("Aura") powered by Google Gemini API (`@google/generative-ai`) for real-time travel advice (stay length, local food, best season, hidden gems) with context awareness for the active destination. |
| 08 | **Visual Itinerary Planner** | Interactive trip architect generating a **structured visual day-by-day schedule** with Morning (🌅), Afternoon (☀️), and Evening (🌙) activity cards, cost estimates, duration, insider tips, and print/PDF export features. |

---

## 🛠️ Technology Stack & Architecture

- **Core Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Glassmorphism Design System (`index.css`)
- **Icons & Motion**: Lucide React + CSS Micro-animations
- **Interactive Maps**: Leaflet + React-Leaflet (OpenStreetMap)
- **AI Integration**: `@google/generative-ai` (Google Gemini API 1.5 Flash) with client-side fallback
- **Weather Services**: OpenWeather API + Open-Meteo API (Live Public Endpoint)
- **Location Services**: Browser Geolocation API + OpenStreetMap Nominatim Reverse Geocoding

---

## 🚀 Quick Start & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/travel-app-designesthetics.git
cd travel-app-designesthetics
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Variables (Optional)
Copy `.env.example` to `.env` if you want to provide pre-configured API keys:
```bash
cp .env.example .env
```

`.env` options:
```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```
> **Note**: API keys can also be configured at runtime inside the app via the Key icon in the navigation bar! If no keys are provided, the app continues to operate using live Open-Meteo weather data and smart client-side travel AI fallbacks.

### 4. Launch Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
```

---

## 🎨 Design Decisions & UX Rationales

1. **Restraint & Visual Hierarchy**: Used dark mode backgrounds (`#020617` and `#0f172a`) paired with subtle cyan and indigo glassmorphic overlays (`backdrop-filter: blur`) to deliver a modern visual experience without overwhelming the content.
2. **Graceful Error Recovery**: Every feature (weather, geolocation, AI generation) includes dedicated loading states, error fallback UI cards, and zero-config fallbacks so the application remains useful even under poor network conditions or missing API credentials.
3. **Structured Itinerary vs Chat Text**: Instead of rendering raw markdown text inside a chat bubble for trip itineraries, the Itinerary Planner parses structured data and renders day-by-day timeline cards with morning, afternoon, and evening slots for readability.
4. **Accessibility & Usability**: Responsive grid layouts for phone (375px), tablet (768px), and desktop (1440px), semantic HTML5 elements, readable contrast ratios, and clear action button focus rings.

---

## 📜 Assessment Submission Checklist

- [x] **Live Application**: Ready to deploy on Vercel / Netlify
- [x] **Public GitHub Repository**: Clean codebase with zero committed secret keys
- [x] **README File**: Complete with overview, setup instructions, and feature details
- [x] **Video Demonstration**: 2-minute screen recording with camera turned on
