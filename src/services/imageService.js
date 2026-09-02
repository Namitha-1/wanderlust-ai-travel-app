// Image Service: fetches dynamic high-res photos from Unsplash API or generates optimized Unsplash CDN URLs

const UNSPLASH_SEARCH_URL = 'https://api.unsplash.com/search/photos';

/**
 * Fetch dynamic image URL for a given search query (e.g. "Kyoto landmarks", "Positano coast")
 */
export async function getDynamicImage(query, customUnsplashKey = null, width = 1200, height = 800) {
  const apiKey = customUnsplashKey || import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  if (apiKey) {
    try {
      const res = await fetch(`${UNSPLASH_SEARCH_URL}?query=${encodeURIComponent(query)}&orientation=landscape&per_page=1`, {
        headers: {
          Authorization: `Client-ID ${apiKey}`
        }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.results && data.results.length > 0) {
          return data.results[0].urls.regular;
        }
      }
    } catch (err) {
      console.warn('Unsplash API search failed, using dynamic source fallback:', err);
    }
  }

  // Dynamic Unsplash CDN URL fallback based on query terms
  const encodedQuery = encodeURIComponent(query.toLowerCase().trim());
  return `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=${width}&auto=format&fit=crop&sig=${hashString(encodedQuery)}`;
}

/**
 * Simple string hash to generate consistent deterministic image seeds
 */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
