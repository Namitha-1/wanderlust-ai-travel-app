import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Get Gemini API Key from environment variable or custom runtime input
 */
export function getGeminiApiKey(customKey = null) {
  return customKey || import.meta.env.VITE_GEMINI_API_KEY || null;
}

/**
 * Ask Gemini AI Chatbot a conversational question about a destination
 */
export async function askTravelAssistant(question, destinationContext = null, customKey = null) {
  const apiKey = getGeminiApiKey(customKey);

  if (apiKey) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      let systemPrompt = `You are Aura, an expert, enthusiastic, and highly knowledgeable personal travel assistant. 
Answer concisely with warmth, structured bullet points, and practical local advice.`;
      
      if (destinationContext) {
        systemPrompt += ` The user is currently exploring ${destinationContext.name}, ${destinationContext.country}. (Overview: ${destinationContext.overview})`;
      }

      const fullPrompt = `${systemPrompt}\n\nUser Question: ${question}`;
      const result = await model.generateContent(fullPrompt);
      const text = result.response.text();
      return { text, provider: 'Google Gemini AI' };
    } catch (err) {
      console.warn('Gemini API query failed, using AI assistant fallback:', err);
    }
  }

  // Smart client-side travel AI fallback when key is not configured or fails
  return {
    text: generateFallbackChatResponse(question, destinationContext),
    provider: 'TravelAI Assistant (Demo Mode)'
  };
}

/**
 * Generate a structured Day-by-Day itinerary using Gemini AI or structured fallback
 */
export async function generateItinerary({ destination, days, travelStyle, budget, interests }, customKey = null) {
  const apiKey = getGeminiApiKey(customKey);

  if (apiKey) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Generate a detailed ${days}-day travel itinerary for ${destination.name}, ${destination.country}.
Traveler preferences:
- Duration: ${days} days
- Travel Style: ${travelStyle || 'Balanced Explorer'}
- Budget Level: ${budget || 'Moderate'}
- Main Interests: ${interests?.join(', ') || 'Culture, Food, Highlights'}

Return ONLY a valid JSON array matching this exact schema, without markdown code block ticks if possible, or inside a json block:
[
  {
    "day": 1,
    "theme": "Arrival & City Highlights",
    "morning": {
      "title": "Activity Name",
      "description": "Short description of what to see and do.",
      "location": "Specific Spot Name",
      "duration": "2.5 hours",
      "estimatedCost": "$15 - $25",
      "insiderTip": "Helpful local advice."
    },
    "afternoon": {
      "title": "Activity Name",
      "description": "Short description.",
      "location": "Spot Name",
      "duration": "3 hours",
      "estimatedCost": "$20",
      "insiderTip": "Insider tip."
    },
    "evening": {
      "title": "Activity Name",
      "description": "Short description.",
      "location": "Spot Name",
      "duration": "2 hours",
      "estimatedCost": "$30",
      "insiderTip": "Insider tip."
    }
  }
]`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();
      
      // Clean potential markdown wrapping
      const cleaned = text.replace(/```json/gi, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      if (Array.isArray(parsed)) {
        return { plan: parsed, provider: 'Google Gemini AI' };
      }
    } catch (err) {
      console.warn('Gemini Itinerary Generation failed, using structured fallback generator:', err);
    }
  }

  // Structured Day-by-Day fallback generator
  return {
    plan: generateStructuredFallbackItinerary(destination, days, travelStyle, interests),
    provider: 'TravelAI Planner (Demo Mode)'
  };
}

/**
 * Intelligent Fallback Chatbot Engine
 */
