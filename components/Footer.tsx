'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Check,
  Heart
} from 'lucide-react';
import { COLLECTIONS } from '@/data/collections';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

export default function Footer({ onSelectCategory }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer id="contact-footer" className="bg-[#180E09] text-[#D8C7B8] pt-16 pb-8 border-t border-[#2F1D13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 5-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-[#2C1A10]">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-400/50 bg-[#2C1A10] flex items-center justify-center">
                <span className="font-serif-display font-bold text-amber-300 text-sm">
                  WM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-lg font-bold tracking-[0.2em] text-[#FAF3EB] uppercase">
                  WOODMEN
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-amber-300 font-semibold">
                  Design Corporation
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BFAEA0] leading-relaxed max-w-sm font-light">
              Handcrafted wooden utensils that bring nature, tradition and functionality to your home.
              Crafted from sustainably sourced solid seasoned timber.
            </p>

            <div className="pt-1 space-y-2 text-xs text-[#C4B2A3]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:9720975271" className="hover:text-amber-300 transition-colors font-medium">
                  +91 9720975271
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>support@woodmendesign.in</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Saharanpur Woodcraft Cluster, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#281810] hover:bg-[#3D2518] text-[#D8C7B8] hover:text-amber-300 flex items-center justify-center transition-colors border border-[#3C2518]"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#281810] hover:bg-[#3D2518] text-[#D8C7B8] hover:text-amber-300 flex items-center justify-center transition-colors border border-[#3C2518]"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919720975271"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#281810] hover:bg-[#3D2518] text-[#D8C7B8] hover:text-amber-300 flex items-center justify-center transition-colors border border-[#3C2518]"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF3EB]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-amber-300 transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300 transition-colors">
                  About Heritage
                </Link>
              </li>
              <li>
                <Link href="/bundle-builder" className="hover:text-amber-300 transition-colors">
                  Gift Box Builder
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-amber-300 transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Contact &amp; Bulk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF3EB]">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => onSelectCategory && onSelectCategory(c.slug)}
                    className="hover:text-amber-300 transition-colors text-left"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF3EB]">
              Support &amp; Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/care-guide" className="hover:text-amber-300 transition-colors">
                  FAQs &amp; Care Guide
                </Link>
              </li>
              <li>
                <Link href="/care-guide" className="hover:text-amber-300 transition-colors">
                  Seasoning Instructions
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-amber-300 transition-colors">
                  Dispatch &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300 transition-colors">
                  Custom Laser Engraving
                </Link>
              </li>
              <li>
                <a href="https://wa.me/919720975271" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors text-amber-400">
                  Artisan Help: 9720975271
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay in the Loop */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF3EB]">
              Stay in the Loop
            </h4>
            <p className="text-xs text-[#BFAEA0] leading-relaxed">
              Get updates on new collections, exclusive seasonal offers and wood care tips.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-[#251710] border border-[#3E2719] text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold flex items-center justify-center transition-colors"
                  aria-label="Submit newsletter"
                >
                  Join
                </button>
              </div>

              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  Subscribed! Welcome to Woodmen family.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Made with love in India */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E796A]">
          <p>
            © 2026 Woodmen Design Corporation. All Rights Reserved.
          </p>

          <p className="flex items-center gap-1.5 text-stone-300">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
            <span>in India 🇮🇳</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

