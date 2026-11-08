'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { COLLECTIONS } from '@/data/collections';

interface CollectionsProps {
  onSelectCategory?: (categoryName: string) => void;
  activeCategory?: string;
}

function LeafSprigLeft({ className = 'w-6 h-6 text-[#A67B52]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M6 18c4-6 11-8 18-9-2 5-5 11-10 13-3 1.5-6.5.5-8-4z" opacity="0.9" />
      <path d="M12 24c3-3 7-5 12-5-1.5 3-3.5 6-7 7-2 .8-4 .3-5-2z" opacity="0.6" />
      <path d="M22 6c-3 3-5 7-5 12 3-1.5 6-3.5 7-7 .8-2 .3-4-2-5z" opacity="0.6" />
      <path d="M4 28c5-5 11-9 18-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function LeafSprigRight({ className = 'w-6 h-6 text-[#A67B52]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" style={{ transform: 'scaleX(-1)' }}>
      <path d="M6 18c4-6 11-8 18-9-2 5-5 11-10 13-3 1.5-6.5.5-8-4z" opacity="0.9" />
      <path d="M12 24c3-3 7-5 12-5-1.5 3-3.5 6-7 7-2 .8-4 .3-5-2z" opacity="0.6" />
      <path d="M22 6c-3 3-5 7-5 12 3-1.5 6-3.5 7-7 .8-2 .3-4-2-5z" opacity="0.6" />
      <path d="M4 28c5-5 11-9 18-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export default function Collections({ onSelectCategory, activeCategory }: CollectionsProps) {
  // Top 5 core collections as displayed in reference design
  const displayCollections = COLLECTIONS.slice(0, 5);

  return (
    <section id="collections-section" className="pt-10 sm:pt-14 md:pt-36 pb-16 sm:pb-20 bg-[#FAF6F0] relative overflow-hidden">
      {/* Top-Left Botanical Watermark Accent (from reference design) */}
      <div className="absolute -top-6 -left-6 w-48 h-48 sm:w-64 sm:h-64 pointer-events-none select-none opacity-40 sm:opacity-50 text-[#8C5E37]/30">
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M20 10 C 50 40, 80 70, 140 90" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M35 25 C 20 40, 15 65, 30 75 C 45 80, 60 60, 45 35 Z" opacity="0.6" />
          <path d="M65 45 C 50 65, 55 90, 75 95 C 90 95, 95 75, 80 55 Z" opacity="0.5" />
          <path d="M100 65 C 90 85, 95 110, 115 115 C 130 115, 135 95, 115 75 Z" opacity="0.7" />
          <path d="M50 35 C 70 20, 95 25, 105 40 C 110 55, 90 65, 70 50 Z" opacity="0.5" />
          <path d="M85 55 C 105 40, 130 45, 140 60 C 145 75, 125 85, 105 70 Z" opacity="0.6" />
          <path d="M125 80 C 145 65, 170 70, 180 85 C 185 100, 165 110, 145 95 Z" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          {/* Eyebrow with decorative lines */}
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-semibold mb-2.5">
            <span className="w-8 sm:w-14 h-[1px] bg-[#8C5E37]/50" />
            <span>EXPLORE OUR RANGE</span>
            <span className="w-8 sm:w-14 h-[1px] bg-[#8C5E37]/50" />
          </div>

          {/* Heading with flanking decorative leaf sprigs */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4">
            <LeafSprigLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#A67B52] shrink-0" />
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#2A180E] tracking-tight">
              Our Wooden Collections
            </h2>
            <LeafSprigRight className="w-6 h-6 sm:w-7 sm:h-7 text-[#A67B52] shrink-0" />
          </div>

          <p className="mt-3 text-sm sm:text-base text-[#6B5547] font-light">
            Thoughtfully designed, naturally crafted and made to last.
          </p>
        </div>

        {/* 5 Collections Grid (Matches Reference Design) */}
        <div className="flex sm:grid overflow-x-auto sm:overflow-visible no-scrollbar sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 lg:gap-5 pb-4 sm:pb-0 snap-x">
          {displayCollections.map((col) => {
            const isSelected = activeCategory === col.slug || activeCategory === col.name;
            return (
              <Link
                key={col.id}
                href={`/products?category=${encodeURIComponent(col.name)}`}
                className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer w-[220px] shrink-0 snap-start sm:w-auto sm:shrink block ${
                  isSelected ? 'ring-2 ring-[#B87D4B] shadow-lg' : ''
                }`}
              >
                {/* Edge-to-Edge Flush Photographic Thumbnail (No Inset Padding) */}
                <div
                  className="relative w-full aspect-square overflow-hidden bg-[#FAF6F0]"
                  style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1' }}
                >
                  <Image
                    src={col.image}
                    alt={col.name}
                    fill
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 33vw, 20vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Copy */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between text-center">
                  <div>
                    <h3 className="font-serif-display font-bold text-base sm:text-[17px] text-[#2A180E] group-hover:text-amber-800 transition-colors line-clamp-1">
                      {col.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#7C6656] mt-1 font-medium">
                      {col.itemCount} Designs Available
                    </p>
                  </div>

                  {/* Button instead of arrow as requested */}
                  <div className="mt-3.5 w-full py-2.5 px-3 rounded-xl bg-[#3D2516] group-hover:bg-[#201309] text-[#FAF6F0] text-xs sm:text-sm font-bold text-center transition-all shadow-sm group-hover:shadow active:scale-95 flex items-center justify-center">
                    <span>Explore Collection</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Link to Full Collections Catalog */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white hover:bg-[#3D2516] text-[#8C5E37] hover:text-[#FAF6F0] border border-[#DFD1C2] text-xs sm:text-sm font-bold transition-all shadow-sm active:scale-95"
          >
            View All Collections &amp; Hardwood Categories
          </Link>
        </div>
      </div>
    </section>
  );
}
