'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChefHat, Users, Sparkles, Gift } from 'lucide-react';

interface OccasionsProps {
  onSelectOccasion?: (occasionName: string) => void;
}

const OCCASIONS = [
  {
    id: 'occ-1',
    title: 'Everyday Cooking',
    subtitle: 'Gentle on cookware, 100% natural and food-grade daily essentials.',
    image: '/images/occasion-cooking.jpg',
    icon: ChefHat,
    category: 'Bowls & Serving',
  },
  {
    id: 'occ-2',
    title: 'Family Dining',
    subtitle: 'Warm roti casseroles and serving platters that bring the family together.',
    image: '/images/occasion-dining.jpg',
    icon: Users,
    category: 'Roti Casseroles',
  },
  {
    id: 'occ-3',
    title: 'Festive & Special Occasions',
    subtitle: 'Regal brass-accented masala caddies and pedestal cake stands.',
    image: '/images/occasion-festive.jpg',
    icon: Sparkles,
    category: 'Masala Boxes',
  },
  {
    id: 'occ-4',
    title: 'Thoughtful Gifting',
    subtitle: 'Artisan-wrapped eco-luxury gifts for housewarmings, weddings & Diwali.',
    image: '/images/occasion-gifting.jpg',
    icon: Gift,
    category: 'Serving Trays',
  },
];

export default function Occasions({ onSelectOccasion }: OccasionsProps) {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            <span>PERFECT FOR EVERY OCCASION</span>
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
            Made for Every Moment
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B5547] font-light">
            Designed to enrich every culinary milestone and everyday breakfast.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {OCCASIONS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={`/products?category=${encodeURIComponent(item.category)}`}
                className="group relative rounded-2xl overflow-hidden bg-[#241710] border border-[#DFCFC1] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-end block"
              >
                {/* Image */}
                <div
                  className="relative w-full h-56 sm:h-64 overflow-hidden"
                  style={{ position: 'relative', width: '100%', height: '240px', overflow: 'hidden' }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C120B] via-[#1C120B]/50 to-transparent" />
                </div>

                {/* Bottom Card Content with icon */}
                <div className="p-4 bg-[#1F140D] border-t border-[#3B2518] relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif-display font-semibold text-sm sm:text-base text-[#FAF3EB] group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center text-xs sm:text-sm font-bold text-amber-400/90 group-hover:text-amber-300 transition-colors">
                    <span>Explore Products</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

