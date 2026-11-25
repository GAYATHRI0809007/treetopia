import React from 'react';
import {
  Maximize2,
  Building2,
  Tent,
  Waves,
  Trophy,
  Film,
  UtensilsCrossed,
  Flame,
  ShieldCheck,
} from 'lucide-react';

export const Highlights: React.FC = () => {
  const highlights = [
    {
      icon: Maximize2,
      title: '9,000 Sq.Ft Private Estate',
      description: 'The entire gated property is reserved exclusively for your booking—no shared spaces.',
      stat: 'Exclusively Yours',
    },
    {
      icon: Building2,
      title: '2 Modern Cantilever Pods',
      description: 'Elevated architectural bedroom pods with king beds, AC, smart TVs, and panoramic balconies.',
      stat: '2 Private Pods',
    },
    {
      icon: Tent,
      title: 'Luxury Camping Setup',
      description: 'Spacious outdoor family tent pitched on the lawn for an authentic glamping retreat under the stars.',
      stat: 'Glamping Experience',
    },
    {
      icon: Waves,
      title: 'Private Plunge Pool',
      description: 'Cool off in the crystal-clear plunge pool complete with underwater lighting and poolside loungers.',
      stat: 'All-Day Pool Access',
    },
    {
      icon: Trophy,
      title: 'Cricket Nets & Turf Pitch',
      description: 'Professional batting pitch with full netting and floodlights for competitive group matches.',
      stat: 'Floodlit Pitch',
    },
    {
      icon: Film,
      title: 'Open-Air Movie Cinema',
      description: 'High-definition projector screen and audio setup under the covered deck for evening streaming.',
      stat: 'Outdoor Home Theater',
    },
    {
      icon: UtensilsCrossed,
      title: 'Open Kitchen & Social Bar',
      description: 'Equipped with a refrigerator, barstools, BBQ station, and our illuminated TREETOPIA neon sign.',
      stat: 'Self-Cooking & BBQ',
    },
    {
      icon: Flame,
      title: 'Campfire Pit & Lawn',
      description: 'Dedicated stone campfire seating zone for warm conversations, music, and roasting marshmallows.',
      stat: 'Starlight Evenings',
    },
    {
      icon: ShieldCheck,
      title: '24/7 Security & Power Backup',
      description: 'Fully fenced boundary with round-the-clock CCTV surveillance and reliable generator backup.',
      stat: 'Worry-Free Stay',
    },
  ];

  return (
    <section className="py-24 bg-forest text-cream relative overflow-hidden">
      {/* Decorative texture / subtle grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A36A_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Estate Amenities & Features
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-cream mb-4">
            Architectural Comfort. <br />
            <span className="italic font-normal text-gold">Unrivalled Exclusivity.</span>
          </h2>
          <p className="text-cream/80 text-base sm:text-lg font-light leading-relaxed">
            Every feature at Treetopia has been curated to create seamless moments of calm relaxation
            and vibrant outdoor celebrations with your group.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/40 transition-all duration-300 relative flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold/80 px-2.5 py-1 rounded-full bg-white/5">
                      {item.stat}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-cream/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