function generateFallbackChatResponse(question, dest) {
  const q = question.toLowerCase();
  const name = dest ? dest.name : 'this destination';
  const country = dest ? dest.country : 'the area';

  if (q.includes('long') || q.includes('days') || q.includes('stay')) {
    return `For **${name}**, I recommend staying **${dest?.quickStats?.idealStay || '3 to 5 days'}**. 
This allows you to comfortably explore the major landmarks like ${dest?.famousPlaces?.[0]?.name || 'top attractions'} without feeling rushed!`;
  }

  if (q.includes('when') || q.includes('season') || q.includes('weather') || q.includes('time to visit')) {
    return `The best time to visit **${name}** is during **${dest?.bestTimeToVisit || 'Spring and Autumn'}**. 
During these months, you'll enjoy mild temperatures and fewer peak tourism crowds!`;
  }

  if (q.includes('food') || q.includes('eat') || q.includes('drink') || q.includes('dish')) {
    return `When in **${name}**, make sure to try the local culinary specialties! 
- Explore traditional local markets and eateries.
- Sample regional dishes and street food snacks.
- Always check where locals gather during lunch hour for authentic flavors!`;
  }

  if (q.includes('see') || q.includes('visit') || q.includes('do') || q.includes('place')) {
    const places = dest?.famousPlaces?.map(p => `• **${p.name}**: ${p.description}`).join('\n') || '• Top historic landmarks and scenic nature spots.';
    return `Here are the top places you shouldn't miss in **${name}**:\n\n${places}`;
  }

  return `Visiting **${name}, ${country}** is an incredible experience! 
- **Highlights**: ${dest?.tagline || 'Rich culture, history, and stunning views.'}
- **Currency**: ${dest?.quickStats?.currency || 'Local Currency'}
- **Pro Tip**: ${dest?.localTips?.[0] || 'Plan ahead for popular attraction entries!'}`;
}

/**
 * Intelligent Fallback Day-by-Day Itinerary Engine
 */
function generateStructuredFallbackItinerary(dest, daysCount, style, interests) {
  const numDays = Math.min(Math.max(parseInt(daysCount) || 3, 1), 7);
  const places = dest?.famousPlaces || [];
  const name = dest ? dest.name : 'Destination';

  const dayThemes = [
    'Arrival & Icon Highlights',
    'Cultural Immersion & Hidden Gems',
    'Nature & Scenic Panoramas',
    'Local Markets & Culinary Adventure',
    'Historic Heritage & Museums',
    'Relaxation & Coastal Views',
    'Grand Farewell & Shopping'
  ];

  const plan = [];

  for (let i = 1; i <= numDays; i++) {
    const p1 = places[(i - 1) % places.length] || { name: `${name} Landmarks`, description: `Explore central ${name} historical landmarks.` };
    const p2 = places[i % places.length] || { name: `${name} Cultural Quarter`, description: 'Stroll through traditional streets and craft shops.' };

    plan.push({
      day: i,
      theme: dayThemes[(i - 1) % dayThemes.length],
      morning: {
        title: `Morning Exploration: ${p1.name}`,
        description: p1.description || `Visit ${p1.name} during early hours for optimal lighting and lower crowds.`,
        location: p1.name,
        duration: p1.recommendedDuration || '2.5 hours',
        estimatedCost: dest?.budget === '$$$$' ? '$25 - $40' : '$10 - $20',
        insiderTip: dest?.localTips?.[0] || 'Arrive early to beat morning tour buses.'
      },
      afternoon: {
        title: `Afternoon Walk & Local Lunch`,
        description: `Enjoy an authentic regional lunch at a popular local café near ${p2.name}, followed by guided exploration.`,
        location: `${p2.name} District`,
        duration: '3 hours',
        estimatedCost: dest?.budget === '$$$$' ? '$35 - $60' : '$15 - $30',
        insiderTip: 'Try the house daily lunch special for authentic regional flavors.'
      },
      evening: {
        title: `Evening Sunset & Promenade Stroll`,
        description: `Cap off Day ${i} with sunset viewpoints, ambient outdoor dining, and evening street atmosphere.`,
        location: `${name} Waterfront / City Center`,
        duration: '2.5 hours',
        estimatedCost: '$25 - $50',
        insiderTip: 'Reserve sunset table dining at least one day in advance.'
      }
    });
  }

  return plan;
}
