'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  RotateCcw
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CheckoutModal from '@/components/CheckoutModal';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    shippingFee,
    total,
    setIsCheckoutOpen,
    clearCart
  } = useCart();
  const { showToast } = useToast();

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => {}} />

      {/* Header Banner */}
      <section className="bg-[#180E09] text-white pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-[#311E13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">Shopping Cart</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#FAF5EE] tracking-tight">
            Your Shopping Cart
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#D0BEB0] max-w-xl mx-auto">
            Review your handcrafted wooden pieces before proceeding to checkout.
          </p>
        </div>
      </section>

      {/* Main Cart Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1 w-full">
        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="py-20 text-center max-w-md mx-auto space-y-4 bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCC] shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF6F0] flex items-center justify-center text-amber-800">
              <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#2A180E]">
              Your cart is empty
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Looks like you haven&apos;t added any handcrafted pieces yet. Explore our heirloom woodcraft collection to get started.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Cart Items and Order Summary Split */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#DFD1C2] text-xs text-[#7A6454]">
                <span>
                  <strong>{cart.length}</strong> unique {cart.length === 1 ? 'piece' : 'pieces'} in your cart
                </span>
                <button
                  onClick={() => {
                    clearCart();
                    showToast({
                      title: 'Cart Cleared',
                      message: 'All items removed from your cart.',
                      type: 'cart',
                    });
                  }}
                  className="text-stone-500 hover:text-rose-600 transition-colors font-medium underline"
                >
                  Clear All
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#EADBCC] shadow-sm flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-between"
                >
                  {/* Thumbnail & Title */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <Link
                      href={`/products/${item.product.id}`}
                      className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[#FAF6F0] shrink-0 border border-[#EADBCC]"
                      style={{ position: 'relative', width: '80px', height: '80px' }}
                    >
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </Link>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A67B52] font-bold block">
                        {item.product.woodType.split(' ')[0]} Wood
                      </span>
                      <Link
                        href={`/products/${item.product.id}`}
                        className="font-serif-display font-semibold text-sm sm:text-base text-[#2A180E] hover:text-[#A67B52] transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>
                      <span className="text-xs font-bold text-[#2A180E] mt-1 block">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Controls */}
                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#F2ECE3]">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-[#DFD1C2] rounded-xl bg-[#FAF6F0] p-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1.5 hover:bg-white rounded text-stone-700 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#2A180E] min-w-[28px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1.5 hover:bg-white rounded text-stone-700 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right min-w-[80px]">
                      <span className="text-sm sm:text-base font-bold text-[#2A180E] block">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-stone-400 hover:text-rose-600 transition-colors"
                      title="Remove item"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary Card */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#EADBCC] shadow-md space-y-5 sticky top-28">
              <h3 className="font-serif-display text-lg font-bold text-[#2A180E] pb-3 border-b border-[#F2ECE3]">
                Order Summary
              </h3>

              <div className="space-y-3 text-xs text-[#5C4535]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#2A180E]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  {shippingFee === 0 ? (
                    <span className="font-bold text-emerald-700">FREE</span>
                  ) : (
                    <span className="font-bold text-[#2A180E]">₹{shippingFee}</span>
                  )}
                </div>

                {subtotal < 999 && (
                  <p className="text-[11px] text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    Add ₹{(999 - subtotal).toLocaleString('en-IN')} more to unlock <strong>FREE Shipping</strong>!
                  </p>
                )}

                <div className="pt-3 border-t border-[#F2ECE3] flex justify-between text-sm sm:text-base font-bold text-[#2A180E]">
                  <span>Total Amount</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm tracking-wide shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Proceed to Checkout</span>
              </button>

              <div className="pt-2 space-y-2 text-[11px] text-stone-500 border-t border-[#F2ECE3]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>100% Secure Checkout with Razorpay / UPI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Dispatched directly from Saharanpur workshop</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </div>
  );
}
