import React from 'react';
import { propertyImages } from '../data/propertyImages';
import { Trophy, Film, Waves, Flame, Sparkles, Check } from 'lucide-react';

export const Experiences: React.FC = () => {
  const activities = [
    {
      id: 'cricket',
      title: 'Floodlit Cricket Nets',
      subtitle: 'Turf Pitch & Night Lighting',
      icon: Trophy,
      image: propertyImages.experiences.cricketNets,
      description:
        'Step onto our dedicated batting turf pitch surrounded by professional safety netting. Equipped with floodlights so your friendly group matches can continue long after sunset.',
      highlights: [
        'Dedicated Turf Batting Pitch',
        'High-Intensity Night Floodlights',
        'Full Perimeter Safety Netting',
        'Ideal for Friendly Tournaments',
      ],
    },
    {
      id: 'cinema',
      title: 'Outdoor Cinema Under The Stars',
      subtitle: 'HD Projector & Poolside Lounge',
      icon: Film,
      image: propertyImages.experiences.cinemaLoungeNight,
      description:
        'Watch live cricket matches, favorite movies, or family videos on a large projection screen set up under the sheltered cantilever pavilion right beside the illuminated pool.',
      highlights: [
        'Large High-Definition Projection Screen',
        'Sheltered Outdoor Seating Deck',
        'Poolside Audio & Evening Ambience',
        'Connect Your Streaming Devices',
      ],
    },
    {
      id: 'pool',
      title: 'Private Plunge Pool',
      subtitle: 'Crystal Blue & Mood Lighting',
      icon: Waves,
      image: propertyImages.experiences.nightPoolAndBar,
      description:
        'Take a refreshing swim in your private plunge pool. Enjoy sun loungers during sunny afternoons and magical underwater blue illumination once the evening sets in.',
      highlights: [
        'Exclusively Reserved for Your Group',
        'Vibrant Cyan Night Illumination',
        'Poolside Sun Loungers & Parasol',
        'Adjacent to Covered Open Kitchen',
      ],
    },
    {
      id: 'campfire',
      title: 'Campfire & Barbecue Nights',
      subtitle: 'Open Flame & Countryside Skies',
      icon: Flame,
      image: propertyImages.experiences.movieAndCampfire,
      description:
        'Gather the whole family or friend group around the dedicated stone campfire pit on the lawn. Roast marshmallows, share stories, and grill with our BBQ station.',
      highlights: [
        'Dedicated Stone Campfire Pit',
        'Open-Air Barbecue Grill Station',
        'Spacious Lawn Seating Under Stars',
        'Quiet Countryside Night Air',
      ],
    },
  ];

  return (
    <section id="activities" className="py-24 sm:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Estate Activities
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            Outdoor Activities <br />
            <span className="italic font-normal text-gold">& Recreation.</span>
          </h2>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            At Treetopia, luxury means having space to play, celebrate, and unwind together.
            All activities are included directly within your private stay.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {activities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group bg-white/5 hover:bg-white/[0.08] rounded-2xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 flex flex-col sm:flex-row shadow-xl"
              >
                {/* Photo Side */}
                <div className="sm:w-1/2 relative h-64 sm:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 sm:from-transparent sm:bg-gradient-to-r sm:to-transparent" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-forest/90 text-gold backdrop-blur-md border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs text-cream/80">
                          <Check className="w-3.5 h-3.5 text-gold mr-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Only exact wording 'Included with Stay' */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs uppercase tracking-wider text-gold font-semibold">
                      Included with Stay
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
