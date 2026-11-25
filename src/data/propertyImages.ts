export interface PropertyImage {
  src: string;
  alt: string;
  title: string;
  category: 'exterior' | 'bedroom' | 'pool' | 'experience' | 'amenity';
}

export const propertyImages = {
  // Main Hero Images
  hero: '/photos/wide_sunset_panoramic.jpg',
  heroSecondary: '/photos/hero_exterior.jpg',
  nightExterior: '/photos/exterior_dusk_pods.jpg',

  // Accommodation
  accommodation: {
    podMaster: '/photos/bedroom_pod_main.jpg',
    podSecond: '/photos/bathroom_pod.jpg',
    podWardrobe: '/photos/bedroom_pod_wardrobe.jpg',
    podTvView: '/photos/dining_open_kitchen.jpg',
    luxuryBathroom: '/photos/bedroom_interior_view.jpg',
    tentCamping: '/photos/night_pool_lights.jpg',
  },

  // Experiences & Amenities
  experiences: {
    cricketNets: '/photos/camping_tent_setup.jpg',
    nightPoolAndBar: '/photos/cricket_nets_pitch.jpg',
    openBarDaylight: '/photos/outdoor_bar_counter.jpg',
    outdoorCinemaScreen: '/photos/plunge_pool_patio.jpg',
    cinemaLoungeNight: '/photos/gazebo_seating.jpg',
    movieAndCampfire: '/photos/night_movie_campfire.jpg',
    teaCoffeeStation: '/photos/pod_balcony_sunset.jpg',
  },

  // Architectural & Grounds
  grounds: {
    daylightPodsAndPool: '/photos/garden_pathway.jpg',
    podArchitectureAngle: '/photos/lawn_aerial_view.jpg',
    architecturalDetailNight: '/photos/bunker_room.jpg',
    estateOverviewDusk: '/photos/retreat_dusk_overview.jpg',
  },

  // Complete Curated Gallery of All 20 Real Property Photographs
  gallery: [
    {
      src: '/photos/wide_sunset_panoramic.jpg',
      alt: 'Panoramic sunset view of Treetopia modern pods, private plunge pool, and camping grounds',
      title: 'Panoramic Sunset Estate View',
      category: 'exterior' as const,
    },
    {
      src: '/photos/hero_exterior.jpg',
      alt: 'Elevated dusk view of the cantilever architectural pods and illuminated plunge pool',
      title: 'Cantilever Pods & Evening Pool',
      category: 'exterior' as const,
    },
    {
      src: '/photos/exterior_dusk_pods.jpg',
      alt: 'Illuminated pod architecture reflected in the private plunge pool at dusk',
      title: 'Architectural Pods at Dusk',
      category: 'exterior' as const,
    },
    {
      src: '/photos/garden_pathway.jpg',
      alt: 'Daytime exterior showing both pods, poolside sun loungers, and pink umbrella',
      title: 'Sunny Poolside Deck & Loungers',
      category: 'pool' as const,
    },
    {
      src: '/photos/cricket_nets_pitch.jpg',
      alt: 'Night-lit private plunge pool with BBQ station and glowing Treetopia bar',
      title: 'Night Plunge Pool & Social Bar',
      category: 'pool' as const,
    },
    {
      src: '/photos/bedroom_pod_main.jpg',
      alt: 'Modern air-conditioned bedroom pod with king bed, ambient backlighting, and balcony view',
      title: 'Master Pod Suite Interior',
      category: 'bedroom' as const,
    },
    {
      src: '/photos/bathroom_pod.jpg',
      alt: 'Second bedroom pod with dark blue linen and ambient reading lamps at night',
      title: 'Canopy Pod Bedroom Suite',
      category: 'bedroom' as const,
    },
    {
      src: '/photos/bedroom_pod_wardrobe.jpg',
      alt: 'Built-in modern wardrobe, vanity desk, and coffee counter inside bedroom pod',
      title: 'Pod Wardrobe & Vanity Area',
      category: 'bedroom' as const,
    },
    {
      src: '/photos/dining_open_kitchen.jpg',
      alt: 'Wall-mounted flat-screen TV and floor-to-ceiling balcony view from bedroom',
      title: 'In-Room Smart Entertainment',
      category: 'bedroom' as const,
    },
    {
      src: '/photos/bedroom_interior_view.jpg',
      alt: 'En-suite modern bathroom with glass partition and dark grey slate tiles',
      title: 'Contemporary En-Suite Bathroom',
      category: 'amenity' as const,
    },
    {
      src: '/photos/pod_balcony_sunset.jpg',
      alt: 'In-room electric kettle, tea/coffee station, hair dryer, and fresh towels',
      title: 'Coffee & Refreshment Amenities',
      category: 'amenity' as const,
    },
    {
      src: '/photos/night_pool_lights.jpg',
      alt: 'Spacious camping tent pitched on the private lawn facing the plunge pool',
      title: 'Luxury Glamping Tent Experience',
      category: 'bedroom' as const,
    },
    {
      src: '/photos/camping_tent_setup.jpg',
      alt: 'Floodlit cricket nets and dedicated batting pitch on natural turf',
      title: 'Private Cricket Pitch & Nets',
      category: 'experience' as const,
    },
    {
      src: '/photos/gazebo_seating.jpg',
      alt: 'Outdoor projection home theater setup under the elevated pod deck',
      title: 'Under-the-Stars Outdoor Cinema',
      category: 'experience' as const,
    },
    {
      src: '/photos/plunge_pool_patio.jpg',
      alt: 'Covered lounge with movie projection screen and spiral staircase to pods',
      title: 'Poolside Theater & Staircase',
      category: 'experience' as const,
    },
    {
      src: '/photos/night_movie_campfire.jpg',
      alt: 'Live screening setup on patio with ambient pool lighting and camping tents',
      title: 'Evening Film & Match Screening',
      category: 'experience' as const,
    },
    {
      src: '/photos/outdoor_bar_counter.jpg',
      alt: 'Open-air kitchen and bar counter with high wooden barstools and neon branding',
      title: 'Open Kitchen & Social Bar',
      category: 'amenity' as const,
    },
    {
      src: '/photos/bunker_room.jpg',
      alt: 'Geometric pod cantilever structure illuminated against the night sky',
      title: 'Modern Cantilever Architecture',
      category: 'exterior' as const,
    },
    {
      src: '/photos/lawn_aerial_view.jpg',
      alt: 'Ground-up architectural perspective of elevated pod over manicured garden',
      title: 'Garden & Architectural Elevation',
      category: 'exterior' as const,
    },
    {
      src: '/photos/retreat_dusk_overview.jpg',
      alt: 'Serene dusk overview of the 9,000 sq.ft private estate and countryside',
      title: 'Twilight Estate Landscape',
      category: 'exterior' as const,
    },
  ],
};
