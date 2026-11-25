import React from 'react';
import { ArrowDown, Compass, CalendarCheck } from 'lucide-react';
import { propertyImages } from '../data/propertyImages';

interface HeroProps {
  onExploreClick?: () => void;
  onBookClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={propertyImages.hero}
          alt="Treetopia Private Luxury Farmstay and Elevated Pods at Sunset"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom transition-transform duration-1000 ease-out"
        />
        {/* Luxury Vignette & Contrast Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-black/60" />
        <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
      </div>

      {/* Content Center Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20">
        {/* Location & Brand Pill Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-gold/40 mb-6 shadow-inner">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-gold uppercase">
            UNISENATHAM · TAMIL NADU · INDIA
          </span>
        </div>

        {/* Main Hero Heading */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-cream drop-shadow-md uppercase mb-6 leading-[1.08]">
          Escape the <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold">Ordinary.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-cream/90 font-light leading-relaxed mb-10 drop-shadow">
          A private nature retreat where modern cantilever architecture and ground-level bunker comfort
          meet peaceful surroundings, a private plunge pool, and unforgettable outdoor experiences.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#about"
            onClick={onExploreClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-lg shadow-gold/20 transform hover:-translate-y-0.5 group"
          >
            <Compass className="mr-2 w-4 h-4 text-charcoal group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Treetopia</span>
          </a>

          <a
            href="#stay"
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold tracking-widest uppercase text-cream bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/30 hover:border-gold transition-all duration-300 rounded shadow-md transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="mr-2 w-4 h-4 text-gold" />
            <span>Book Your Stay</span>
          </a>
        </div>
      </div>

      {/* Floating Property Highlights Bar at Hero Bottom */}
      <div className="absolute bottom-14 left-0 right-0 z-10 hidden md:block">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-4 py-3 px-6 rounded-xl bg-charcoal/60 backdrop-blur-md border border-white/10 text-cream/80 text-center divide-x divide-white/10">
            <div>
              <div className="text-base font-serif font-bold text-gold">9,000 sq.ft</div>
              <div className="text-[10px] uppercase tracking-wider text-cream/60">Private Estate</div>
            </div>
            <div>
              <div className="text-base font-serif font-bold text-gold">2 Pods · Bunker · Tent</div>
              <div className="text-[10px] uppercase tracking-wider text-cream/60">Accommodations</div>
            </div>
            <div>
              <div className="text-base font-serif font-bold text-gold">Up to 21 Guests</div>
              <div className="text-[10px] uppercase tracking-wider text-cream/60">Flexible Capacity</div>
            </div>
            <div>
              <div className="text-base font-serif font-bold text-gold">4.65 ★ Verified</div>
              <div className="text-[10px] uppercase tracking-wider text-cream/60">Airbnb Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-cream/70 hover:text-gold transition-colors duration-300 flex flex-col items-center group focus:outline-none"
      >
        <span className="text-[9px] uppercase tracking-ultra text-cream/60 group-hover:text-gold mb-1 font-medium">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-gold" />
      </a>
    </section>
  );
};
