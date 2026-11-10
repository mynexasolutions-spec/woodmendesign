'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import {
  X,
  Home,
  ShoppingBag,
  LayoutGrid,
  Info,
  Phone,
  ChevronDown,
  Heart,
  ShoppingCart,
  MapPin,
} from 'lucide-react';
import { COLLECTIONS } from '@/data/collections';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { WHATSAPP_NUMBER } from '@/lib/whatsapp';

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  pathname: string | null;
  totalItems: number;
  totalWishlist: number;
  onCategory: (e: React.MouseEvent, categoryName: string) => void;
}

const NAV = [
  { href: '/', label: 'Home', icon: Home, match: (p: string) => p === '/' },
  { href: '/products', label: 'Products', icon: ShoppingBag, match: (p: string) => p === '/products' || p.startsWith('/products/') },
] as const;

const NAV_AFTER = [
  { href: '/about', label: 'About Us', icon: Info, match: (p: string) => p === '/about' },
  { href: '/contact', label: 'Contact', icon: Phone, match: (p: string) => p === '/contact' },
] as const;

export default function MobileSidebar({
  open,
  onClose,
  pathname,
  totalItems,
  totalWishlist,
  onCategory,
}: MobileSidebarProps) {
  const path = pathname || '/';
  const [mounted, setMounted] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  // Lock page scroll + close on Escape while the sidebar is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  // Open the Collections group automatically on product / collection pages
  useEffect(() => {
    if (open && (path.startsWith('/products') || path.startsWith('/collections'))) {
      setCollectionsOpen(true);
    }
  }, [open, path]);

  if (!mounted) return null;

  const linkClass = (active: boolean) =>
    `group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] transition-colors ${
      active
        ? 'bg-gradient-to-r from-[#E5A855]/20 via-[#E5A855]/5 to-transparent text-amber-300 font-semibold'
        : 'text-stone-300 hover:text-white hover:bg-white/5'
    }`;

  const iconBox = (active: boolean) =>
    `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors ${
      active
        ? 'bg-[#E5A855]/15 border-[#E5A855]/40 text-amber-300'
        : 'bg-white/5 border-white/10 text-stone-400 group-hover:text-amber-300'
    }`;

  const renderLink = (item: {
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    match: (p: string) => boolean;
  }) => {
    const active = item.match(path);
    const Icon = item.icon;
    return (
      <Link key={item.href} href={item.href} onClick={onClose} className={linkClass(active)}>
        {active && <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#E5A855]" />}
        <span className={iconBox(active)}>
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span>{item.label}</span>
      </Link>
    );
  };

  const collectionsActive = path === '/collections' || path.startsWith('/collections/');

  return createPortal(
    <div
      className={`md:hidden fixed inset-0 z-[60] ${
        open ? 'visible' : 'invisible [transition:visibility_0s_linear_0.3s]'
      }`}
      aria-hidden={!open}
    >
      {/* Dim backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Sliding panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[360px] flex-col border-l border-[#3A2619] bg-[linear-gradient(180deg,#1B100A_0%,#0E0805_100%)] shadow-[-24px_0_60px_rgba(0,0,0,0.65)] transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
          <Link href="/" onClick={onClose} className="rounded-xl bg-[#FFFDF9] px-2 py-1 ring-1 ring-[#E8DCCE] shadow-md">
            <div className="relative h-9 w-32">
              <Image
                src="/images/logo.webp"
                alt="Woodmen Design Corporation"
                fill
                sizes="128px"
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1" aria-label="Main">
          {NAV.map(renderLink)}

          {/* Collections group */}
          <div>
            <div className={linkClass(collectionsActive) + ' pr-1.5'}>
              {collectionsActive && (
                <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-[#E5A855]" />
              )}
              <Link href="/collections" onClick={onClose} className="flex flex-1 items-center gap-3">
                <span className={iconBox(collectionsActive)}>
                  <LayoutGrid className="h-[18px] w-[18px]" />
                </span>
                <span>Collections</span>
              </Link>
              <button
                type="button"
                onClick={() => setCollectionsOpen((v) => !v)}
                aria-expanded={collectionsOpen}
                aria-label="Toggle collections list"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-stone-400 hover:bg-white/10 hover:text-amber-300"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${collectionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                collectionsOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-1 mb-2 ml-4 space-y-0.5 border-l border-white/10 pl-3">
                  {COLLECTIONS.map((col) => (
                    <Link
                      key={col.id}
                      href={`/products?category=${encodeURIComponent(col.name)}`}
                      onClick={(e) => {
                        onCategory(e, col.name);
                        onClose();
                      }}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-stone-400 transition-colors hover:bg-white/5 hover:text-amber-300"
                    >
                      <span className="truncate">{col.name}</span>
                      <span className="ml-2 rounded-full bg-[#E5A855]/10 px-2 py-0.5 font-mono text-[11px] text-amber-400">
                        {col.itemCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {NAV_AFTER.map(renderLink)}

          {/* Quick actions */}
          <div className="pt-4 mt-3 border-t border-white/10">
            <p className="mb-2 px-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8E796A]">
              Quick Access
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/wishlist"
                onClick={onClose}
                className="relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-stone-200 transition-colors hover:border-[#E5A855]/40 hover:text-amber-300"
              >
                <Heart className="h-4 w-4" />
                <span>Wishlist</span>
                {totalWishlist > 0 && (
                  <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E5A855] px-1 text-[10px] font-black text-stone-950">
                    {totalWishlist}
                  </span>
                )}
              </Link>
              <Link
                href="/cart"
                onClick={onClose}
                className="relative flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-stone-200 transition-colors hover:border-[#E5A855]/40 hover:text-amber-300"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {totalItems > 0 && (
                  <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#E5A855] px-1 text-[10px] font-black text-stone-950">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>

        {/* Footer CTA */}
        <div className="space-y-3 border-t border-white/10 bg-black/20 px-5 pt-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi Woodmen, I would like to inquire about your handcrafted wooden pieces.')}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-[#1EBE5A]"
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Chat on WhatsApp</span>
          </a>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#8E796A]">
            <MapPin className="h-3 w-3" />
            <span>Handcrafted in Amroha, UP • Mon–Sat 9am–9pm</span>
          </p>
        </div>
      </aside>
    </div>,
    document.body
  );
}
