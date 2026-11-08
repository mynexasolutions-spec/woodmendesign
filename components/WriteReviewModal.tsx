'use client';

import React, { useState } from 'react';
import { X, Star, CheckCircle2, Heart } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: {
    name: string;
    location: string;
    rating: number;
    product: string;
    quote: string;
  }) => void;
}

export default function WriteReviewModal({
  isOpen,
  onClose,
  onSubmitReview,
}: WriteReviewModalProps) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [product, setProduct] = useState(PRODUCTS[0].name);
  const [quote, setQuote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote) return;

    onSubmitReview({
      name,
      location: location || 'India',
      rating,
      product,
      quote,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setLocation('');
      setQuote('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF6F0] rounded-3xl max-w-lg w-full shadow-2xl border border-[#DFCFC0] overflow-hidden z-10 p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white text-stone-500 hover:text-stone-800 transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-display text-2xl font-bold text-[#2A180E]">
              Thank You for Your Review!
            </h3>
            <p className="text-xs text-stone-600">
              Your feedback honors our master artisans and helps other families choose genuine handcrafted kitchenware.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#8C5E37] font-bold">
                COMMUNITY VOICE
              </span>
              <h3 className="font-serif-display text-2xl font-bold text-[#2A180E]">
                Share Your Experience
              </h3>
              <p className="text-sm text-stone-600 font-light">
                How has your Woodmen piece brought warmth to your home?
              </p>
            </div>

            {/* Star Rating Picker */}
            <div className="flex flex-col items-center justify-center py-2">
              <span className="text-xs sm:text-sm font-semibold text-stone-700 mb-1.5">
                Your Rating
              </span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 hover:scale-125 transition-transform"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-stone-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs sm:text-sm font-semibold text-stone-700 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Shalini Roy"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFD1C2] text-sm focus:outline-none focus:border-amber-700"
                />
              </div>

              <div>
                <label className="text-xs sm:text-sm font-semibold text-stone-700 block mb-1">
                  City / State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Pune, MH"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFD1C2] text-sm focus:outline-none focus:border-amber-700"
                />
              </div>
            </div>

            <div>
              <label className="text-xs sm:text-sm font-semibold text-stone-700 block mb-1">
                Product Purchased
              </label>
              <select
                value={product}
                onChange={(e) => setProduct(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFD1C2] text-sm focus:outline-none focus:border-amber-700"
              >
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.name}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs sm:text-sm font-semibold text-stone-700 block mb-1">
                Your Review *
              </label>
              <textarea
                rows={3}
                required
                placeholder="Describe the craftsmanship, finish, utility, and feel of the wood..."
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DFD1C2] text-sm focus:outline-none focus:border-amber-700"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#E5A855] via-[#DE983C] to-[#C9842C] text-[#1E120A] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all"
            >
              <span>Submit Verified Review</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

