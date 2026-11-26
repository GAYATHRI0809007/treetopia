import React, { useState, useEffect, useCallback } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

/**
 * Luxury resort-style intro.
 *
 * Timeline (≈ 6.5 s):
 *   0.0 s — dark forest screen, soft mist drifts
 *   0.6 s — hero property photo fades in behind a vignette
 *   1.6 s — brand name "TREETOPIA" fades up, elegant & centered
 *   2.6 s — gold divider line expands; subtitle + location appear
 *   4.4 s — everything scales up gently & fades → reveals real site
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<
    'mist' | 'photo' | 'brand' | 'details' | 'exit'
  >('mist');

  const finish = useCallback(() => onFinish(), [onFinish]);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase('photo'),   1000),
      setTimeout(() => setPhase('brand'),   3000),
      setTimeout(() => setPhase('details'), 5000),
      setTimeout(() => setPhase('exit'),    8000),
      setTimeout(finish,                    9800),
    ];
    return () => timers.forEach(clearTimeout);
  }, [finish]);

  const past = (target: typeof phase) => {
    const order = ['mist', 'photo', 'brand', 'details', 'exit'];
    return order.indexOf(phase) >= order.indexOf(target);
  };

  return (
    <div
      className={`splash-root ${phase === 'exit' ? 'splash--exit' : ''}`}
      aria-hidden="true"
    >
      {/* ── 1. Base: deep forest-green fill ── */}
      <div className="splash-base" />

      {/* ── 2. Property photo fading in ── */}
      <div className={`splash-photo ${past('photo') ? 'splash-photo--on' : ''}`}>
        <img
          src="/photos/exterior_dusk_pods.jpg"
          alt=""
          className="splash-photo-img"
        />
        {/* Heavy vignette keeps text legible */}
        <div className="splash-photo-vignette" />
      </div>

      {/* ── 3. Drifting mist layers (subtle parallax fog) ── */}
      <div className="splash-mist">
        <div className="splash-mist-layer splash-mist-1" />
        <div className="splash-mist-layer splash-mist-2" />
      </div>

      {/* ── 4. Center content ── */}
      <div className="splash-content">
        {/* Tiny top pill */}
        <div className={`splash-pill ${past('details') ? 'splash-pill--on' : ''}`}>
          <span className="splash-pill-dot" />
          <span>Farmstay &amp; Nature Retreat</span>
        </div>

        {/* Brand name */}
        <h1 className={`splash-title ${past('brand') ? 'splash-title--on' : ''}`}>
          TREETOPIA
        </h1>

        {/* Gold line */}
        <div className={`splash-gold-line ${past('details') ? 'splash-gold-line--on' : ''}`} />

        {/* Tagline */}
        <p className={`splash-tagline ${past('details') ? 'splash-tagline--on' : ''}`}>
          Escape the Ordinary
        </p>

        {/* Location */}
        <p className={`splash-loc ${past('details') ? 'splash-loc--on' : ''}`}>
          Unisenatham · Tamil Nadu · India
        </p>
      </div>
    </div>
  );
};
