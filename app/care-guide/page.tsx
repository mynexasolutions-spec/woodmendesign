'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Droplets,
  Sun,
  Flame,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Phone
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';

const FAQS = [
  {
    q: 'Can I put wooden bowls or roti casseroles in the dishwasher?',
    a: 'Never. Dishwashers use extreme heat, prolonged standing water, and harsh alkaline detergents that will strip away the natural oils and cause the wood to warp or split. Hand washing takes less than 30 seconds!',
  },
  {
    q: 'How do I remove yellow turmeric stains from my wooden spoons or bowls?',
    a: 'Sprinkle coarse sea salt and squeeze fresh lemon juice over the stain. Scrub gently with a soft sponge and let it sit in bright natural sunlight for 1–2 hours. The sun’s natural UV rays naturally bleach out curcumin without harming the wood grain.',
  },
  {
    q: 'Which oil should I use for re-seasoning at home?',
    a: 'We recommend pure food-grade mineral oil, organic cold-pressed walnut oil, or virgin coconut oil. Avoid rancid vegetable oils like soybean or canola, which can develop an off-putting odor over time.',
  },
  {
    q: 'How long will my Woodmen wooden utensils last?',
    a: 'Because our pieces are lathed from solid seasoned mature hardwood (Sheesham and Acacia) without chemical glue seams, with basic care they will easily last for decades and can be passed down as family heirlooms.',
  },
  {
    q: 'Are your wooden products safe for hot gravies and curries?',
    a: 'Yes, our 100% natural oil finish is heat-tolerant and food-safe. Wood is a natural insulator that keeps hot rotis and soups warm much longer than ceramic or metal without burning your hands.',
  },
];

export default function CareGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MAINTAINING NATURAL WOOD</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FAF3EB]">
            Wood Care &amp; Longevity Guide
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-xl mx-auto">
            Solid wood is alive and breathes with its environment. Follow our master craftsman care tips
            to preserve the rich luster and velvety touch of your Woodmen homeware for a lifetime.
          </p>
        </div>
      </section>

      {/* Main Guide Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 space-y-12">
        {/* Do's and Don'ts Grid */}
        <div>
          <h2 className="font-serif-display text-2xl font-bold text-[#2A180E] mb-6 text-center">
            Daily Care: Do&apos;s &amp; Don&apos;ts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Do's */}
            <div className="p-6 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>WHAT TO DO (BEST PRACTICES)</span>
              </div>

              <ul className="space-y-3 text-xs text-emerald-950">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700">✓</span>
                  <span><strong>Hand wash promptly</strong> with mild, eco-friendly dish soap and a soft sponge under lukewarm water.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700">✓</span>
                  <span><strong>Dry immediately</strong> with a clean cotton towel. Never allow water puddles to sit on the surface.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700">✓</span>
                  <span><strong>Air-dry upright</strong> in a well-ventilated open area before storing in enclosed cabinets.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-700">✓</span>
                  <span><strong>Re-season every 2–3 months</strong> with a pea-sized drop of coconut oil, walnut oil, or beeswax.</span>
                </li>
              </ul>
            </div>

            {/* The Don'ts */}
            <div className="p-6 rounded-3xl bg-rose-50/60 border border-rose-200/80 space-y-4">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-700" />
                <span>WHAT TO AVOID (CRITICAL)</span>
              </div>

              <ul className="space-y-3 text-xs text-rose-950">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-700">✗</span>
                  <span><strong>NEVER put in a dishwasher</strong>. The steam cycle and harsh chemicals will cause timber warping and cracks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-700">✗</span>
                  <span><strong>Do not soak overnight</strong> in kitchen sinks or standing water basins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-700">✗</span>
                  <span><strong>Avoid microwave or oven heating</strong>. Extreme microwaves dry out natural cellular wood moisture.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-700">✗</span>
                  <span><strong>Never use wire scrubbers</strong> or metal abrasive pads that scratch the polished grain.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3-Step Re-Oiling Routine */}
        <div className="p-8 rounded-3xl bg-[#241710] text-[#FAF3EB] border border-[#483020] space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">
              THE 5-MINUTE SPA TREATMENT
            </span>
            <h3 className="font-serif-display text-2xl font-bold">
              How to Season &amp; Rejuvenate Your Wood
            </h3>
            <p className="text-xs text-stone-300 font-light">
              Just like leather or skin, wood needs occasional moisturizing to maintain its deep luster and liquid resistance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-[#1A1009] border border-[#3E2719] space-y-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Clean &amp; Dry
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Ensure your wooden utensil is completely dry and clean before applying any conditioning oil.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1009] border border-[#3E2719] space-y-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Massage Natural Oil
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Drizzle a few drops of coconut oil or walnut oil on a lint-free cloth. Massage into the wood grain in circular motions.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1A1009] border border-[#3E2719] space-y-2">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Rest &amp; Buff
              </h4>
              <p className="text-xs text-stone-400 leading-relaxed">
                Let the oil soak in for 30 minutes, then buff gently with a dry cotton towel to reveal a rich velvety sheen.
              </p>
            </div>
          </div>
        </div>

        {/* Collapsible FAQs */}
        <div className="space-y-4">
          <h3 className="font-serif-display text-2xl font-bold text-[#2A180E] text-center mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#EADBCC] overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-serif-display text-sm sm:text-base font-semibold text-[#2A180E]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-[#5C4535] leading-relaxed border-t border-[#F2ECE3] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Support Banner */}
        <div className="p-6 rounded-2xl bg-[#FAF0E6] border border-[#E0D0C0] text-center space-y-2">
          <HelpCircle className="w-6 h-6 text-amber-800 mx-auto" />
          <h4 className="font-serif-display text-base font-bold text-[#2A180E]">
            Have a Specific Question About Your Wooden Piece?
          </h4>
          <p className="text-xs text-stone-600 max-w-md mx-auto">
            Our artisan guild in Saharanpur is always on standby to provide direct guidance on care, repair, and re-polishing.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/919720975271?text=Hi%20Woodmen,%20I%20have%20a%20question%20about%20caring%20for%20my%20wooden%20utensil."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Ask an Artisan on WhatsApp (9720975271)</span>
            </a>
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

