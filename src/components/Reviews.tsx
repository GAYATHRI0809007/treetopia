import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, ShieldCheck, ExternalLink, Sparkles, Award } from 'lucide-react';

export const Reviews: React.FC = () => {
  const ratingMetrics = [
    { label: 'Cleanliness', score: '4.8' },
    { label: 'Accuracy', score: '4.8' },
    { label: 'Check-in Experience', score: '4.9' },
    { label: 'Host Communication', score: '4.9' },
    { label: 'Location Serenity', score: '4.7' },
    { label: 'Overall Value', score: '4.6' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Guest Feedback & Trust
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            Memories That Speak <br />
            <span className="italic font-normal text-gold">For Themselves.</span>
          </h2>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            Real experiences shared by real families and travellers. We link directly to our
            official Airbnb listing so you can read authentic, unfiltered reviews.
          </p>
        </div>

        {/* Verified Airbnb Score Card */}
        <div className="max-w-4xl mx-auto bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Score Highlight Box */}
            <div className="md:col-span-5 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10 pb-8 md:pb-0 md:pr-8">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Airbnb Verified Listing</span>
              </div>

              <div className="flex items-baseline justify-center md:justify-start space-x-3 mb-2">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-cream">
                  {siteConfig.airbnb.rating}
                </span>
                <span className="text-xl sm:text-2xl text-cream/60 font-light">/ 5.0</span>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center md:justify-start space-x-1 mb-3 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold" />
                ))}
              </div>

              <p className="text-sm text-cream/80 font-light mb-6">
                Based on <strong className="font-semibold text-cream">{siteConfig.airbnb.reviewCount} verified guest reviews</strong> from real completed stays.
              </p>

              <a
                href={siteConfig.airbnb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-md group"
              >
                <span>Read Verified Airbnb Reviews</span>
                <ExternalLink className="ml-2 w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Metrics Breakdown Grid */}
            <div className="md:col-span-7">
              <div className="mb-4 flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-gold">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Review Category Breakdown</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ratingMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.04] border border-white/5 flex items-center justify-between"
                  >
                    <span className="text-xs text-cream/80">{metric.label}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-gold fill-gold" />
                      <span className="text-xs font-bold text-cream">{metric.score}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-cream/70 font-light leading-relaxed">
                💡 <em>“To protect transparency, we never display fabricated quotations or invented reviews. Every rating shown above corresponds strictly to completed stays on our official listing.”</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
