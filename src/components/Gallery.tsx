import React, { useState, useEffect, useCallback } from 'react';
import { propertyImages, PropertyImage } from '../data/propertyImages';
import {
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
} from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Architecture & Grounds' },
    { id: 'bedroom', label: 'Pods & Glamping' },
    { id: 'pool', label: 'Pool & Lounge' },
    { id: 'experience', label: 'Experiences' },
    { id: 'amenity', label: 'Amenities' },
  ];

  const filteredImages: PropertyImage[] =
    activeCategory === 'all'
      ? propertyImages.gallery
      : propertyImages.gallery.filter((img) => img.category === activeCategory);

  // Lightbox navigation helpers
  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => ((prev! + 1) % filteredImages.length));
    }
  }, [lightboxIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation (Arrow keys + Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              Visual Journey
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            A Glimpse Into <br />
            <span className="italic font-normal text-gold">Treetopia.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Explore authentic photographs of our elevated pods, plunge pool, cricket nets, outdoor cinema,
            and tranquil nature surroundings.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <div className="hidden sm:flex items-center text-xs font-semibold text-charcoal/50 mr-2 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 mr-1" />
            Filter:
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold ${
                  isActive
                    ? 'bg-forest text-cream shadow-md shadow-forest/20'
                    : 'bg-white text-charcoal/70 hover:bg-beige/60 hover:text-charcoal border border-charcoal/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.src + index}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-charcoal/5 aspect-[4/3] cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Photo Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="self-end p-2 rounded-full bg-black/40 text-gold backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold block mb-1">
                    {image.category}
                  </span>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-cream line-clamp-1">
                    {image.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Count Footnote */}
        <div className="mt-8 text-center text-xs text-charcoal/50 font-light">
          Showing {filteredImages.length} genuine property photographs · Click any photo for full view
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Controls Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-cream z-10 px-2 sm:px-6">
            <div className="flex items-center space-x-3">
              <span className="font-serif font-bold tracking-widest text-gold text-lg">
                TREETOPIA
              </span>
              <span className="text-white/30">|</span>
              <span className="text-xs text-cream/70">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-cream transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal text-cream transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Photo Center Container */}
          <div
            className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl select-none"
            />
            {/* Image Details Caption */}
            <div className="mt-4 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold mb-1 block">
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-cream">
                {filteredImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-cream/70 font-light max-w-xl mx-auto mt-1">
                {filteredImages[lightboxIndex].alt}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal text-cream transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gold"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
