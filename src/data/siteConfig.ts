/**
 * TREETOPIA WEBSITE CONFIGURATION FILE
 * 
 * IMPORTANT FOR OWNER / DEVELOPER:
 * Keep contact details as placeholders until confirmed by the property owner.
 * Do NOT use personal or fake phone numbers as real contact info.
 */

export const siteConfig = {
  // Brand details
  brandName: 'TREETOPIA',
  tagline: 'Escape the Ordinary. Experience TREETOPIA.',
  subtitle: 'Private Luxury Farmstay & Nature Retreat',

  // Location details (Verified from official Airbnb listing)
  location: {
    village: 'Unisenatham',
    taluk: 'Denkanikottai',
    state: 'Tamil Nadu',
    country: 'India',
    shortAddress: 'Unisenatham, Tamil Nadu (Near Denkanikottai)',
    commuteHighlight: 'Approx. 30–40 mins drive from Electronic City, Bangalore',
    
    // Status flag: false indicates owner must provide exact map pin before public launch
    isMapPinVerified: false,
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31128.520448135836!2d77.7816!3d12.5284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7bb668d90471%3A0x64e2ce2e6c535787!2sDenkanikottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=Unisenatham+Denkanikottai+Tamil+Nadu',
  },

  // Verified Official Airbnb Listing Reference
  airbnb: {
    url: 'https://www.airbnb.co.in/rooms/1339863510144669214',
    rating: 4.65,
    reviewCount: 26,
    badgeText: 'Guest Favorite on Airbnb',
    superhost: false,
  },

  // Official Social Media
  social: {
    instagram: 'https://www.instagram.com/treetopia_farmstay?gwpx=MWZha3JhNjFndjZyNQ%3D%3D',
    instagramHandle: '@treetopia_farmstay',
  },

  // Owner Contact Information (PENDING OWNER CONFIRMATION)
  contact: {
    // Flag indicating whether the owner has provided official business contact details
    isWhatsAppConfigured: false,
    isEmailConfigured: false,

    // Placeholder strings - replace with real host WhatsApp number before launch
    // Format required: Country code without '+' or spaces, e.g. '919876543210'
    whatsAppNumber: '', 
    whatsAppDisplay: '[PENDING OWNER NUMBER - Add in siteConfig.ts]',
    
    // Placeholder email - replace with real host email before launch
    email: '',
    emailDisplay: '[PENDING OWNER EMAIL - Add in siteConfig.ts]',
    
    // Verified stay timings from Airbnb
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
  },

  // Capacity & House Rules (Verified from Airbnb)
  propertyDetails: {
    plotSize: '9,000 sq.ft private fenced plot',
    maxGuests: 12,
    baseBedrooms: 2,
    baseBeds: 3,
    bathrooms: 2,
    rules: [
      'Entire property is exclusively for the booking party.',
      'Families and working professionals preferred.',
      'No student groups or loud late-night party events that disturb the countryside.',
      'Respect nature and property cleanliness.',
    ],
  },
};
