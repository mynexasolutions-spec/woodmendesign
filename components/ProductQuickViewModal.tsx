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
          {/* Left Column: Spacious, Bright Photography Stage */}
          <div className="relative bg-white border-b md:border-b-0 md:border-r border-[#E8DCCE] p-6 sm:p-8 flex items-center justify-center min-h-[280px] md:min-h-[420px]">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#E5A855] text-stone-950 text-xs font-bold uppercase tracking-wider shadow-sm">
                {product.badge}
              </span>
            )}

            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="260px"
                className="object-contain p-2"
              />
            </div>

            {/* Subtle bottom tag */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <span className="text-[11px] text-[#8C5E37] font-medium tracking-wide">
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
                  <Phone className="w-3.5 h-3.5" />
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

