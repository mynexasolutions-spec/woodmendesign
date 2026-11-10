'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams, useRouter } from 'next/navigation';
import {
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Check,
  Plus,
  Minus,
  Droplets,
  Ban,
  Wind
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, Product } from '@/data/products';
import { PRODUCT_DETAILS } from '@/data/product-details';
import ProductImageFill from '@/components/ProductImageFill';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';
import { buyNowOnWhatsApp } from '@/lib/whatsapp';

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

/** Splits "LEAD IN CAPS: rest of the sentence" (Amazon bullet style) into a bold lead and the text. */
function splitLead(line: string): { lead: string | null; text: string } {
  const m = line.match(/^([A-Z0-9][A-Z0-9 &/,'’()+-]{2,60}?)\s*[:–—]\s*(.+)$/);
  if (!m) return { lead: null, text: line };
  return { lead: m[1].trim().toLowerCase(), text: m[2].trim() };
}

export default function ProductDetailPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params?.id as string;
  const product = PRODUCTS.find((p) => p.id === productId);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [quantity, setQuantity] = useState(1);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'care'>('desc');
  const [relatedAddedId, setRelatedAddedId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  // Reset gallery when navigating between products
  useEffect(() => {
    setActiveImage(0);
  }, [productId]);

  const handleQuickAddRelated = (rel: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(rel, 1);
    setRelatedAddedId(rel.id);
    showToast({
      title: 'Added to Cart',
      message: `${rel.name} (₹${rel.price.toLocaleString('en-IN')})`,
      type: 'cart',
    });
    setTimeout(() => {
      setRelatedAddedId((current) => (current === rel.id ? null : current));
    }, 1200);
  };

  const handleBuyNowRelated = (rel: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    buyNowOnWhatsApp(rel, 1);
  };

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

  const gallery = product.images && product.images.length > 0 ? product.images : [product.image];
  const mainImage = gallery[activeImage] ?? product.image;
  const details = PRODUCT_DETAILS[product.id];
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
    buyNowOnWhatsApp(product, quantity);
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

              <ProductImageFill key={mainImage} src={mainImage} alt={product.name} sizes="(max-width: 1024px) 100vw, 50vw" priority className="transition-transform duration-500 group-hover:scale-105" />

              {/* Timber Seal Pill */}
              <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E8DCCE] text-xs sm:text-sm text-[#5C4535] font-semibold shadow-sm">
                {/mdf|metal|enamel|print/i.test(product.woodType)
                  ? product.woodType
                  : `100% Solid ${product.woodType}`}
              </div>
            </div>

            {/* Thumbnail Gallery (only when product has multiple photos) */}
            {gallery.length > 1 && (
              <div className="flex flex-nowrap gap-2.5 overflow-x-auto no-scrollbar py-1 px-0.5 sm:grid sm:grid-cols-6 sm:overflow-visible">
                {gallery.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    aria-label={`View photo ${idx + 1} of ${product.name}`}
                    aria-current={idx === activeImage}
                    className={`relative aspect-square w-16 shrink-0 sm:w-auto rounded-xl overflow-hidden bg-white border-2 transition-all ${
                      idx === activeImage
                        ? 'border-amber-700 shadow-sm'
                        : 'border-[#E8DCCE] opacity-80 hover:opacity-100 hover:border-[#C9A27A]'
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="100px"
                      className="object-contain bg-white"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Unified Trust Strip */}
            <div className="grid grid-cols-3 divide-x divide-[#E8DCCE] rounded-2xl bg-white border border-[#E8DCCE] p-4 shadow-sm text-center">
              <div className="px-2 space-y-1">
                <ShieldCheck className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-xs sm:text-sm font-bold text-[#2A180E] block">
                  Food-Safe Oil
                </span>
                <span className="text-xs text-stone-500 block">
                  Non-toxic finish
                </span>
              </div>

              <div className="px-2 space-y-1">
                <Truck className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-xs sm:text-sm font-bold text-[#2A180E] block">
                  Free Shipping
                </span>
                <span className="text-xs text-stone-500 block">
                  On orders &gt; ₹999
                </span>
              </div>

              <div className="px-2 space-y-1">
                <RotateCcw className="w-5 h-5 text-amber-700 mx-auto" />
                <span className="text-xs sm:text-sm font-bold text-[#2A180E] block">
                  7-Day Returns
                </span>
                <span className="text-xs text-stone-500 block">
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
                {product.reviewsCount > 0 ? (
                  <>
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
                  </>
                ) : (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">New Arrival</span>
                )}
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
                  Inclusive of all taxes • Handcrafted in Amroha
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
                <span>Buy Now on WhatsApp (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Product Details Tabs (Spans across entire container width) */}
        <div className="mt-8 sm:mt-14 w-full rounded-2xl bg-white border border-[#EADBCC] p-3.5 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex overflow-x-auto no-scrollbar border-b border-[#F0E4D7] gap-5 sm:gap-10 text-sm sm:text-base font-semibold">
            <button
              onClick={() => setActiveTab('desc')}
              className={`pb-3 sm:pb-3.5 whitespace-nowrap shrink-0 transition-colors relative ${
                activeTab === 'desc'
                  ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              {details ? 'Description' : 'Wood Story'}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-3 sm:pb-3.5 whitespace-nowrap shrink-0 transition-colors relative ${
                activeTab === 'specs'
                  ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <span className="sm:hidden">{details ? 'Product Info' : 'Specs'}</span>
              <span className="hidden sm:inline">{details ? 'Product Information' : 'Specifications'}</span>
            </button>
            <button
              onClick={() => setActiveTab('care')}
              className={`pb-3 sm:pb-3.5 whitespace-nowrap shrink-0 transition-colors relative ${
                activeTab === 'care'
                  ? 'border-b-2 border-amber-700 text-[#2A180E] font-bold'
                  : 'text-stone-500 hover:text-stone-800'
              }`}
            >
              <span className="sm:hidden">Care</span>
              <span className="hidden sm:inline">Care &amp; Maintenance</span>
            </button>
          </div>

          <div className="pt-4 sm:pt-6 text-sm sm:text-base text-[#5C4535] leading-relaxed">
            {activeTab === 'desc' && details && (
              <div className="max-w-4xl space-y-5">
                {details.about.length > 0 && (
                  <div className="rounded-2xl border border-[#EADBCC] overflow-hidden bg-white shadow-sm">
                    <div className="px-4 sm:px-6 py-4 bg-[#FAF6F0] border-b border-[#EADBCC]">
                      <h4 className="text-base sm:text-lg font-bold text-[#2A180E]">About this item</h4>
                    </div>
                    <ul className="divide-y divide-[#F0E4D7]">
                      {details.about.map((line, i) => {
                        const { lead, text } = splitLead(line);
                        return (
                          <li key={i} className="flex items-start gap-3 px-4 sm:px-6 py-3.5 text-sm text-[#3E2B1F]">
                            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">
                              {lead && (
                                <strong className="font-semibold text-[#2A180E] capitalize">{lead}: </strong>
                              )}
                              {text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
                {details.description && (
                  <div className="rounded-2xl border border-[#EADBCC] overflow-hidden bg-white shadow-sm">
                    <div className="px-4 sm:px-6 py-4 bg-[#FAF6F0] border-b border-[#EADBCC]">
                      <h4 className="text-base sm:text-lg font-bold text-[#2A180E]">Product description</h4>
                    </div>
                    <p className="px-4 sm:px-6 py-4 text-sm leading-7 text-[#3E2B1F]">{details.description}</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'desc' && !details && (
              <p className="max-w-4xl">
                Every piece of {product.woodType} is personally inspected for natural grain balance.
                Because genuine wood has unique grain flows, each piece is truly one-of-a-kind. Handcrafted
                by generational woodturning families in Amroha, India.
              </p>
            )}

            {activeTab === 'specs' && details && (
              <div className="max-w-4xl rounded-2xl border border-[#EADBCC] overflow-hidden bg-white shadow-sm">
                <div className="px-4 sm:px-6 py-4 bg-[#FAF6F0] border-b border-[#EADBCC]">
                  <h4 className="text-base sm:text-lg font-bold text-[#2A180E]">Product information</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{product.name}</p>
                </div>
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    {details.specs.map(([label, value], i) => (
                      <tr
                        key={label}
                        className={`border-b border-[#F0E4D7] last:border-b-0 ${i % 2 === 1 ? 'bg-[#FDFAF6]' : 'bg-white'}`}
                      >
                        <th
                          scope="row"
                          className="w-2/5 sm:w-1/3 align-top text-left font-semibold text-[#5C4535] bg-[#FAF6F0]/80 border-r border-[#F0E4D7] px-4 sm:px-6 py-3"
                        >
                          {label}
                        </th>
                        <td className="align-top text-[#2A180E] px-4 sm:px-6 py-3 break-words">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'specs' && !details && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-xl bg-[#FAF6F0] border border-[#EADBCC]">
                <div className="p-3 bg-white/70 rounded-lg border border-[#EADBCC]/60">
                  <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold mb-1">Wood Species</span>
                  <strong className="text-sm sm:text-base text-stone-800">{product.woodType}</strong>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#EADBCC]/60">
                  <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold mb-1">Dimensions</span>
                  <strong className="text-sm sm:text-base text-stone-800">{product.dimensions}</strong>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#EADBCC]/60">
                  <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold mb-1">Protective Coating</span>
                  <strong className="text-sm sm:text-base text-stone-800">{product.finish}</strong>
                </div>
                <div className="p-3 bg-white/70 rounded-lg border border-[#EADBCC]/60">
                  <span className="text-xs text-stone-500 block uppercase tracking-wider font-semibold mb-1">Origin</span>
                  <strong className="text-sm sm:text-base text-stone-800">Amroha, UP, India</strong>
                </div>
              </div>
            )}

            {activeTab === 'care' && (
              <div className="max-w-4xl rounded-2xl border border-[#EADBCC] overflow-hidden bg-white shadow-sm">
                <div className="px-4 sm:px-6 py-4 bg-[#FAF6F0] border-b border-[#EADBCC]">
                  <h4 className="text-base sm:text-lg font-bold text-[#2A180E]">Care &amp; maintenance</h4>
                  <p className="text-xs text-stone-500 mt-0.5">Keep your wooden piece beautiful for years</p>
                </div>
                <ul className="divide-y divide-[#F0E4D7]">
                  {[
                    { Icon: Droplets, title: 'Gentle wash', text: 'Wash with mild soapy water and a soft sponge. Never soak in water.' },
                    { Icon: Ban, title: 'No dishwasher or microwave', text: 'Not recommended for dishwasher or microwave use.' },
                    { Icon: Wind, title: 'Dry well', text: 'Towel dry immediately after washing and let air dry in an open space.' },
                    { Icon: Sparkles, title: 'Re-oil regularly', text: 'Re-hydrate every 2–3 months with a drop of coconut oil or walnut oil.' },
                  ].map(({ Icon, title, text }) => (
                    <li key={title} className="flex items-start gap-4 px-4 sm:px-6 py-4">
                      <span className="w-9 h-9 shrink-0 rounded-full bg-[#F6EFE6] border border-[#EADBCC] flex items-center justify-center">
                        <Icon className="w-4 h-4 text-amber-700" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#2A180E]">{title}</p>
                        <p className="text-sm text-[#5C4535] leading-relaxed mt-0.5">{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
                    className="bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                  >
                    {/* Top Flush Image: Edge-to-Edge */}
                    <div
                      className="relative w-full aspect-[5/4] sm:aspect-square overflow-hidden bg-[#FAF6F0]"
                    >
                      {rel.badge && (
                        <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-md bg-[#241710] text-[#E5A855] text-xs font-bold tracking-wider uppercase shadow">
                          {rel.badge}
                        </span>
                      )}

                      {/* Wishlist toggle */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleWishlist(rel);
                          showToast({
                            title: isRelInWishlist ? 'Removed from Wishlist' : 'Saved to Wishlist',
                            message: rel.name,
                            type: 'wishlist',
                          });
                        }}
                        className={`absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-md transition-all ${
                          isRelInWishlist
                            ? 'bg-rose-50 text-rose-500 fill-current shadow-md'
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
                        style={{ position: 'relative', width: '100%', height: '100%' }}
                      >
                        <ProductImageFill src={rel.image} alt={rel.name} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-lg">
                            View Product
                          </span>
                        </div>
                      </Link>
                    </div>

                    {/* Card Content */}
                    <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#A67B52] font-bold">
                          {rel.woodType.split(' ')[0]} Wood
                        </span>
                        <Link
                          href={`/products/${rel.id}`}
                          className="font-serif-display font-semibold text-sm sm:text-[15px] text-[#2A180E] group-hover:text-[#A67B52] transition-colors line-clamp-1 mt-1 cursor-pointer block"
                          title={rel.name}
                        >
                          {rel.name}
                        </Link>
                        <div className="flex items-center gap-1.5 mt-2">
                          <div className="flex items-center text-amber-500">
                            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          </div>
                          <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                            {rel.rating}
                          </span>
                          <span className="text-xs text-stone-500">
                            ({rel.reviewsCount})
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#F2ECE3]">
                        {/* Price Row with Quick Add */}
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-base sm:text-lg font-bold text-[#2A180E]">
                                ₹{rel.price.toLocaleString('en-IN')}
                              </span>
                              {rel.originalPrice && (
                                <span className="text-xs text-stone-400 line-through">
                                  ₹{rel.originalPrice.toLocaleString('en-IN')}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Quick Add Button with checkmark animated state */}
                          <button
                            onClick={(e) => handleQuickAddRelated(rel, e)}
                            className={`p-2.5 rounded-xl transition-all shadow ${
                              relatedAddedId === rel.id
                                ? 'bg-emerald-700 text-white scale-110'
                                : 'bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] hover:scale-105 active:scale-95'
                            }`}
                            aria-label={`Add ${rel.name} to cart`}
                            title={relatedAddedId === rel.id ? 'Added!' : 'Add to cart'}
                          >
                            {relatedAddedId === rel.id ? (
                              <Check className="w-4 h-4 stroke-[3]" />
                            ) : (
                              <ShoppingBag className="w-4 h-4" />
                            )}
                          </button>
                        </div>

                        {/* Action Buttons: View Details (Colored Brand Button) & Buy Now (WhatsApp Green) in 2 Rows */}
                        <div className="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-2.5">
                          <Link
                            href={`/products/${rel.id}`}
                            className="w-full py-1.5 sm:py-2.5 px-3 rounded-xl bg-[#3D2516] hover:bg-[#201309] text-[#FAF6F0] text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center cursor-pointer"
                          >
                            
                            View Details
                          </Link>

                          <button
                            onClick={(e) => handleBuyNowRelated(rel, e)}
                            className="w-full py-1.5 sm:py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                            title="Instant Buy Now"
                          >
                            <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                            <span>Buy Now</span>
                          </button>
                        </div>
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
