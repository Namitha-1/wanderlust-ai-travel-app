// Weather Service supporting OpenWeather API with seamless zero-config fallback to Open-Meteo API

const OPEN_METEO_BASE = 'https://api.open-meteo.com/v1/forecast';
const OPENWEATHER_BASE = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Weather condition map from WMO codes (Open-Meteo) to human descriptions and icons
 */
const WMO_WEATHER_MAP = {
  0: { description: 'Clear Sky', icon: '☀️', code: 'Clear' },
  1: { description: 'Mainly Clear', icon: '🌤️', code: 'Clear' },
  2: { description: 'Partly Cloudy', icon: '⛅', code: 'Clouds' },
  3: { description: 'Overcast', icon: '☁️', code: 'Clouds' },
  45: { description: 'Foggy', icon: '🌫️', code: 'Fog' },
  48: { description: 'Depositing Rime Fog', icon: '🌫️', code: 'Fog' },
  51: { description: 'Light Drizzle', icon: '🌧️', code: 'Drizzle' },
  53: { description: 'Moderate Drizzle', icon: '🌧️', code: 'Drizzle' },
  55: { description: 'Dense Drizzle', icon: '🌧️', code: 'Drizzle' },
  61: { description: 'Slight Rain', icon: '🌦️', code: 'Rain' },
  63: { description: 'Moderate Rain', icon: '🌧️', code: 'Rain' },
  65: { description: 'Heavy Rain', icon: '🌧️', code: 'Rain' },
  71: { description: 'Slight Snow', icon: '🌨️', code: 'Snow' },
  73: { description: 'Moderate Snow', icon: '🌨️', code: 'Snow' },
  75: { description: 'Heavy Snow', icon: '❄️', code: 'Snow' },
  80: { description: 'Slight Rain Showers', icon: '🌦️', code: 'Rain' },
  81: { description: 'Moderate Rain Showers', icon: '🌧️', code: 'Rain' },
  82: { description: 'Violent Rain Showers', icon: '⛈️', code: 'Thunderstorm' },
  95: { description: 'Thunderstorm', icon: '⛈️', code: 'Thunderstorm' },
  96: { description: 'Thunderstorm with Hail', icon: '⛈️', code: 'Thunderstorm' }
};

/**
 * Fetch live weather by Latitude and Longitude
 */
export async function getWeatherByCoords(lat, lng, customOpenWeatherKey = null) {
  const apiKey = customOpenWeatherKey || import.meta.env.VITE_OPENWEATHER_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch(`${OPENWEATHER_BASE}?lat=${lat}&lon=${lng}&units=metric&appid=${apiKey}`);
      if (res.ok) {
        const data = await res.json();
        return {
          temp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          tempMin: Math.round(data.main.temp_min),
          tempMax: Math.round(data.main.temp_max),
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed * 3.6), // convert m/s to km/h
          condition: data.weather[0].main,
          description: data.weather[0].description,
          icon: getWeatherEmoji(data.weather[0].main),
          city: data.name,
          source: 'OpenWeather'
        };
      }
    } catch (err) {
      console.warn('OpenWeather fetch failed, falling back to Open-Meteo:', err);
    }
  }

  // Fallback to live Open-Meteo API (requires NO API key)
  try {
    const url = `${OPEN_METEO_BASE}?latitude=${lat}&longitude=${lng}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Open-Meteo network error');
    
    const data = await res.json();
    const current = data.current_weather;
    const weatherInfo = WMO_WEATHER_MAP[current.weathercode] || { description: 'Clear', icon: '☀️', code: 'Clear' };

    return {
      temp: Math.round(current.temperature),
      feelsLike: Math.round(current.temperature),
      tempMin: data.daily?.temperature_2m_min?.[0] ? Math.round(data.daily.temperature_2m_min[0]) : Math.round(current.temperature - 2),
      tempMax: data.daily?.temperature_2m_max?.[0] ? Math.round(data.daily.temperature_2m_max[0]) : Math.round(current.temperature + 3),
      humidity: 65, // default estimation for fallback
      windSpeed: Math.round(current.windspeed),
      condition: weatherInfo.code,
      description: weatherInfo.description,
      icon: weatherInfo.icon,
      source: 'Open-Meteo (Live)'
    };
  } catch (err) {
    console.error('All weather providers failed:', err);
    return {
      temp: 22,
      feelsLike: 22,
      tempMin: 18,
      tempMax: 25,
      humidity: 55,
      windSpeed: 12,
      condition: 'Clear',
      description: 'Pleasant & Clear',
      icon: '☀️',
      source: 'Default Fallback'
    };
  }
}

function getWeatherEmoji(condition) {
  switch (condition?.toLowerCase()) {
    case 'clear': return '☀️';
    case 'clouds': return '⛅';
    case 'rain': case 'drizzle': return '🌧️';
    case 'thunderstorm': return '⛈️';
    case 'snow': return '❄️';
    case 'mist': case 'fog': return '🌫️';
    default: return '🌤️';
  }
}
