import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Navigation, Clock, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              Location & Access
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            Find Your Way <br />
            <span className="italic font-normal text-gold">To Tranquility.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Conveniently nestled in Unisenatham, Tamil Nadu, just a short 30-to-40-minute drive
            from South Bangalore's tech corridor.
          </p>
        </div>

        {/* Map & Travel Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Route Guide & Distance Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-charcoal/10 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-forest/10 text-forest">
                  <MapPin className="w-6 h-6 text-forest" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-forest">Property Address</h3>
                  <p className="text-xs text-charcoal/60 uppercase tracking-wider font-semibold">
                    Unisenatham · Tamil Nadu
                  </p>
                </div>
              </div>
              <p className="text-sm text-charcoal/80 font-light leading-relaxed mb-6">
                Located near Denkanikottai, Tamil Nadu. The retreat is nestled among agricultural greenery,
                providing an undisturbed private environment surrounded by open sky and trees.
              </p>

              <div className="space-y-4 pt-4 border-t border-charcoal/10">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest">Drive Time</h4>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      ~30–40 minutes from Electronic City, Bangalore via Anekal / Hosur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-forest">Recommended Route</h4>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      Bangalore (Electronic City) ➔ Anekal / Thally ➔ Denkanikottai ➔ Unisenatham.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Action Box */}
            <div className="bg-forest text-cream rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <h4 className="font-serif text-lg font-bold mb-2">Need Driving Directions?</h4>
                <p className="text-xs text-cream/80 font-light leading-relaxed mb-6">
                  Open your mobile navigation app for turn-by-turn routing directly to the estate vicinity.
                </p>
              </div>

              <a
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-lg bg-gold hover:bg-gold-light text-charcoal text-xs font-bold uppercase tracking-widest transition-colors shadow"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Verified Location Badge */}
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-[11px] text-emerald-900 flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Verified Property Location:</strong> Pinpointed at Treetopia Farmstay, Unisenatham, Tamil Nadu (~30 mins from Electronic City, Bangalore).
              </span>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden shadow-xl border border-charcoal/10 flex flex-col">
            <div className="p-4 bg-white border-b border-charcoal/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-charcoal/80 uppercase tracking-wider">
                  Denkanikottai & Unisenatham Vicinity Map
                </span>
              </div>
              <span className="text-[10px] text-charcoal/50 uppercase tracking-widest">
                Tamil Nadu, India
              </span>
            </div>

            <div className="relative w-full h-[360px] sm:h-[450px] lg:h-full min-h-[360px] bg-charcoal/5">
              <iframe
                title="Treetopia Location Map"
                src={siteConfig.location.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
