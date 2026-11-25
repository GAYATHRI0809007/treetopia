import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import {
  X,
  Send,
  MessageSquare,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  Copy,
  Check,
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  accommodation: string;
  specialRequests: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    accommodation: 'Entire Private Estate (2 Pods + Glamping Tent)',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [formattedMessage, setFormattedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    // Phone validation: basic digits check (at least 10 digits)
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Check-in date validation
    if (!formData.checkIn) {
      newErrors.checkIn = 'Please select a check-in date';
    }

    // Check-out date validation
    if (!formData.checkOut) {
      newErrors.checkOut = 'Please select a check-out date';
    } else if (formData.checkIn && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }

    if (formData.adults < 1) {
      newErrors.adults = 'At least 1 adult is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Build pre-formatted WhatsApp message
    const message = `*TREETOPIA FARMSTAY ENQUIRY* 🌿🛖
---------------------------------
👤 *Guest Name:* ${formData.fullName.trim()}
📱 *Phone:* ${formData.phone.trim()}
📧 *Email:* ${formData.email.trim()}
📅 *Check-in Date:* ${formData.checkIn}
📅 *Check-out Date:* ${formData.checkOut}
👥 *Guests:* ${formData.adults} Adults${formData.children > 0 ? `, ${formData.children} Children` : ''}
🏡 *Stay Preference:* ${formData.accommodation}
📝 *Special Requests / Occasion:* ${formData.specialRequests.trim() || 'None'}
---------------------------------
Sent from Treetopia Official Website. Please confirm date availability and booking details.`;

    setFormattedMessage(message);
    setSubmitted(true);
  };

  const handleOpenWhatsApp = () => {
    if (siteConfig.contact.isWhatsAppConfigured && siteConfig.contact.whatsAppNumber) {
      const encodedMessage = encodeURIComponent(formattedMessage);
      const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsAppNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-cream rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-charcoal/15 relative my-auto p-6 sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-charcoal/10 hover:bg-charcoal/20 text-charcoal transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold mb-1 block">
                Direct Reservation Enquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                Enquire for Your Stay
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1.5 leading-relaxed">
                Fill out your stay dates and requirements below to generate a formatted enquiry.
              </p>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                    errors.fullName ? 'border-rose-500' : 'border-charcoal/20'
                  }`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Mobile Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Mobile / WhatsApp Number <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.phone ? 'border-rose-500' : 'border-charcoal/20'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.email ? 'border-rose-500' : 'border-charcoal/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Check-in Date <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.checkIn ? 'border-rose-500' : 'border-charcoal/20'
                      }`}
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.checkIn}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Check-out Date <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                        errors.checkOut ? 'border-rose-500' : 'border-charcoal/20'
                      }`}
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-[11px] text-rose-600 mt-1 flex items-center">
                      <AlertCircle className="w-3.5 h-3.5 mr-1" />
                      {errors.checkOut}
                    </p>
                  )}
                </div>
              </div>

              {/* Guest Counts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Number of Adults
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={formData.adults}
                    onChange={(e) => setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })}
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <span className="text-[10px] text-charcoal/50 mt-1 block">Maximum 12 guests</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="6"
                    value={formData.children}
                    onChange={(e) => setFormData({ ...formData, children: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
              </div>

              {/* Accommodation Preference */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                  Stay Arrangement
                </label>
                <input
                  type="text"
                  readOnly
                  value={formData.accommodation}
                  className="w-full px-4 py-2.5 rounded-xl border border-charcoal/15 bg-charcoal/5 text-charcoal/80 cursor-not-allowed text-xs font-medium"
                />
                <span className="text-[10px] text-charcoal/50 mt-1 block">
                  Treetopia is rented exclusively as an entire estate for your group.
                </span>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                  Special Requests / Occasion (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Birthday celebration, early check-in inquiry, campfire arrangement..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors"
                />
              </div>

              {/* Disclaimer Note */}
              <div className="p-3 bg-forest/5 rounded-xl border border-forest/10 text-[11px] text-forest/80 font-light flex items-start space-x-2">
                <ShieldCheck className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                <span>
                  <strong>Transparent Booking Policy:</strong> Submitting this form prepares an enquiry message. It does not charge your card or guarantee instant dates until confirmed by the host.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-cream text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-gold" />
                  <span>Generate Booking Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Submission Success State */
          <div className="py-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <MessageSquare className="w-8 h-8" />
            </div>

            <span className="text-[11px] font-bold uppercase tracking-widest text-gold mb-1 block">
              Enquiry Formatted Successfully
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-3">
              Enquiry Ready
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 font-light max-w-md mx-auto mb-6 leading-relaxed">
              We have compiled your stay dates ({formData.checkIn} to {formData.checkOut}) and guest details into a structured booking message.
            </p>

            {/* Formatted Message Preview Box */}
            <div className="p-4 rounded-xl bg-white border border-charcoal/15 text-left text-xs font-mono text-charcoal/80 whitespace-pre-wrap max-w-md mx-auto mb-6 max-h-44 overflow-y-auto shadow-inner">
              {formattedMessage}
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {/* WhatsApp Button (Active only if configured by owner) */}
              {siteConfig.contact.isWhatsAppConfigured ? (
                <button
                  onClick={handleOpenWhatsApp}
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open in WhatsApp & Send</span>
                </button>
              ) : (
                <div className="p-3.5 bg-amber-50 border border-amber-200 rounded-xl text-left text-[11px] text-amber-900 mb-2">
                  <div className="font-semibold text-amber-800 mb-1 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 text-amber-700" />
                    Host WhatsApp Number Pending Configuration
                  </div>
                  <div>
                    The owner has not yet provided their official WhatsApp number in <code>src/data/siteConfig.ts</code>. You can copy the formatted text below or check instant availability via Airbnb.
                  </div>
                </div>
              )}

              {/* Copy Message Button */}
              <button
                onClick={handleCopyMessage}
                className="w-full py-3 px-6 rounded-xl bg-forest hover:bg-forest-light text-cream text-xs font-bold uppercase tracking-widest transition-colors shadow flex items-center justify-center space-x-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Enquiry Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gold" />
                    <span>Copy Formatted Enquiry</span>
                  </>
                )}
              </button>

              {/* Verified Airbnb Booking Button */}
              <a
                href={siteConfig.airbnb.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-white hover:bg-beige/40 text-charcoal border border-charcoal/20 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm flex items-center justify-center space-x-2"
              >
                <span>View Live Calendar on Airbnb</span>
                <ExternalLink className="w-4 h-4 text-gold" />
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-charcoal/60 hover:text-charcoal underline pt-2 font-medium"
              >
                Edit Dates or Guest Count
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
