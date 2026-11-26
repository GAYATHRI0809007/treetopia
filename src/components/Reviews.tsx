import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { reviewsData, platformStats, ReviewItem } from '../data/reviewsData';
import {
  Star,
  ExternalLink,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Quote,
} from 'lucide-react';

export const Reviews: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'google' | 'airbnb'>('all');
  const [isPaused, setIsPaused] = useState(false);

  // References for continuous smooth animation and measurement
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const singleSetWidthRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);
  const isPressedRef = useRef<boolean>(false);
  const lastTimeRef = useRef<number>(performance.now());
  const animationFrameIdRef = useRef<number | null>(null);

  // Filter genuine reviews
  const filteredReviews = useMemo(() => {
    if (activeFilter === 'all') return reviewsData;
    return reviewsData.filter((r) => r.source === activeFilter);
  }, [activeFilter]);

  // Unique review counts for filter chips
  const totalUniqueCount = reviewsData.length;
  const googleUniqueCount = reviewsData.filter((r) => r.source === 'google').length;
  const airbnbUniqueCount = reviewsData.filter((r) => r.source === 'airbnb').length;

  // Build a seamless looping sequence.
  // To ensure the sequence is wider than any viewport before repeating,
  // we repeat the filtered set so baseSet has at least 8-12 cards.
  const baseSet = useMemo(() => {
    if (filteredReviews.length === 0) return [];
    const repeatTimes = Math.max(2, Math.ceil(12 / filteredReviews.length));
    const items: (ReviewItem & { uniqueKey: string })[] = [];
    for (let r = 0; r < repeatTimes; r++) {
      filteredReviews.forEach((item, idx) => {
        items.push({
          ...item,
          uniqueKey: `${activeFilter}-set${r}-${item.id}-${idx}`,
        });
      });
    }
    return items;
  }, [filteredReviews, activeFilter]);

  // Recalculate width of one complete set
  const updateSingleSetWidth = useCallback(() => {
    if (firstSetRef.current) {
      // offsetWidth plus the gap (space-x-6 = 24px)
      singleSetWidthRef.current = firstSetRef.current.offsetWidth + 24;
    }
  }, []);

  // Update width on mount, filter change, or window resize
  useEffect(() => {
    updateSingleSetWidth();
    // Reset scroll to 0 on filter change
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }

    const handleResize = () => {
      updateSingleSetWidth();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [baseSet, updateSingleSetWidth]);

  // Continuous smooth auto-scrolling loop via requestAnimationFrame
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const scrollSpeedPixelsPerSecond = 38; // Comfortable, highly readable reading speed (~38px/s)

    const animateLoop = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastTimeRef.current, 50); // cap delta at 50ms to prevent jumps on tab focus
      lastTimeRef.current = currentTime;

      if (!isPausedRef.current && scrollContainerRef.current && singleSetWidthRef.current > 0) {
        const container = scrollContainerRef.current;
        const movement = (scrollSpeedPixelsPerSecond * deltaTime) / 1000;
        container.scrollLeft += movement;

        // When the container scrolls past one complete set, seamlessly wrap back
        if (container.scrollLeft >= singleSetWidthRef.current) {
          container.scrollLeft -= singleSetWidthRef.current;
        }
      }

      animationFrameIdRef.current = requestAnimationFrame(animateLoop);
    };

    animationFrameIdRef.current = requestAnimationFrame(animateLoop);

    return () => {
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // Sync pause state with ref
  const setPausedState = useCallback((paused: boolean) => {
    isPausedRef.current = paused;
    setIsPaused(paused);
  }, []);

  // Manual Step Navigation
  const getCardStep = useCallback(() => {
    if (firstSetRef.current && firstSetRef.current.children.length > 0) {
      const firstCard = firstSetRef.current.children[0] as HTMLElement;
      return firstCard.offsetWidth + 24; // card width + 24px gap
    }
    return 400;
  }, []);

  const handlePrev = () => {
    if (!scrollContainerRef.current || singleSetWidthRef.current <= 0) return;
    const container = scrollContainerRef.current;
    const step = getCardStep();

    if (container.scrollLeft <= step) {
      // Seamlessly wrap to second track before scrolling backward
      container.scrollLeft += singleSetWidthRef.current;
    }
    container.scrollBy({ left: -step, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (!scrollContainerRef.current || singleSetWidthRef.current <= 0) return;
    const container = scrollContainerRef.current;
    const step = getCardStep();

    container.scrollBy({ left: step, behavior: 'smooth' });
  };

  // Keep scrollLeft normalized during manual touch drag or smooth scrolling
  const handleScroll = () => {
    if (!scrollContainerRef.current || singleSetWidthRef.current <= 0) return;
    const container = scrollContainerRef.current;
    if (container.scrollLeft >= singleSetWidthRef.current * 1.5) {
      container.scrollLeft -= singleSetWidthRef.current;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleSetWidthRef.current;
    }
  };

  // Render a single review card
  const renderCard = (rev: ReviewItem & { uniqueKey: string }) => {
    const isGoogle = rev.source === 'google';
    return (
      <div
        key={rev.uniqueKey}
        className="w-[300px] sm:w-[380px] md:w-[420px] flex-shrink-0 bg-white/5 hover:bg-white/[0.08] rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-gold/40 transition-all duration-300 flex flex-col justify-between shadow-xl backdrop-blur-md select-none group"
      >
        <div>
          {/* Card Top: Platform Badge, Stay Type, Rating & Date */}
          <div className="flex items-center justify-between gap-2 mb-4 pb-3.5 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <span
                className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                  isGoogle
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                    : 'bg-rose-500/20 text-rose-300 border border-rose-400/30'
                }`}
              >
                {isGoogle ? 'Google Review' : 'Airbnb Guest'}
              </span>
              {rev.stayType && (
                <span className="text-[11px] text-cream/60 truncate max-w-[130px] sm:max-w-[180px]">
                  • {rev.stayType}
                </span>
              )}
            </div>

            <div className="flex text-gold flex-shrink-0">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold" />
              ))}
            </div>
          </div>

          {/* Quotation Body */}
          <div className="relative mb-6">
            <Quote className="w-6 h-6 text-gold/30 mb-2" />
            <p className="font-serif text-sm sm:text-base text-cream/90 leading-relaxed italic line-clamp-4 group-hover:line-clamp-none transition-all">
              "{rev.text}"
            </p>
          </div>
        </div>

        {/* Card Footer: Reviewer Info & Direct Section Link for Airbnb only */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center space-x-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center font-bold text-xs flex-shrink-0">
              {rev.author.charAt(0)}
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-cream truncate flex items-center">
                <span>{rev.author}</span>
                <CheckCircle2 className="w-3 h-3 text-gold ml-1 flex-shrink-0" />
              </div>
              <span className="text-[10px] text-cream/50 block">{rev.date}</span>
            </div>
          </div>

          {/* View on Airbnb link only; View on Google is completely removed */}
          {!isGoogle && rev.originalUrl ? (
            <a
              href={rev.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-light py-1 px-2 rounded hover:bg-white/5 transition-colors flex-shrink-0 group/link"
            >
              <span>View on Airbnb</span>
              <ExternalLink className="w-3 h-3 ml-1 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : null}
        </div>
      </div>
    );
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-forest text-cream relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            Real experiences from real families and travellers. Browse genuine customer reviews
            from our official Google and Airbnb listings.
          </p>
        </div>

        {/* Overall Platform Scores Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {/* Google Listing Card - Verified metrics without external link */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-between gap-4 shadow-lg hover:border-gold/30 transition-colors">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-lg font-bold text-cream font-serif">
                G
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-2xl font-serif font-bold text-cream">
                    {platformStats.google.rating}
                  </span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-cream/70">
                  {platformStats.google.label} · {platformStats.google.totalReviews} Total Reviews
                </span>
              </div>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gold/80 bg-gold/10 px-3 py-1.5 rounded-xl border border-gold/20">
              Verified Rating
            </span>
          </div>

          {/* Airbnb Listing Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg hover:border-gold/30 transition-colors">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-xl bg-gold/20 flex items-center justify-center text-base font-bold text-gold font-serif">
                ★
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-2xl font-serif font-bold text-cream">
                    {platformStats.airbnb.rating}
                  </span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-cream/70">
                  {platformStats.airbnb.label} · {platformStats.airbnb.totalReviews} Total Reviews
                </span>
              </div>
            </div>
            <a
              href={platformStats.airbnb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center text-xs text-charcoal bg-gold hover:bg-gold-light inline-flex items-center justify-center font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all shadow hover:shadow-gold/20"
            >
              <span>View on Airbnb</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
            </a>
          </div>
        </div>

        {/* Carousel Filter & Navigation Controls Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-6xl mx-auto mb-6 px-1">
          {/* Filter Chips */}
          <div className="inline-flex p-1 rounded-xl bg-black/30 border border-white/10 text-xs shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-gold text-charcoal shadow'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              All Reviews ({totalUniqueCount})
            </button>
            <button
              onClick={() => setActiveFilter('google')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                activeFilter === 'google'
                  ? 'bg-gold text-charcoal shadow'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              Google ({googleUniqueCount})
            </button>
            <button
              onClick={() => setActiveFilter('airbnb')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                activeFilter === 'airbnb'
                  ? 'bg-gold text-charcoal shadow'
                  : 'text-cream/70 hover:text-cream'
              }`}
            >
              Airbnb ({airbnbUniqueCount})
            </button>
          </div>

          {/* Interactive Guidance & Elegant Navigation Arrows */}
          <div className="flex items-center space-x-3 text-xs text-cream/70">
            <span className="hidden sm:inline text-[11px] text-cream/50 italic">
              {isPaused ? '• Paused' : '• Hover or hold to pause'}
            </span>
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                type="button"
                aria-label="Previous review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal text-cream border border-white/15 hover:border-gold transition-all duration-200 shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
                title="Previous review"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                aria-label="Next review"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-gold hover:text-charcoal text-cream border border-white/15 hover:border-gold transition-all duration-200 shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
                title="Next review"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Seamless Continuously Looping Carousel Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => setPausedState(true)}
          onMouseLeave={() => {
            if (!isPressedRef.current) setPausedState(false);
          }}
          onPointerDown={() => {
            isPressedRef.current = true;
            setPausedState(true);
          }}
          onPointerUp={() => {
            isPressedRef.current = false;
            setPausedState(false);
          }}
          onPointerCancel={() => {
            isPressedRef.current = false;
            setPausedState(false);
          }}
          onTouchStart={() => {
            isPressedRef.current = true;
            setPausedState(true);
          }}
          onTouchEnd={() => {
            isPressedRef.current = false;
            setPausedState(false);
          }}
          onFocus={() => setPausedState(true)}
          onBlur={() => setPausedState(false)}
          className="overflow-x-auto scrollbar-none py-2 select-none cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
        >
          {baseSet.length > 0 ? (
            <div className="flex w-max">
              {/* Primary Track Set */}
              <div ref={firstSetRef} className="flex space-x-6 shrink-0">
                {baseSet.map(renderCard)}
              </div>

              {/* Duplicate Track Set for 100% Seamless Infinite Looping */}
              <div className="flex space-x-6 shrink-0 pl-6" aria-hidden="true">
                {baseSet.map((item) => renderCard({ ...item, uniqueKey: `${item.uniqueKey}-dup` }))}
              </div>
            </div>
          ) : (
            <div className="p-8 text-center bg-white/5 rounded-2xl border border-white/10 max-w-md mx-auto">
              <p className="text-sm text-cream/70">No reviews found for this filter.</p>
            </div>
          )}
        </div>

        {/* Integration Transparency Note */}
        <div className="max-w-4xl mx-auto mt-12 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-cream/70 font-light flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
            <span>
              <strong>Verified Reviews:</strong> Showing genuine highlight reviews from completed guest stays. Total platform reviews: <strong>4.8★ (45 Google reviews)</strong> and <strong>4.65★ (26 Airbnb reviews)</strong>.
            </span>
          </div>
          <div className="flex items-center space-x-3 text-xs flex-shrink-0">
            <a
              href={platformStats.airbnb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-medium inline-flex items-center"
            >
              <span>View Reviews on Airbnb</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
