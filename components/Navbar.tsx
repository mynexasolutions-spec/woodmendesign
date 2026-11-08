'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  Heart
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { COLLECTIONS } from '@/data/collections';
import { PRODUCTS } from '@/data/products';

interface NavbarProps {
  onOpenSearch?: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function Navbar({ onOpenSearch, onSelectCategory }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems } = useCart();
  const { totalWishlist } = useWishlist();
  const [collectionsDropdown, setCollectionsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [inlineSearchOpen, setInlineSearchOpen] = useState(false);
  const [navSearchQuery, setNavSearchQuery] = useState('');

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchResults = navSearchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(navSearchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(navSearchQuery.toLowerCase()) ||
          p.woodType.toLowerCase().includes(navSearchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const isHome = pathname === '/';
  const isProducts = pathname === '/products' || pathname?.startsWith('/products/');
  const isCollections = pathname === '/collections' || pathname?.startsWith('/collections/');
  const isAbout = pathname === '/about';
  const isContact = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle focus, Escape key, and outside clicks when search is open
  useEffect(() => {
    if (!inlineSearchOpen) return;

    // Smooth auto-focus into search input
    const focusTimer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 60);

    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setInlineSearchOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setInlineSearchOpen(false);
      }
    };

    // Attach after the current click event finishes to prevent premature dismissal
    const attachTimer = setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }, 100);

    return () => {
      clearTimeout(focusTimer);
      clearTimeout(attachTimer);
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [inlineSearchOpen]);

