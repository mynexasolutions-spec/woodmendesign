'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

const MARQUEE_ITEMS = [
  '100% SOLID SEASONED HARDWOOD',
  'HANDCRAFTED IN SAHARANPUR',
  'ZERO MICROPLASTICS & NON-TOXIC',
  'ORGANIC BEESWAX & WALNUT OIL FINISH',
  'HEIRLOOM DURABILITY BUILT FOR GENERATIONS',
  'AUTHENTIC INDIAN LATHE WOODTURNING',
  'SUSTAINABLE & 100% BIODEGRADABLE',
  'FREE SHIPPING ON ORDERS ABOVE ₹999',
  'DIRECT FROM MASTER ARTISAN GUILD',
];

export default function TrustBar() {
  return (
    <section className="bg-[#180E09] text-[#FAF5EE] py-4 sm:py-5 border-t border-b border-[#311E13] overflow-hidden select-none relative">
      {/* Ambient gradient fade on left and right edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#180E09] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#180E09] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling track (Right to Left) */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center space-x-8 sm:space-x-12">
        {/* Set 1 */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`item-1-${index}`} className="flex items-center space-x-6 sm:space-x-8 shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#F2ECE3]">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A855] shrink-0" />
          </div>
        ))}

        {/* Set 2 (for seamless loop) */}
        {MARQUEE_ITEMS.map((item, index) => (
          <div key={`item-2-${index}`} className="flex items-center space-x-6 sm:space-x-8 shrink-0">
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#F2ECE3]">
              {item}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5A855] shrink-0" />
          </div>
        ))}
      </div>

      {/* Marquee CSS Keyframe Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}
