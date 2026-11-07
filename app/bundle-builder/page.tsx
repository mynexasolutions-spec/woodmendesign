'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  Gift,
  Check,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Percent
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

export default function BundleBuilderPage() {
  const { addToCart, setIsCartOpen } = useCart();
  const { showToast } = useToast();

  const [selectedBase, setSelectedBase] = useState<Product>(PRODUCTS[0]);
  const [selectedCompanion, setSelectedCompanion] = useState<Product>(PRODUCTS[2]);
  const [selectedCare, setSelectedCare] = useState<string>('beeswax');
  const [giftNote, setGiftNote] = useState('');
  const [ribbonColor, setRibbonColor] = useState('olive');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const basePrice = selectedBase.price;
  const companionPrice = selectedCompanion.price;
  const carePrice = selectedCare === 'beeswax' ? 249 : 299;
  const rawTotal = basePrice + companionPrice + carePrice;
  const discount = Math.round(rawTotal * 0.15); // 15% off bundle
  const finalBundlePrice = rawTotal - discount;

  const handleAddBundleToCart = () => {
    // Add custom bundle
    const customBundleProduct: Product = {
      id: `bundle-${Date.now()}`,
      name: `Artisan Gift Box (${selectedBase.name} + ${selectedCompanion.name})`,
      category: 'Serving Trays',
      price: finalBundlePrice,
      originalPrice: rawTotal,
      rating: 5.0,
      reviewsCount: 1,
      image: '/images/occasion-gifting.jpg',
      badge: '15% Off Bundle',
      woodType: `${selectedBase.woodType} & ${selectedCompanion.woodType}`,
      dimensions: 'Custom Kraft Gift Packaging with Jute Twine',
      finish: 'Food-Safe Natural Wax & Walnut Oil',
      shortDescription: `Curated wooden gift set with personalized gift message: "${giftNote || 'With warm wishes'}"`,
      description: `Includes: 1x ${selectedBase.name}, 1x ${selectedCompanion.name}, 1x Organic Wood Care (${selectedCare === 'beeswax' ? 'Pure Beeswax' : 'Walnut Oil'}), packaged in luxury kraft box tied with ${ribbonColor} ribbon.`,
      features: [
        'Curated 3-piece artisanal homeware gift box',
        'Includes complimentary hand-written calligraphy gift card',
        'Pre-seasoned with food-grade organic walnut oil',
        'Protected with zero-plastic kraft paper padding'
      ],
      inStock: true,
    };

    addToCart(customBundleProduct, 1);
    showToast({
      title: 'Artisan Gift Bundle Added!',
      message: `Saved ₹${discount} with automatic 15% bundle discount!`,
      type: 'cart',
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Gift className="w-3.5 h-3.5" />
            <span>CUSTOM GIFT BOX CREATOR</span>
            <Gift className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#FAF3EB]">
            Build Your Wooden Gift Hamper
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-lg mx-auto">
            Curate a bespoke gift set for weddings, housewarmings, or festive occasions.
            Enjoy an automatic <strong className="text-amber-300">15% bundle discount</strong> and
            complimentary handwritten gift card.
          </p>
        </div>
      </section>

      {/* Main Bundle Studio */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Selection Steps */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Base Piece */}
            <div className="p-6 rounded-3xl bg-white border border-[#DFD1C2] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Step 01
                </span>
                <span className="text-xs text-stone-500 font-medium">Select Core Tableware</span>
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#2A180E]">
                Choose Your Centerpiece
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRODUCTS.slice(0, 3).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedBase(prod)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      selectedBase.id === prod.id
                        ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700'
                        : 'border-[#EADBCC] bg-[#FAF6F0] hover:bg-white'
                    }`}
                  >
                    <div
                      className="relative aspect-square rounded-xl overflow-hidden bg-white mb-2 p-1"
                      style={{ position: 'relative', width: '100%', height: '110px' }}
                    >
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="110px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-xs font-bold text-[#2A180E] line-clamp-1">
                        {prod.name}
                      </h4>
                      <span className="text-xs font-bold text-amber-900 mt-0.5 block">
                        ₹{prod.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Serving Companion */}
            <div className="p-6 rounded-3xl bg-white border border-[#DFD1C2] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Step 02
                </span>
                <span className="text-xs text-stone-500 font-medium">Select Companion Piece</span>
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#2A180E]">
                Add a Serving Platter or Spice Box
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PRODUCTS.slice(3, 6).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => setSelectedCompanion(prod)}
                    className={`p-3 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                      selectedCompanion.id === prod.id
                        ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700'
                        : 'border-[#EADBCC] bg-[#FAF6F0] hover:bg-white'
                    }`}
                  >
                    <div
                      className="relative aspect-square rounded-xl overflow-hidden bg-white mb-2 p-1"
                      style={{ position: 'relative', width: '100%', height: '110px' }}
                    >
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        fill
                        sizes="110px"
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif-display text-xs font-bold text-[#2A180E] line-clamp-1">
                        {prod.name}
                      </h4>
                      <span className="text-xs font-bold text-amber-900 mt-0.5 block">
                        ₹{prod.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Natural Conditioning Care */}
            <div className="p-6 rounded-3xl bg-white border border-[#DFD1C2] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  Step 03
                </span>
                <span className="text-xs text-stone-500 font-medium">Select Wood Care Conditioner</span>
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#2A180E]">
                Include Natural Conditioning Wax / Oil
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  onClick={() => setSelectedCare('beeswax')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedCare === 'beeswax'
                      ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700'
                      : 'border-[#EADBCC] bg-[#FAF6F0]'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#2A180E]">
                      Artisan Pure Beeswax Polish (50g)
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Natural water-repellent protective salve
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-900">₹249</span>
                </div>

                <div
                  onClick={() => setSelectedCare('oil')}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedCare === 'oil'
                      ? 'border-amber-700 bg-amber-50/50 ring-2 ring-amber-700'
                      : 'border-[#EADBCC] bg-[#FAF6F0]'
                  }`}
                >
                  <div>
                    <h4 className="text-xs font-bold text-[#2A180E]">
                      Cold-Pressed Walnut Oil (100ml)
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      Deep penetrating food-safe moisturizing oil
                    </p>
                  </div>
                  <span className="text-xs font-bold text-amber-900">₹299</span>
                </div>
              </div>
            </div>

            {/* Step 4: Gift Note & Ribbon */}
            <div className="p-6 rounded-3xl bg-white border border-[#DFD1C2] shadow-sm space-y-4">
              <h3 className="font-serif-display text-lg font-bold text-[#2A180E]">
                Personalize with Handwritten Card &amp; Ribbon
              </h3>

              <div>
                <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                  Gift Message (Will be handwritten on handmade paper card)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Wishing you endless warmth and delicious meals in your new home! With love, Aditi & Rohan"
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF6F0] border border-[#DFD1C2] text-xs focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-700 block mb-1">
                  Ribbon Color
                </label>
                <div className="flex gap-2">
                  {[
                    { id: 'olive', label: 'Forest Olive' },
                    { id: 'burgundy', label: 'Festive Crimson' },
                    { id: 'gold', label: 'Golden Amber' },
                  ].map((r) => (
                    <button
                      key={r.id}
                      type="button"
                      onClick={() => setRibbonColor(r.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                        ribbonColor === r.id
                          ? 'bg-[#3D2516] text-white border-[#3D2516]'
                          : 'bg-[#FAF6F0] text-stone-700 border-[#DFD1C2]'
                      }`}
                    >
                      {r.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Bundle Summary Card */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="p-6 rounded-3xl bg-white border border-[#DFD1C2] shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#F2ECE3]">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-amber-700" />
                  <h3 className="font-serif-display text-base font-bold text-[#2A180E]">
                    Your Custom Gift Box
                  </h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold flex items-center gap-1">
                  <Percent className="w-3 h-3" />
                  15% Bundle Discount
                </span>
              </div>

              {/* Box presentation preview image */}
              <div
                className="relative aspect-video rounded-2xl overflow-hidden bg-[#241710] p-2 flex items-center justify-center"
                style={{ position: 'relative', width: '100%', height: '180px' }}
              >
                <Image
                  src="/images/occasion-gifting.jpg"
                  alt="Curated Woodmen Gift Box"
                  fill
                  sizes="300px"
                  className="object-cover"
                />
              </div>

              {/* Items included */}
              <div className="space-y-2 text-xs text-stone-700">
                <div className="flex justify-between">
                  <span>1. {selectedBase.name}</span>
                  <span className="font-semibold text-[#2A180E]">₹{basePrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>2. {selectedCompanion.name}</span>
                  <span className="font-semibold text-[#2A180E]">₹{companionPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>3. {selectedCare === 'beeswax' ? 'Artisan Beeswax' : 'Walnut Oil'}</span>
                  <span className="font-semibold text-[#2A180E]">₹{carePrice}</span>
                </div>
                <div className="flex justify-between text-emerald-800">
                  <span>Luxury Box Packaging &amp; Gift Card</span>
                  <span className="font-bold uppercase text-[10px]">FREE</span>
                </div>
              </div>

              {/* Price calculation */}
              <div className="pt-3 border-t border-[#F2ECE3] space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-500">
                  <span>Original Value:</span>
                  <span className="line-through">₹{rawTotal}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Bundle Discount (15%):</span>
                  <span>-₹{discount}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#2A180E] pt-2 border-t border-[#EADBCC]">
                  <span>Total Bundle Price:</span>
                  <span className="text-xl">₹{finalBundlePrice}</span>
                </div>
              </div>

              {/* Add to Cart button */}
              <button
                onClick={handleAddBundleToCart}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add Curated Box to Cart (₹{finalBundlePrice})</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Shipped in sturdy shock-resistant courier packaging</span>
              </div>
            </div>
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

