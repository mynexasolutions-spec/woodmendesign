'use client';

import React, { useState, useMemo, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import {
  Star,
  ShoppingBag,
  Heart,
  Search,
  SlidersHorizontal,
  Sparkles,
  CheckCircle2,
  Check,
  X
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, CATEGORIES, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const urlSearch = searchParams ? searchParams.get('search') : null;
  const urlCategory = searchParams ? searchParams.get('category') : null;
  const { addToCart, setIsCheckoutOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'All');
  const [searchQuery, setSearchQuery] = useState<string>(urlSearch || '');
  const [isSearchExpanded, setIsSearchExpanded] = useState<boolean>(!!urlSearch);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAddedId(product.id);
    showToast({
      title: 'Added to Cart',
      message: `${product.name} (₹${product.price.toLocaleString('en-IN')})`,
      type: 'cart',
    });
    setTimeout(() => {
      setAddedId((current) => (current === product.id ? null : current));
    }, 1200);
  };

  const handleBuyNow = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsCheckoutOpen(true);
  };

  useEffect(() => {
    if (urlCategory) {
      setSelectedCategory(urlCategory);
      setSearchQuery('');
    } else {
      setSelectedCategory('All');
    }
  }, [urlCategory]);

  useEffect(() => {
    const handleCategoryEvent = (e: any) => {
      if (e.detail) {
        setSelectedCategory(e.detail);
        setSearchQuery('');
      }
    };
    window.addEventListener('categoryChange', handleCategoryEvent);
    return () => window.removeEventListener('categoryChange', handleCategoryEvent);
  }, []);

  useEffect(() => {
    if (urlSearch) {
      setSearchQuery(urlSearch);
      setIsSearchExpanded(true);
    }
  }, [urlSearch]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Category filter
    if (selectedCategory && selectedCategory !== 'All') {
      const target = selectedCategory.trim().toLowerCase();
      list = list.filter((p) => {
        const cat = p.category.trim().toLowerCase();
        return (
          cat === target ||
          cat.replace(/&amp;/g, '&') === target ||
          cat.startsWith(target) ||
          target.startsWith(cat)
        );
      });
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.woodType.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        list.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        list.sort((a, b) => b.rating - a.rating);
        break;
      case 'featured':
      default:
        // default order
        break;
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      {/* Semi-transparent Header */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Banner with Dark Wood Ambience */}
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#160D08] text-white relative overflow-hidden border-b border-[#311E13]">
        {/* Subtle Ambient Grain Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-950/30 via-[#160D08] to-[#120B07] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            {selectedCategory === 'All' ? (
              <span className="text-white font-medium">Products</span>
            ) : (
              <Link href="/products" className="hover:text-amber-300 transition-colors">
                Products
              </Link>
            )}
            {selectedCategory !== 'All' && (
              <>
                <span className="opacity-40">/</span>
                <span className="text-[#E5A855] font-semibold">{selectedCategory}</span>
              </>
            )}
          </nav>

          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 text-xs uppercase tracking-[0.24em] text-[#E5A855] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#E5A855]/70" />
              <span>HANDCRAFTED WOODEN CATALOG</span>
              <span className="w-6 h-[1px] bg-[#E5A855]/70" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF5EE] tracking-tight leading-tight">
              {selectedCategory === 'All' ? 'All Handcrafted Products' : selectedCategory}
            </h1>

            <p className="mt-3 text-sm sm:text-base text-[#D4C3B5] leading-relaxed max-w-2xl mx-auto font-light">
              Meticulously turned and carved by master artisans from seasoned natural timbers.
              Every piece adds warmth, organic beauty, and lifelong durability to your kitchen and dining spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Control Bar */}
      <section className="sticky top-[60px] sm:top-[68px] z-30 bg-[#F5EFE6] border-b border-[#E3D6C8] shadow-sm backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      if (cat === 'All') {
                        router.push('/products');
                      } else {
                        router.push(`/products?category=${encodeURIComponent(cat)}`);
                      }
                    }}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 ${
                      isSelected
                        ? 'bg-[#3D2516] text-[#FAF6F0] shadow-md scale-105'
                        : 'bg-white/80 text-[#5C4535] hover:bg-white hover:text-[#2A180E] border border-[#E3D6C8]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input & Sort Dropdown */}
            <div className="flex items-center gap-2.5 shrink-0 justify-end">
              {/* Expandable Search Bar */}
              <div
                className={`relative flex items-center transition-all duration-300 ease-in-out ${
                  isSearchExpanded || searchQuery
                    ? 'w-48 sm:w-60 md:w-64'
                    : 'w-9'
                }`}
              >
                <div className="relative w-full h-9 flex items-center">
                  {/* Search Icon / Trigger Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!isSearchExpanded && !searchQuery) {
                        setIsSearchExpanded(true);
                        setTimeout(() => searchInputRef.current?.focus(), 80);
                      }
                    }}
                    className={`absolute left-0 top-0 w-9 h-9 flex items-center justify-center rounded-full text-[#5C4535] hover:text-[#2A180E] transition-all z-10 ${
                      isSearchExpanded || searchQuery
                        ? 'pointer-events-none text-stone-400'
                        : 'cursor-pointer bg-white border border-[#DFCFC0] shadow-sm hover:border-[#3D2516] hover:bg-[#FAF6F0]'
                    }`}
                    aria-label="Search products"
                    title="Search products"
                  >
                    <Search className="w-4 h-4" />
                  </button>

                  {/* Expandable Input Field */}
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchExpanded(true)}
                    onBlur={() => {
                      if (!searchQuery.trim()) {
                        setIsSearchExpanded(false);
                      }
                    }}
                    placeholder={isSearchExpanded || searchQuery ? 'Search products...' : ''}
                    className={`w-full h-9 rounded-full text-xs bg-white text-[#2A180E] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#3D2516]/30 transition-all duration-300 ${
                      isSearchExpanded || searchQuery
                        ? 'pl-9 pr-8 border border-[#DFCFC0] shadow-sm opacity-100 cursor-text'
                        : 'pl-9 pr-0 border-transparent opacity-0 pointer-events-none cursor-pointer'
                    }`}
                  />

                  {/* Clear / Collapse Button */}
                  {(isSearchExpanded || searchQuery) && (
                    <button
                      type="button"
                      onMouseDown={(e) => {
                        e.preventDefault();
                        if (searchQuery) {
                          setSearchQuery('');
                          searchInputRef.current?.focus();
                        } else {
                          setIsSearchExpanded(false);
                        }
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-0.5 z-10 transition-colors"
                      aria-label="Close search"
                      title={searchQuery ? 'Clear search' : 'Close search'}
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Sort By Select */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="py-2 px-3 rounded-full text-xs font-semibold bg-white border border-[#DFCFC0] text-[#2A180E] focus:outline-none focus:ring-2 focus:ring-[#3D2516]/30 cursor-pointer shadow-sm"
                aria-label="Sort products"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1 w-full">
        {/* Results Counter & Active Filters */}
        <div className="flex items-center justify-between mb-6 text-xs text-[#7A6454]">
          <span>
            Showing <strong className="text-[#2A180E]">{filteredProducts.length}</strong> handcrafted {filteredProducts.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
            {searchQuery && <span> matching &ldquo;<strong>{searchQuery}</strong>&rdquo;</span>}
          </span>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs font-bold text-[#A67B52] hover:text-[#2A180E] underline transition-colors"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-4 bg-white rounded-3xl p-8 border border-[#EADBCC] shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#FAF6F0] flex items-center justify-center text-amber-800">
              <Search className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-display text-xl font-bold text-[#2A180E]">
              No wooden items found
            </h3>
            <p className="text-xs text-stone-500">
              We couldn&apos;t find any pieces matching your current filters. Try searching with different terms or selecting another category.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 rounded-full bg-[#3D2516] text-white text-xs font-bold shadow hover:bg-[#5A3822] transition-colors"
            >
              Browse All Products
            </button>
          </div>
        ) : (
          /* Products Grid: Clicking on a card or image or title redirects directly to /products/[id] */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
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
                    {/* Top Badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-md bg-[#241710] text-[#E5A855] text-xs font-bold tracking-wider uppercase shadow">
                        {product.badge}
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
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
                      title={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                    >
                      <Heart
                        className={`w-4 h-4 ${inWishlist ? 'fill-rose-500 text-rose-500' : ''}`}
                      />
                    </button>

                    {/* Product Image: Direct Link to Product Page */}
                    <Link
                      href={`/products/${product.id}`}
                      className="relative w-full h-full block cursor-pointer group-hover:scale-105 transition-transform duration-500"
                      style={{ position: 'relative', width: '100%', height: '100%' }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                        className="object-cover"
                      />

                      {/* Subtle View Badge on Hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-lg">
                          View Product
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <span className="text-xs uppercase tracking-wider text-[#A67B52] font-bold">
                      {product.woodType.split(' ')[0]} Wood
                    </span>

                    {/* Product Title: Direct Link to Product Page */}
                    <Link
                      href={`/products/${product.id}`}
                      className="font-serif-display font-semibold text-sm sm:text-[15px] text-[#2A180E] group-hover:text-[#A67B52] transition-colors line-clamp-1 mt-1 cursor-pointer"
                      title={product.name}
                    >
                      {product.name}
                    </Link>

                    {/* Star Rating & Review Count */}
                    <div className="flex items-center gap-1.5 mt-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                        {product.rating}
                      </span>
                      <span className="text-xs text-stone-500">
                        ({product.reviewsCount})
                      </span>
                    </div>

                    {/* Price and Action Buttons */}
                    <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-base sm:text-lg font-bold text-[#2A180E]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-stone-400 line-through">
                              ₹{product.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quick Add to Cart Button */}
                      <button
                        onClick={(e) => handleQuickAdd(product, e)}
                        className={`p-2.5 rounded-xl transition-all shadow ${
                          addedId === product.id
                            ? 'bg-emerald-700 text-white scale-110'
                            : 'bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] hover:scale-105 active:scale-95'
                        }`}
                        aria-label={`Add ${product.name} to cart`}
                        title={addedId === product.id ? 'Added!' : 'Add to cart'}
                      >
                        {addedId === product.id ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <ShoppingBag className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* Action Buttons: View Details (Colored Brand Button) & Buy Now (WhatsApp Green) */}
                    <div className="grid grid-cols-2 gap-2 mt-2.5">
                      <Link
                        href={`/products/${product.id}`}
                        className="py-2.5 px-2 rounded-xl bg-[#3D2516] hover:bg-[#201309] text-[#FAF6F0] text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center cursor-pointer"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={(e) => handleBuyNow(product, e)}
                        className="py-2.5 px-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
                        title="Instant Buy Now"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                        <span>Buy Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FAF6F0]" />}>
      <ProductsContent />
    </Suspense>
  );
}

