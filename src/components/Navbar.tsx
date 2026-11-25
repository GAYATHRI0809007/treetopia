import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Stay', href: '#stay' },
    { name: 'Packages', href: '#packages' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-forest/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-white/10'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a
            href="#home"
            className="group flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-cream group-hover:text-gold transition-colors duration-300">
              TREETOPIA
            </span>
            <span className="text-[9px] tracking-ultra text-gold uppercase font-sans font-medium -mt-0.5">
              Farmstay & Retreat
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-wider text-cream/90 hover:text-gold transition-colors duration-200 uppercase relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-md hover:shadow-gold/20 transform hover:-translate-y-0.5"
            >
              <span>Book Your Stay</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-cream hover:text-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 bg-forest/98 border-b border-white/10' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium uppercase tracking-wider text-cream/90 hover:text-gold hover:translate-x-1 transition-all duration-200 py-1.5 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full text-center px-5 py-3 text-xs font-semibold uppercase tracking-widest text-charcoal bg-gold hover:bg-gold-light active:bg-gold-dark transition-all duration-300 rounded shadow-md"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
