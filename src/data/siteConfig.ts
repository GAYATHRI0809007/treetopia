/**
 * TREETOPIA WEBSITE CONFIGURATION FILE
 * 
 * Verified official property details, Airbnb packages, WhatsApp contact,
 * and location coordinates.
 */

export const siteConfig = {
  // Brand details
  brandName: 'TREETOPIA',
  tagline: 'Escape the Ordinary. Experience TREETOPIA.',
  subtitle: 'Private Luxury Farmstay & Nature Retreat',

  // Location details (Verified from Google Maps & Airbnb)
  location: {
    village: 'Unisenatham',
    taluk: 'Denkanikottai',
    state: 'Tamil Nadu',
    country: 'India',
    shortAddress: 'Unisenatham, Tamil Nadu (Near Denkanikottai)',
    commuteHighlight: 'Approx. 30–40 mins drive from Electronic City, Bangalore',
    
    isMapPinVerified: true,
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/place/Treetopia+Farmstay/@12.6338029,77.667287,17z/data=!3m1!4b1!4m9!3m8!1s0x3bae6500146d6e5d:0x49e0157aad0659bb!5m2!4m1!1i2!8m2!3d12.6338029!4d77.667287!16s!g!11x0pb3ts5',
    googleMapsEmbedUrl:
      'https://maps.google.com/maps?q=12.6338029,77.667287&hl=en&z=15&output=embed',
  },

  // Verified Official Airbnb Packages
  packages: {
    p1: {
      id: 'p1',
      code: 'P1',
      title: 'Two Pods + Amenities',
      tagline: 'Two Elevated Cantilever Pods (Pod 1 & Pod 2)',
      capacity: 'Up to 9 Guests',
      maxGuests: 9,
      airbnbUrl: 'https://www.airbnb.com/h/treetopiafarmstay',
      features: [
        '2 Modern air-conditioned cantilever pods',
        '2 King beds + extra bedding on request',
        '2 Attached designer slate bathrooms',
        'Private sunset balconies & smart TVs',
        'Shared access to pool, cricket nets & campfire',
      ],
      sharedNote: 'Plunge pool, cricket nets, open kitchen & cinema are shared with Bunker guests.',
    },
    p2: {
      id: 'p2',
      code: 'P2',
      title: 'Bunker + Amenities',
      tagline: 'Spacious Ground-Level Nature Suite',
      capacity: 'Up to 12 Guests',
      maxGuests: 12,
      airbnbUrl: 'https://www.airbnb.com/h/treetopiabunk',
      features: [
        'Spacious architectural ground-level retreat',
        'King bed + Queen bunk beds',
        'Attached modern bathroom',
        'Rooftop cricket net access & patio steps to pool',
        'Shared access to pool, cricket nets & campfire',
      ],
      sharedNote: 'Plunge pool, cricket nets, open kitchen & cinema are shared with Pods guests.',
    },
    p3: {
      id: 'p3',
      code: 'P3',
      title: 'Two Pods + Bunker + Amenities',
      tagline: '100% Private 9,000 Sq.Ft Estate Exclusivity',
      capacity: 'Up to 21 Guests (9 + 12)',
      maxGuests: 21,
      airbnbUrl: 'https://www.airbnb.com/h/podandbunker',
      features: [
        'Entire 9,000 sq.ft private estate exclusively for your group',
        'Both Cantilever Pods (Pod 1 & Pod 2) + The Bunker + Tent option',
        'Private plunge pool exclusively for your party',
        'Exclusive use of cricket nets, projector cinema & campfire',
        'Dedicated open kitchen, BBQ bar & dining pavilion',
      ],
      sharedNote: 'Total estate privacy. Zero shared amenities—100% exclusive to your reservation.',
    },
  },

  // Verified Official Airbnb Listing Reference
  airbnb: {
    url: 'https://www.airbnb.com/h/treetopiafarmstay',
    rating: 4.65,
    reviewCount: 26,
    badgeText: 'Guest Favorite on Airbnb',
    superhost: false,
  },

  // Official Social Media
  social: {
    instagram: 'https://www.instagram.com/treetopia_farmstay/',
    instagramHandle: '@treetopia_farmstay',
  },

  // Owner Contact Information (No Email - WhatsApp Only)
  contact: {
    isWhatsAppConfigured: true,
    whatsAppNumber: '919980014449',
    whatsAppDisplay: '+91 99800 14449',
    checkInTime: '2:00 PM',
    checkOutTime: '11:00 AM',
  },

  // Capacity & House Rules
  propertyDetails: {
    plotSize: '9,000 sq.ft private gated estate',
    maxGuestsTotal: 21,
    accommodations: 'Two Pods (9 guests) + One Bunker (12 guests) + One Glamping Tent',
    rules: [
      'Entire estate exclusivity when booking Package 3 (Combined).',
      'When booked individually, Pods and Bunker guests share the plunge pool, cricket nets, open kitchen, and outdoor cinema.',
      'Families and working professionals preferred.',
      'No loud late-night party events that disturb the peaceful countryside.',
      'Respect nature and property cleanliness.',
    ],
  },
};

