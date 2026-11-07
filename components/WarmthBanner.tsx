'use client';

import React from 'react';
import Image from 'next/image';

interface WarmthBannerProps {
  onShopNow: () => void;
}

export default function WarmthBanner({ onShopNow }: WarmthBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Panoramic Banner Card */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#3E281A] bg-[#1E110A] min-h-[340px] sm:min-h-[380px] lg:min-h-[420px] flex items-center"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Full-bleed Background: Salad in Handcrafted Wooden Bowl */}
          <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <Image
              src="/images/warmth-salad-banner.jpg"
              alt="Fresh healthy salad in handcrafted wooden bowl with wooden servers"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 85vw"
              className="object-cover object-[78%_center] lg:object-right"
            />

            {/* Left-side ambient dark gradient for crisp typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E110A] via-[#1E110A]/90 sm:via-[#1E110A]/80 to-transparent lg:w-[62%]" />

            {/* Subtle top & bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E110A]/70 via-transparent to-[#1E110A]/40 lg:hidden" />
          </div>

          {/* Foreground Content (Left aligned) */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-xl text-white space-y-4 sm:space-y-5">
            {/* Display Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#FAF5EE] tracking-tight leading-[1.12]">
              Bring the Warmth of <br />
              Wood to Your Kitchen
            </h2>

            {/* Subtitle Description */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#D8C7B8] font-normal leading-relaxed max-w-md">
              Sustainable, stylish and crafted for a healthier lifestyle.
            </p>

            {/* CTA Button: Filled Gold Pill Button */}
            <div className="pt-2 sm:pt-3">
              <button
                onClick={onShopNow}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Shop Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
