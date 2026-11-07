'use client';

import React, { useState, useEffect } from 'react';
import { Star, Heart, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, Testimonial } from '@/data/testimonials';

export default function Testimonials() {
  const [reviewsList] = useState<Testimonial[]>(TESTIMONIALS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Responsive items per page calculation
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const maxIndex = Math.max(0, reviewsList.length - itemsPerPage);

  // Ensure currentIndex stays within bounds when resizing or updating reviews
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Autoplay functionality with hover pause
  useEffect(() => {
    if (isPaused || maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const totalDots = maxIndex + 1;

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

            {/* Header Navigation Buttons */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full border border-[#D5C2B0] bg-white hover:bg-[#F2ECE3] text-[#2A180E] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full border border-[#D5C2B0] bg-white hover:bg-[#F2ECE3] text-[#2A180E] flex items-center justify-center transition-colors shadow-sm"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Floating Prev Button (desktop & tablets) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="hidden md:flex absolute -left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-[#E8DCCE] text-[#2A180E] hover:text-amber-800 shadow-md hover:shadow-xl items-center justify-center transition-all duration-200 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Side Floating Next Button (desktop & tablets) */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="hidden md:flex absolute -right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-white border border-[#E8DCCE] text-[#2A180E] hover:text-amber-800 shadow-md hover:shadow-xl items-center justify-center transition-all duration-200 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Viewport & Sliding Track */}
          <div
            className="overflow-hidden py-3 -mx-3"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {reviewsList.map((item) => (
                <div
                  key={item.id}
                  className="w-full sm:w-1/2 lg:w-1/3 shrink-0 px-3 flex"
                >
                  <div className="w-full bg-white rounded-2xl p-6 sm:p-7 border border-[#E8DCCE] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Top Section */}
                    <div>
                      {/* Quote mark */}
                      <div className="text-4xl font-serif text-[#E2D2C3] leading-none mb-3">
                        &ldquo;
                      </div>

                      {/* Review Text */}
                      <p className="text-sm text-[#3E2B1F] leading-relaxed italic mb-6">
                        &quot;{item.quote}&quot;
                      </p>
                    </div>

                    {/* Bottom Author & Rating */}
                    <div className="pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-full overflow-hidden border-2 border-amber-400/40 shrink-0 bg-[#341F13] flex items-center justify-center text-amber-300 font-bold text-xs"
                          style={{
                            width: '44px',
                            height: '44px',
                            minWidth: '44px',
                            minHeight: '44px',
                          }}
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
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {totalDots > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalDots)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-7 h-2 rounded-full bg-[#8C5E37]'
                    : 'w-2 h-2 rounded-full bg-[#D4C3B3] hover:bg-[#8C5E37]/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
