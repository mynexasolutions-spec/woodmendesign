'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Package,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  MapPin,
  Sparkles,
  Phone,
  ShieldCheck
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';

export default function TrackOrderPage() {
  const [orderQuery, setOrderQuery] = useState('');
  const [trackedOrder, setTrackedOrder] = useState<any | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setHasSearched(true);
    // Simulated order tracking result
    const clean = orderQuery.trim().toUpperCase();
    setTrackedOrder({
      id: clean.startsWith('WM-') ? clean : `WM-${clean.slice(0, 6)}`,
      status: 'In Transit with Express Logistics',
      orderDate: 'November 05, 2026',
      estimatedDelivery: 'November 09, 2026',
      recipient: 'Customer (Verified Dispatch)',
      origin: 'Woodmen Artisan Workshop, Saharanpur, UP',
      destination: 'Delivery Address on File',
      steps: [
        {
          title: 'Order Confirmed & Timber Inspected',
          desc: 'Selected seasoned Sheesham and Acacia timber passed moisture stability check.',
          date: 'Nov 05, 10:30 AM',
          completed: true,
        },
        {
          title: 'Hand-Polished with Beeswax & Cured',
          desc: 'Final coat of food-grade organic walnut oil applied by master woodturners.',
          date: 'Nov 06, 03:15 PM',
          completed: true,
        },
        {
          title: 'Dispatched from Saharanpur Facility',
          desc: 'Package handed over to BlueDart / Delhivery Express with tracking ID #BD-88492019.',
          date: 'Nov 06, 08:45 PM',
          completed: true,
        },
        {
          title: 'Out for Doorstep Delivery',
          desc: 'Consignment arriving at local delivery hub.',
          date: 'Expected Nov 09',
          completed: false,
        },
      ],
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>REAL-TIME DISPATCH LOOKUP</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FAF3EB]">
            Track Your Order
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-md mx-auto">
            Enter your Woodmen Order ID (e.g. <strong>WM-849201</strong>) or phone number to view
            the crafting and delivery status of your handcrafted wooden pieces.
          </p>
        </div>
      </section>

      {/* Main Track Section */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-8">
        {/* Search Input Box */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DFD1C2] shadow-sm">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                required
                placeholder="Enter Order ID (e.g. WM-849201) or Phone"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs sm:text-sm text-[#2A180E] placeholder-stone-400 focus:outline-none focus:border-amber-700 font-mono"
              />
              <Package className="w-4 h-4 text-amber-800 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="py-3 px-6 rounded-2xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Track Consignment</span>
            </button>
          </form>

          <p className="text-xs sm:text-sm text-stone-600 mt-3 text-center sm:text-left">
            Need demo tracking? Try entering <strong>WM-542190</strong> or your phone number.
          </p>
        </div>

        {/* Tracking Result Card */}
        {hasSearched && trackedOrder && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#DFD1C2] shadow-md space-y-6 animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Top summary */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F2ECE3]">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8C5E37] font-bold">
                  CONSIGNMENT #{trackedOrder.id}
                </span>
                <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2A180E] mt-0.5">
                  {trackedOrder.status}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Placed on {trackedOrder.orderDate} • Origin: {trackedOrder.origin}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 text-right sm:text-left">
                <span className="text-xs uppercase font-bold text-amber-900 block">
                  Estimated Delivery
                </span>
                <strong className="text-sm sm:text-base font-serif text-amber-950">
                  {trackedOrder.estimatedDelivery}
                </strong>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div className="space-y-6 pl-2">
              {trackedOrder.steps.map((st: any, idx: number) => (
                <div key={idx} className="relative flex items-start gap-4">
                  {/* Left icon with connecting vertical line */}
                  <div className="relative flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        st.completed
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'bg-[#EAE0D5] text-stone-500'
                      }`}
                    >
                      {st.completed ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                    </div>
                    {idx < trackedOrder.steps.length - 1 && (
                      <div
                        className={`w-0.5 h-12 my-1 ${
                          st.completed ? 'bg-emerald-600' : 'bg-[#EAE0D5]'
                        }`}
                      />
                    )}
                  </div>

                  {/* Step copy */}
                  <div className="pt-1">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          st.completed ? 'text-[#2A180E]' : 'text-stone-400'
                        }`}
                      >
                        {st.title}
                      </h4>
                      <span className="text-xs text-stone-400 font-mono">
                        {st.date}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Help box */}
            <div className="pt-4 border-t border-[#F2ECE3] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Transit covered by Woodmen Zero-Breakage Guarantee
              </span>

              <a
                href="https://wa.me/919720975271"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-amber-800 hover:text-amber-950 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Urgent query? WhatsApp 9720975271</span>
              </a>
            </div>
          </div>
        )}
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

