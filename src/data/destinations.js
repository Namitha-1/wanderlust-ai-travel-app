export const DESTINATIONS = [
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    tagline: 'The Cultural Heart of Japan & Ancient Shrines',
    category: 'Culture & Nature',
    region: 'Asia',
    coordinates: { lat: 35.0116, lng: 135.7681 },
    rating: 4.9,
    reviewsCount: 3420,
    budget: '$$$',
    bestTimeToVisit: 'March - May (Cherry Blossom) & October - November (Autumn Colors)',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-japan-bamboo-forest-4737/1080p.mp4',
    overview: 'Kyoto was Japan’s imperial capital for over a millennium. Famous for thousands of classical Buddhist temples, gardens, imperial palaces, Shinto shrines, and traditional wooden houses. It remains the spiritual heart of Japan.',
    quickStats: {
      currency: 'Japanese Yen (JPY)',
      language: 'Japanese',
      timezone: 'GMT+9 (JST)',
      idealStay: '3 - 5 Days'
    },
    famousPlaces: [
      {
        id: 'fushimi-inari',
        name: 'Fushimi Inari Taisha Shrine',
        category: 'Landmark & Shrine',
        image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '24 Hours Open',
        description: 'Iconic Shinto shrine famous for its thousands of vibrant vermilion torii gates winding up Mt. Inari.',
        highlights: ['10,000+ Torii Gates', 'Mountain Summit Hike', 'Fox (Kitsune) Statues'],
        recommendedDuration: '2 - 3 hours'
      },
      {
        id: 'arashiyama-bamboo',
        name: 'Arashiyama Bamboo Grove',
        category: 'Nature & Scenery',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
        rating: 4.8,
        openingHours: '24 Hours Open',
        description: 'A soaring natural corridor of emerald bamboo stalks that rustle gently in the wind, creating an ethereal atmosphere.',
        highlights: ['Bamboo Stalk Canopy', 'Tenryu-ji Temple Nearby', 'Togetsukyo Bridge'],
        recommendedDuration: '1.5 - 2 hours'
      },
      {
        id: 'kinkaku-ji',
        name: 'Kinkaku-ji (Golden Pavilion)',
        category: 'Temple & Architecture',
        image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '9:00 AM - 5:00 PM',
        description: 'Zen Buddhist temple whose top two floors are completely covered in pure gold leaf, reflecting in a serene mirror pond.',
        highlights: ['Gold Leaf Facade', 'Zen Mirror Pond', 'Immaculate Japanese Garden'],
        recommendedDuration: '1 - 1.5 hours'
      },
      {
        id: 'gion-district',
        name: 'Gion Historic District',
        category: 'Culture & Heritage',
        image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop',
        rating: 4.7,
        openingHours: 'Evening recommended',
        description: 'Kyoto’s famous Geisha district, lined with preserved wooden machiya townhouses and traditional teahouses.',
        highlights: ['Machiya Architecture', 'Traditional Teahouses', 'Shirakawa Canal Walk'],
        recommendedDuration: '2 hours'
      }
    ],
    localTips: [
      'Get an ICOCA or Suica transit card for effortless bus and subway travel.',
      'Visit Fushimi Inari at sunrise to avoid peak crowds.',
      'Reserve traditional Kaiseki dining in advance.',
      'Be respectful when walking in Gion; do not take photography of Geishas without permission.'
    ]
  },
  {
    id: 'amalfi-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    tagline: 'Dramatic Cliffside Villages & Turquoise Mediterranean Waters',
    category: 'Tropical',
    region: 'Europe',
    coordinates: { lat: 40.6340, lng: 14.6027 },
    rating: 4.95,
    reviewsCount: 2890,
    budget: '$$$$',
    bestTimeToVisit: 'May - June & September - October',
    heroImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-waves-crashing-on-rocky-shore-5236/1080p.mp4',
    overview: 'A breathtaking 50-kilometer stretch of coastline along the southern edge of Italy’s Sorrento Peninsula in the Campania region. Sheer cliffs and pastel-colored villages drop dramatically into the Tyrrhenian Sea.',
    quickStats: {
      currency: 'Euro (EUR)',
      language: 'Italian',
      timezone: 'GMT+1 (CET)',
      idealStay: '4 - 6 Days'
    },
    famousPlaces: [
      {
        id: 'positano',
        name: 'Positano Village',
        category: 'Coastal Town',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: 'All day',
        description: 'Cascading pastel houses stacked on steep cliffs overlooking Spiaggia Grande beach.',
        highlights: ['Spiaggia Grande Beach', 'Cliffside Dining', 'Limoncello Tastings'],
        recommendedDuration: 'Full Day'
      },
      {
        id: 'path-of-gods',
        name: 'Path of the Gods (Sentiero degli Dei)',
        category: 'Hiking & Adventure',
        image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: 'Daylight hours',
        description: 'Sensational panoramic hiking trail connecting Bomerano to Nocelle with views over the Mediterranean.',
        highlights: ['360° Coastline Views', 'Historic Ruins', 'Lemon Groves'],
        recommendedDuration: '3 - 4 hours'
      },
      {
        id: 'ravello-gardens',
        name: 'Villa Cimbrone & Ravello',
        category: 'Gardens & Estates',
        image: 'https://images.unsplash.com/photo-1555992336-fb0d29498b13?q=80&w=1000&auto=format&fit=crop',
        rating: 4.85,
        openingHours: '9:00 AM - Sunset',
        description: 'Perched high in the clouds of Ravello, offering the famous Terrace of Infinity dotted with marble busts.',
        highlights: ['Terrace of Infinity', 'Lush Botanical Gardens', 'Classical Music Festivals'],
        recommendedDuration: '2 - 3 hours'
      }
    ],
    localTips: [
      'Take ferry boats between towns instead of crowded buses along windy cliff roads.',
      'Pack sturdy walking shoes—the villages involve lots of stairs!',
      'Sip fresh Granita di Limone made from local Amalfi lemons.'
    ]
  },
  {
    id: 'paris-france',
    name: 'Paris',
    country: 'France',
    tagline: 'The City of Light, Art, Gastronomy & Fashion',
    category: 'Historical',
    region: 'Europe',
    coordinates: { lat: 48.8566, lng: 2.3522 },
    rating: 4.85,
    reviewsCount: 5120,
    budget: '$$$',
    bestTimeToVisit: 'April - May & September - October',
    heroImage: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-the-eiffel-tower-in-paris-5353/1080p.mp4',
    overview: 'Paris, France’s capital, is a major European city and a global center for art, fashion, gastronomy, and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.',
    quickStats: {
      currency: 'Euro (EUR)',
      language: 'French',
      timezone: 'GMT+1 (CET)',
      idealStay: '4 - 7 Days'
    },
    famousPlaces: [
      {
        id: 'eiffel-tower',
        name: 'Eiffel Tower & Champ de Mars',
        category: 'Landmark',
        image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '9:30 AM - 10:45 PM',
        description: 'Wrought-iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.',
        highlights: ['Nightly Sparkling Lights', 'Summit Panoramic Deck', 'Champ de Mars Picnic'],
        recommendedDuration: '2 - 3 hours'
      },
      {
        id: 'louvre-museum',
        name: 'Louvre Museum',
        category: 'Art & Museum',
        image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1000&auto=format&fit=crop',
        rating: 4.88,
        openingHours: '9:00 AM - 6:00 PM (Closed Tue)',
        description: 'The world’s largest art museum and historic monument, home to the Mona Lisa and Venus de Milo.',
        highlights: ['Mona Lisa', 'Glass Pyramid Entry', 'Winged Victory of Samothrace'],
        recommendedDuration: '3 - 5 hours'
      },
      {
        id: 'montmartre-sacre-coeur',
        name: 'Montmartre & Sacré-Cœur',
        category: 'Culture & Neighborhood',
        image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee8e?q=80&w=1000&auto=format&fit=crop',
        rating: 4.8,
        openingHours: '6:30 AM - 10:30 PM',
        description: 'Artistic hilltop neighborhood topped by the gleaming white Basilica of the Sacré-Cœur.',
        highlights: ['Place du Tertre Painters', 'Basilica Dome Views', 'Charming Cobblestone Streets'],
        recommendedDuration: '2 - 3 hours'
      }
    ],
    localTips: [
      'Buy museum tickets online in advance to skip long security lines.',
      'Use the Paris Métro—it’s fast, cheap, and connects every district.',
      'Grab fresh baguettes and cheese from local boulangeries for a Seine picnic.'
    ]
  },
  {
    id: 'reykjavik-iceland',
    name: 'Reykjavik & Golden Circle',
    country: 'Iceland',
    tagline: 'Land of Fire & Ice, Northern Lights & Geothermal Wonders',
    category: 'Mountain',
    region: 'Europe',
    coordinates: { lat: 64.1466, lng: -21.9426 },
    rating: 4.92,
    reviewsCount: 1980,
    budget: '$$$$',
    bestTimeToVisit: 'Sept - Mar (Northern Lights) or June - Aug (Midnight Sun)',
    heroImage: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-flying-over-waterfalls-in-iceland-4752/1080p.mp4',
    overview: 'Iceland’s vibrant capital serves as the gateway to volcanic landscapes, cascading waterfalls, geothermal lagoons, black sand beaches, and dance of the Aurora Borealis.',
    quickStats: {
      currency: 'Icelandic Króna (ISK)',
      language: 'Icelandic / English',
      timezone: 'GMT+0 (UTC)',
      idealStay: '5 - 8 Days'
    },
    famousPlaces: [
      {
        id: 'blue-lagoon',
        name: 'Blue Lagoon Geothermal Spa',
        category: 'Spa & Wellness',
        image: 'https://images.unsplash.com/photo-1529963183134-61a90db47eaf?q=80&w=1000&auto=format&fit=crop',
        rating: 4.85,
        openingHours: '8:00 AM - 9:00 PM',
        description: 'Milky-blue geothermal seawater rich in silica, algae, and minerals set in a black lava field.',
        highlights: ['Geothermal Baths', 'Silica Mud Masks', 'In-water Bar'],
        recommendedDuration: '3 hours'
      },
      {
        id: 'gullfoss-waterfall',
        name: 'Gullfoss & Strokkur Geysir',
        category: 'Natural Wonder',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: '24 Hours Open',
        description: 'A powerful double-tiered waterfall tumbling into a rugged canyon, alongside active geothermal geysers.',
        highlights: ['Roaring Water Canyon', 'Erupting Strokkur Geysir', 'Thingvellir National Park'],
        recommendedDuration: 'Full Day Tour'
      },
      {
        id: 'hallgrimskirkja',
        name: 'Hallgrímskirkja Church',
        category: 'Architecture & City View',
        image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?q=80&w=1000&auto=format&fit=crop',
        rating: 4.75,
        openingHours: '10:00 AM - 5:00 PM',
        description: 'Lutheran parish church designed to resemble basalt lava columns formed naturally across Iceland.',
        highlights: ['Tower City View', 'Basalt Column Design', 'Pipe Organ'],
        recommendedDuration: '1 hour'
      }
    ],
    localTips: [
      'Always check road conditions on road.is when driving during winter.',
      'Tap water in Iceland is pure spring water—no need to buy bottled water!',
      'Pack layers: windproof and waterproof outerwear is essential.'
    ]
  },
  {
    id: 'rio-de-janeiro-brazil',
    name: 'Rio de Janeiro',
    country: 'Brazil',
    tagline: 'Marvelous City of Golden Beaches, Samba & Dramatic Peaks',
    category: 'Tropical',
    region: 'South America',
    coordinates: { lat: -22.9068, lng: -43.1729 },
    rating: 4.88,
    reviewsCount: 2450,
    budget: '$$',
    bestTimeToVisit: 'December - March (Summer & Carnival)',
    heroImage: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-waves-crashing-on-copacabana-beach-4943/1080p.mp4',
    overview: 'Rio de Janeiro is a huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches, 38m Christ the Redeemer statue atop Mount Corcovado, and Sugarloaf Mountain.',
    quickStats: {
      currency: 'Brazilian Real (BRL)',
      language: 'Portuguese',
      timezone: 'GMT-3 (BRT)',
      idealStay: '4 - 6 Days'
    },
    famousPlaces: [
      {
        id: 'christ-redeemer',
        name: 'Christ the Redeemer (Corcovado)',
        category: 'Wonder of the World',
        image: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: '8:00 AM - 7:00 PM',
        description: 'Iconic Art Deco statue of Jesus Christ overlooking Rio de Janeiro from the summit of Corcovado Mountain.',
        highlights: ['New 7 Wonder of World', 'Panoramic Rio Bay View', 'Tijuca Forest Cog Train'],
        recommendedDuration: '2 - 3 hours'
      },
      {
        id: 'copacabana-ipanema',
        name: 'Copacabana & Ipanema Beaches',
        category: 'Beach & Coastal',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
        rating: 4.85,
        openingHours: '24 Hours Open',
        description: 'World-famous crescent beach stretches lined with promenade mosaics, beach kiosks, and sunset crowds at Arpoador.',
        highlights: ['Arpoador Sunset', 'Fresh Coconut Water', 'Samba Rhythms'],
        recommendedDuration: 'Half Day'
      },
      {
        id: 'sugarloaf-mountain',
        name: 'Sugarloaf Mountain (Pão de Açúcar)',
        category: 'Mountain & Cable Car',
        image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '8:30 AM - 8:00 PM',
        description: 'Peak rising 396 meters above the harbor, accessed by two glass-walled cable cars.',
        highlights: ['Glass Cable Car Ride', 'Guanabara Bay Panoramas', 'Sunset Views'],
        recommendedDuration: '2 - 3 hours'
      }
    ],
    localTips: [
      'Catch the sunset at Arpoador Rock located between Copacabana and Ipanema.',
      'Try fresh Caipirinhas and Feijoada at local botecos.',
      'Use registered ride-shares or official yellow taxis for easy transit.'
    ]
  },
  {
    id: 'cape-town-south-africa',
    name: 'Cape Town',
    country: 'South Africa',
    tagline: 'Where Table Mountain Meets Two Majestic Oceans',
    category: 'Modern Cities',
    region: 'Africa',
    coordinates: { lat: -33.9249, lng: 18.4241 },
    rating: 4.91,
    reviewsCount: 2150,
    budget: '$$',
    bestTimeToVisit: 'November - April (Warm Summer)',
    heroImage: 'https://images.unsplash.com/photo-1580619305218-8148a1a23868?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-waves-crashing-on-rocky-shore-5236/1080p.mp4',
    overview: 'Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath towering Table Mountain. Cable cars climb to the mountain’s flat top, offering panoramic views of the city.',
    quickStats: {
      currency: 'South African Rand (ZAR)',
      language: 'English / Afrikaans / Xhosa',
      timezone: 'GMT+2 (SAST)',
      idealStay: '5 - 7 Days'
    },
    famousPlaces: [
      {
        id: 'table-mountain',
        name: 'Table Mountain Aerial Cableway',
        category: 'Natural Wonder',
        image: 'https://images.unsplash.com/photo-1580619305218-8148a1a23868?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: '8:00 AM - 7:00 PM (weather permitting)',
        description: 'Flat-topped mountain forming a prominent landmark overlooking the city of Cape Town.',
        highlights: ['360° Rotating Cable Car', 'Fynbos Floral Kingdom', 'Sunset Deck'],
        recommendedDuration: '3 hours'
      },
      {
        id: 'boulders-beach',
        name: 'Boulders Beach African Penguins',
        category: 'Wildlife & Beach',
        image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000&auto=format&fit=crop',
        rating: 4.88,
        openingHours: '8:00 AM - 5:00 PM',
        description: 'Sheltered beach composed of inlets between granite boulders, home to a colony of African penguins.',
        highlights: ['African Penguin Colony', 'Granite Boulders', 'Swimming in False Bay'],
        recommendedDuration: '2 hours'
      },
      {
        id: 'cape-point',
        name: 'Cape Point & Cape of Good Hope',
        category: 'Nature Reserve',
        image: 'https://images.unsplash.com/photo-1576485375217-d6a95e34d043?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '6:00 AM - 6:00 PM',
        description: 'Dramatic promontory at the south-west extremity of the African continent with soaring lighthouse cliffs.',
        highlights: ['Old Lighthouse', 'Funicular Railway', 'Dramatic Cliffside Trails'],
        recommendedDuration: 'Half Day'
      }
    ],
    localTips: [
      'Book Table Mountain cable car tickets early and go on clear wind-still mornings.',
      'Explore nearby Stellenbosch and Franschhoek for world-class wine tasting.',
      'Visit the V&A Waterfront for food markets and live street music.'
    ]
  },
  {
    id: 'cairo-egypt',
    name: 'Cairo & Giza',
    country: 'Egypt',
    tagline: 'Land of Pharaohs, Ancient Pyramids & Timeless History',
    category: 'Historical',
    region: 'Middle East & Africa',
    coordinates: { lat: 30.0444, lng: 31.2357 },
    rating: 4.82,
    reviewsCount: 3100,
    budget: '$$',
    bestTimeToVisit: 'October - April (Cooler Temperatures)',
    heroImage: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-flying-over-desert-dunes-5654/1080p.mp4',
    overview: 'Egypt’s sprawling capital is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum. Near Cairo, Giza is the site of the iconic Great Pyramids and Sphinx.',
    quickStats: {
      currency: 'Egyptian Pound (EGP)',
      language: 'Arabic',
      timezone: 'GMT+3 (EEST)',
      idealStay: '3 - 5 Days'
    },
    famousPlaces: [
      {
        id: 'giza-pyramids',
        name: 'Great Pyramids of Giza & Sphinx',
        category: 'Ancient Wonder',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1000&auto=format&fit=crop',
        rating: 4.98,
        openingHours: '8:00 AM - 5:00 PM',
        description: 'The sole surviving Wonder of the Ancient World, built over 4,500 years ago as tombs for Egyptian Pharaohs.',
        highlights: ['Pyramid of Khufu', 'Great Sphinx of Giza', 'Camel Dunes Ride'],
        recommendedDuration: 'Half Day'
      },
      {
        id: 'grand-egyptian-museum',
        name: 'Grand Egyptian Museum (GEM)',
        category: 'Museum & Archaeology',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '9:00 AM - 6:00 PM',
        description: 'The largest archaeological museum in the world, dedicated to ancient Egyptian civilization.',
        highlights: ['Tutankhamun Treasures', 'Statue of Ramesses II', 'Atrium & Grand Staircase'],
        recommendedDuration: '3 - 4 hours'
      },
      {
        id: 'khan-el-khalili',
        name: 'Khan el-Khalili Bazaar',
        category: 'Market & Culture',
        image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1000&auto=format&fit=crop',
        rating: 4.7,
        openingHours: '10:00 AM - Midnight',
        description: 'A famous historic souk in the Islamic district of Cairo filled with spices, lamps, jewelry, and teahouses.',
        highlights: ['El Fishawy Teahouse', 'Handcrafted Lanterns', 'Spices & Perfumes'],
        recommendedDuration: '2 - 3 hours'
      }
    ],
    localTips: [
      'Hire a licensed Egyptologist guide for deep historical context at Giza.',
      'Sip mint tea at El Fishawy, a cafe operating since 1773.',
      'Dress comfortably and respectfully when visiting religious sites.'
    ]
  },
  {
    id: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    tagline: 'Island of the Gods, Emerald Rice Terraces & Spiritual Havens',
    category: 'Tropical',
    region: 'Asia',
    coordinates: { lat: -8.4095, lng: 115.1889 },
    rating: 4.89,
    reviewsCount: 4210,
    budget: '$',
    bestTimeToVisit: 'April - October (Dry Season)',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-surfers-riding-waves-in-bali-4433/1080p.mp4',
    overview: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple.',
    quickStats: {
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian / Balinese',
      timezone: 'GMT+8 (WITA)',
      idealStay: '5 - 10 Days'
    },
    famousPlaces: [
      {
        id: 'tegallalang-rice',
        name: 'Tegallalang Rice Terraces (Ubud)',
        category: 'Nature & Agriculture',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000&auto=format&fit=crop',
        rating: 4.88,
        openingHours: '7:00 AM - 6:00 PM',
        description: 'Vibrant green cascading rice paddies sculpted into the hillside using ancient Subak irrigation systems.',
        highlights: ['Subak Irrigation', 'Jungle Swings', 'Sunrise Walks'],
        recommendedDuration: '2 hours'
      },
      {
        id: 'uluwatu-temple',
        name: 'Uluwatu Temple & Kecak Dance',
        category: 'Temple & Performance',
        image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '7:00 AM - 7:00 PM',
        description: 'Balinese Hindu sea temple perched atop a steep cliff 70 meters above roaring ocean waves.',
        highlights: ['Cliffside Sunset Views', 'Traditional Kecak Fire Dance', 'Ocean Waves'],
        recommendedDuration: '2.5 hours'
      },
      {
        id: 'tirta-empul',
        name: 'Tirta Empul Holy Water Temple',
        category: 'Spiritual & Heritage',
        image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1000&auto=format&fit=crop',
        rating: 4.85,
        openingHours: '8:00 AM - 6:00 PM',
        description: 'Water temple famous for its holy spring water, where Balinese Hindus go for ritual purification.',
        highlights: ['Melukat Purification Bath', 'Spring Pool Fountains', 'Intricate Stone Carvings'],
        recommendedDuration: '1.5 - 2 hours'
      }
    ],
    localTips: [
      'Rent a scooter only if experienced; otherwise hire a private car with driver.',
      'Wear a sarong when entering Balinese Hindu temples (usually provided at entry).',
      'Taste Babi Guling (suckling pig) or Nasi Goreng at local Warungs.'
    ]
  },
  {
    id: 'new-york-usa',
    name: 'New York City',
    country: 'United States',
    tagline: 'The Empire City: Skyscrapers, Broadway & Endless Energy',
    category: 'Modern Cities',
    region: 'North America',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    rating: 4.87,
    reviewsCount: 6100,
    budget: '$$$$',
    bestTimeToVisit: 'September - November & December (Holiday Season)',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-new-york-city-skyline-at-dusk-5246/1080p.mp4',
    overview: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers.',
    quickStats: {
      currency: 'US Dollar (USD)',
      language: 'English',
      timezone: 'GMT-4 (EDT)',
      idealStay: '4 - 7 Days'
    },
    famousPlaces: [
      {
        id: 'central-park',
        name: 'Central Park',
        category: 'Urban Park',
        image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: '6:00 AM - 1:00 AM',
        description: 'An 843-acre green oasis in the heart of Manhattan featuring lakes, bridges, bowers, and pathways.',
        highlights: ['Bethesda Terrace', 'Bow Bridge', 'Strawberry Fields'],
        recommendedDuration: '2 - 4 hours'
      },
      {
        id: 'statue-of-liberty',
        name: 'Statue of Liberty & Ellis Island',
        category: 'National Monument',
        image: 'https://images.unsplash.com/photo-1605130284535-11dd9edc584d?q=80&w=1000&auto=format&fit=crop',
        rating: 4.88,
        openingHours: '8:30 AM - 4:00 PM',
        description: 'Colossal neoclassical sculpture on Liberty Island in New York Harbor, symbolizing freedom and democracy.',
        highlights: ['Ferry Ride', 'Pedestal & Crown Access', 'Ellis Island Immigration Museum'],
        recommendedDuration: '3 - 4 hours'
      },
      {
        id: 'empire-state',
        name: 'Summit One Vanderbilt / Empire State',
        category: 'Observatory Deck',
        image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=1000&auto=format&fit=crop',
        rating: 4.92,
        openingHours: '9:00 AM - Midnight',
        description: 'Immersive glass observation floors providing breathtaking 360-degree views across Manhattan.',
        highlights: ['Glass Skyboxes', '360 Skylines', 'Levitation Cubes'],
        recommendedDuration: '2 hours'
      }
    ],
    localTips: [
      'Take the subway everywhere using contactless tap-to-pay (OMNY).',
      'Walk across the Brooklyn Bridge at sunset for iconic skyline photographs.',
      'Grab a \$1.50 slice of classic NYC thin-crust pepperoni pizza.'
    ]
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    tagline: 'Iconic White-Washed Caldera & World-Famous Sunsets',
    category: 'Tropical',
    region: 'Europe',
    coordinates: { lat: 36.3932, lng: 25.4615 },
    rating: 4.94,
    reviewsCount: 3800,
    budget: '$$$$',
    bestTimeToVisit: 'Late April - October',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-waves-crashing-on-rocky-shore-5236/1080p.mp4',
    overview: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape of cubiform cliffside houses.',
    quickStats: {
      currency: 'Euro (EUR)',
      language: 'Greek / English',
      timezone: 'GMT+3 (EEST)',
      idealStay: '3 - 5 Days'
    },
    famousPlaces: [
      {
        id: 'oia-village',
        name: 'Oia Village & Blue Domes',
        category: 'Village & Viewpoint',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000&auto=format&fit=crop',
        rating: 4.96,
        openingHours: 'All day',
        description: 'Famous whitewashed village carved into the cliffs, topped by vibrant cobalt-blue church domes.',
        highlights: ['Cobalt Blue Domes', 'Oia Castle Sunset', 'Windmill Views'],
        recommendedDuration: 'Full Day'
      },
      {
        id: 'red-beach-santorini',
        name: 'Red Beach & Akrotiri',
        category: 'Beach & Ruins',
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1000&auto=format&fit=crop',
        rating: 4.78,
        openingHours: 'Daylight hours',
        description: 'Striking volcanic beach enclosed by towering rust-red iron silicate cliffs.',
        highlights: ['Red Volcanic Sand', 'Minoan Ruins of Akrotiri', 'Snorkeling'],
        recommendedDuration: '2 - 3 hours'
      }
    ],
    localTips: [
      'Watch the sunset from Imerovigli for fewer crowds than Oia.',
      'Sip Assyrtiko white wine produced from ancient volcanic vineyards.',
      'Book catamaran caldera cruises for swimming in thermal hot springs.'
    ]
  },
  {
    id: 'petra-jordan',
    name: 'Petra',
    country: 'Jordan',
    tagline: 'The Rose-Red City Carved Into Ancient Sandstone Canyons',
    category: 'Historical',
    region: 'Middle East',
    coordinates: { lat: 30.3285, lng: 35.4444 },
    rating: 4.97,
    reviewsCount: 1850,
    budget: '$$$',
    bestTimeToVisit: 'March - May & September - November',
    heroImage: 'https://images.unsplash.com/photo-1579606032822-6b95764d0a1b?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-flying-over-desert-dunes-5654/1080p.mp4',
    overview: 'Petra is a famous archaeological site in Jordan’s southwestern desert. Dating to around 300 B.C., it was the capital of the Nabataean Kingdom. Accessed via a narrow canyon called Al-Siq.',
    quickStats: {
      currency: 'Jordanian Dinar (JOD)',
      language: 'Arabic / English',
      timezone: 'GMT+3 (AST)',
      idealStay: '2 - 3 Days'
    },
    famousPlaces: [
      {
        id: 'al-khazneh',
        name: 'Al-Khazneh (The Treasury)',
        category: 'Ancient Architecture',
        image: 'https://images.unsplash.com/photo-1579606032822-6b95764d0a1b?q=80&w=1000&auto=format&fit=crop',
        rating: 4.99,
        openingHours: '6:00 AM - 6:00 PM',
        description: 'An elaborate 40-meter-high rock-cut temple carved directly out of the sandstone cliff face.',
        highlights: ['Al-Siq Canyon Walk', 'Sandstone Facade', 'Petra by Night Candles'],
        recommendedDuration: '2 hours'
      },
      {
        id: 'ad-deir-monastery',
        name: 'Ad-Deir (The Monastery)',
        category: 'Monument & Hike',
        image: 'https://images.unsplash.com/photo-1548786811-dd6e453ccca7?q=80&w=1000&auto=format&fit=crop',
        rating: 4.93,
        openingHours: 'Daylight hours',
        description: 'A monumental rock-cut building sitting high on the mountain summit, reached by climbing 800 stone steps.',
        highlights: ['800 Stone Steps Hike', 'Colossal 50m Entrance', 'Top of World Tea Shop'],
        recommendedDuration: '3 - 4 hours'
      }
    ],
    localTips: [
      'Start walking at 6:00 AM right when the gates open to have the Siq canyon to yourself.',
      'Purchase the Jordan Pass before arriving to include your visa fee and entry to Petra.',
      'Wear durable hiking boots—you will walk over 15km a day on rocky terrain.'
    ]
  },
  {
    id: 'sydney-australia',
    name: 'Sydney',
    country: 'Australia',
    tagline: 'Sun-Drenched Harbor, Surfing Beaches & Iconic Architecture',
    category: 'Modern Cities',
    region: 'Oceania',
    coordinates: { lat: -33.8688, lng: 151.2093 },
    rating: 4.88,
    reviewsCount: 3740,
    budget: '$$$',
    bestTimeToVisit: 'September - November & February - April',
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://cdn.coverr.co/videos/coverr-waves-crashing-on-rocky-shore-5236/1080p.mp4',
    overview: 'Sydney, capital of New South Wales, is Australia’s largest city. Best known for its harbourfront Sydney Opera House, with a distinctive sail-like design, and the massive Harbour Bridge.',
    quickStats: {
      currency: 'Australian Dollar (AUD)',
      language: 'English',
      timezone: 'GMT+10 (AEST)',
      idealStay: '4 - 6 Days'
    },
    famousPlaces: [
      {
        id: 'sydney-opera-house',
        name: 'Sydney Opera House & Harbour Bridge',
        category: 'Landmark',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000&auto=format&fit=crop',
        rating: 4.95,
        openingHours: '9:00 AM - 5:00 PM',
        description: 'Multi-venue performing arts centre designed by Danish architect Jørn Utzon on Bennelong Point.',
        highlights: ['Sail Roof Architecture', 'Harbour Bridge Walk', 'Circular Quay Ferries'],
        recommendedDuration: '2 - 3 hours'
      },
      {
        id: 'bondi-coogee-walk',
        name: 'Bondi to Coogee Coastal Walk',
        category: 'Coastal Trail & Beach',
        image: 'https://images.unsplash.com/photo-1549180030-48bf079fb38a?q=80&w=1000&auto=format&fit=crop',
        rating: 4.9,
        openingHours: '24 Hours Open',
        description: 'A 6km scenic cliffside trail featuring beaches, ocean pools, rock carvings, and coastal views.',
        highlights: ['Bondi Icebergs Ocean Pool', 'Tamarama & Bronte Bays', 'Whale Watching (Winter)'],
        recommendedDuration: '2.5 - 3 hours'
      }
    ],
    localTips: [
      'Take the public Opal ferry from Circular Quay to Manly for a cheap, stunning harbor cruise.',
      'Swim inside the famous Bondi Icebergs saltwater ocean pool.',
      'Protect yourself from strong UV rays with reef-safe sunscreen and a hat.'
    ]
  }
];

export const CATEGORIES = [
  'All',
  'Tropical',
  'Historical',
  'Mountain',
  'Modern Cities',
  'Culture & Nature'
];

export const REGIONS = [
  'All Regions',
  'Asia',
  'Europe',
  'North America',
  'South America',
  'Middle East & Africa',
  'Oceania'
];
