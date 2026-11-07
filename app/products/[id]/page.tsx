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
  Phone,
  CheckCircle2,
  Share2,
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
        <div className="max-w-md mx-auto text-center py-20 px-4 space-y-4">
          <h2 className="font-serif-display text-2xl font-bold text-[#2A180E]">
            Product Not Found
          </h2>
          <p className="text-xs text-stone-600">
            The requested handcrafted wooden piece is unavailable or has moved.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#3D2516] text-white text-xs font-bold"
          >
            Back to All Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

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

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Breadcrumb Bar - padded down to sit gracefully under semi-transparent fixed navbar */}
      <div className="pt-20 sm:pt-24 pb-3 bg-[#F0E6DB] border-b border-[#DFD1C2] text-xs text-[#6B5547]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#2A180E] transition-colors">
            Home
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/products" className="hover:text-[#2A180E] transition-colors">
            Products
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/products" className="hover:text-[#2A180E] transition-colors">
            {product.category}
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-semibold text-[#2A180E] truncate max-w-xs">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Product Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-b from-[#241710] to-[#170E09] border border-[#483020] shadow-xl p-8 flex items-center justify-center group">
              {product.badge && (
                <span className="absolute top-5 left-5 z-10 px-3 py-1 rounded-md bg-[#E5A855] text-stone-950 text-xs font-bold uppercase tracking-wider shadow">
                  {product.badge}
                </span>
              )}

              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm p-4 border border-white/10 group-hover:scale-105 transition-transform duration-500"
                style={{ position: 'relative', width: '320px', height: '320px', maxWidth: '100%' }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="320px"
                  className="object-contain p-2"
                  priority
                />
              </div>

              {/* Watermark seal */}
              <div className="absolute bottom-4 right-4 bg-[#1B110A]/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-amber-500/20 text-[10px] text-amber-300 font-mono">
                100% Solid Seasoned Timber
              </div>
            </div>

            {/* Quick feature highlights beneath image */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-white border border-[#EADBCC] text-center space-y-1">
                <ShieldCheck className="w-4 h-4 text-amber-700 mx-auto" />
                <span className="text-[11px] font-bold text-[#2A180E] block">
                  Food-Safe Oil
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Non-toxic polish
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#EADBCC] text-center space-y-1">
                <Truck className="w-4 h-4 text-amber-700 mx-auto" />
                <span className="text-[11px] font-bold text-[#2A180E] block">
                  Free Shipping
                </span>
                <span className="text-[10px] text-stone-500 block">
                  On orders &gt; ₹999
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#EADBCC] text-center space-y-1">
                <RotateCcw className="w-4 h-4 text-amber-700 mx-auto" />
                <span className="text-[11px] font-bold text-[#2A180E] block">
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
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C5E37] font-bold block mb-1">
                {product.category}
              </span>
              <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A180E] leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#2A180E]">
                  {product.rating}
                </span>
                <span className="text-xs text-stone-500">
                  ({product.reviewsCount} verified reviews)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] flex items-center justify-between">
              <div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl font-bold text-[#2A180E]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-stone-400 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-stone-500">
                  Inclusive of all taxes • Ready to ship from Saharanpur
                </span>
              </div>

              <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                In Stock
              </span>
            </div>

            {/* Short description */}
            <p className="text-sm text-[#5C4535] leading-relaxed font-light">
              {product.description}
            </p>

            {/* Features checkmarks */}
            <div className="space-y-2 pt-1">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity & CTAs */}
            <div className="space-y-3 pt-3 border-t border-[#EADBCC]">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#DFD1C2] rounded-xl bg-white p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-[#FAF6F0] rounded text-stone-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-xs font-bold text-[#2A180E] min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-[#FAF6F0] rounded text-stone-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-xl border border-[#DFD1C2] bg-white transition-colors ${
                    inWishlist ? 'text-rose-600 bg-rose-50' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm shadow-lg shadow-amber-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                Buy Now with Instant Checkout (₹{(product.price * quantity).toLocaleString('en-IN')})
              </button>

              {/* Direct WhatsApp Order */}
              <a
                href={`https://wa.me/919720975271?text=Hi%20Woodmen,%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(Quantity:%20${quantity})`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl border border-emerald-500/40 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-700" />
                <span>Order via WhatsApp Direct: 9720975271</span>
              </a>
            </div>

            {/* Tabs: Specifications, Care, Details */}
            <div className="pt-4">
              <div className="flex border-b border-[#DFCFC0] gap-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('desc')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'desc'
                      ? 'border-b-2 border-amber-700 text-[#2A180E]'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Wood Story
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'specs'
                      ? 'border-b-2 border-amber-700 text-[#2A180E]'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 transition-colors ${
                    activeTab === 'care'
                      ? 'border-b-2 border-amber-700 text-[#2A180E]'
                      : 'text-stone-500 hover:text-stone-800'
                  }`}
                >
                  Care & Maintenance
                </button>
              </div>

              <div className="pt-3 text-xs text-[#5C4535] leading-relaxed">
                {activeTab === 'desc' && (
                  <p>
                    Every piece of {product.woodType} is personally inspected for natural grain balance.
                    Because genuine wood has unique grain flows, each piece is truly one-of-a-kind. Handcrafted
                    by generational woodturning families in Saharanpur, India.
                  </p>
                )}

                {activeTab === 'specs' && (
                  <div className="space-y-1.5 p-3 rounded-xl bg-white border border-[#EADBCC]">
                    <div className="flex justify-between">
                      <span className="text-stone-500">Wood Species:</span>
                      <strong className="text-stone-800">{product.woodType}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Dimensions:</span>
                      <strong className="text-stone-800">{product.dimensions}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Protective Coating:</span>
                      <strong className="text-stone-800">{product.finish}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Origin:</span>
                      <strong className="text-stone-800">Saharanpur, Uttar Pradesh, India</strong>
                    </div>
                  </div>
                )}

                {activeTab === 'care' && (
                  <ul className="list-disc pl-4 space-y-1 text-stone-700">
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
            <h3 className="font-serif-display text-2xl font-bold text-[#2A180E] mb-6">
              More from {product.category}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.id}`}
                  className="p-3 sm:p-4 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all group"
                >
                  <div
                    className="relative aspect-square rounded-xl overflow-hidden bg-[#FAF6F0] mb-3 flex items-center justify-center p-2 group-hover:scale-105 transition-transform"
                    style={{ position: 'relative', width: '100%', height: '160px', overflow: 'hidden' }}
                  >
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      sizes="160px"
                      className="object-contain p-2"
                    />
                  </div>
                  <h4 className="font-serif-display text-xs sm:text-sm font-bold text-[#2A180E] group-hover:text-amber-800 transition-colors line-clamp-1">
                    {rel.name}
                  </h4>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#F2ECE3]">
                    <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                      ₹{rel.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[11px] text-amber-700 font-semibold transition-colors">
                      View
                    </span>
                  </div>
                </Link>
              ))}
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

