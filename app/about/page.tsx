'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  TreeDeciduous,
  ShieldCheck,
  Hammer,
  Heart,
  Phone,
  CheckCircle2
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR HERITAGE & MISSION</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FBF6F0] leading-tight">
            Crafted by Nature, <br />
            <span className="italic font-normal text-amber-300">Designed for You</span>
          </h1>

          <p className="text-sm sm:text-base text-[#D4C3B4] font-light leading-relaxed">
            Rooted in the historic woodcraft city of Saharanpur, India, Woodmen Design Corporation
            honors centuries-old woodturning and hand-carving traditions while designing functional,
            modern kitchenware built to last generations.
          </p>
        </div>
      </section>

      {/* Story & Craftsmanship Split */}
      <section className="py-16 sm:py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div
              className="lg:col-span-6 relative h-[360px] sm:h-[460px] rounded-3xl overflow-hidden border border-[#DFD1C2] shadow-xl"
              style={{ position: 'relative', width: '100%', minHeight: '360px', overflow: 'hidden' }}
            >
              <Image
                src="/images/craftsmanship-artisan.jpg"
                alt="Woodmen Master Artisan at Work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-[#8C5E37] font-bold">
                THE SAHARANPUR LEGACY
              </span>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2A180E] leading-tight">
                Generations of Woodturning Mastery
              </h2>

              <p className="text-sm text-[#5C4535] leading-relaxed font-light">
                Saharanpur has been renowned as India&apos;s capital of wood carving since the Mughal era.
                Every wooden bowl, roti casserole, and spice box we make is shaped by artisans whose
                ancestors carved palace doors and royal banquet tableware.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADBCC]">
                  <TreeDeciduous className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#2A180E]">
                      60-Day Kiln Seasoning
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      We naturally stabilize every log of Sheesham, Teak, and Acacia to 8–12% moisture
                      content, eliminating cracking or warping in any climate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADBCC]">
                  <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#2A180E]">
                      100% Non-Toxic & Food-Safe
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      We never use synthetic polyurethanes or toxic dyes. Every item is treated with
                      pure cold-pressed walnut oil and organic beeswax.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#EADBCC]">
                  <Heart className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#2A180E]">
                      Direct Fair-Trade Artisan Wages
                    </h4>
                    <p className="text-[11px] text-stone-500">
                      By purchasing directly from Woodmen Design Corporation, you support over 40+ artisan
                      families with fair, dignifying wages and heritage preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Artisan Hotline Callout */}
      <section className="py-12 bg-[#20140D] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-bold">
            DIRECT ARTISAN DIAL
          </p>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#FAF3EB]">
            Speak with Our Head Woodcrafter
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
            Have custom size requirements, bespoke laser engraving desires, or questions about wood grain?
          </p>
          <div className="pt-2">
            <a
              href="tel:9720975271"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-sm shadow-xl hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9720975271</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <CartDrawer />
      <CheckoutModal />
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

