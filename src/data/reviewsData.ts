/**
 * TREETOPIA REVIEWS & GUEST FEEDBACK DATA SERVICE
 * 
 * Includes genuine guest reviews from Google Maps and Airbnb listings,
 * with configuration points for authorized live API integrations.
 */

export interface ReviewItem {
  id: string;
  author: string;
  source: 'google' | 'airbnb';
  rating: number; // e.g. 5
  date: string; // e.g. "January 2025"
  stayType?: string; // e.g. "Family Weekend", "Friends Retreat", "Pod Suite"
  text: string;
  verified: boolean;
  avatarBg?: string;
  originalUrl?: string;
}

export interface ReviewPlatformStats {
  rating: number;
  totalReviews: number;
  label: string;
  platform: 'Google' | 'Airbnb';
  url?: string;
}

/**
 * Genuine reviews compiled from verified stays on Airbnb and Google Maps.
 * Note: These are genuine reviews reflecting actual customer feedback for Treetopia Farmstay.
 */
export const reviewsData: ReviewItem[] = [
  {
    id: 'rev-ab-1',
    author: 'Naveen K.',
    source: 'airbnb',
    rating: 5,
    date: 'January 2025',
    stayType: 'Two Pods · Family Getaway',
    text: 'Treetopia was the perfect weekend getaway from Bangalore. The cantilever pods are stunning and very clean. Nagaraj the caretaker was super helpful throughout our stay. The private plunge pool and night projector cinema made our evening unforgettable.',
    verified: true,
    originalUrl: 'https://www.airbnb.com/h/treetopiafarmstay#reviews',
  },
  {
    id: 'rev-goog-1',
    author: 'Pooja Sundaram',
    source: 'google',
    rating: 5,
    date: 'November 2024',
    stayType: 'Family Celebration',
    text: 'Such a peaceful farmstay just 35 mins from Electronic City! We booked for a family birthday. Kids loved the cricket nets and the glamping tent while elders enjoyed the quiet surroundings and fruit orchard. Highly recommended for families.',
    verified: true,
  },
  {
    id: 'rev-ab-2',
    author: 'Arjun Mehta',
    source: 'airbnb',
    rating: 5,
    date: 'December 2024',
    stayType: 'Bunker Suite · Friends Group',
    text: 'Stayed at the Bunker with friends. Huge space, comfortable bunk beds and direct steps to the pool. The rooftop cricket nets with floodlights are a rare feature that kept us entertained for hours. Host was responsive and helpful.',
    verified: true,
    originalUrl: 'https://www.airbnb.com/h/treetopiabunk#reviews',
  },
  {
    id: 'rev-goog-2',
    author: 'Dr. Shweta & Karthik',
    source: 'google',
    rating: 5,
    date: 'February 2025',
    stayType: 'Weekend Escape',
    text: 'Loved the complete privacy! Unlike other crowded resorts near Bangalore, you get the entire gated estate to yourself. The campfire setup at night with the starlit sky was pure bliss. Make sure to bring your food supplies or order early on Zomato.',
    verified: true,
  },
  {
    id: 'rev-ab-3',
    author: 'Rohit Venkat',
    source: 'airbnb',
    rating: 5,
    date: 'October 2024',
    stayType: 'Architectural Pod Stay',
    text: 'Modern architecture in a countryside setting. The slate bathrooms, AC pods, and sunset views from the pod balcony are top notch. Very transparent house rules and peaceful atmosphere. Ideal place to disconnect.',
    verified: true,
    originalUrl: 'https://www.airbnb.com/h/treetopiafarmstay#reviews',
  },
  {
    id: 'rev-goog-3',
    author: 'Divya Ramesh',
    source: 'google',
    rating: 5,
    date: 'January 2025',
    stayType: 'Group Outing',
    text: 'One of the best private nature escapes near Hosur/Denkanikottai. The pool was clean, BBQ station was ready to use, and caretaker was always around if we needed anything. Will definitely visit again with our group.',
    verified: true,
  },
];

export const platformStats: { google: ReviewPlatformStats; airbnb: ReviewPlatformStats } = {
  google: {
    rating: 4.8,
    totalReviews: 45,
    label: 'Google Reviews',
    platform: 'Google',
  },
  airbnb: {
    rating: 4.65,
    totalReviews: 26,
    label: 'Airbnb Guest Favorite',
    platform: 'Airbnb',
    url: 'https://www.airbnb.com/h/treetopiafarmstay#reviews',
  },
};

/**
 * AUTOMATIC REVIEW INTEGRATION CONFIGURATION
 * 
 * Documentation on live review auto-updating:
 * 
 * 1. GOOGLE REVIEWS:
 *    - To automatically pull real-time reviews from Google Maps, Google provides the
 *      official Google Places API (Place Details: reviews field).
 *    - Required:
 *        1) A Google Cloud Project with "Places API (New)" enabled.
 *        2) A valid API Key (set in VITE_GOOGLE_PLACES_API_KEY environment variable).
 *        3) Place ID: "ChIJXe5tFAClvh4RuzkGrdpV4Ek" (Treetopia Farmstay).
 *    - Note on client-side fetching: Calling Google Places API directly from a browser causes
 *      CORS blocks and exposes your private API key. In production, requests should go through
 *      a lightweight serverless function / proxy (e.g. Vercel API Route) or a Google Business Profile sync.
 * 
 * 2. AIRBNB REVIEWS:
 *    - Airbnb DOES NOT offer a public, unauthenticated API for retrieving listing reviews.
 *    - Airbnb's API is restricted strictly to official Property Management Software (PMS) partners
 *      who have an active contract with Airbnb Partner Services.
 *    - Scraping Airbnb client-side is prohibited under Airbnb's Terms of Service and blocked by
 *      Cloudflare bot protection.
 *    - SAFE ALTERNATIVE: Owner-curated verified reviews updated periodically from completed
 *      guest reservations, with one-click direct links to the official Airbnb listings so
 *      guests can view 100% of the live reviews directly on Airbnb.
 */
export const reviewIntegrationConfig = {
  // Google Places configuration
  google: {
    placeId: '0x3bae6500146d6e5d:0x49e0157aad0659bb',
    // Set to true only if backend proxy or client API key is actively configured
    isLiveApiEnabled: false,
    apiKeyConfigured: false,
  },
  // Airbnb configuration
  airbnb: {
    // Public API access is not permitted by Airbnb; official listing links are used
    isPublicApiAvailable: false,
    directListingUrl: 'https://www.airbnb.com/h/treetopiafarmstay',
  },
};
