import React from 'react';
import { propertyImages } from '../data/propertyImages';
import { ShieldCheck, Trees, Sparkles, ArrowRight, Eye } from 'lucide-react';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-cream text-charcoal relative overflow-hidden">
      {/* Decorative background watermarks */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Composition */}
          <div className="lg:col-span-6 relative">
            {/* Primary Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-charcoal/10 group">
              <img
                src={propertyImages.heroSecondary}
                alt="Treetopia Architectural Pods and Illuminated Plunge Pool at Dusk"
                className="w-full h-[460px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold mb-1 block">
                  Exclusive Estate
                </span>
                <p className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  Modern Cantilever Architecture on 9,000 sq.ft of Lush Private Land
                </p>
              </div>
            </div>

            {/* Inset Secondary Image Card (Floating Accent) */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-56 md:w-64 rounded-xl overflow-hidden shadow-2xl border-4 border-cream bg-white group/card">
              <img
                src={propertyImages.grounds.daylightPodsAndPool}
                alt="Daylight View of Treetopia Pool Deck and Pods"
                className="w-full h-36 object-cover group-hover/card:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="p-3 bg-white">
                <div className="text-[10px] font-semibold text-forest uppercase tracking-wider">
                  Daylight Sanctuary
                </div>
                <div className="text-xs text-charcoal/70">
                  Sun deck & private plunge pool
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-6 bg-forest text-cream py-3 px-5 rounded-xl shadow-xl border border-white/10 flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gold/20 text-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-gold">100% Private</div>
                <div className="text-[11px] text-cream/80">Never Shared With Strangers</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Storytelling */}
          <div className="lg:col-span-6 lg:pl-4">
            {/* Pill Section Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span className="text-xs font-bold uppercase tracking-widest text-forest">
                The Treetopia Story
              </span>
            </div>

            {/* Section Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-6 leading-[1.15]">
              More Than a Stay. <br />
              <span className="italic font-normal text-gold">A Private Nature Escape.</span>
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-charcoal/80 text-base sm:text-lg font-light leading-relaxed mb-8">
              <p>
                Discover <strong className="font-medium text-forest">TREETOPIA</strong>, a private countryside retreat in Unisenatham, Tamil Nadu, located just 30 minutes away from Electronic City, Bangalore.
              </p>
              <p>
                Designed for those who crave quiet luxury without disconnecting from comfort, Treetopia offers three distinct accommodation experiences: two modern cantilevered bedroom pods elevated among trees, the spacious ground-level Bunker suite, and an authentic lawn glamping tent.
              </p>
              <p className="text-sm text-charcoal/70">
                Whether you are booking the Two Pods (up to 9 guests), the Bunker (up to 12 guests), or reserving the entire 9,000 sq.ft estate for up to 21 guests, enjoy a refreshing plunge pool, floodlit cricket nets, open-air dining pavilion, and outdoor movie cinema under starry skies.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-charcoal/10 mb-8">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-forest/5 text-forest mt-0.5">
                  <Trees className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-forest">Secluded Countryside</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Surrounded by farmland and open sky near Denkanikottai.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-forest/5 text-forest mt-0.5">
                  <Eye className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-forest">Architectural Distinction</h4>
                  <p className="text-xs text-charcoal/70 mt-0.5">Modern angular steel pods with floor-to-ceiling glass.</p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div>
              <a
                href="#properties"
                onClick={onLearnMore}
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-forest hover:text-gold transition-colors duration-300 group focus:outline-none"
              >
                <span>Discover Properties & Packages</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-gold" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
