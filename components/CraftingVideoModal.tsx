'use client';

import React from 'react';
import Image from 'next/image';
import { X, Sparkles, CheckCircle2, Play, Phone } from 'lucide-react';

interface CraftingVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CraftingVideoModal({
  isOpen,
  onClose,
}: CraftingVideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#1E130D] text-[#FAF3EB] rounded-3xl max-w-3xl w-full shadow-2xl border border-[#483020] overflow-hidden z-10 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/80 text-stone-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Visual Hero Banner */}
        <div
          className="relative w-full h-64 sm:h-80 bg-black"
          style={{ position: 'relative', width: '100%', height: '280px' }}
        >
          <Image
            src="/images/craftsmanship-artisan.jpg"
            alt="Artisan shaping Sheesham wood on vintage lathe"
            fill
            sizes="600px"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E130D] via-black/40 to-transparent" />

          {/* Centered Play Button overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>
            <span className="mt-3 text-xs uppercase tracking-widest text-amber-300 font-bold">
              Artisan Craft Journey • Saharanpur, India
            </span>
            <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-white mt-1">
              From Raw Timber to Your Dining Table
            </h3>
          </div>
        </div>

        {/* Story details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-b border-[#342216] pb-6">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Step 01
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Wood Selection
              </h4>
              <p className="text-xs text-[#B8A697] leading-relaxed">
                60-day naturally kiln-seasoned Indian Rosewood (Sheesham) and Acacia to ensure zero warps.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Step 02
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Lathe Woodturning
              </h4>
              <p className="text-xs text-[#B8A697] leading-relaxed">
                Turned by hand on traditional lathes by master artisans with over 30 years of family lineage.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-bold">
                Step 03
              </span>
              <h4 className="font-serif-display text-sm font-bold text-[#F4ECE3]">
                Herbal Oil & Beeswax
              </h4>
              <p className="text-xs text-[#B8A697] leading-relaxed">
                Hand-buffed with 100% food-grade organic walnut oil and pure local beeswax for natural protection.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#D8C7B8]">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Tested & Certified 100% Food-Grade Non-Toxic</span>
            </div>

            <a
              href="https://wa.me/919720975271"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2 shadow-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Talk to Workshop: 9720975271</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

