'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Star, Heart, CheckCircle2, PenLine } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';
import WriteReviewModal from '@/components/WriteReviewModal';

export default function Testimonials() {
  const [reviewsList, setReviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddReview = (newReview: {
    name: string;
    location: string;
    rating: number;
    product: string;
    quote: string;
  }) => {
    const created: Testimonial = {
      id: `review-${Date.now()}`,
      name: newReview.name,
      location: newReview.location,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newReview.name)}&background=3d2516&color=e5a855&bold=true`,
      rating: newReview.rating,
      product: newReview.product,
      quote: newReview.quote,
      verified: true,
    };
    setReviewsList((prev) => [created, ...prev]);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>WHAT OUR CUSTOMERS SAY</span>
            </div>

            <div className="flex items-center gap-3">
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
                Loved by Our Customers
              </h2>
              <Heart className="w-6 h-6 text-amber-600 fill-amber-600/20" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-[#735D4E] max-w-md font-light">
              Real feedback from over 10,000+ happy households enjoying genuine Indian handcrafted kitchenware.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-amber-700/40 bg-white hover:bg-[#FAF6F0] text-amber-900 text-xs font-bold shadow-sm transition-colors shrink-0"
            >
              <PenLine className="w-3.5 h-3.5" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DCCE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote mark */}
              <div className="text-4xl font-serif text-[#E2D2C3] leading-none mb-3">
                &ldquo;
              </div>

              {/* Review Text */}
              <p className="text-sm text-[#3E2B1F] leading-relaxed italic mb-6">
                &quot;{item.quote}&quot;
              </p>

              {/* Author & Stars */}
              <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/40 shrink-0 bg-[#341F13] flex items-center justify-center text-amber-300 font-bold text-xs"
                    style={{ width: '44px', height: '44px', minWidth: '44px', minHeight: '44px', maxWidth: '44px', maxHeight: '44px' }}
                  >
                    {item.avatar ? (
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                        style={{ width: '44px', height: '44px', objectFit: 'cover' }}
                      />
                    ) : (
                      <span>{item.name.slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs sm:text-sm font-bold text-[#2A180E]">
                        {item.name}
                      </h4>
                      <span title="Verified Buyer">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      </span>
                    </div>
                    <span className="text-[10px] text-stone-400 block">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* 5 Stars */}
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots from image */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <span className="w-6 h-2 rounded-full bg-[#8C5E37]" />
          <span className="w-2 h-2 rounded-full bg-[#D4C3B3]" />
          <span className="w-2 h-2 rounded-full bg-[#D4C3B3]" />
        </div>
        {/* Write Review Modal */}
        <WriteReviewModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmitReview={handleAddReview}
        />
      </div>
    </section>
  );
}
