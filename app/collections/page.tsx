'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  ShoppingBag,
  Heart,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  Sparkles
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import ProductQuickViewModal from '@/components/ProductQuickViewModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, Product, CATEGORIES } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedWood, setSelectedWood] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (selectedCategory !== 'All' && p.category !== selectedCategory) return false;
      if (selectedWood !== 'All' && !p.woodType.toLowerCase().includes(selectedWood.toLowerCase())) return false;
      if (selectedPrice === 'under-1000' && p.price >= 1000) return false;
      if (selectedPrice === '1000-1500' && (p.price < 1000 || p.price > 1500)) return false;
      if (selectedPrice === 'above-1500' && p.price <= 1500) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, selectedWood, selectedPrice, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Header Banner */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden border-b border-[#362215]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ARTISAN WOODEN RANGE</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#FAF3EB]">
            All Wooden Collections
          </h1>

          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-lg mx-auto">
            Explore our complete handcrafted repertoire of Sheesham, Acacia, and Teak kitchenware,
            serving platters, and dining essentials.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        {/* Filters & Sorting Bar */}
        <div className="bg-white p-4 rounded-2xl border border-[#DFD1C2] shadow-sm mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#3D2516] text-[#FAF6F0]'
                      : 'bg-[#F2ECE3] text-[#5C4535] hover:bg-[#E4D9CC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & Quick Selects */}
            <div className="flex items-center gap-3">
              {/* Wood Select */}
              <select
                value={selectedWood}
                onChange={(e) => setSelectedWood(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#DFD1C2] text-xs font-semibold text-[#2A180E] focus:outline-none"
              >
                <option value="All">All Woods</option>
                <option value="Sheesham">Indian Sheesham</option>
                <option value="Acacia">Acacia Wood</option>
                <option value="Teak">Teak Wood</option>
              </select>

              {/* Price Filter */}
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#DFD1C2] text-xs font-semibold text-[#2A180E] focus:outline-none"
              >
                <option value="All">All Prices</option>
                <option value="under-1000">Under ₹1,000</option>
                <option value="1000-1500">₹1,000 - ₹1,500</option>
                <option value="above-1500">Above ₹1,500</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#DFD1C2] text-xs font-semibold text-[#2A180E] focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-[#F2ECE3]">
            <span>Showing <strong>{filteredProducts.length}</strong> handcrafted products</span>
            {(selectedCategory !== 'All' || selectedWood !== 'All' || selectedPrice !== 'All') && (
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedWood('All');
                  setSelectedPrice('All');
                }}
                className="text-amber-800 hover:underline font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Image: Edge-to-Edge Flush Image (No Inset Padding) */}
                <div
                  className="relative w-full aspect-square overflow-hidden bg-[#FAF6F0]"
                  style={{ position: 'relative', width: '100%', height: '230px' }}
                >
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2 py-0.5 rounded-md bg-[#241710] text-[#E5A855] text-[10px] font-bold tracking-wider uppercase shadow">
                      {product.badge}
                    </span>
                  )}

                  {/* Wishlist toggle */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                      showToast({
                        title: inWishlist ? 'Removed from Wishlist' : 'Saved to Wishlist',
                        message: product.name,
                        type: 'wishlist',
                      });
                    }}
                    className={`absolute top-3 right-3 z-10 p-1.5 rounded-full backdrop-blur-md transition-all ${
                      inWishlist
                        ? 'bg-rose-50 text-rose-500 fill-current'
                        : 'bg-white/80 hover:bg-white text-stone-700 shadow-sm'
                    }`}
                    aria-label="Save to Wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${inWishlist ? 'fill-rose-500 text-rose-500' : ''}`}
                    />
                  </button>

                  {/* Product Image: Direct Link to Product Detail Page */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative w-full h-full block cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-lg">
                        View Piece
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#A67B52] font-bold">
                    {product.woodType}
                  </span>

                  <Link
                    href={`/products/${product.id}`}
                    className="font-serif-display font-semibold text-xs sm:text-sm text-[#2A180E] group-hover:text-[#A67B52] transition-colors line-clamp-1 mt-0.5"
                  >
                    {product.name}
                  </Link>

                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-[#2A180E]">
                      {product.rating}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      ({product.reviewsCount})
                    </span>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-sm sm:text-base font-bold text-[#2A180E]">
                          ₹{product.price.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[11px] text-stone-400 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        addToCart(product, 1);
                        showToast({
                          title: 'Added to Cart',
                          message: `${product.name} (₹${product.price.toLocaleString('en-IN')})`,
                          type: 'cart',
                        });
                      }}
                      className="w-8 h-8 rounded-lg bg-[#4D2F1A] hover:bg-[#6E4526] active:scale-90 text-[#FAF6F0] flex items-center justify-center transition-all shadow"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => (window.location.href = `/products/${p.id}`)}
      />
      <FloatingWhatsApp />
    </div>
  );
}

