'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  Phone,
  ShieldCheck,
  CreditCard,
  Banknote,
  QrCode,
  Truck
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    total,
    clearCart,
    shippingFee
  } = useCart();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [orderId, setOrderId] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Delhi',
    pincode: '',
    paymentMethod: 'cod',
  });

  if (!isCheckoutOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `WM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('success');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF6F0] rounded-2xl max-w-xl w-full shadow-2xl border border-[#DFD1C2] overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#1F130B] text-white flex items-center justify-between border-b border-[#362215]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif-display text-base font-bold text-[#FAF3EB]">
                {step === 'form' ? 'Secure Checkout' : 'Order Confirmed!'}
              </h3>
              <p className="text-[11px] text-amber-300/80">
                Woodmen Design Corporation • Artisan Direct
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {/* Quick Order Review Bar */}
            <div className="p-3 rounded-xl bg-white border border-[#EADBCC] flex items-center justify-between text-xs">
              <div>
                <span className="text-stone-500">Order Total ({cart.length} items):</span>
                <strong className="block text-sm font-bold text-[#2A180E]">
                  ₹{total.toLocaleString('en-IN')}
                </strong>
              </div>
              <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-1 rounded font-semibold border border-emerald-200">
                {shippingFee === 0 ? 'FREE Delivery' : 'Standard Shipping'}
              </span>
            </div>

            {/* Shipping Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D2516]">
                1. Delivery Address
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9720975271"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                  Street Address & Flat / House No. *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Apartment, Street name, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="State"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-600 block mb-1">
                    PIN Code *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="6 digits"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-[#DFD1C2] text-xs focus:outline-none focus:border-[#A67B52]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#3D2516]">
                2. Select Payment Mode
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label
                  className={`p-3 rounded-xl border cursor-pointer flex flex-col items-center text-center gap-1.5 transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-amber-50 border-amber-600 text-[#2A180E] ring-1 ring-amber-600'
                      : 'bg-white border-[#DFD1C2] text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="sr-only"
                  />
                  <Banknote className="w-5 h-5 text-amber-700" />
                  <span className="text-xs font-bold">Cash on Delivery</span>
                  <span className="text-[10px] text-stone-400">Pay at doorstep</span>
                </label>

                <label
                  className={`p-3 rounded-xl border cursor-pointer flex flex-col items-center text-center gap-1.5 transition-all ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-amber-50 border-amber-600 text-[#2A180E] ring-1 ring-amber-600'
                      : 'bg-white border-[#DFD1C2] text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'upi' })}
                    className="sr-only"
                  />
                  <QrCode className="w-5 h-5 text-amber-700" />
                  <span className="text-xs font-bold">UPI / GPay / PhonePe</span>
                  <span className="text-[10px] text-emerald-700 font-semibold">Instant verification</span>
                </label>

                <label
                  className={`p-3 rounded-xl border cursor-pointer flex flex-col items-center text-center gap-1.5 transition-all ${
                    formData.paymentMethod === 'cards'
                      ? 'bg-amber-50 border-amber-600 text-[#2A180E] ring-1 ring-amber-600'
                      : 'bg-white border-[#DFD1C2] text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cards"
                    checked={formData.paymentMethod === 'cards'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cards' })}
                    className="sr-only"
                  />
                  <CreditCard className="w-5 h-5 text-amber-700" />
                  <span className="text-xs font-bold">Debit / Credit Card</span>
                  <span className="text-[10px] text-stone-400">100% Encrypted</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm flex items-center justify-center shadow-lg shadow-amber-900/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <span>Place Order (₹{total.toLocaleString('en-IN')})</span>
              </button>
            </div>
          </form>
        ) : (
          /* Order Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-wider uppercase text-amber-700">
                Order Placed Successfully!
              </span>
              <h4 className="font-serif-display text-2xl font-bold text-[#2A180E] mt-1">
                Thank You, {formData.fullName || 'Valued Customer'}!
              </h4>
              <p className="text-xs text-stone-500 mt-1">
                Order Tracking ID: <strong className="font-mono text-stone-800">{orderId}</strong>
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DFD1C2] text-left text-xs space-y-2">
              <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Dispatched directly from our Saharanpur wood workshop</span>
              </div>
              <p className="text-stone-600">
                Delivery Address: {formData.address}, {formData.city}, {formData.state} - {formData.pincode}
              </p>
              <p className="text-stone-600">
                Estimated Delivery: <strong>3 - 5 Business Days</strong>
              </p>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Questions? Call or WhatsApp artisan hotline: <strong>9720975271</strong></span>
            </div>

            <button
              onClick={handleClose}
              className="px-6 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold hover:bg-[#5A3821] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

