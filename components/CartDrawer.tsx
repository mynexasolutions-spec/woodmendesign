'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ShoppingBag,
  Sparkles,
  Truck,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    setIsCheckoutOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    discount,
    shippingFee,
    total,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    couponCode,
    applyCoupon
  } = useCart();

  const [inputCoupon, setInputCoupon] = useState('');
  const [couponStatus, setCouponStatus] = useState<{ success: boolean; message: string } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon) return;
    const res = applyCoupon(inputCoupon);
    setCouponStatus(res);
  };

  const freeShippingProgress = Math.min(
    100,
    Math.round((subtotal / freeShippingThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] text-[#2A180E] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#1F130B] text-white flex items-center justify-between border-b border-[#362215]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif-display text-base font-bold text-[#FAF3EB]">
                  Your Wooden Cart
                </h3>
                <span className="text-[11px] text-amber-300/80">
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Meter */}
          <div className="px-5 py-3 bg-[#F0E5D8] border-b border-[#DFD1C2]">
            <div className="flex items-center justify-between text-xs font-semibold text-[#3D2516] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-700" />
                {amountNeededForFreeShipping > 0 ? (
                  <span>
                    Add <strong className="text-amber-800">₹{amountNeededForFreeShipping}</strong> more for <strong className="text-emerald-700">FREE Shipping</strong>!
                  </span>
                ) : (
                  <span className="text-emerald-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    You unlocked FREE Express Shipping!
                  </span>
                )}
              </span>
              <span className="text-[10px] text-stone-500 font-mono">
                {freeShippingProgress}%
              </span>
            </div>

            <div className="w-full h-2 rounded-full bg-[#DFD1C2] overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-500 rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#EFE6DC] flex items-center justify-center text-[#8C5E37]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-serif-display text-lg font-bold text-[#2A180E]">
                  Your cart is empty
                </h4>
                <p className="text-xs text-[#7A6353] max-w-xs font-light">
                  Explore our handcrafted Sheesham & Acacia collections to fill your kitchen with organic warmth.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 px-5 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold hover:bg-[#5A3821] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-3 p-3 rounded-xl bg-white border border-[#EADBCC] shadow-sm relative group"
                >
                  {/* Image */}
                  <div
                    className="relative w-16 h-16 rounded-lg bg-[#FAF6F0] overflow-hidden shrink-0 flex items-center justify-center p-1"
                    style={{ position: 'relative', width: '64px', height: '64px' }}
                  >
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
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
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-[#A67B52] font-medium block">
                        {item.product.woodType}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs font-bold text-[#2A180E]">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-[#DFD1C2] rounded-lg bg-[#FAF6F0] overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-[#EAE0D4] text-stone-700 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#2A180E] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-[#EAE0D4] text-stone-700 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-[#EADBCC] space-y-3">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Coupon (try WOODMEN10)"
                    value={inputCoupon}
                    onChange={(e) => setInputCoupon(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#DFD1C2] text-xs uppercase placeholder-stone-400 focus:outline-none focus:border-[#A67B52]"
                  />
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-[#4D2F1A] text-white font-bold text-xs hover:bg-[#6E4526] transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponStatus && (
                <p
                  className={`text-[11px] ${
                    couponStatus.success ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  {couponStatus.message}
                </p>
              )}

              {/* Subtotal, discount, shipping, total */}
              <div className="space-y-1.5 text-xs text-[#5C4535] pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#2A180E]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({couponCode})</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-semibold uppercase text-[11px]">
                        FREE
                      </span>
                    ) : (
                      `₹${shippingFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-sm sm:text-base font-bold text-[#2A180E] pt-2 border-t border-[#EADBCC]">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm flex items-center justify-center shadow-lg shadow-amber-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Proceed to Checkout</span>
              </button>

              <p className="text-[10px] text-center text-stone-500">
                🔒 Safe & encrypted checkout • Cash on Delivery & UPI available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

