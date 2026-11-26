import React, { useState } from 'react';
import { propertyImages } from '../data/propertyImages';
import { siteConfig } from '../data/siteConfig';
import {
  Users,
  Bed,
  Bath,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  X,
  ChevronRight,
  Info,
  Building2,
  Crown,
  Layers,
  ChevronLeft,
} from 'lucide-react';

export interface PackageDetail {
  code: string;
  title: string;
  tagline: string;
  tag: string;
  badge: string;
  badgeColor: string;
  isPrimary: boolean;
  capacity: string;
  beds: string;
  baths: string;
  icon: React.ComponentType<{ className?: string }>;
  airbnbUrl: string;
  image: string;
  gallery: string[];
  shortSummary: string;
  fullDescription: string;
  sharedNote: string;
  exclusivityBadge: string;
  features: string[];
  amenities: string[];
  idealFor: string;
}

export const Accommodation: React.FC = () => {
  const [selectedPackageCode, setSelectedPackageCode] = useState<string | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);

  const packages: PackageDetail[] = [
    {
      code: 'P1',
      title: 'Two Pods + Amenities',
      tagline: 'Two Elevated Cantilever Architectural Suites (Pod 1 & Pod 2)',
      tag: 'Elevated Architectural Suites',
      badge: 'Package 1',
      badgeColor: 'bg-forest text-cream border border-white/10',
      isPrimary: false,
      capacity: 'Up to 9 Guests',
      beds: '2 King Beds + Extra Mattresses on Request',
      baths: '2 Attached Designer Slate Bathrooms',
      icon: Building2,
      airbnbUrl: siteConfig.packages.p1.airbnbUrl,
      image: propertyImages.accommodation.podMaster,
      gallery: [
        propertyImages.accommodation.podMaster,
        propertyImages.accommodation.podSecond,
        propertyImages.accommodation.podWardrobe,
        propertyImages.accommodation.podTvView,
        propertyImages.accommodation.luxuryBathroom,
        propertyImages.experiences.teaCoffeeStation,
        propertyImages.nightExterior,
        propertyImages.grounds.daylightPodsAndPool,
      ],
      shortSummary:
        'Two air-conditioned cantilever bedroom pods elevated among trees, featuring panoramic glass sunset balconies, plush king beds, and attached designer slate bathrooms.',
      fullDescription:
        'Experience elevated architectural luxury in Pod 1 and Pod 2. Perched above the natural landscape on modern steel cantilever structures, each pod features floor-to-ceiling panoramic glass doors opening onto private sunset balconies, individual air conditioning, smart TVs, high-speed Wi-Fi, and en-suite slate bathrooms with fresh linens and hot showers.',
      sharedNote:
        'Plunge pool, cricket nets, open kitchen & bar, campfire lounge, and outdoor cinema are shared with Bunker guests.',
      exclusivityBadge: 'Shared Estate Amenities',
      features: [
        '2 Modern air-conditioned cantilever pods (Pod 1 & Pod 2)',
        '2 King beds + extra bedding on request (up to 9 guests)',
        '2 Attached private slate bathrooms with hot showers',
        'Floor-to-ceiling glass & private sunset balconies',
        'Smart TVs with streaming & high-speed Wi-Fi',
        'Electric kettle, tea & coffee preparation station',
        'Shared access to pool, cricket nets, cinema & campfire',
      ],
      amenities: [
        'Air Conditioning & Heating in both pods',
        '2 Attached private bathrooms with hot water',
        'Floor-to-ceiling glass & private sunset balconies',
        'Smart TVs with streaming applications',
        'High-speed Wi-Fi & vanity work desks',
        'Electric kettle, tea & coffee station',
        'Shared access to plunge pool, cricket nets & campfire',
        'Daily caretaker assistance & 24/7 power backup',
      ],
      idealFor: 'Couples, families, and small friend groups seeking modern architectural elegance.',
    },
    {
      code: 'P2',
      title: 'Bunker + Amenities',
      tagline: 'Spacious Ground-Level Nature Suite',
      tag: 'Spacious Nature Suite',
      badge: 'Package 2',
      badgeColor: 'bg-charcoal text-cream border border-white/10',
      isPrimary: false,
      capacity: 'Up to 12 Guests',
      beds: '1 King Bed + Queen Bunk Beds',
      baths: '1 Attached Modern Bathroom',
      icon: Layers,
      airbnbUrl: siteConfig.packages.p2.airbnbUrl,
      image: propertyImages.accommodation.bunkerExterior,
      gallery: [
        propertyImages.accommodation.bunkerExterior,
        propertyImages.accommodation.bunkerRoom,
        propertyImages.accommodation.bunkerDining,
        propertyImages.accommodation.bunkerCampfire,
        propertyImages.accommodation.bunkerNightLawn,
        propertyImages.experiences.nightPoolAndBar,
        propertyImages.experiences.cricketNets,
      ],
      shortSummary:
        'A generous ground-level architectural retreat nestled in fruit trees with a king-size bed, queen-size bunk beds, terrace cricket net access, and patio steps to the plunge pool.',
      fullDescription:
        'The Treetopia Bunker is a generous ground-level nature suite built for group comfort and camaraderie. Set amidst lush fruit trees, it features a master king-size bed, sturdy queen-size bunk beds, an attached modern bathroom, veranda steps leading out to the plunge pool, and rooftop staircase access to the floodlit cricket nets.',
      sharedNote:
        'Plunge pool, cricket nets, open kitchen & bar, campfire lounge, and outdoor cinema are shared with Pods guests.',
      exclusivityBadge: 'Shared Estate Amenities',
      features: [
        'Spacious architectural ground-level retreat (up to 12 guests)',
        'King-size master bed + solid queen-size bunk beds',
        'Attached modern bathroom with fresh linens & hot water',
        'Direct ground-level veranda stepping out to plunge pool',
        'Terrace rooftop access to professional cricket nets',
        'Covered open-air dining pavilion and kitchen access',
        'Shared access to pool, outdoor cinema, cricket nets & campfire',
      ],
      amenities: [
        'King-size master bed + Queen bunk bed setup',
        'Attached modern bathroom with fresh towels & hot shower',
        'Direct ground-level veranda stepping out to plunge pool',
        'Terrace rooftop access to professional cricket nets',
        'Covered open-air dining pavilion and kitchen access',
        'High-speed Wi-Fi & electric generator power backup',
        'Shared access to pool, cinema, cricket nets & campfire',
        'Full orchard grounds access & dedicated caretaker service',
      ],
      idealFor: 'Larger families, team retreats, and friends seeking spacious connected comfort.',
    },
    {
      code: 'P3',
      title: 'Two Pods + Bunker + Amenities',
      tagline: 'Combined 9,000 Sq.Ft Private Estate Exclusivity',
      tag: '100% Private Estate Exclusivity',
      badge: 'Package 3 · Best Value',
      badgeColor: 'bg-gold text-charcoal font-bold border border-gold/40 shadow-sm',
      isPrimary: true,
      capacity: 'Up to 21 Guests (9 + 12)',
      beds: 'Both Pods + Bunker Suite + Lawn Glamping Tent',
      baths: '3 Modern Bathrooms + Ground Restrooms',
      icon: Crown,
      airbnbUrl: siteConfig.packages.p3.airbnbUrl,
      image: propertyImages.grounds.estateOverviewDusk,
      gallery: [
        propertyImages.grounds.estateOverviewDusk,
        propertyImages.accommodation.podMaster,
        propertyImages.accommodation.podSecond,
        propertyImages.accommodation.bunkerExterior,
        propertyImages.accommodation.bunkerRoom,
        propertyImages.accommodation.tentCamping,
        propertyImages.nightExterior,
        propertyImages.experiences.movieAndCampfire,
        propertyImages.experiences.openBarDaylight,
        propertyImages.grounds.daylightPodsAndPool,
      ],
      shortSummary:
        'The entire 9,000 sq.ft private gated estate exclusively for your group: both cantilever pods, the bunker suite, lawn glamping, private pool, cricket nets, cinema, and campfire.',
      fullDescription:
        'The ultimate private countryside escape. Reserving Package 3 grants your group 100% exclusive access to the entire 9,000 sq.ft gated estate with zero shared facilities. Enjoy both cantilever pods, the spacious bunker suite, optional weatherproof lawn glamping tent, private plunge pool, floodlit cricket nets, stone campfire lounge, outdoor projector cinema, and open-air BBQ dining pavilion.',
      sharedNote:
        '100% Private Estate Exclusivity. Zero shared amenities—all 9,000 sq.ft of grounds, pool, cricket nets, cinema, and dining are 100% exclusive to your reservation.',
      exclusivityBadge: '100% Private Estate Exclusivity',
      features: [
        'Entire 9,000 sq.ft private estate exclusively for your group (up to 21 guests)',
        'Both Cantilever Pods (Pod 1 & Pod 2) + The Bunker suite',
        'Weatherproof family lawn glamping dome tent option included',
        'Private plunge pool exclusively for your party',
        'Exclusive access to floodlit cricket nets, campfire & movie cinema',
        'Dedicated open kitchen, BBQ bar counter & dining pavilion',
        'Complete privacy with 24/7 power backup and on-site caretaker',
      ],
      amenities: [
        '100% private estate reservation—no other guests on property',
        'Both elevated cantilever suites with panoramic glass & AC',
        'Ground-level Bunker suite with king & queen bunk beds',
        'Weatherproof lawn glamping dome tent with plush bedding',
        'Private plunge pool exclusively for your group',
        'Private floodlit cricket nets with professional turf pitch',
        'Stone campfire pit with starlight seating & outdoor movie screen',
        'Covered dining pavilion, open kitchen & barbecue bar counter',
      ],
      idealFor: 'Extended family reunions, milestone celebrations, and group retreats demanding complete privacy.',
    },
  ];

  const activePackage = packages.find((p) => p.code === selectedPackageCode);

  return (
    <section id="properties" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              Properties & Stay Packages
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            Our Official <br />
            <span className="italic font-normal text-gold">Stay Packages.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Choose the perfect accommodation setup for your group. From elevated cantilever pods and our
            spacious ground-level Bunker to complete 9,000 sq.ft private estate exclusivity.
          </p>

          {/* Shared Amenities Notice Alert */}
          <div className="mt-6 text-left max-w-2xl mx-auto p-4 rounded-xl bg-forest/5 border border-forest/15 text-xs text-charcoal/80 flex items-start space-x-3 shadow-sm">
            <Info className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-forest font-semibold">Shared Amenities & Pool Note:</strong> When booked individually, guests in the <strong>Two Pods</strong> and the <strong>Bunker</strong> share the outdoor plunge pool, floodlit cricket nets, open kitchen & bar, campfire lounge, and outdoor cinema. For <strong>100% private estate exclusivity</strong> of all facilities with zero shared amenities, book <strong>Package 3 (Two Pods + Bunker)</strong>.
            </div>
          </div>
        </div>

        {/* 3 Official Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.code}
                onClick={() => {
                  setSelectedPackageCode(pkg.code);
                  setActivePhotoIndex(0);
                }}
                className={`rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 border relative group cursor-pointer hover:-translate-y-1 ${
                  pkg.isPrimary
                    ? 'bg-forest text-cream shadow-2xl border-gold/40 ring-1 ring-gold/20'
                    : 'bg-white text-charcoal shadow-xl hover:shadow-2xl border-charcoal/10'
                }`}
              >
                <div>
                  {/* Photo Cover with Tag, Badge & Gallery Count */}
                  <div className="relative h-60 sm:h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                    {/* Top Package Badge & Icon */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${pkg.badgeColor}`}>
                        {pkg.badge}
                      </span>
                      <div className={`p-2 rounded-xl backdrop-blur-md ${pkg.isPrimary ? 'bg-gold/20 text-gold' : 'bg-black/40 text-cream'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Bottom Tag & Photo Count */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-cream">
                      <span className="font-semibold uppercase tracking-wider text-gold drop-shadow">
                        {pkg.tag}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] font-medium">
                        {pkg.gallery.length} Photos
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7">
                    <h3 className={`font-serif text-2xl font-bold mb-1.5 transition-colors ${pkg.isPrimary ? 'text-cream group-hover:text-gold' : 'text-forest group-hover:text-gold'}`}>
                      {pkg.title}
                    </h3>
                    <p className={`text-xs mb-5 font-light leading-relaxed line-clamp-2 ${pkg.isPrimary ? 'text-cream/80' : 'text-charcoal/70'}`}>
                      {pkg.shortSummary}
                    </p>

                    {/* Capacity Indicator Pill */}
                    <div className={`p-3 rounded-xl mb-5 flex items-center justify-between ${pkg.isPrimary ? 'bg-white/10' : 'bg-beige/40'}`}>
                      <div className="flex items-center space-x-2 text-xs">
                        <Users className={`w-4 h-4 ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`} />
                        <span className="font-semibold uppercase tracking-wider text-[11px]">Capacity</span>
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`}>
                        {pkg.capacity}
                      </span>
                    </div>

                    {/* Quick Specs (Beds & Baths) */}
                    <div className={`grid grid-cols-2 gap-2.5 py-3 border-y mb-5 text-xs ${pkg.isPrimary ? 'border-white/10 text-cream/80' : 'border-charcoal/10 text-charcoal/80'}`}>
                      <div className="flex items-center space-x-1.5">
                        <Bed className={`w-3.5 h-3.5 flex-shrink-0 ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`} />
                        <span className="truncate text-[11px]">{pkg.beds}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Bath className={`w-3.5 h-3.5 flex-shrink-0 ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`} />
                        <span className="truncate text-[11px]">{pkg.baths}</span>
                      </div>
                    </div>

                    {/* Features List (Top 3) */}
                    <ul className="space-y-2 mb-5 text-xs">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className={`w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`} />
                          <span className={`line-clamp-1 ${pkg.isPrimary ? 'text-cream/90' : 'text-charcoal/80'}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Shared vs Exclusive Callout Note */}
                    <div className={`p-3 rounded-xl border text-[11px] italic leading-relaxed mb-2 ${
                      pkg.isPrimary
                        ? 'bg-gold/10 border-gold/30 text-gold'
                        : 'bg-forest/5 border-forest/10 text-charcoal/70'
                    }`}>
                      {pkg.sharedNote}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <a
                    href={pkg.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow ${
                      pkg.isPrimary
                        ? 'bg-gold hover:bg-gold-light active:bg-gold-dark text-charcoal shadow-gold/20'
                        : 'bg-forest hover:bg-forest-light active:bg-forest-dark text-cream'
                    }`}
                  >
                    <span>Book on Airbnb ({pkg.code})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackageCode(pkg.code);
                      setActivePhotoIndex(0);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border flex items-center justify-center space-x-1.5 ${
                      pkg.isPrimary
                        ? 'border-white/20 hover:bg-white/10 text-cream'
                        : 'border-charcoal/20 hover:bg-beige/40 text-charcoal'
                    }`}
                  >
                    <span>View Details & Photos</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Detail Modal (opens when clicking card or View Details) */}
      {activePackage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedPackageCode(null)}
        >
          <div
            className="bg-cream rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-charcoal/20 relative p-6 sm:p-10 text-charcoal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPackageCode(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal transition-colors focus:outline-none"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${activePackage.badgeColor}`}>
                {activePackage.badge}
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest text-cream">
                {activePackage.tag}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest mb-2">
              {activePackage.title}
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
              {activePackage.fullDescription}
            </p>

            {/* Specs Summary Pill Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white rounded-2xl border border-charcoal/10 mb-6 text-xs text-charcoal/80 shadow-sm">
              <div className="flex items-center space-x-2.5">
                <Users className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Max Capacity</span>
                  <span className="font-bold text-forest">{activePackage.capacity}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Bed className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Bed Configuration</span>
                  <span className="font-semibold text-forest truncate">{activePackage.beds}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2.5">
                <Bath className="w-4 h-4 text-gold flex-shrink-0" />
                <div>
                  <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Bathrooms</span>
                  <span className="font-semibold text-forest truncate">{activePackage.baths}</span>
                </div>
              </div>
            </div>

            {/* Shared Amenities Callout */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed mb-6 flex items-start space-x-2.5 ${
              activePackage.isPrimary
                ? 'bg-gold/15 border-gold/40 text-charcoal'
                : 'bg-forest/5 border-forest/15 text-charcoal/80'
            }`}>
              <Info className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-forest font-semibold">Amenities Inclusion:</strong> {activePackage.sharedNote}
              </div>
            </div>

            {/* Interactive Photo Gallery Viewer */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3 flex items-center justify-between">
                <span>Property Photographs ({activePackage.gallery.length})</span>
                <span className="text-[11px] font-normal text-charcoal/60">Click thumbnail to switch preview</span>
              </h4>

              {/* Main Active Photo Preview */}
              <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-md border border-charcoal/10 mb-3 bg-black">
                <img
                  src={activePackage.gallery[activePhotoIndex] || activePackage.image}
                  alt={`${activePackage.title} photo preview`}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[11px] text-cream">
                  {activePhotoIndex + 1} of {activePackage.gallery.length}
                </div>
                {activePackage.gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex((prev) => (prev - 1 + activePackage.gallery.length) % activePackage.gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/75 text-cream transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhotoIndex((prev) => (prev + 1) % activePackage.gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/75 text-cream transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                {activePackage.gallery.map((photo, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActivePhotoIndex(i)}
                    className={`rounded-lg overflow-hidden h-14 border-2 transition-all ${
                      activePhotoIndex === i ? 'border-gold shadow-md scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`Thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Complete Included Amenities Checklist */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3">
                Complete Package Amenities & Inclusions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePackage.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center text-xs text-charcoal/80">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-gold flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
              <button
                type="button"
                onClick={() => setSelectedPackageCode(null)}
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal/70 hover:text-charcoal transition-colors"
              >
                Close Details
              </button>

              <a
                href={activePackage.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded-xl shadow-md transition-all duration-200"
              >
                <span>Book {activePackage.code} on Airbnb</span>
                <ExternalLink className="ml-2 w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
