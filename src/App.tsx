import React, { useState } from 'react';
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
import { BookingModal } from './components/BookingModal';
import { siteConfig } from './data/siteConfig';
import { ExternalLink, MapPin, Instagram, MessageSquare, Phone } from 'lucide-react';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleExploreClick = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal flex flex-col font-sans selection:bg-gold selection:text-white">
      {/* 5. Responsive Luxury Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* 6A. Cinematic Hero Section */}
        <Hero onExploreClick={handleExploreClick} onBookClick={handleOpenBooking} />

        {/* 6B. Brand Introduction Section */}
        <About
          onLearnMore={() => {
            const el = document.getElementById('stay');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6C. Property Highlights & Amenities */}
        <Highlights />

        {/* 6D. Accommodation Suites & Glamping Tent */}
        <Accommodation onBookClick={handleOpenBooking} />

        {/* 6E. Experiences & Activities */}
        <Experiences onBookClick={handleOpenBooking} />

        {/* 6F. Interactive Photo Gallery & Full-Screen Lightbox */}
        <Gallery />

        {/* 6G. Guest Occasions & Celebrations */}
        <Occasions onPlanStay={handleOpenBooking} />

        {/* 6H. Verified Guest Reviews & Airbnb Rating */}
        <Reviews />

        {/* 6I. Location, Driving Routes & Directions */}
        <Location />

        {/* 6J. Final Booking Call to Action */}
        <BookingCTA onOpenEnquiry={handleOpenBooking} />
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
                A private 9,000 sq.ft countryside retreat in Tamil Nadu where contemporary cantilever architecture
                meets peaceful seclusion. Featuring a private plunge pool, cricket nets, outdoor cinema, and starlight campfires.
              </p>
              <div className="space-y-2 text-xs text-cream/80">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>{siteConfig.location.shortAddress} · {siteConfig.location.commuteHighlight}</span>
                </div>
                <div className="flex items-center space-x-2 text-gold">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span>Host Coordination via WhatsApp</span>
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
                <li><a href="#stay" className="hover:text-gold transition-colors">Accommodation</a></li>
                <li><a href="#experiences" className="hover:text-gold transition-colors">Experiences & Cricket</a></li>
                <li><a href="#gallery" className="hover:text-gold transition-colors">Photo Gallery</a></li>
                <li><a href="#location" className="hover:text-gold transition-colors">Location & Route</a></li>
              </ul>
            </div>

            {/* Column 3: Booking & Social Media */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                Official Channels
              </h4>
              <ul className="space-y-3 text-xs text-cream/80">
                <li>
                  <a
                    href={siteConfig.airbnb.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors group"
                  >
                    <span>Airbnb Verified Listing (4.65 ★)</span>
                    <ExternalLink className="ml-1.5 w-3.5 h-3.5 text-gold" />
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cream hover:text-gold transition-colors"
                  >
                    <Instagram className="w-4 h-4 mr-2 text-gold" />
                    <span>{siteConfig.social.instagramHandle}</span>
                  </a>
                </li>
                <li className="pt-2">
                  <button
                    onClick={handleOpenBooking}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-xs font-bold uppercase tracking-wider rounded transition-colors shadow"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                    <span>Enquire Dates</span>
                  </button>
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
              <span>100% Private Estate</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Sticky Mobile WhatsApp/Book CTA */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <button
          onClick={handleOpenBooking}
          className="p-3.5 rounded-full bg-gold text-charcoal shadow-2xl hover:bg-gold-light active:scale-95 transition-all flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Enquire on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 text-charcoal" />
        </button>
      </div>

      {/* Section 7: Interactive Booking Enquiry & WhatsApp Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default App;
