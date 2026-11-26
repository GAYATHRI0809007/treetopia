import React from 'react';
import { propertyImages } from '../data/propertyImages';
import { siteConfig } from '../data/siteConfig';
import { ExternalLink, CalendarCheck, ShieldCheck } from 'lucide-react';

interface BookingCTAProps {
  onOpenEnquiry?: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = () => {
  return (
    <section className="relative min-h-[520px] sm:min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Night Photo */}
      <div className="absolute inset-0 z-0">
        <img
          src={propertyImages.nightExterior}
          alt="Treetopia Architectural Pods and Illuminated Plunge Pool at Night"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        {/* Luxury Dark Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-black/70" />
        <div className="absolute inset-0 bg-forest/30 mix-blend-multiply" />
      </div>

      {/* Content Center */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Brand Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Reserve Your Private Stay
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-cream mb-6 leading-tight">
          Your Escape is <br />
          <span className="italic font-normal text-gold">Waiting.</span>
        </h2>

        {/* Supporting Narrative */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-cream/90 font-light leading-relaxed mb-10">
          Leave the everyday behind. Choose Two Pods (up to 9 guests), The Bunker (up to 12 guests),
          or reserve the entire 9,000 sq.ft private estate for up to 21 guests.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
          {/* Airbnb Direct Booking */}
          <a
            href={siteConfig.airbnb.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-xl hover:shadow-gold/30 transform hover:-translate-y-0.5"
          >
            <CalendarCheck className="w-4 h-4 mr-2 text-charcoal" />
            <span>Book on Airbnb</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-charcoal/80" />
          </a>

          {/* Properties Anchor */}
          <a
            href="#properties"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cream bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-gold transition-all duration-300 rounded shadow-md transform hover:-translate-y-0.5 group"
          >
            <span>Explore Properties & Packages</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-cream/70 group-hover:text-gold transition-colors" />
          </a>
        </div>

        {/* Trust Badges */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 text-xs text-cream/70 font-light">
          <div className="flex items-center">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-gold" />
            <span>9,000 Sq.Ft Gated Estate</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center">
            <span>Verified 4.65 ★ Airbnb Rating</span>
          </div>
          <span className="hidden sm:inline text-white/20">•</span>
          <div className="flex items-center">
            <span>Up to 21 Guests (9 + 12)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
