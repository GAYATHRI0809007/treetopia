import React, { useState } from 'react';
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
  X,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface HighlightFeature {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  image: string;
  stat: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
}

export const Highlights: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const highlights: HighlightFeature[] = [
    {
      id: 1,
      icon: Maximize2,
      title: '9,000 Sq.Ft Gated Estate',
      image: '/photos/retreat_dusk_overview.jpg',
      stat: 'Up to 21 Guests',
      shortDescription:
        'Private gated countryside retreat with lush fruit trees, expansive lawns, and flexible reservation options.',
      fullDescription:
        'Treetopia is nestled across a sprawling 9,000 sq.ft private gated estate in Unisenatham, Tamil Nadu, surrounded by peaceful agricultural countryside. The estate offers complete flexibility—book individual units (Two Pods or The Bunker) or reserve the entire estate exclusively for up to 21 guests.',
      details: [
        '9,000 sq.ft private gated plot with boundary walls and internal parking',
        'Accommodates up to 21 guests across Two Pods, Bunker & Glamping Tent',
        'Lush green lawns and orchard surrounded by fruit trees',
        '24/7 security with CCTV surveillance and full generator power backup',
        'Secluded rural setting just 30–40 mins drive from Electronic City, Bangalore',
      ],
    },
    {
      id: 2,
      icon: Building2,
      title: '2 Modern Cantilever Pods',
      image: '/photos/exterior_dusk_pods.jpg',
      stat: 'Up to 9 Guests',
      shortDescription:
        'Elevated architectural bedroom pods with king beds, AC, smart TVs, attached slate bathrooms, and sunset balconies.',
      fullDescription:
        'Elevated gracefully above the grounds on modern steel cantilever frames, Pod 1 and Pod 2 offer an architectural retreat. Each pod features floor-to-ceiling panoramic glass doors opening to private sunset balconies, designer en-suite bathrooms, and plush king bedding.',
      details: [
        'Two private elevated pods (Master Suite & Canopy Suite)',
        'Plush king bedding + extra mattresses on request (up to 9 guests)',
        'Attached modern slate bathrooms with fresh linens and hot showers',
        'Private sunset balconies overlooking the pool and countryside orchard',
        'In-room air conditioning, smart TVs, and dedicated tea/coffee station',
      ],
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'The Treetopia Bunker',
      image: '/photos/bunker_exterior.jpg',
      stat: 'Up to 12 Guests',
      shortDescription:
        'Spacious ground-level architectural suite with king bed, queen bunk beds, attached bath, and rooftop cricket net access.',
      fullDescription:
        'A generous ground-level architectural retreat designed for group camaraderie and comfort. Situated amidst fruit trees, The Bunker features a master king-size bed and queen-size bunk beds, terrace rooftop access to the cricket nets, and veranda steps leading straight to the plunge pool.',
      details: [
        'Generous ground-level suite accommodating up to 12 guests',
        'King-size master bed paired with solid queen-size bunk beds',
        'Attached modern bathroom with clean fresh towels and amenities',
        'Direct ground-level veranda stepping out to the plunge pool deck',
        'Rooftop staircase directly accessing the professional cricket nets',
      ],
    },
    {
      id: 4,
      icon: Tent,
      title: 'Luxury Camping Setup',
      image: '/photos/camping_tent_setup.jpg',
      stat: 'Glamping Setup',
      shortDescription:
        'Weatherproof family dome tent pitched on the lawn facing the plunge pool for an authentic outdoor glamping experience.',
      fullDescription:
        'Immerse your group in nature with our spacious, high-grade dome camping tent pitched directly on the manicured lawn. Fitted with comfortable foam mattresses, clean sheets, and pillows, it offers children and adventurous stargazers an authentic camping retreat.',
      details: [
        'Weatherproof family dome tent pitched on soft natural turf',
        'Fitted with foam mattresses, clean bedsheets, and plush pillows',
        'Situated right beside the plunge pool and stone campfire pit',
        'Full access to ground-floor bathroom and electricity power backup',
        'Ideal for stargazing and extra guest sleeping capacity',
      ],
    },
    {
      id: 5,
      icon: Waves,
      title: 'Plunge Pool & Sun Deck',
      image: '/photos/garden_pathway.jpg',
      stat: 'Pool & Lounge',
      shortDescription:
        'Cool off in the crystal-clear plunge pool with underwater lighting and poolside loungers (shared or 100% exclusive).',
      fullDescription:
        'The centerpiece of Treetopia is our private outdoor plunge pool, finished with submerged steps and evening illumination. Relax on the comfortable poolside sun loungers under shade umbrellas by day, and enjoy serene nighttime dips under the illuminated cantilever pods.',
      details: [
        'Crystal-clear plunge pool with shallow entry steps',
        'Poolside timber deck with sun loungers and umbrellas',
        'Underwater LED lighting for evening and night swims',
        'Shared between Pods and Bunker, or 100% exclusive on full booking',
        'Fresh water filtration and regular hygienic maintenance',
      ],
    },
    {
      id: 6,
      icon: Trophy,
      title: 'Cricket Nets & Turf Pitch',
      image: '/photos/cricket_nets_pitch.jpg',
      stat: 'Floodlit Pitch',
      shortDescription:
        'Professional batting pitch with full netting and floodlights for competitive group matches day and night.',
      fullDescription:
        'A dedicated sports facility featuring an authentic turf batting track, full protective perimeter netting, and high-intensity overhead floodlights for competitive group matches from dusk until late evening.',
      details: [
        'Dedicated turf batting track with safety perimeter netting',
        'High-intensity overhead floodlighting for night matches',
        'Cricket bats, practice balls, and wickets available',
        'Accessible directly from the grounds and Bunker terrace',
        'Perfect for family tournaments and friendly group matches',
      ],
    },
    {
      id: 7,
      icon: Film,
      title: 'Open-Air Movie Cinema',
      image: '/photos/night_movie_campfire.jpg',
      stat: 'Outdoor Cinema',
      shortDescription:
        'High-definition projector screen and audio setup under the covered deck for evening streaming under starry skies.',
      fullDescription:
        'Turn your evening into a starlight cinema experience. Our high-definition projector screen and powerful outdoor audio setup let you stream your favorite movies, web series, or live cricket matches right beside the campfire and illuminated plunge pool.',
      details: [
        'Large-format high-definition projector screen',
        'High-quality outdoor speakers with rich sound',
        'HDMI and wireless connectivity for laptops and streaming devices',
        'Cozy seating under the covered deck and open lawn',
        'Ideal for evening film screenings, celebrations, and sports matches',
      ],
    },
    {
      id: 8,
      icon: UtensilsCrossed,
      title: 'Dining Pavilion & Social Bar',
      image: '/photos/outdoor_bar_counter.jpg',
      stat: 'Open Dining & BBQ',
      shortDescription:
        'Covered open pavilion equipped with refrigerator, wooden barstools, BBQ station, and our illuminated neon sign.',
      fullDescription:
        'The social heart of Treetopia. Our covered open-air dining pavilion and bar counter feature high wooden barstools, food prep counters, a refrigerator, a charcoal BBQ grill setup, and our glowing TREETOPIA neon sign for memorable evenings.',
      details: [
        'Spacious covered pavilion with bar counter and high stools',
        'Equipped with refrigerator, kettle, and food prep surfaces',
        'Charcoal BBQ grill setup available for group cookouts',
        'Glowing neon TREETOPIA wall sign for evening photo moments',
        'Covered dining table with comfortable seating for groups',
      ],
    },
    {
      id: 9,
      icon: Flame,
      title: 'Campfire Pit & Lawn',
      image: '/photos/bunker_campfire.jpg',
      stat: 'Campfire Nights',
      shortDescription:
        'Dedicated stone campfire seating zone for warm conversations, music, and starlight gatherings in the countryside.',
      fullDescription:
        'As the sun sets over the Denkanikottai countryside, gather around our circular stone campfire pit. Enjoy the warmth of crackling wood, share stories, play acoustic music, or roast marshmallows under an unpolluted canopy of stars.',
      details: [
        'Built-in circular stone campfire pit on natural grass',
        'Comfortable lawn seating surrounding the fire circle',
        'Dry firewood provided for memorable evening fires',
        'Ambient garden lighting creating a cozy evening atmosphere',
        'Safe distance from sleeping quarters and living areas',
      ],
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
            and vibrant outdoor celebrations. Click any feature card below to explore full details and photographs.
          </p>
        </div>

        {/* Visual Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedFeature(item.id)}
                className="group rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/50 transition-all duration-300 relative flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Visual Card Image Cover */}
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                  {/* Icon Badge & Stat Badge */}
                  <div className="absolute top-3 left-3 p-2 rounded-xl bg-forest/90 text-gold backdrop-blur-sm border border-white/10 shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute top-3 right-3 text-[11px] font-semibold uppercase tracking-wider text-charcoal bg-gold px-2.5 py-1 rounded-full shadow">
                    {item.stat}
                  </span>
                </div>

                {/* Visual Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream/75 leading-relaxed font-light mb-4 line-clamp-2">
                      {item.shortDescription}
                    </p>
                  </div>

                  {/* Click Action Prompt */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gold font-semibold uppercase tracking-wider group-hover:text-gold-light">
                    <span>Click for Details</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Feature Details Modal */}
      {selectedFeature !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedFeature(null)}
        >
          {(() => {
            const feat = highlights.find((h) => h.id === selectedFeature);
            if (!feat) return null;
            const Icon = feat.icon;
            return (
              <div
                className="bg-cream text-charcoal rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-charcoal/20 relative p-6 sm:p-10"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFeature(null)}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal transition-colors focus:outline-none"
                  aria-label="Close feature details"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Feature Image in Modal */}
                <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 shadow-md border border-charcoal/10">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-forest/90 text-gold backdrop-blur-sm border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="absolute bottom-3 right-3 text-xs font-bold uppercase tracking-wider text-charcoal bg-gold px-3 py-1 rounded-full shadow">
                    {feat.stat}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed mb-6">
                  {feat.fullDescription}
                </p>

                {/* Feature Inclusions Checklist */}
                <div className="p-5 rounded-2xl bg-white border border-charcoal/10 mb-6 shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-forest mb-3">
                    Feature Highlights & Amenities
                  </h4>
                  <ul className="space-y-2">
                    {feat.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-xs text-charcoal/80">
                        <CheckCircle2 className="w-4 h-4 mr-2 text-gold mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Footer Close Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedFeature(null)}
                    className="px-6 py-2.5 rounded-xl bg-forest hover:bg-forest-light text-cream text-xs font-bold uppercase tracking-widest transition-colors shadow"
                  >
                    Close Details
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
