import React, { useState, useEffect } from 'react';
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
  initialPackageCode?: string;
}

interface FormState {
  fullName: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  accommodation: string;
  specialRequests: string;
}

const PACKAGE_OPTIONS = [
  {
    code: 'P1',
    label: 'Package 1: Two Pods + Amenities (Up to 9 Guests)',
    airbnbUrl: siteConfig.packages.p1.airbnbUrl,
  },
  {
    code: 'P2',
    label: 'Package 2: Bunker + Amenities (Up to 12 Guests)',
    airbnbUrl: siteConfig.packages.p2.airbnbUrl,
  },
  {
    code: 'P3',
    label: 'Package 3: Two Pods + Bunker + Amenities (Up to 21 Guests · Full Estate)',
    airbnbUrl: siteConfig.packages.p3.airbnbUrl,
  },
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialPackageCode = 'P3',
}) => {
  const getDefaultOption = (code?: string) => {
    const found = PACKAGE_OPTIONS.find((p) => p.code === code);
    return found ? found.label : PACKAGE_OPTIONS[2].label;
  };

  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    adults: 2,
    children: 0,
    accommodation: getDefaultOption(initialPackageCode),
    specialRequests: '',
  });

  useEffect(() => {
    if (initialPackageCode) {
      setFormData((prev) => ({
        ...prev,
        accommodation: getDefaultOption(initialPackageCode),
      }));
    }
  }, [initialPackageCode]);

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

    // Phone validation: at least 10 digits
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
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

    // Build pre-formatted WhatsApp message (strictly NO email)
    const message = `*TREETOPIA FARMSTAY ENQUIRY* 🌿🛖
---------------------------------
👤 *Guest Name:* ${formData.fullName.trim()}
📱 *Phone:* ${formData.phone.trim()}
📅 *Check-in Date:* ${formData.checkIn}
📅 *Check-out Date:* ${formData.checkOut}
👥 *Guests:* ${formData.adults} Adults${formData.children > 0 ? `, ${formData.children} Children` : ''}
🏡 *Stay Package:* ${formData.accommodation}
📝 *Special Requests / Occasion:* ${formData.specialRequests.trim() || 'None'}
---------------------------------
Sent from Treetopia Official Website. Please confirm date availability and package details.`;

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

  const selectedPackageMeta = PACKAGE_OPTIONS.find((p) => p.label === formData.accommodation) || PACKAGE_OPTIONS[2];

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
                Direct Host Enquiry & Booking
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest">
                Enquire for Your Stay
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 font-light mt-1.5 leading-relaxed">
                Fill in your details below to generate a pre-formatted WhatsApp enquiry directly to the host.
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

              {/* Mobile Phone (WhatsApp) */}
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

              {/* Accommodation Preference Selector */}
              <div>
                <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                  Select Booking Package <span className="text-rose-600">*</span>
                </label>
                <select
                  value={formData.accommodation}
                  onChange={(e) => setFormData({ ...formData, accommodation: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold text-xs font-medium cursor-pointer"
                >
                  {PACKAGE_OPTIONS.map((opt) => (
                    <option key={opt.code} value={opt.label}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                <span className="text-[11px] text-charcoal/60 mt-1.5 block">
                  {formData.accommodation.includes('Package 3')
                    ? '★ Package 3 grants 100% private estate exclusivity for your entire group.'
                    : 'ℹ️ Pods and Bunker share the plunge pool, cricket nets, open kitchen, and cinema.'}
                </span>
              </div>

              {/* Dates Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Check-in Date <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.checkIn ? 'border-rose-500' : 'border-charcoal/20'
                    }`}
                  />
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
                  <input
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold transition-colors ${
                      errors.checkOut ? 'border-rose-500' : 'border-charcoal/20'
                    }`}
                  />
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
                    max="21"
                    value={formData.adults}
                    onChange={(e) =>
                      setFormData({ ...formData, adults: parseInt(e.target.value) || 1 })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                  <span className="text-[10px] text-charcoal/50 mt-1 block">
                    Capacity: Up to 9 (Pods), 12 (Bunker), or 21 (Combined)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                    Number of Children
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="8"
                    value={formData.children}
                    onChange={(e) =>
                      setFormData({ ...formData, children: parseInt(e.target.value) || 0 })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-charcoal/20 bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
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
                  <strong>Transparent Booking Policy:</strong> Submitting this form prepares your enquiry message for host WhatsApp verification. To reserve with instant calendar lock, use our verified Airbnb package links.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-forest hover:bg-forest-light text-cream text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-gold" />
                  <span>Generate WhatsApp Enquiry</span>
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
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest mb-2">
              Ready to Send to Host
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 font-light max-w-md mx-auto mb-6 leading-relaxed">
              Your dates ({formData.checkIn} to {formData.checkOut}) and stay preference have been compiled into a WhatsApp enquiry.
            </p>

            {/* Formatted Message Preview Box */}
            <div className="p-4 rounded-xl bg-white border border-charcoal/15 text-left text-xs font-mono text-charcoal/80 whitespace-pre-wrap max-w-md mx-auto mb-6 max-h-44 overflow-y-auto shadow-inner">
              {formattedMessage}
            </div>

            <div className="space-y-3 max-w-md mx-auto">
              {/* WhatsApp Button (Active) */}
              <button
                onClick={handleOpenWhatsApp}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-colors shadow-lg flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp (+91 99800 14449)</span>
              </button>

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

              {/* Direct Link to Selected Airbnb Package */}
              <a
                href={selectedPackageMeta.airbnbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-xl bg-white hover:bg-beige/40 text-charcoal border border-charcoal/20 text-xs font-bold uppercase tracking-widest transition-colors shadow-sm flex items-center justify-center space-x-2"
              >
                <span>View {selectedPackageMeta.code} Calendar on Airbnb</span>
                <ExternalLink className="w-4 h-4 text-gold" />
              </a>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs text-charcoal/60 hover:text-charcoal underline pt-2 font-medium"
              >
                Edit Dates, Package or Guest Count
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
