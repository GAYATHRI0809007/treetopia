import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Highlights } from './components/Highlights';
import { Accommodation } from './components/Accommodation';
import { Experiences } from './components/Experiences';
import { Gallery } from './components/Gallery';
import { Occasions } from './components/Occasions';
import { Reviews } from './components/Reviews';
import { Location } from './components/Location';
import { BookingCTA } from './components/BookingCTA';
import { SplashScreen } from './components/SplashScreen';
import { siteConfig } from './data/siteConfig';
import { ExternalLink, MapPin, Instagram, Phone } from 'lucide-react';

export const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => {
    setShowSplash(false);
  }, []);

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans selection:bg-gold selection:text-white">
      {/* Intro Splash Animation */}
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      {/* 5. Responsive Luxury Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 6A. Cinematic Hero Section */}
        <Hero onExploreClick={handleExploreClick} />

        {/* 6B. Brand Introduction Section */}
        <About
          onLearnMore={() => {
            const el = document.getElementById('properties');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6C. Property Highlights & Amenities */}
        <Highlights />

        {/* 6D. Accommodation Suites, Bunker, Tent & Packages */}
        <Accommodation />

        {/* 6E. Activities & Recreation */}
        <Experiences />

        {/* 6F. Interactive Photo Gallery & Full-Screen Lightbox */}
        <Gallery />

        {/* 6G. Guest Occasions & Celebrations */}
        <Occasions />

        {/* 6H. Verified Guest Reviews & Airbnb Rating */}
        <Reviews />

        {/* 6I. Location, Driving Routes & Directions */}
        <Location />

        {/* 6J. Final Booking Call to Action */}
        <BookingCTA />
      </main>

      {/* 6K. Brand Footer */}
      <footer id="contact" className="bg-forest text-cream py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Identity */}
            <div className="md:col-span-2">
              <span className="font-serif text-3xl font-bold tracking-widest text-cream">
                {siteConfig.brandName}
              </span>
              <p className="text-xs uppercase tracking-ultra text-gold font-medium mt-1 mb-4">
                {siteConfig.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-cream/70 font-light leading-relaxed max-w-md mb-6">
                A private 9,000 sq.ft countryside retreat in Tamil Nadu featuring two cantilever pods,
                a spacious ground-level bunker suite, lawn glamping, private plunge pool, cricket nets,
                open dining pavilion, and outdoor cinema.
              </p>
              <div className="space-y-2 text-xs text-cream/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href={siteConfig.location.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold transition-colors underline"
                  >
                    {siteConfig.location.shortAddress} (Open Google Maps)
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-gold">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Host WhatsApp: {siteConfig.contact.whatsAppDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                Explore Treetopia
              </h4>
              <ul className="space-y-2.5 text-xs text-cream/80">
                <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-gold transition-colors">About Our Retreat</a></li>
                <li><a href="#properties" className="hover:text-gold transition-colors">Properties & Packages</a></li>
                <li><a href="#activities" className="hover:text-gold transition-colors">Activities & Recreation</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Photo Gallery</a></li>
                <li><a href="#reviews" className="hover:text-gold transition-colors">Guest Reviews</a></li>
                <li><a href="#location" className="hover:text-gold transition-colors">Location & Route</a></li>
              </ul>
            </div>

            {/* Column 3: Airbnb Packages & Social Media */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                Official Airbnb Listings
              </h4>
              <ul className="space-y-2 text-xs text-cream/80">
                <li>
                  <a
                    href={siteConfig.packages.p1.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors"
                  >
                    <span>P1: Two Pods (9 Guests)</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 text-gold" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.packages.p2.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors"
                  >
                    <span>P2: Bunker Suite (12 Guests)</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 text-gold" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.packages.p3.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors"
                  >
                    <span>P3: Combined Estate (21 Guests)</span>
                    <ExternalLink className="ml-1.5 w-3 h-3 text-gold" />
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 mr-1.5 text-gold" />
                    <span>{siteConfig.social.instagramHandle}</span>
                  </a>
                </li>
                <li className="pt-2">
                  <a
                    href={siteConfig.airbnb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-xs font-bold uppercase tracking-wider rounded transition-colors shadow"
                  >
                    <span>Ask Host on Airbnb</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright, Policies & Airbnb Verification */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-cream/60 gap-4">
            <div>
              © 2026 Treetopia Retreat. Unisenatham, Tamil Nadu, India. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-[11px]">
              <span className="text-gold font-medium">
                ★ 4.65 Rating (26 Verified Airbnb Reviews)
              </span>
              <span className="text-cream/40">•</span>
              <span>Gated Countryside Estate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