  const handleCategorySelect = (e: React.MouseEvent, categoryName: string) => {
    setCollectionsDropdown(false);
    setMobileMenuOpen(false);
    if (pathname === '/products') {
      e.preventDefault();
      router.push(`/products?category=${encodeURIComponent(categoryName)}`);
      window.dispatchEvent(new CustomEvent('categoryChange', { detail: categoryName }));
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (navSearchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(navSearchQuery.trim())}`);
      setInlineSearchOpen(false);
      setNavSearchQuery('');
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b shadow-lg py-3 sm:py-3.5 ${
        isScrolled
          ? 'bg-[#160D08]/85 border-[#311E13]/80'
          : 'bg-[#160D08]/70 border-white/10'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(22, 13, 8, 0.82)' : 'rgba(22, 13, 8, 0.65)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderColor: isScrolled ? 'rgba(49, 30, 19, 0.8)' : 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
            {/* WM Circle Badge */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white/90 flex items-center justify-center transition-colors group-hover:border-[#E5A855]">
              <span className="font-bold text-white text-xs sm:text-sm tracking-wider">
                WM
              </span>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-[0.18em] text-white uppercase leading-none group-hover:text-[#E5A855] transition-colors">
                WOODMEN
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.28em] uppercase text-[#E5D7CC] font-semibold mt-1 leading-none">
                DESIGN CORPORATION
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Unified group, zero gap between Products & Collections) OR Inline Search Area */}
          {!inlineSearchOpen ? (
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-8 text-xs sm:text-sm font-semibold">
              <Link
                href="/"
                className={`relative py-1 transition-colors ${
                  isHome ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                }`}
              >
                Home
                {isHome && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                )}
              </Link>

              <Link
                href="/products"
                className={`relative py-1 transition-colors ${
                  isProducts ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                }`}
              >
                Products
                {isProducts && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                )}
              </Link>

              {/* Collections with dropdown */}
              <div
                className="relative py-1 cursor-pointer"
                onMouseEnter={() => setCollectionsDropdown(true)}
                onMouseLeave={() => setCollectionsDropdown(false)}
              >
                <Link
                  href="/collections"
                  className={`flex items-center gap-1 transition-colors ${
                    isCollections ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                  }`}
                >
                  <span>Collections</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                  {isCollections && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                  )}
                </Link>

                {collectionsDropdown && (
                  <div className="absolute top-full -left-4 pt-3 w-60 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-[#20140D] border border-[#3E2719] rounded-xl shadow-2xl p-2.5 space-y-1 backdrop-blur-md">
                      {COLLECTIONS.map((col) => (
                        <Link
                          key={col.id}
                          href={`/products?category=${encodeURIComponent(col.name)}`}
                          onClick={(e) => handleCategorySelect(e, col.name)}
                          className="w-full text-left px-3 py-2 rounded-lg text-xs text-[#E3D3C4] hover:bg-[#341F14] hover:text-amber-300 transition-colors flex items-center justify-between group"
                        >
                          <span>{col.name}</span>
                          <span className="text-[10px] text-amber-400/60 font-mono group-hover:text-amber-400">
                            {col.itemCount}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className={`relative py-1 transition-colors ${
                  isAbout ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                }`}
              >
                About
                {isAbout && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                )}
              </Link>

              <Link
                href="/contact"
                className={`relative py-1 transition-colors ${
                  isContact ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                }`}
              >
                Contact
                {isContact && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                )}
              </Link>
            </nav>
          ) : (
            <div className="hidden md:flex items-center flex-1 mx-6 lg:mx-8">
              {/* Home & Products stay visible */}
              <div className="flex items-center space-x-7 lg:space-x-8 text-xs sm:text-sm font-semibold shrink-0 mr-6">
                <Link
                  href="/"
                  className={`relative py-1 transition-colors ${
                    isHome ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                  }`}
                >
                  Home
                  {isHome && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                  )}
                </Link>

                <Link
                  href="/products"
                  className={`relative py-1 transition-colors ${
                    isProducts ? 'text-white font-bold' : 'text-[#E5D7CC] hover:text-white font-medium'
                  }`}
                >
                  Products
                  {isProducts && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E5A855] rounded-full" />
                  )}
                </Link>
              </div>

              {/* Inline Search Bar expanding across the rest */}
              <div
                ref={searchContainerRef}
                className="flex-1 max-w-xl relative animate-in fade-in slide-in-from-right-3 duration-200"
              >
                <form onSubmit={handleSearchSubmit} className="relative w-full">
                  <div className="flex items-center w-full bg-[#1E130D]/95 border border-[#E5A855] rounded-full px-4 py-1.5 shadow-2xl backdrop-blur-md focus-within:ring-2 focus-within:ring-[#E5A855]/40 transition-all">
                    <Search className="w-4 h-4 text-[#E5A855] shrink-0 mr-2.5" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={navSearchQuery}
                      onChange={(e) => setNavSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none"
                    />
                    {navSearchQuery && (
                      <button
                        type="button"
                        onClick={() => setNavSearchQuery('')}
                        className="p-1 text-stone-400 hover:text-white mr-1 transition-colors cursor-pointer"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setInlineSearchOpen(false);
                        setNavSearchQuery('');
                      }}
                      className="p-1 text-stone-400 hover:text-[#E5A855] hover:bg-white/10 rounded-full shrink-0 transition-colors cursor-pointer"
                      aria-label="Close search"
                      title="Close search (Esc)"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Instant Search Results Dropdown */}
                  {navSearchQuery.trim().length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1009]/98 border border-[#3E2718] rounded-2xl shadow-2xl p-2.5 z-50 max-h-80 overflow-y-auto no-scrollbar space-y-1 backdrop-blur-xl">
                      {searchResults.length === 0 ? (
                        <div className="py-5 text-center">
                          <p className="text-xs text-stone-300">
                            No wooden pieces matching &ldquo;<span className="text-white font-medium">{navSearchQuery}</span>&rdquo;
                          </p>
                          <Link
                            href="/products"
                            onClick={() => {
                              setInlineSearchOpen(false);
                              setNavSearchQuery('');
                            }}
                            className="inline-block mt-2 text-xs text-[#E5A855] hover:underline font-medium"
                          >
                            View all 20 handcrafted products
                          </Link>
                        </div>
                      ) : (
                        <>
                          {searchResults.map((p) => (
                            <Link
                              key={p.id}
                              href={`/products/${p.id}`}
                              onClick={() => {
                                setInlineSearchOpen(false);
                                setNavSearchQuery('');
                              }}
                              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#2C190F] transition-colors group"
                            >
                              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 relative shrink-0 border border-white/10">
                                <Image
                                  src={p.image}
                                  alt={p.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-semibold text-white truncate group-hover:text-[#E5A855] transition-colors">
                                  {p.name}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[10px] text-[#A67B52] font-medium">{p.category}</span>
                                  <span className="text-[10px] text-stone-400">• {p.woodType}</span>
                                </div>
                              </div>
                              <span className="text-xs font-bold text-[#E5A855] shrink-0">
                                ₹{p.price.toLocaleString('en-IN')}
                              </span>
                            </Link>
                          ))}
                          <button
                            type="submit"
                            className="w-full pt-2 pb-1 text-center text-[11px] text-amber-300/80 hover:text-amber-200 border-t border-white/10 transition-colors block font-medium cursor-pointer"
                          >
                            Press Enter to see all results in catalog
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

          {/* Right: Action Icons */}          {/* Right: Action Icons */}
          <div className="flex items-center gap-3 sm:gap-4 text-white shrink-0">
            {/* Search Icon */}
            {!inlineSearchOpen && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setInlineSearchOpen(true);
                }}
                className="p-1.5 text-white hover:text-[#E5A855] transition-colors cursor-pointer"
                aria-label="Open search area"
                title="Search handcrafted pieces"
              >
                <Search className="w-5 h-5 stroke-[2] pointer-events-none" />
              </button>
            )}

            {/* Profile / Account Icon - Redirects to /account */}
            <Link
              href="/account"
              className="p-1.5 text-white hover:text-[#E5A855] transition-colors hidden sm:block"
              aria-label="My Account"
              title="My Account"
            >
              <User className="w-5 h-5 stroke-[2]" />
            </Link>

            {/* Wishlist Heart Icon - Redirects to /wishlist */}
            <Link
              href="/wishlist"
              className="relative p-1.5 text-white hover:text-[#E5A855] transition-colors"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-5 h-5 stroke-[2]" />
              {totalWishlist > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#E5A855] text-stone-950 rounded-full text-[10px] font-black flex items-center justify-center">
                  {totalWishlist}
                </span>
              )}
            </Link>

            {/* Shopping Cart Icon with Gold Badge - Redirects to /cart */}
            <Link
              href="/cart"
              className="relative p-1.5 text-white hover:text-[#E5A855] transition-colors"
              aria-label="Shopping Cart"
              title="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 stroke-[2]" />
              <span className="absolute -top-1.5 -right-2 w-4 h-4 rounded-full bg-[#E5A855] text-[#1B110B] text-[10px] font-black flex items-center justify-center shadow">
                {totalItems}
              </span>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-stone-300 hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Inline Search Bar (Screens < md) */}
        {inlineSearchOpen && (
          <div className="md:hidden mt-2.5 pt-2 border-t border-white/10 animate-in fade-in slide-in-from-top-1">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="flex items-center w-full bg-[#1E130D] border border-[#E5A855] rounded-full px-3.5 py-1.5 shadow-xl">
                <Search className="w-4 h-4 text-[#E5A855] shrink-0 mr-2" />
                <input
                  type="text"
                  autoFocus
                  value={navSearchQuery}
                  onChange={(e) => setNavSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-xs text-white placeholder-stone-400 focus:outline-none"
                />
                {navSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setNavSearchQuery('')}
                    className="p-1 text-stone-400 hover:text-white mr-1"
                    aria-label="Clear search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setInlineSearchOpen(false);
                    setNavSearchQuery('');
                  }}
                  className="p-1 text-stone-400 hover:text-[#E5A855] hover:bg-white/10 rounded-full shrink-0 transition-colors"
                  aria-label="Close search"
                  title="Close search"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Live Results Dropdown */}
              {navSearchQuery.trim().length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1A1009] border border-[#3E2718] rounded-xl shadow-2xl p-2 z-50 max-h-64 overflow-y-auto space-y-1">
                  {searchResults.length === 0 ? (
                    <p className="text-xs text-stone-400 text-center py-3">
                      No products matching &ldquo;{navSearchQuery}&rdquo;
                    </p>
                  ) : (
                    searchResults.map((p) => (
                      <Link
                        key={p.id}
                        href={`/products/${p.id}`}
                        onClick={() => {
                          setInlineSearchOpen(false);
                          setNavSearchQuery('');
                        }}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-[#2C190F]"
                      >
                        <div className="w-9 h-9 rounded bg-white/5 relative shrink-0 overflow-hidden">
                          <Image src={p.image} alt={p.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-white truncate">{p.name}</p>
                          <span className="text-[10px] text-[#A67B52] block">{p.category}</span>
                        </div>
                        <span className="text-xs font-bold text-[#E5A855]">
                          ₹{p.price.toLocaleString('en-IN')}
                        </span>
                      </Link>
                    ))
                  )}
                </div>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1C120B]/98 border-t border-[#311E13] px-5 py-5 space-y-3 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 border-b border-[#2C190F] ${
              isHome ? 'text-amber-300 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 border-b border-[#2C190F] ${
              isProducts ? 'text-amber-300 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            Products
          </Link>
          <div>
            <Link
              href="/collections"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 ${
                isCollections ? 'text-amber-300 font-bold' : 'text-stone-300 hover:text-white'
              }`}
            >
              Collections
            </Link>
            <div className="pl-2 grid grid-cols-2 gap-1.5 pb-2 border-b border-[#2C190F]">
              {COLLECTIONS.map((col) => (
                <Link
                  key={col.id}
                  href={`/products?category=${encodeURIComponent(col.name)}`}
                  onClick={(e) => handleCategorySelect(e, col.name)}
                  className="text-xs text-stone-400 hover:text-amber-300 py-1 transition-colors flex items-center justify-between pr-2"
                >
                  <span className="truncate">{col.name}</span>
                  <span className="text-[10px] text-amber-400/60 font-mono ml-1">{col.itemCount}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 border-b border-[#2C190F] ${
              isAbout ? 'text-amber-300 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block py-2 border-b border-[#2C190F] ${
              isContact ? 'text-amber-300 font-bold' : 'text-stone-300 hover:text-white'
            }`}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
