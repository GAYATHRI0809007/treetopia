import React, { useState } from 'react';
import { propertyImages } from '../data/propertyImages';
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
} from 'lucide-react';

interface AccommodationProps {
  onBookClick?: () => void;
}

export const Accommodation: React.FC<AccommodationProps> = ({ onBookClick }) => {
  const [selectedPod, setSelectedPod] = useState<number | null>(null);

  const accommodations = [
    {
      id: 1,
      title: 'Master Pod Suite (Pod 1)',
      tag: 'Elevated Cantilever Pod',
      image: propertyImages.accommodation.podMaster,
      gallery: [
        propertyImages.accommodation.podMaster,
        propertyImages.accommodation.luxuryBathroom,
        propertyImages.accommodation.podTvView,
        propertyImages.experiences.teaCoffeeStation,
      ],
      description:
        'Architecturally elevated above the grounds with floor-to-ceiling panoramic glass doors opening onto a private balcony. Features a luxury king bed with warm backlight illumination and an en-suite designer bathroom.',
      capacity: '2 - 3 Guests',
      beds: '1 King Bed + Extra Mattress on Request',
      baths: '1 En-suite Slate Bathroom',
      amenities: [
        'Air Conditioning & Heating',
        'Attached Modern Bathroom',
        'Private Sun Balcony',
        'Smart TV with Streaming Apps',
        'High-Speed Wi-Fi',
        'Electric Kettle & Tea Setup',
      ],
    },
    {
      id: 2,
      title: 'Canopy Pod Suite (Pod 2)',
      tag: 'Elevated Cantilever Pod',
      image: propertyImages.accommodation.podSecond,
      gallery: [
        propertyImages.accommodation.podSecond,
        propertyImages.accommodation.podWardrobe,
        propertyImages.accommodation.luxuryBathroom,
        propertyImages.grounds.daylightPodsAndPool,
      ],
      description:
        'Mirroring the cantilever architectural beauty, this suite features plush king bedding, dark grey minimalist slate finishes, built-in wardrobes, a dedicated work desk, and elevated views across the estate.',
      capacity: '2 - 3 Guests',
      beds: '1 King Bed',
      baths: '1 En-suite Slate Bathroom',
      amenities: [
        'Air Conditioning',
        'Built-in Slate Wardrobe',
        'Work / Vanity Desk',
        'En-suite Bathroom with Shower',
        'Panoramic Window Wall',
        'Private Balcony Overlook',
      ],
    },
    {
      id: 3,
      title: 'Luxury Glamping Tent',
      tag: 'Outdoor Lawn Camp',
      image: propertyImages.accommodation.tentCamping,
      gallery: [
        propertyImages.accommodation.tentCamping,
        propertyImages.experiences.movieAndCampfire,
        propertyImages.grounds.daylightPodsAndPool,
      ],
      description:
        'A spacious, weatherproof family glamping dome tent pitched directly on the manicured lawn facing the plunge pool. Ideal for stargazers and children seeking an authentic countryside camping adventure.',
      capacity: '3 - 4 Guests',
      beds: 'Comfortable Camp Bedding & Mattresses',
      baths: 'Access to Ground Floor Restroom Facilities',
      amenities: [
        'Spacious Dome Tent Pitch',
        'Direct Access to Plunge Pool',
        'Beside Campfire Seating',
        'Full Power Backup Access',
        'Night Ambient Garden Lighting',
        'Secure Fenced Grounds',
      ],
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
              Boutique Accommodation
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            Find Your Perfect <br />
            <span className="italic font-normal text-gold">Sanctuary.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Crafted with modern architectural aesthetics and deep comfort. Stay elevated in our
            cantilever bedroom pods or immerse yourself in nature within our luxury lawn glamping tent.
          </p>

          {/* Important Notice Callout */}
          <div className="mt-6 inline-flex items-center space-x-2 text-xs text-charcoal/70 bg-beige/40 px-4 py-2 rounded-lg border border-beige">
            <Info className="w-4 h-4 text-forest flex-shrink-0" />
            <span>
              <strong>Note:</strong> Treetopia is booked as an <strong>entire private estate</strong> for your group. All units above are included in your private stay.
            </span>
          </div>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-charcoal/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image Cover with Tag */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-forest/90 text-cream backdrop-blur-sm border border-white/10">
                    {item.tag}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-forest mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Quick Specs Badges */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-charcoal/10 mb-6 text-xs text-charcoal/80">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bed className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="truncate">{item.beds}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <Bath className="w-4 h-4 text-gold flex-shrink-0" />
                      <span>{item.baths}</span>
                    </div>
                  </div>

                  {/* Verified Amenities Bullet List */}
                  <div className="space-y-2 mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-forest">
                      Key Amenities
                    </div>
                    <ul className="space-y-1.5">
                      {item.amenities.slice(0, 4).map((amenity, idx) => (
                        <li key={idx} className="flex items-center text-xs text-charcoal/70">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-forest/70 flex-shrink-0" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedPod(item.id)}
                  className="w-full py-2.5 px-4 rounded-lg bg-beige/60 hover:bg-beige text-forest text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center space-x-1.5 focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <span>Explore Interior Details</span>
                  <ChevronRight className="w-3.5 h-3.5 text-forest" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusive Estate Booking Banner */}
        <div className="mt-16 bg-forest rounded-2xl p-8 sm:p-12 text-cream shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none hidden md:block">
            <img
              src={propertyImages.grounds.architecturalDetailNight}
              alt="Night Exterior View"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-widest text-gold mb-2 block">
              Complete Private Reservation
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4">
              Book the Complete 9,000 Sq.Ft Property
            </h3>
            <p className="text-sm sm:text-base text-cream/80 font-light leading-relaxed mb-8">
              Treetopia is rented exclusively as a whole. Your reservation grants private access to both
              modern pods, the glamping tent, private plunge pool, cricket nets, open kitchen & BBQ bar,
              and projector cinema. No other guests will ever share your retreat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-lg"
              >
                <span>Reserve on Airbnb</span>
                <ExternalLink className="ml-2 w-4 h-4 text-charcoal" />
              </button>
              <span className="text-xs text-cream/70 sm:ml-4 text-center sm:text-left">
                Ideal for families & working professionals (up to 12 guests).
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Interior Details Modal */}
      {selectedPod !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPod(null)}
        >
          {(() => {
            const pod = accommodations.find((a) => a.id === selectedPod);
            if (!pod) return null;
            return (
              <div
                className="bg-cream rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-charcoal/20 relative p-6 sm:p-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPod(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal transition-colors focus:outline-none"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-forest text-cream mb-2">
                  {pod.tag}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-4">
                  {pod.title}
                </h3>
                <p className="text-sm text-charcoal/80 font-light mb-6">
                  {pod.description}
                </p>

                {/* Photo Gallery Grid */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {pod.gallery.map((photo, i) => (
                    <div key={i} className="rounded-xl overflow-hidden h-36 sm:h-44 shadow-sm">
                      <img
                        src={photo}
                        alt={`${pod.title} preview ${i + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>

                {/* Complete Amenities List */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3">
                    All Included Amenities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {pod.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center text-xs text-charcoal/80">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-gold flex-shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action in Modal */}
                <div className="pt-4 border-t border-charcoal/10 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedPod(null);
                      if (onBookClick) onBookClick();
                    }}
                    className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-cream bg-forest hover:bg-forest-light transition-colors rounded"
                  >
                    Check Stay Availability
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
