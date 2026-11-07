'use client';

import React from 'react';
import Image from 'next/image';
import {
  Leaf,
  ShieldCheck,
  Gift,
  Disc,
  Hammer,
  Infinity as InfinityIcon,
  Utensils,
  Home
} from 'lucide-react';

interface HeroProps {
  onWatchCrafting?: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onWatchCrafting, onExploreClick }: HeroProps) {
  return (
    <section className="relative bg-[#140B06] text-white pt-24 sm:pt-28 pb-0">
      {/* Whole Background Image */}
      <div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <Image
          src="/images/hero-bg-full.jpg"
          alt="Timeless Handcrafted Wooden Essentials for Your Home"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-[78%_center] lg:object-right"
        />

        {/* Ambient Dark Gradient on Left for pristine Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140B06] via-[#140B06]/90 sm:via-[#140B06]/75 to-transparent lg:w-[62%]" />

        {/* Top Header shade & Bottom Floating Bar blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#140B06] via-transparent to-[#140B06]/60" />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[500px] lg:min-h-[560px]">
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-7 z-10 py-6 lg:py-10 max-w-2xl">
            {/* Kicker tag with right line */}
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#E5A855] font-semibold">
                HANDCRAFTED WOODEN UTENSILS
              </span>
              <span className="w-10 sm:w-14 h-[1px] bg-[#E5A855]" />
            </div>

            {/* Main Display Headline */}
            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-[62px] font-bold tracking-tight text-[#FAF5EE] leading-[1.08] mb-5">
              Timeless <br />
              Wooden Essentials <br />
              <span className="font-serif italic font-normal text-[#E5A855]">for</span> Your Home
            </h1>

            {/* Description Subtitle */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-[#D8C7B8] max-w-md lg:max-w-lg leading-relaxed font-light mb-8">
              Premium, durable and beautifully crafted wooden utensils that bring
              nature, tradition and warmth to your everyday life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9">
              {/* Primary: Filled Gold Pill Button */}
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#E09F48] to-[#CD8B32] text-[#180E09] font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Shop Collection</span>
              </button>
            </div>

            {/* Three Trust Badges */}
            <div className="flex items-center gap-8 sm:gap-10 pt-2">
              {/* Badge 1: 100% Natural Wood */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <Leaf className="w-5 h-5 text-[#E5A855] stroke-[1.5]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#FAF3EB] leading-tight">
                  100%
                </span>
                <span className="text-[10px] text-stone-300 leading-tight">
                  Natural Wood
                </span>
              </div>

              {/* Badge 2: Durable & Long Lasting */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#E5A855] stroke-[1.5]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#FAF3EB] leading-tight">
                  Durable &amp;
                </span>
                <span className="text-[10px] text-stone-300 leading-tight">
                  Long Lasting
                </span>
              </div>

              {/* Badge 3: Perfect for Gifting */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-1">
                <Gift className="w-5 h-5 text-[#E5A855] stroke-[1.5]" />
                <span className="text-[11px] sm:text-xs font-bold text-[#FAF3EB] leading-tight">
                  Perfect
                </span>
                <span className="text-[10px] text-stone-300 leading-tight">
                  for Gifting
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Natural photographic scene reveal */}
          <div className="lg:col-span-5 hidden lg:block h-[420px] lg:h-[500px] pointer-events-none" />
        </div>

        {/* Floating 5-Feature Bar (Positioned at bottom, overlapping hero & collections) */}
        <div className="relative pt-6 sm:pt-10 -mb-16 sm:-mb-20 z-30 max-w-5xl mx-auto px-3 sm:px-6">
          <div
            className="bg-[#1D1109] border border-[#3A2216] rounded-2xl sm:rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6),0_12px_24px_-6px_rgba(0,0,0,0.4)] backdrop-blur-md"
            style={{ backgroundColor: '#1D1109', borderColor: '#3A2216' }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#331E12]">
              {/* Feature 1: Premium Quality Wood (Concentric tree ring cross-section) */}
              <div className="flex flex-col items-center justify-center text-center py-4 px-3 sm:py-5 sm:px-4 group">
                <div className="mb-2 text-[#E5A855] group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <circle cx="16" cy="16" r="13" />
                    <circle cx="16" cy="16" r="9.5" />
                    <circle cx="16" cy="16" r="6" />
                    <circle cx="16" cy="16" r="2.5" fill="#E5A855" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight">
                  Premium Quality
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight mt-0.5">
                  Wood
                </p>
              </div>

              {/* Feature 2: Handcrafted by Artisans (Crossed spoons / carving tools) */}
              <div className="flex flex-col items-center justify-center text-center py-4 px-3 sm:py-5 sm:px-4 group">
                <div className="mb-2 text-[#E5A855] group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    {/* Spoon 1 */}
                    <path d="M7 25l11-11" />
                    <ellipse cx="21.5" cy="10.5" rx="3.5" ry="5" transform="rotate(45 21.5 10.5)" />
                    {/* Spoon 2 */}
                    <path d="M25 25l-11-11" />
                    <ellipse cx="10.5" cy="10.5" rx="3.5" ry="5" transform="rotate(-45 10.5 10.5)" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight">
                  Handcrafted
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight mt-0.5">
                  by Artisans
                </p>
              </div>

              {/* Feature 3: Timeless Design (Infinity symbol) */}
              <div className="flex flex-col items-center justify-center text-center py-4 px-3 sm:py-5 sm:px-4 group">
                <div className="mb-2 text-[#E5A855] group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <path d="M22.5 11c3.5 0 5.5 2.5 5.5 5s-2 5-5.5 5c-3.5 0-5.5-3.5-6.5-5 1-1.5 3-5 6.5-5z" />
                    <path d="M9.5 11c-3.5 0-5.5 2.5-5.5 5s2 5 5.5 5c3.5 0 5.5-3.5 6.5-5-1-1.5-3-5-6.5-5z" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight">
                  Timeless
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight mt-0.5">
                  Design
                </p>
              </div>

              {/* Feature 4: Everyday Utility (Fork & Spoon) */}
              <div className="flex flex-col items-center justify-center text-center py-4 px-3 sm:py-5 sm:px-4 group">
                <div className="mb-2 text-[#E5A855] group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    {/* Fork on Left */}
                    <path d="M11 6v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6" />
                    <path d="M9 6v5" />
                    <path d="M9 13v13" />
                    {/* Spoon on Right */}
                    <path d="M23 6a3.5 4 0 0 0-3.5 4c0 2.2 1.5 4 3.5 4s3.5-1.8 3.5-4a3.5 4 0 0 0-3.5-4z" />
                    <path d="M23 14v12" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight">
                  Everyday
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight mt-0.5">
                  Utility
                </p>
              </div>

              {/* Feature 5: Adds Natural Elegance (House) */}
              <div className="flex flex-col items-center justify-center text-center py-4 px-3 sm:py-5 sm:px-4 col-span-2 md:col-span-1 group">
                <div className="mb-2 text-[#E5A855] group-hover:scale-110 transition-transform">
                  <svg
                    viewBox="0 0 32 32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-7 h-7 sm:w-8 sm:h-8"
                  >
                    <path d="M6 14L16 6l10 8v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V14z" />
                    <path d="M12 26v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6" />
                  </svg>
                </div>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight">
                  Adds Natural
                </p>
                <p className="text-[12px] sm:text-[13px] md:text-[14px] font-semibold text-[#FAF4ED] leading-tight tracking-tight mt-0.5">
                  Elegance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
