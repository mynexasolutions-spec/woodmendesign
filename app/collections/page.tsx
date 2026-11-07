'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, Layers } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { COLLECTIONS } from '@/data/collections';
import { PRODUCTS } from '@/data/products';

export default function CollectionsPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>HANDCRAFTED TIMBER CATEGORIES</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF3EB] tracking-tight">
            Our Wooden Collections
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-xl mx-auto leading-relaxed">
            Explore our curated artisan categories of seasoned Indian Sheesham, Acacia, and Teak kitchenware, serving platters, and dining centerpieces.
          </p>

          {/* Quick Category Summary Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs border border-white/10">
              6 Curated Categories
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs border border-white/10">
              100% Solid Natural Wood
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-amber-200 text-xs border border-white/10">
              Direct from Saharanpur Artisans
            </span>
          </div>
        </div>
      </section>

      {/* Main Collections Grid: Showing ONLY Categories */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 flex-1 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              href={`/products?category=${encodeURIComponent(col.name)}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Category Image Stage (Edge-to-Edge) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF6F0]">
                {/* Items Count Pill */}
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#EADBCC] text-xs font-bold text-[#2A180E] shadow-sm flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-700" />
                  <span>{col.itemCount} Designs</span>
                </span>

                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">
                    Browse All {col.name}
                  </span>
                </div>
              </div>

              {/* Category Details & CTA */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#2A180E] group-hover:text-amber-800 transition-colors tracking-tight">
                    {col.name}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#6B5547] leading-relaxed font-light">
                    {col.tagline}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="w-full py-3.5 rounded-2xl bg-[#3D2516] group-hover:bg-[#5C3B24] text-white font-bold text-xs sm:text-sm flex items-center justify-center transition-colors shadow-sm">
                    Explore {col.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
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
