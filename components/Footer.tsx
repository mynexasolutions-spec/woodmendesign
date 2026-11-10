'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  Heart,
  ArrowUp,
  ChevronRight
} from 'lucide-react';
import { COLLECTIONS } from '@/data/collections';

interface FooterProps {
  onSelectCategory?: (category: string) => void;
}

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'All Products' },
  { href: '/collections', label: 'All Collections' },
  { href: '/about', label: 'About Us' },
  { href: '/bundle-builder', label: 'Gift Box Builder' },
  { href: '/contact', label: 'Contact & Bulk' },
];

const SUPPORT_LINKS = [
  { href: '/contact', label: 'FAQs' },
  { href: '/about', label: 'Seasoning & Care' },
  { href: '/contact', label: 'Dispatch & Delivery' },
  { href: '/contact', label: 'Custom Laser Engraving' },
];

const linkClass =
  'group inline-flex items-center gap-1 text-[#C9B8A9] hover:text-amber-300 transition-colors';

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-bold uppercase tracking-widest text-[#FAF3EB]">{children}</h4>
      <span className="mt-2 block h-0.5 w-8 rounded-full bg-gradient-to-r from-[#E5A855] to-transparent" />
    </div>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="w-10 h-10 rounded-full bg-[#281810] hover:bg-[#E5A855] text-[#D8C7B8] hover:text-[#180E09] flex items-center justify-center transition-all border border-[#3C2518] hover:border-[#E5A855] hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}

function ContactRow({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-lg bg-[#281810] border border-[#3C2518] text-amber-400 flex items-center justify-center shrink-0">
        {icon}
      </span>
      <span className="pt-1 text-sm text-[#C9B8A9] leading-snug">{children}</span>
    </li>
  );
}

export default function Footer({ onSelectCategory }: FooterProps) {
  return (
    <footer id="contact-footer" className="relative bg-[#180E09] text-[#D8C7B8] pt-14 sm:pt-16 pb-6">
      {/* Gold hairline on top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E5A855]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-x-10 pb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="inline-flex items-center rounded-xl px-3 py-1.5 transition-transform group-hover:scale-[1.02] bg-[#FFFDF9] ring-1 ring-[#E8DCCE] shadow-md">
                <div className="relative h-14 sm:h-16 w-48 sm:w-56">
                  <Image
                    src="/images/logo.webp"
                    alt="Woodmen Design Corporation"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                </div>
              </div>
            </Link>

            <p className="text-sm text-[#BFAEA0] leading-relaxed max-w-sm font-light">
              Handcrafted wooden utensils that bring nature, tradition and functionality to your home.
              Crafted from sustainably sourced solid seasoned timber.
            </p>

            <div className="flex items-center gap-2.5">
              <SocialButton href="https://instagram.com" label="Instagram">
                <Instagram className="w-4 h-4" />
              </SocialButton>
              <SocialButton href="https://facebook.com" label="Facebook">
                <Facebook className="w-4 h-4" />
              </SocialButton>
              <SocialButton href="https://wa.me/919720975271" label="WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
              </SocialButton>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className={linkClass}>
                    <ChevronRight className="w-3 h-3 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="col-span-1 lg:col-span-3">
            <FooterHeading>Categories</FooterHeading>
            <ul className="space-y-2.5 text-sm">
              {COLLECTIONS.map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/products?category=${encodeURIComponent(c.name)}`}
                    onClick={() => onSelectCategory && onSelectCategory(c.name)}
                    className={linkClass}
                  >
                    <ChevronRight className="w-3 h-3 -ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div className="col-span-2 lg:col-span-3">
            <FooterHeading>Get in Touch</FooterHeading>
            <ul className="space-y-3.5">
              <ContactRow icon={<Phone className="w-4 h-4" />}>
                <a href="tel:9720975271" className="hover:text-amber-300 transition-colors font-medium">
                  +91 9720975271
                </a>
                <span className="block text-xs text-[#8E796A]">Mon–Sat, 9am – 9pm</span>
              </ContactRow>
              <ContactRow icon={<Mail className="w-4 h-4" />}>
                <a href="mailto:support@woodmendesign.in" className="hover:text-amber-300 transition-colors break-all">
                  support@woodmendesign.in
                </a>
              </ContactRow>
              <ContactRow icon={<MapPin className="w-4 h-4" />}>
                Amroha Woodcraft Cluster,
                <br />
                Uttar Pradesh, India
              </ContactRow>
            </ul>

            <a
              href="https://wa.me/919720975271?text=Hi%20Woodmen,%20I%20need%20help%20with%20my%20order."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-bold shadow-lg shadow-black/30 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Chat with Artisan</span>
            </a>

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-xs">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[#8E796A] hover:text-amber-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-[#2C1A10] flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-[#8E796A]">
          <p className="text-center sm:text-left">© 2026 Woodmen Design Corporation. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5 text-stone-300">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current" />
              <span>in India 🇮🇳</span>
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              title="Back to top"
              className="w-9 h-9 rounded-full bg-[#281810] hover:bg-[#E5A855] text-[#D8C7B8] hover:text-[#180E09] flex items-center justify-center border border-[#3C2518] hover:border-[#E5A855] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
