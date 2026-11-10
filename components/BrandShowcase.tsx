'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandShowcase() {
  return (
    <section id="brand-showcase-section" className="py-12 sm:py-16 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Text on Cream Background */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          {/* Top Kicker Line */}
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            <span>ARTISAN PHILOSOPHY</span>
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
            Crafted by Nature, Designed for You
          </h2>

          {/* Descriptive Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-[#6B5547] font-light leading-relaxed">
            Heirloom tableware and kitchen essentials shaped with generational skill, organic oils, and sustainable Indian timbers.
          </p>
        </div>

        {/* Sleek Compact Showcase Card - matching user's requested height and width */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#3E2718] bg-[#180E09] p-6 sm:p-8 lg:p-10"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-900/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Clean Typography & Story */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Refined Brand Kicker */}
              <div className="inline-flex items-center gap-3">
                <span className="text-xs sm:text-sm uppercase tracking-[0.24em] text-[#E5A855] font-semibold">
                  WOODMEN DESIGN CORPORATION
                </span>
                <span className="w-10 sm:w-14 h-[1px] bg-[#E5A855]/70" />
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-[#FAF5EE] tracking-tight leading-[1.15]">
                Wooden Work <br />
                <span className="text-[#E5A855] font-normal">For a Better Lifestyle</span>
              </h3>

              {/* Editorial Description */}
              <p className="text-xs sm:text-sm text-[#D0BEB0] font-normal leading-relaxed max-w-xl">
                Replace synthetic plastics and coated cookware with genuine, seasoned Indian hardwoods.
                Every piece is turned by generational artisans in Amroha, blending nature&apos;s raw beauty
                with everyday culinary durability.
              </p>

              {/* Clean CTA Pill Button */}
              <div className="pt-1 sm:pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm tracking-wide shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Explore Collection</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Generated Luxury Lifestyle Tableware Image */}
            <div className="lg:col-span-5 relative">
              <div
                className="relative w-full h-[240px] sm:h-[280px] lg:h-[310px] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  src="/images/brand-showcase-lifestyle.jpg"
                  alt="Handcrafted Solid Wood Tableware Lifestyle by Woodmen Design Corporation"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle vignette gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#180E09]/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
