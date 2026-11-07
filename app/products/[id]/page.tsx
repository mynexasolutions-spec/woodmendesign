'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Plus,
  Minus
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.59.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.3z" />
    </svg>
  );
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === productId);

  const { addToCart, setIsCheckoutOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'care'>('desc');

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FAF6F0] flex flex-col justify-between">
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        <div className="max-w-md mx-auto text-center py-28 px-4 space-y-4">
          <h2 className="text-2xl font-bold text-[#2A180E]">
            Product Not Found
          </h2>
          <p className="text-xs text-stone-600">
            The requested handcrafted wooden piece is unavailable or has moved.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#3D2516] text-white text-xs font-bold hover:bg-[#52331F] transition-colors"
          >
            Back to All Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  // Related products: priority to same category, supplemented with complementary kitchen/dining pieces
  const categoryMatches = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const complementaryMatches = PRODUCTS.filter(
    (p) => p.category !== product.category && p.id !== product.id
  );
  const relatedProducts = [...categoryMatches, ...complementaryMatches].slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast({
      title: `Added to Cart (${quantity})`,
      message: `${product.name} - ₹${(product.price * quantity).toLocaleString('en-IN')}`,
      type: 'cart',
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    setIsCheckoutOpen(true);
  };

  const discountAmount = product.originalPrice ? product.originalPrice - product.price : 0;
  const discountPercent = product.originalPrice
    ? Math.round((discountAmount / product.originalPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Breadcrumb Bar */}
      <div className="pt-24 sm:pt-28 pb-4 bg-[#F5ECE1]/70 border-b border-[#E8DCCE] text-xs text-[#6B5547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#2A180E] transition-colors">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/products" className="hover:text-[#2A180E] transition-colors">
            Products
          </Link>
          <span className="opacity-40">/</span>
          <Link
            href={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-[#2A180E] transition-colors"
          >
            {product.category}
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-semibold text-[#2A180E] truncate max-w-xs">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Product Layout with Generous Breathing Room */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 xl:gap-16 items-start">
          {/* Left Column: Spacious, Bright Photography Stage */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Image Showcase (Edge-to-edge full bleed, zero padding) */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#FAF6F0] border border-[#E8DCCE] shadow-sm hover:shadow-md transition-all duration-300 group">
              {product.badge && (
                <span className="absolute top-5 left-5 z-10 px-3.5 py-1.5 rounded-full bg-[#E5A855] text-stone-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                  {product.badge}
                </span>
              )}

              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />

              {/* Timber Seal Pill */}
              <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8DCCE] text-[11px] text-[#5C4535] font-medium shadow-sm">
                100% Solid {product.woodType}
              </div>
            </div>

            {/* Unified Trust Strip */}
            <div className="grid grid-cols-3 divide-x divide-[#E8DCCE] rounded-2xl bg-white border border-[#E8DCCE] p-3.5 shadow-sm text-center">
              <div className="px-2 space-y-1">
                <ShieldCheck className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-[11px] sm:text-xs font-bold text-[#2A180E] block">
                  Food-Safe Oil
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Non-toxic finish
                </span>
              </div>

              <div className="px-2 space-y-1">
                <Truck className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-[11px] sm:text-xs font-bold text-[#2A180E] block">
                  Free Shipping
                </span>
                <span className="text-[10px] text-stone-500 block">
                  On orders &gt; ₹999
                </span>
              </div>

              <div className="px-2 space-y-1">
                <RotateCcw className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-[11px] sm:text-xs font-bold text-[#2A180E] block">
                  7-Day Returns
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Hassle-free replacement
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Buying Details & Info */}
          <div className="lg:col-span-6 space-y-6">
            {/* Header info */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C5E37] text-xs font-bold tracking-wider uppercase mb-2">
                {product.category}
              </span>
              <h1 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#2A180E] leading-snug">
                {product.name}
              </h1>

              {/* Rating & Stock Status */}
              <div className="flex flex-wrap items-center gap-3 mt-3">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                  {product.rating}
                </span>
                <span className="text-xs text-stone-500">
                  ({product.reviewsCount} verified reviews)
                </span>
                <span className="text-stone-300 hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Stock &amp; Ready to Ship
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EADBCC] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="flex items-baseline gap-2.5 flex-wrap">
                  <span className="text-2xl sm:text-[26px] font-bold text-[#2A180E]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm sm:text-base text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {discountPercent > 0 && (
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                      Save ₹{discountAmount.toLocaleString('en-IN')} ({discountPercent}% OFF)
                    </span>
                  )}
                </div>
                <span className="text-xs text-stone-500 mt-1 block">
                  Inclusive of all taxes • Handcrafted in Saharanpur
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Key Features Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-[#F6EFE6]/70 border border-[#EADBCC]">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3E2B1F]">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity & Ordering CTAs */}
            <div className="space-y-3 pt-4 border-t border-[#EADBCC]">
              {/* Row 1: Quantity + Add to Cart + Wishlist */}
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#DFD1C2] rounded-2xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#FAF6F0] rounded-xl text-stone-700 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center text-xs sm:text-sm font-bold text-[#2A180E]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-9 h-9 flex items-center justify-center hover:bg-[#FAF6F0] rounded-xl text-stone-700 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 sm:py-4 px-6 rounded-2xl bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl border border-[#DFD1C2] bg-white transition-all flex items-center justify-center shrink-0 ${
                    inWishlist ? 'text-rose-600 bg-rose-50 border-rose-300' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Row 2: Instant Buy Now (WhatsApp Green) */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 sm:py-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5 text-white shrink-0" />
                <span>Buy Now with Instant Checkout (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
              </button>
            </div>

            {/* Tabs: Specifications, Care, Details */}
            <div className="mt-8 rounded-2xl bg-white border border-[#EADBCC] p-5 sm:p-6 shadow-sm">
              <div className="flex border-b border-[#F0E4D7] gap-4 sm:gap-6 text-xs sm:text-sm font-semibold">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-2.5 transition-colors relative ${
                    activeTab === 'desc'
                      ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Wood Story
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2.5 transition-colors relative ${
                    activeTab === 'specs'
                      ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2.5 transition-colors relative ${
                    activeTab === 'care'
                      ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Care &amp; Maintenance
                </button>
              </div>

              <div className="pt-4 text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                {activeTab === 'desc' && (
                  <p>
                    Every piece of {product.woodType} is personally inspected for natural grain balance.
                    Because genuine wood has unique grain flows, each piece is truly one-of-a-kind. Handcrafted
                    by generational woodturning families in Saharanpur, India.
                  </p>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-2 p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EADBCC]">
                    <div className="flex justify-between py-1 border-b border-[#EADBCC]/60">
                      <span className="text-stone-500">Wood Species:</span>
                      <strong className="text-stone-800">{product.woodType}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EADBCC]/60">
                      <span className="text-stone-500">Dimensions:</span>
                      <strong className="text-stone-800">{product.dimensions}</strong>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#EADBCC]/60">
                      <span className="text-stone-500">Protective Coating:</span>
                      <strong className="text-stone-800">{product.finish}</strong>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-stone-500">Origin:</span>
                      <strong className="text-stone-800">Saharanpur, Uttar Pradesh, India</strong>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <ul className="list-disc pl-5 space-y-1.5 text-stone-700">
                    <li>Wash with mild soapy water and a soft sponge. Never soak in water.</li>
                    <li>Not recommended for dishwasher or microwave use.</li>
                    <li>Towel dry immediately after washing and let air dry in an open space.</li>
                    <li>Re-hydrate every 2–3 months with a drop of coconut oil or walnut oil.</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-24 pt-10 border-t border-[#DFCFC0]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
                  <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
                  <span>HANDCRAFTED COMPANIONS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2A180E] tracking-tight">
                  {categoryMatches.length >= 3 ? `More from ${product.category}` : 'You May Also Like'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#735D4E] max-w-sm">
                Authentic seasoned hardwood kitchenware meticulously paired for everyday culinary elegance.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => {
                const isRelInWishlist = isInWishlist(rel.id);
                return (
                  <div
                    key={rel.id}
                    className="rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Top Flush Image (Zero Padding) */}
                    <div className="relative w-full aspect-square overflow-hidden bg-[#FAF6F0]">
                      {rel.badge && (
                        <span className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-md bg-[#241710] text-[#E5A855] text-[10px] font-bold tracking-wider uppercase shadow">
                          {rel.badge}
                        </span>
                      )}

                      {/* Wishlist toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(rel);
                          showToast({
                            title: isRelInWishlist ? 'Removed from Wishlist' : 'Saved to Wishlist',
                            message: rel.name,
                            type: 'wishlist',
                          });
                        }}
                        className={`absolute top-3 right-3 z-10 p-1.5 rounded-full backdrop-blur-md transition-all ${
                          isRelInWishlist
                            ? 'bg-rose-50 text-rose-500 fill-current'
                            : 'bg-white/80 hover:bg-white text-stone-700 shadow-sm'
                        }`}
                        aria-label="Save to Wishlist"
                      >
                        <Heart
                          className={`w-4 h-4 ${isRelInWishlist ? 'fill-rose-500 text-rose-500' : ''}`}
                        />
                      </button>

                      <Link
                        href={`/products/${rel.id}`}
                        className="relative w-full h-full block cursor-pointer group-hover:scale-105 transition-transform duration-500"
                      >
                        <Image
                          src={rel.image}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-md">
                            View Piece
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Card Content */}
                    <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#A67B52] font-bold block mb-1">
                          {rel.woodType.split(' ')[0]} Wood
                        </span>
                        <Link
                          href={`/products/${rel.id}`}
                          className="font-semibold text-xs sm:text-sm text-[#2A180E] group-hover:text-amber-800 transition-colors line-clamp-1 block"
                        >
                          {rel.name}
                        </Link>
                        <div className="flex items-center gap-1 mt-1.5 text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span className="text-xs font-bold text-[#2A180E]">
                            {rel.rating}
                          </span>
                          <span className="text-[11px] text-stone-400">
                            ({rel.reviewsCount})
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#F2ECE3]">
                        <div>
                          <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                            ₹{rel.price.toLocaleString('en-IN')}
                          </span>
                          {rel.originalPrice && (
                            <span className="text-[10px] text-stone-400 line-through ml-1.5">
                              ₹{rel.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            addToCart(rel, 1);
                            showToast({
                              title: 'Added to Cart',
                              message: `${rel.name} - ₹${rel.price.toLocaleString('en-IN')}`,
                              type: 'cart',
                            });
                          }}
                          className="w-8 h-8 rounded-lg bg-[#3D2516] hover:bg-[#52331F] text-[#FAF6F0] flex items-center justify-center transition-colors shadow-sm"
                          title="Quick Add to Cart"
                          aria-label={`Add ${rel.name} to cart`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Explore Link */}
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-[#DFCFC0] bg-white hover:bg-[#F2ECE3] text-[#2A180E] text-xs font-bold transition-colors shadow-sm"
              >
                Explore Full Handcrafted Catalog
              </Link>
            </div>
          </div>
        )}
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
