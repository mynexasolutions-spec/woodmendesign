'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  Star,
  ShoppingBag,
  Heart,
  ShieldCheck,
  Leaf,
  Sparkles,
  Phone,
  Check,
  Plus,
  Minus
} from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

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

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductQuickViewModal({
  product,
  onClose,
}: ProductQuickViewModalProps) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF6F0] rounded-3xl max-w-3xl w-full shadow-2xl border border-[#DFCFC0] overflow-hidden z-10 my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-stone-700 shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Full-bleed product image */}
          <div className="relative bg-[#FAF6F0] border-b md:border-b-0 md:border-r border-[#E8DCCE] min-h-[280px] md:min-h-[420px] overflow-hidden group">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#E5A855] text-stone-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}

            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Subtle bottom tag */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E8DCCE] text-[11px] text-[#8C5E37] font-medium tracking-wide shadow-sm">
                🌿 Handcrafted in Saharanpur • 100% Solid {product.woodType}
              </span>
            </div>
          </div>

          {/* Right Column: Product Specs & Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-4 max-h-[85vh] overflow-y-auto">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C5E37] font-bold">
                {product.category}
              </span>

              <h3 className="font-serif-display text-2xl font-bold text-[#2A180E] mt-1">
                {product.name}
              </h3>

              {/* Rating and reviews */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#2A180E]">
                  {product.rating}
                </span>
                <span className="text-xs text-stone-500">
                  ({product.reviewsCount} customer reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2.5 mt-3">
                <span className="text-2xl font-bold text-[#2A180E]">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  In Stock
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#5C4535] leading-relaxed mt-3 font-light">
                {product.description}
              </p>

              {/* Wood Specs Box */}
              <div className="mt-4 p-3 rounded-xl bg-[#F0E6DB] border border-[#DFCFC0] space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-600 font-medium">Wood Species:</span>
                  <span className="font-bold text-[#2A180E]">{product.woodType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 font-medium">Dimensions:</span>
                  <span className="font-bold text-[#2A180E]">{product.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-600 font-medium">Finish & Polish:</span>
                  <span className="font-bold text-[#2A180E]">{product.finish}</span>
                </div>
              </div>

              {/* Key features bullets */}
              <div className="mt-3 space-y-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-stone-700">
                    <Sparkles className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions & Quantity */}
            <div className="pt-4 border-t border-[#EADBCC] space-y-3">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#DFD1C2] rounded-xl bg-white overflow-hidden p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1.5 hover:bg-[#FAF6F0] rounded text-stone-700 transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold text-[#2A180E] min-w-[28px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1.5 hover:bg-[#FAF6F0] rounded text-stone-700 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#E5A855] to-[#C9842C] text-[#1E120A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
                    </>
                  )}
                </button>

                {/* Wishlist button */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3 rounded-xl border border-[#DFD1C2] bg-white transition-colors ${
                    inWishlist ? 'text-rose-600 bg-rose-50' : 'text-stone-600 hover:bg-stone-50'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              {/* Direct artisan inquiry */}
              <div className="text-center">
                <a
                  href={`https://wa.me/919720975271?text=Hi%20Woodmen,%20I%20am%20interested%20in%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-semibold"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>Have questions? Ask our Master Woodworker on WhatsApp (9720975271)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

