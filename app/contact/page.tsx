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
  Gift
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';

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

