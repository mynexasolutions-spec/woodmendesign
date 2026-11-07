'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { COLLECTIONS } from '@/data/collections';

interface CollectionsProps {
  onSelectCategory: (categoryName: string) => void;
  activeCategory: string;
}

export default function Collections({ onSelectCategory, activeCategory }: CollectionsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections-section" className="pt-28 sm:pt-36 pb-16 sm:pb-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Decorative leaf motifs background watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            <span>EXPLORE OUR RANGE</span>
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-amber-700/60 hidden sm:inline text-lg">❦</span>
            <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Our Wooden Collections
            </h2>
            <span className="text-amber-700/60 hidden sm:inline text-lg">❦</span>
          </div>

          <p className="mt-3 text-sm sm:text-base text-[#6B5547] font-light">
            Thoughtfully designed, naturally crafted and made to last.
          </p>
        </div>

        {/* Carousel Container with Arrow Controls */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#4D2F1A] text-[#FAF6F0] hover:bg-[#6E4526] hover:scale-110 active:scale-95 shadow-xl flex items-center justify-center transition-all border border-[#FAF6F0]"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#4D2F1A] text-[#FAF6F0] hover:bg-[#6E4526] hover:scale-110 active:scale-95 shadow-xl flex items-center justify-center transition-all border border-[#FAF6F0]"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Horizontal scroll track */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-4 px-2 snap-x snap-mandatory"
          >
            {COLLECTIONS.map((col) => {
              const isSelected = activeCategory === col.slug;
              return (
                <div
                  key={col.id}
                  onClick={() => onSelectCategory(col.slug)}
                  className={`snap-start shrink-0 w-[180px] sm:w-[210px] md:w-[220px] rounded-2xl p-4 cursor-pointer transition-all duration-300 flex flex-col items-center text-center group ${
                    isSelected
                      ? 'bg-white ring-2 ring-[#B87D4B] shadow-xl scale-[1.02]'
                      : 'bg-[#F2ECE3] hover:bg-white hover:shadow-lg border border-[#E5DACD]'
                  }`}
                >
                  {/* Category Image Wrapper */}
                  <div
                    className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden mb-4 bg-white/50 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300"
                    style={{ position: 'relative', width: '120px', height: '120px', overflow: 'hidden' }}
                  >
                    <Image
                      src={col.image}
                      alt={col.name}
                      fill
                      sizes="120px"
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Category Title */}
                  <h3 className="font-serif-display font-semibold text-sm sm:text-base text-[#2C190F] group-hover:text-[#A67B52] transition-colors">
                    {col.name}
                  </h3>

                  {/* Subtitle / Item count */}
                  <p className="text-[11px] text-[#7C6656] mt-1 font-medium">
                    {col.itemCount} Designs Available
                  </p>

                  {/* Bottom selection indicator */}
                  <div className="mt-3 flex items-center justify-center text-[11px] font-semibold text-[#A67B52] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Explore Collection</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

