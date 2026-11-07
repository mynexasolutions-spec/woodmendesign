'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  Building,
  Gift,
  Utensils,
  Hammer,
  ShieldCheck,
  ChevronDown,
  ExternalLink,
  MessageCircle,
  PackageCheck,
  Compass
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';

const FAQS = [
  {
    q: 'Do you provide custom branding or laser engraving on products?',
    a: 'Yes, absolutely. We have an in-house high-precision CO2 laser engraving studio in Saharanpur. We regularly engrave company logos, wedding crests, personalized monograms, and custom family names on bowls, casseroles, chopping boards, and spice boxes with zero blur or grain burn.',
  },
  {
    q: 'What is the turnaround time for wholesale and bulk orders?',
    a: 'For catalog products in stock, bulk dispatch takes just 24–48 hours. For bespoke dimensions, custom engraving, or volume quantities (50–500+ units), production typically takes 7 to 12 working days depending on seasoning and finish requirements.',
  },
  {
    q: 'Can I order a single sample unit before placing a bulk order?',
    a: 'Yes. You can order any single piece directly through our website to inspect wood grain balance, weight, and craftsmanship. When you subsequently place a wholesale order (>25 units), the cost of your sample piece is fully credited against your bulk invoice.',
  },
  {
    q: 'Are your wooden finishes 100% safe for direct food contact?',
    a: 'Without exception. Every culinary item is cured strictly with cold-pressed natural edible oils and refined organic beeswax. We never use toxic polyurethane varnishes, chemical stains, or synthetic lacquers. All pieces are certified food-safe and gentle on warm meals.',
  },
  {
    q: 'How do you prevent transit damage for delicate or heavy wood orders?',
    a: 'Each piece is individually sealed in protective moisture-barrier shrink wrap, nested in multi-layer shock-absorbing foam, and packaged inside heavy-duty 5-ply corrugated honeycomb cartons. We partner with reliable air and surface couriers (Bluedart, Delhivery, V-Trans) with transit insurance.',
  },
  {
    q: 'Can I visit your Saharanpur workshop in person?',
    a: 'We warmly welcome clients, interior designers, and restaurant owners to visit our Saharanpur artisan workshop. You can observe generational woodturners on traditional lathes and select your preferred raw timber logs in person. Please notify us 24 hours in advance to arrange a guided walkthrough.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    quantity: '1-10 pieces',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        quantity: '1-10 pieces',
      });
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CONNECT WITH WOODMEN</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FAF3EB]">
            Get in Touch
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-xl mx-auto">
            Whether you desire a custom hand-carved design, wholesale restaurant tableware,
            or festive corporate gifts, our master artisans are ready to collaborate.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Artisan Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Signature Hotline Box (From Image 2) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#2D1B11] via-[#24160E] to-[#180E08] text-white border-2 border-amber-400/50 shadow-2xl space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-amber-300 font-bold block">
                DIRECT ARTISAN DESK
              </span>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <a
                    href="tel:9720975271"
                    className="text-2xl sm:text-3xl font-bold text-amber-200 hover:text-white transition-colors font-mono"
                  >
                    9720975271
                  </a>
                  <p className="text-[11px] text-stone-300">
                    Call / WhatsApp • Quick Response
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300/80">
                <span>QUALITY • DESIGN • DURABILITY</span>
                <span className="font-bold text-white">MADE WITH PRIDE</span>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2A180E]">
                    Workshop &amp; Design Studio
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                    Woodmen Design Corporation<br />
                    Saharanpur Artisan Cluster, National Highway 344,<br />
                    Saharanpur, Uttar Pradesh 247001, India
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2A180E]">
                    Email Inquiries
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    support@woodmendesign.in<br />
                    orders@woodmendesign.in
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#2A180E]">
                    Artisan Workshop Hours
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    Monday – Saturday: 9:00 AM – 8:30 PM IST<br />
                    Sunday: By Prior Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Button */}
            <a
              href="https://wa.me/919720975271"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Start Immediate WhatsApp Chat (9720975271)</span>
            </a>
          </div>

          {/* Right Column: Wholesale & Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#DFD1C2] shadow-sm">
            <h3 className="font-serif-display text-xl font-bold text-[#2A180E] mb-1">
              Send an Inquiry or Request a Custom Quote
            </h3>
            <p className="text-xs text-stone-500 mb-6">
              Fill out your details below and our lead woodcraft manager will reach out within 2 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif-display text-xl font-bold text-emerald-950">
                  Inquiry Received!
                </h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our master craftsman will review your specifications
                  and contact you at <strong>{formData.phone}</strong> promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9720975271"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                    >
                      <option value="General Inquiry">General Product Inquiry</option>
                      <option value="Bulk/Wholesale">Bulk Wholesale Supply</option>
                      <option value="Corporate Gifting">Corporate Festive Gifting</option>
                      <option value="Custom Design">Custom Size / Laser Engraving</option>
                      <option value="Restaurant Tableware">Restaurant &amp; Hotel Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Approximate Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                  >
                    <option value="1-10 pieces">1 – 10 pieces (Retail / Personal)</option>
                    <option value="10-50 pieces">10 – 50 pieces (Small Cafe / Events)</option>
                    <option value="50-200 pieces">50 – 200 pieces (Corporate Gifting)</option>
                    <option value="200+ pieces">200+ pieces (Large Scale / Export)</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                    Message / Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the wood species, dimensions, logo engraving or any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Master Artisan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Capabilities & B2B Solutions Section */}
      <section className="py-14 sm:py-20 bg-[#FAF4EC] border-t border-[#E8DCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>COMMERCIAL &amp; BESPOKE CAPABILITIES</span>
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Crafted for Businesses &amp; Connoisseurs
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B5547] font-light leading-relaxed">
              From intimate personalized wedding favors to multi-thousand unit hotel tableware programs,
              our Saharanpur workshops deliver master-grade woodcraft with rigorous quality control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0E4] text-[#8C5E37] flex items-center justify-center group-hover:bg-[#3D2516] group-hover:text-amber-300 transition-colors">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2A180E]">
                  Corporate &amp; Festive Gifting
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Tailored wooden gift sets with custom compartments, brass-inlay accents, and corporate logo engraving. Complete with luxury gift packaging and pan-India doorstep dispatch for Diwali and annual corporate milestones.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E4D7] text-xs font-semibold text-[#8C5E37] flex items-center justify-between">
                <span>MOQ: 25 Units</span>
                <span>Free Digital Proofs</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0E4] text-[#8C5E37] flex items-center justify-center group-hover:bg-[#3D2516] group-hover:text-amber-300 transition-colors">
                  <Utensils className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2A180E]">
                  Restaurants, Cafes &amp; Hotels
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Commercial-grade acacia and sheesham serving platters, roti warmers, cutlery caddies, and cocktail trays. Cured with water-resistant beeswax to withstand the daily rigor of high-turnover hospitality environments.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E4D7] text-xs font-semibold text-[#8C5E37] flex items-center justify-between">
                <span>Custom Dimensions</span>
                <span>Commercial Durability</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0E4] text-[#8C5E37] flex items-center justify-center group-hover:bg-[#3D2516] group-hover:text-amber-300 transition-colors">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2A180E]">
                  Bespoke Artisan Commissions
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Have a specific architectural drawing or proprietary lifestyle product idea? Our generational woodturners collaborate directly with architects and design studios from initial wood log selection to final master prototype.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#F0E4D7] text-xs font-semibold text-[#8C5E37] flex items-center justify-between">
                <span>CAD / 3D Friendly</span>
                <span>Solid Timber Logs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Location & Commitments Grid */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#E8DCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Workshop Visit Details */}
            <div className="lg:col-span-6 bg-[#FAF6F0] rounded-3xl p-6 sm:p-10 border border-[#EADBCC] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-800 font-bold">
                  <Building className="w-4 h-4 text-amber-700" />
                  <span>VISIT THE ARTISAN CLUSTER</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2A180E]">
                  Experience the Heritage Workshop
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  Step inside our Saharanpur woodcraft cluster where the scent of seasoned Sheesham and natural wood shavings fills the air. Watch master craftsmen shape raw timber on classic lathes and hand-select your own timber grain patterns in person.
                </p>

                <div className="space-y-3 pt-2 text-xs text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block">Artisan Workshop Address:</strong>
                      <span>Woodmen Design Corporation, National Highway 344 Woodcraft Cluster, Saharanpur, Uttar Pradesh 247001, India</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-stone-900 block">Visiting Hours:</strong>
                      <span>Monday – Saturday: 9:00 AM – 8:30 PM IST (Prior appointment recommended)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://maps.google.com/?q=Saharanpur+Woodcraft+Cluster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#3D2516] hover:bg-[#52331F] text-[#FAF6F0] text-xs font-bold shadow-md transition-all active:scale-95"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href="https://wa.me/919720975271?text=Hello%20Woodmen,%20I%20would%20like%20to%20schedule%20a%20workshop%20visit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-stone-50 border border-[#DFD1C2] text-[#2A180E] text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Schedule Workshop Tour</span>
                </a>
              </div>
            </div>

            {/* Quality Pledges & Guarantees */}
            <div className="lg:col-span-6 bg-[#1F140D] text-white rounded-3xl p-6 sm:p-10 border border-[#3A2619] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#E5A855] font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#E5A855]" />
                  <span>OUR ARTISAN PLEDGES</span>
                </div>
                <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FAF3EB]">
                  Why India&apos;s Leading Brands Partner With Us
                </h3>
                <p className="text-xs sm:text-sm text-[#D4C3B4] font-light leading-relaxed">
                  Every consignment leaves our Saharanpur studio backed by documented quality standards, fair-trade artisan wages, and transparent tracking.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Seasoned Timber (&lt; 12% Moisture)</h4>
                      <p className="text-[11px] text-stone-400">Kiln and naturally air-seasoned for 90 days to guarantee zero warping or cracking across Indian climate changes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">100% Certified Food-Safe Oils</h4>
                      <p className="text-[11px] text-stone-400">Finished exclusively with cold-pressed natural oils and organic beeswax. Absolutely free from synthetic lacquers.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">Pre-Production Physical Sample</h4>
                      <p className="text-[11px] text-stone-400">On bulk orders above 50 units, we courier an advance physical master piece for your hands-on signoff.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E5A855] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">GST-Compliant Tax Invoicing</h4>
                      <p className="text-[11px] text-stone-400">Complete corporate documentation with standardized HSN woodcraft codes for seamless input credit.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-stone-300">
                <span className="text-[11px]">Direct Hotline Assistance:</span>
                <a href="tel:9720975271" className="font-mono font-bold text-amber-300 hover:text-white transition-colors">
                  +91 9720975271
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Accordion) */}
      <section className="py-14 sm:py-20 bg-[#FAF4EC] border-t border-[#E8DCCE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B5547] font-light">
              Everything you need to know about custom woodcraft orders, lead times, and materials.
            </p>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#EADBCC] shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#2A180E] hover:text-amber-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-[#F5ECE3]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct WhatsApp Callout Banner */}
      <section className="bg-[#180E08] text-white py-10 sm:py-12 border-t border-b border-[#362215] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#FAF3EB]">
              Prefer a direct conversation with our master craftsman?
            </h3>
            <p className="text-xs sm:text-sm text-[#D4C3B4] font-light">
              Send us photos, sketches, or order queries on WhatsApp. We typically reply within minutes.
            </p>
          </div>
          <a
            href="https://wa.me/919720975271?text=Hello%20Woodmen,%20I%20have%20an%20inquiry%20regarding%20handcrafted%20wooden%20pieces."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all active:scale-95 shrink-0"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp (+91 9720975271)</span>
          </a>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <TrustBar />

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => (window.location.href = `/products/${p.id}`)}
      />
      <FloatingWhatsApp />
    </div>
  );
}

