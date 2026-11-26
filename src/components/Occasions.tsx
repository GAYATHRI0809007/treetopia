import React from 'react';
import { propertyImages } from '../data/propertyImages';
import { Heart, Sunset, Cake, Briefcase, Sparkles, ArrowRight } from 'lucide-react';

interface OccasionsProps {
  onPlanStay?: () => void;
}

export const Occasions: React.FC<OccasionsProps> = ({ onPlanStay }) => {
  const occasions = [
    {
      id: 'family',
      title: 'Family Getaways',
      badge: 'All Generations',
      icon: Heart,
      image: propertyImages.grounds.daylightPodsAndPool,
      description:
        'A secure, gated 9,000 sq.ft sanctuary where grandparents relax on the shaded balcony, kids splash in the plunge pool, and the whole family gathers for lawn games.',
    },
    {
      id: 'weekend',
      title: 'Weekend City Escapes',
      badge: '30 Mins from E-City',
      icon: Sunset,
      image: propertyImages.grounds.estateOverviewDusk,
      description:
        'A quick 30-minute drive from South Bangalore transports you from traffic to tranquil countryside calm. Enjoy the gentle breeze, open skies, and pure silence.',
    },
    {
      id: 'birthdays',
      title: 'Intimate Celebrations',
      badge: 'Private & Memorable',
      icon: Cake,
      image: propertyImages.experiences.nightPoolAndBar,
      description:
        'Celebrate milestone birthdays and family anniversaries with illuminated pool lights, outdoor barbecue cooking, music, and an outdoor movie screening.',
    },
    {
      id: 'retreats',
      title: 'Professional Team Offsites',
      badge: 'Focus & Camaraderie',
      icon: Briefcase,
      image: propertyImages.experiences.cinemaLoungeNight,
      description:
        'High-speed Wi-Fi, modern pod workspaces, and projector screen facilities make Treetopia an inspiring retreat for focused brainstorming and friendly cricket matches.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-cream text-charcoal relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest/10 border border-forest/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold uppercase tracking-widest text-forest">
              Crafted For Connection
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-forest mb-4">
            Created for Connection. <br />
            <span className="italic font-normal text-gold">Designed for Comfort.</span>
          </h2>
          <p className="text-charcoal/80 text-base sm:text-lg font-light leading-relaxed">
            Every corner of Treetopia is shaped to bring people together in complete privacy,
            surrounded by modern architectural elegance and untouched greenery.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {occasions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-charcoal/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-forest/90 text-cream backdrop-blur-sm border border-white/10">
                      {item.badge}
                    </span>
                    <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-gold text-charcoal shadow">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-forest mb-2.5 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-charcoal/70 font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#properties"
                    onClick={onPlanStay}
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-forest group-hover:text-gold transition-colors"
                  >
                    <span>Plan Your Stay</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
