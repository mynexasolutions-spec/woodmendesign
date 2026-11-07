'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!isWishlistOpen) return null;

  const handleMoveToCart = (product: any) => {
    addToCart(product, 1);
    toggleWishlist(product);
    showToast({
      title: 'Moved to Cart',
      message: `${product.name} (₹${product.price.toLocaleString('en-IN')})`,
      type: 'cart',
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsWishlistOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] text-[#2A180E] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#1F130B] text-white flex items-center justify-between border-b border-[#362215]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="font-serif-display text-base font-bold text-[#FAF3EB]">
                  Your Wishlist
                </h3>
                <span className="text-[11px] text-amber-300/80">
                  {wishlist.length} {wishlist.length === 1 ? 'saved piece' : 'saved pieces'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Wishlist Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {wishlist.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EFE6DC] flex items-center justify-center text-[#8C5E37]">
                  <Heart className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif-display text-lg font-bold text-[#2A180E]">
                  Your wishlist is empty
                </h4>
                <p className="text-xs text-[#7A6353] max-w-xs font-light">
                  Tap the heart icon on any handcrafted wooden utensil to save your favorites here.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold hover:bg-[#5A3821] transition-colors"
                >
                  Explore Collections
                </button>
              </div>
            ) : (
              wishlist.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3 p-3 rounded-xl bg-white border border-[#EADBCC] shadow-sm relative group"
                >
                  {/* Image */}
                  <div
                    className="relative w-16 h-16 rounded-lg bg-[#FAF6F0] overflow-hidden shrink-0 flex items-center justify-center p-1"
                    style={{ position: 'relative', width: '64px', height: '64px' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-contain"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif-display text-xs sm:text-sm font-bold text-[#2A180E] leading-snug line-clamp-1">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#A67B52] font-medium block">
                        {product.woodType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-1 border-t border-[#F2ECE3]">
                      <span className="text-xs font-bold text-[#2A180E]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>

                      <button
                        onClick={() => handleMoveToCart(product)}
                        className="px-3 py-1 rounded-lg bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] text-[11px] font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlist.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#EADBCC]">
              <button
                onClick={() => {
                  wishlist.forEach((p) => addToCart(p, 1));
                  showToast({
                    title: 'Moved All to Cart',
                    message: `${wishlist.length} items added to your shopping cart`,
                    type: 'cart',
                  });
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm flex items-center justify-center shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Add All to Cart</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

