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
  CalendarCheck,
  Building2,
  Crown,
  Layers,
} from 'lucide-react';

interface AccommodationProps {
  onBookClick?: (selectedPackageCode?: string) => void;
}

export const Accommodation: React.FC<AccommodationProps> = ({ onBookClick }) => {
  const [selectedUnit, setSelectedUnit] = useState<number | null>(null);

  const accommodations = [
    {
      id: 1,
      title: 'Two Cantilever Pods (Pod 1 & 2)',
      tag: 'Elevated Architectural Suites',
      image: propertyImages.accommodation.podMaster,
      gallery: [
        propertyImages.accommodation.podMaster,
        propertyImages.accommodation.podSecond,
        propertyImages.accommodation.podWardrobe,
        propertyImages.accommodation.podTvView,
        propertyImages.accommodation.luxuryBathroom,
        propertyImages.experiences.teaCoffeeStation,
      ],
      shortSummary:
        'Two air-conditioned cantilever bedroom pods elevated among trees, featuring panoramic glass balconies, plush king beds, and attached designer slate bathrooms.',
      capacity: 'Up to 9 Guests',
      beds: '2 King Beds + Extra Mattresses on Request',
      baths: '2 Attached Slate Bathrooms',
      packageCode: 'P1',
      airbnbUrl: siteConfig.packages.p1.airbnbUrl,
      amenities: [
        'Air Conditioning & Heating in both pods',
        '2 Attached private bathrooms with hot water',
        'Floor-to-ceiling glass & private sunset balconies',
        'Smart TVs with streaming applications',
        'High-speed Wi-Fi & vanity work desks',
        'Electric kettle, tea & coffee station',
        'Shared access to plunge pool, cricket nets & campfire',
      ],
      idealFor: 'Couples, families, and small friend groups seeking architectural luxury.',
    },
    {
      id: 2,
      title: 'The Treetopia Bunker',
      tag: 'Spacious Ground-Level Nature Suite',
      image: propertyImages.accommodation.bunkerExterior,
      gallery: [
        propertyImages.accommodation.bunkerExterior,
        propertyImages.accommodation.bunkerRoom,
        propertyImages.accommodation.bunkerDining,
        propertyImages.accommodation.bunkerCampfire,
        propertyImages.accommodation.bunkerNightLawn,
      ],
      shortSummary:
        'A generous ground-level architectural retreat nestled in fruit trees with a king-size bed, queen-size bunk beds, terrace cricket net access, and patio steps to the plunge pool.',
      capacity: 'Up to 12 Guests',
      beds: '1 King Bed + Queen Bunk Beds',
      baths: '1 Attached Modern Bathroom',
      packageCode: 'P2',
      airbnbUrl: siteConfig.packages.p2.airbnbUrl,
      amenities: [
        'King-size master bed + Queen bunk bed setup',
        'Attached modern bathroom with fresh linens',
        'Direct ground-level veranda stepping out to plunge pool',
        'Terrace rooftop access to professional cricket nets',
        'Covered open-air dining pavilion and kitchen access',
        'High-speed Wi-Fi & electric backup power',
        'Shared access to pool, cinema, cricket nets & campfire',
      ],
      idealFor: 'Larger families, team retreats, and friends wanting connected comfort.',
    },
    {
      id: 3,
      title: 'Luxury Glamping Tent',
      tag: 'Outdoor Countryside Camp',
      image: propertyImages.accommodation.tentCamping,
      gallery: [
        propertyImages.accommodation.tentCamping,
        propertyImages.accommodation.tentNight,
        propertyImages.experiences.movieAndCampfire,
        propertyImages.experiences.cricketNets,
      ],
      shortSummary:
        'A spacious, weatherproof family glamping dome tent pitched directly on the lawn facing the plunge pool and campfire. Ideal for stargazers and extra group capacity.',
      capacity: '3 - 4 Guests',
      beds: 'Plush Camp Bedding & Mattresses',
      baths: 'Full Access to Ground Floor Restroom Facilities',
      packageCode: 'P3',
      airbnbUrl: siteConfig.packages.p3.airbnbUrl,
      amenities: [
        'Spacious, weather-resistant family dome tent',
        'Pitched on soft lawn overlooking the plunge pool',
        'Plush foam mattresses, pillows & clean sheets',
        'Direct proximity to starlight campfire seating',
        'Surrounded by fruit trees and garden lighting',
        'Available alongside Pods or Bunker reservations',
      ],
      idealFor: 'Children, nature lovers, and extra guest capacity.',
    },
  ];

  const packages = [
    {
      code: 'P1',
      title: siteConfig.packages.p1.title,
      tagline: siteConfig.packages.p1.tagline,
      capacity: siteConfig.packages.p1.capacity,
      airbnbUrl: siteConfig.packages.p1.airbnbUrl,
      badge: 'Package 1',
      badgeColor: 'bg-forest text-cream',
      features: siteConfig.packages.p1.features,
      sharedNote: siteConfig.packages.p1.sharedNote,
      icon: Building2,
      isPrimary: false,
    },
    {
      code: 'P2',
      title: siteConfig.packages.p2.title,
      tagline: siteConfig.packages.p2.tagline,
      capacity: siteConfig.packages.p2.capacity,
      airbnbUrl: siteConfig.packages.p2.airbnbUrl,
      badge: 'Package 2',
      badgeColor: 'bg-charcoal text-cream',
      features: siteConfig.packages.p2.features,
      sharedNote: siteConfig.packages.p2.sharedNote,
      icon: Layers,
      isPrimary: false,
    },
    {
      code: 'P3',
      title: siteConfig.packages.p3.title,
      tagline: siteConfig.packages.p3.tagline,
      capacity: siteConfig.packages.p3.capacity,
      airbnbUrl: siteConfig.packages.p3.airbnbUrl,
      badge: 'Package 3 · Best Value',
      badgeColor: 'bg-gold text-charcoal font-bold',
      features: siteConfig.packages.p3.features,
      sharedNote: siteConfig.packages.p3.sharedNote,
      icon: Crown,
      isPrimary: true,
    },
  ];

  return (
    <section id="stay" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              Architectural Accommodations
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            Visual Accommodations <br />
            <span className="italic font-normal text-gold">& Private Sanctuary.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Choose your preferred way to stay. From our elevated cantilever pods and spacious ground-level
            Bunker to luxury lawn glamping under the open sky.
          </p>

          {/* Shared Amenities Notice Alert */}
          <div className="mt-6 text-left max-w-2xl mx-auto p-4 rounded-xl bg-forest/5 border border-forest/15 text-xs text-charcoal/80 flex items-start space-x-3 shadow-sm">
            <Info className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
            <div>
              <strong className="text-forest font-semibold">Shared Amenities & Pool Note:</strong> When booked individually, guests in the <strong>Two Pods</strong> and the <strong>Bunker</strong> share the outdoor plunge pool, cricket nets, open kitchen & bar, campfire lounge, and outdoor cinema. For <strong>100% private estate exclusivity</strong> of all facilities, book <strong>Package 3 (Two Pods + Bunker)</strong>.
            </div>
          </div>
        </div>

        {/* Accommodation Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {accommodations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-charcoal/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedUnit(item.id)}
            >
              <div>
                {/* Photo Cover with Tag & Hover Zoom */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-forest/90 text-cream backdrop-blur-sm border border-white/10 shadow">
                    {item.tag}
                  </span>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-sm text-[11px] text-cream font-medium">
                    {item.gallery.length} Photos
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-forest mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed mb-6 line-clamp-3">
                    {item.shortSummary}
                  </p>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-charcoal/10 mb-6 text-xs text-charcoal/80">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="font-semibold text-forest">{item.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="truncate">{item.beds}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Bath className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="truncate">{item.baths}</span>
                    </div>
                  </div>

                  {/* Preview Amenities */}
                  <div className="space-y-2 mb-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-forest">
                      Key Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {item.amenities.slice(0, 3).map((amenity, idx) => (
                        <li key={idx} className="flex items-center text-xs text-charcoal/70">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-forest/70 flex-shrink-0" />
                          <span className="line-clamp-1">{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedUnit(item.id);
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-beige/60 group-hover:bg-gold group-hover:text-charcoal text-forest text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-1.5 shadow-sm"
                >
                  <span>Click to View Full Details & Photos</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Booking Packages Section */}
        <div id="packages" className="pt-6 border-t border-charcoal/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold/15 border border-gold/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-forest">
                Official Reservation Packages
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-forest mb-3">
              Three Dedicated Booking Packages
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 font-light max-w-xl mx-auto">
              Select your package below to book directly on Airbnb with instant availability confirmation, or enquire via WhatsApp.
            </p>
          </div>

          {/* 3 Packages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={pkg.code}
                  className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 border relative ${
                    pkg.isPrimary
                      ? 'bg-forest text-cream shadow-2xl border-gold/40 scale-100 md:scale-105 z-10'
                      : 'bg-white text-charcoal shadow-lg hover:shadow-xl border-charcoal/10'
                  }`}
                >
                  {/* Top Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`p-2.5 rounded-xl ${
                          pkg.isPrimary ? 'bg-gold/20 text-gold' : 'bg-forest/10 text-forest'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${pkg.badgeColor}`}
                      >
                        {pkg.badge}
                      </span>
                    </div>

                    <h4
                      className={`font-serif text-2xl font-bold mb-1 ${
                        pkg.isPrimary ? 'text-cream' : 'text-forest'
                      }`}
                    >
                      {pkg.title}
                    </h4>
                    <p
                      className={`text-xs mb-4 font-light ${
                        pkg.isPrimary ? 'text-cream/80' : 'text-charcoal/70'
                      }`}
                    >
                      {pkg.tagline}
                    </p>

                    {/* Capacity Indicator */}
                    <div
                      className={`p-3 rounded-xl mb-6 flex items-center justify-between ${
                        pkg.isPrimary ? 'bg-white/10' : 'bg-beige/40'
                      }`}
                    >
                      <div className="flex items-center space-x-2 text-xs">
                        <Users className={`w-4 h-4 ${pkg.isPrimary ? 'text-gold' : 'text-forest'}`} />
                        <span className="font-medium">Capacity</span>
                      </div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          pkg.isPrimary ? 'text-gold' : 'text-forest'
                        }`}
                      >
                        {pkg.capacity}
                      </span>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-6 text-xs">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mr-2 mt-0.5 flex-shrink-0 ${
                              pkg.isPrimary ? 'text-gold' : 'text-forest'
                            }`}
                          />
                          <span
                            className={pkg.isPrimary ? 'text-cream/90' : 'text-charcoal/80'}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Shared vs Exclusive Callout */}
                    <p
                      className={`text-[11px] font-light italic p-3 rounded-lg border mb-6 ${
                        pkg.isPrimary
                          ? 'bg-gold/10 border-gold/30 text-gold'
                          : 'bg-charcoal/5 border-charcoal/10 text-charcoal/70'
                      }`}
                    >
                      {pkg.sharedNote}
                    </p>
                  </div>

                  {/* Booking Action Buttons */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    <a
                      href={pkg.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow ${
                        pkg.isPrimary
                          ? 'bg-gold hover:bg-gold-light text-charcoal shadow-gold/20'
                          : 'bg-forest hover:bg-forest-light text-cream'
                      }`}
                    >
                      <span>Book {pkg.code} on Airbnb</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        if (onBookClick) onBookClick(pkg.code);
                      }}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors border flex items-center justify-center space-x-1.5 ${
                        pkg.isPrimary
                          ? 'border-white/20 hover:bg-white/10 text-cream'
                          : 'border-charcoal/20 hover:bg-beige/40 text-charcoal'
                      }`}
                    >
                      <CalendarCheck className="w-3.5 h-3.5 text-gold" />
                      <span>Enquire on WhatsApp</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal (opens when clicking accommodation card) */}
      {selectedUnit !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedUnit(null)}
        >
          {(() => {
            const unit = accommodations.find((a) => a.id === selectedUnit);
            if (!unit) return null;
            return (
              <div
                className="bg-cream rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-charcoal/20 relative p-6 sm:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedUnit(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal transition-colors focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest text-cream mb-2">
                  {unit.tag}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-2">
                  {unit.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
                  {unit.shortSummary}
                </p>

                {/* Specs Pill Summary */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-white rounded-xl border border-charcoal/10 mb-6 text-xs text-charcoal/80">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Capacity</span>
                      <span className="font-semibold text-forest">{unit.capacity}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Bed Setup</span>
                      <span className="font-semibold text-forest">{unit.beds}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-4 h-4 text-gold flex-shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase text-charcoal/50 font-bold">Bathrooms</span>
                      <span className="font-semibold text-forest">{unit.baths}</span>
                    </div>
                  </div>
                </div>

                {/* Photo Gallery Grid */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3">
                    Interior & Surroundings Photographs
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {unit.gallery.map((photo, i) => (
                      <div key={i} className="rounded-xl overflow-hidden h-32 sm:h-40 shadow-sm border border-charcoal/10">
                        <img
                          src={photo}
                          alt={`${unit.title} photograph ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Complete Amenities Checklist */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3">
                    Included Suite Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {unit.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-xs text-charcoal/80">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-gold flex-shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-charcoal/10 flex flex-col sm:flex-row gap-3 justify-end items-stretch sm:items-center">
                  <a
                    href={unit.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light rounded shadow transition-colors"
                  >
                    <span>Book on Airbnb ({unit.packageCode})</span>
                    <ExternalLink className="ml-2 w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUnit(null);
                      if (onBookClick) onBookClick(unit.packageCode);
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream bg-forest hover:bg-forest-light rounded transition-colors"
                  >
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};
