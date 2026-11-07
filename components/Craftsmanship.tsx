'use client';

import React from 'react';
import Image from 'next/image';

interface CraftsmanshipProps {
  onDiscoverStory: () => void;
}

export default function Craftsmanship({ onDiscoverStory }: CraftsmanshipProps) {
  return (
    <section id="craftsmanship-section" className="py-14 sm:py-20 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Panoramic Banner Card with Curved Right Container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#3A2216] bg-[#1D1109] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] flex flex-col lg:flex-row justify-end"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Full-bleed Craftsmanship Lathe Image (Hands shaping wooden bowl) */}
          <div
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            <Image
              src="/images/craftsmanship-lathe.jpg"
              alt="Skilled artisan shaping solid wooden bowl on lathe with flying wood shavings"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-center lg:object-left"
            />

            {/* Mobile dark vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1109] via-[#1D1109]/80 to-transparent lg:hidden" />
          </div>

          {/* Right Column: Dark Espresso Container with Organic Curved Leading Edge */}
          <div className="relative z-10 w-full lg:w-[54%] xl:w-[50%] bg-[#1D1109] lg:bg-[#1D1109] p-8 sm:p-12 lg:p-16 flex flex-col justify-center mt-auto lg:mt-0">
            {/* SVG Organic Curved Scoop on the left (Desktop only) */}
            <svg
              className="hidden lg:block absolute top-0 bottom-0 -left-20 xl:-left-28 h-full w-20 xl:w-28 text-[#1D1109] pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              fill="currentColor"
            >
              <path d="M 100 0 C 70 0, 10 30, 0 100 L 100 100 Z" />
            </svg>

            <div className="max-w-md space-y-4 sm:space-y-5">
              {/* Kicker tag with right line */}
              <div className="inline-flex items-center gap-3">
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.24em] text-[#E5A855] font-semibold">
                  OUR CRAFTSMANSHIP
                </span>
                <span className="w-8 sm:w-12 h-[1px] bg-[#E5A855]/70" />
              </div>

              {/* Display Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#FAF5EE] tracking-tight leading-[1.12]">
                Handcrafted <br />
                with Passion
              </h2>

              {/* Short descriptive paragraph */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-[#CBBBAE] font-normal leading-relaxed">
                Each piece is carefully shaped by skilled artisans, blending
                traditional techniques with modern design.
              </p>

              {/* CTA Button: Filled Gold Pill Button */}
              <div className="pt-2 sm:pt-3">
                <button
                  onClick={onDiscoverStory}
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Discover Our Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
