'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Star, ShoppingBag, Heart, Eye, Check } from 'lucide-react';
import { Product, CATEGORIES, woodLabel } from '@/data/products';
import ProductImageFill from '@/components/ProductImageFill';
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

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: Product) => void;
}

export default function FeaturedProducts({
  products,
  selectedCategory,
  onSelectCategory,
  onQuickView,
}: FeaturedProductsProps) {
  const router = useRouter();
  const { addToCart, setIsCheckoutOpen } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();
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

  const filteredProducts = (
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory)
  ).slice(0, 5);

  return (
    <section id="products-section" className="py-16 sm:py-20 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            <span>BEST SELLERS</span>
            <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
            Featured Products
          </h2>

          <p className="mt-2 text-sm sm:text-base text-[#6B5547] font-light">
            Our best-selling handcrafted pieces, loved by our customers.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#3D2516] text-[#FAF6F0] shadow-md scale-105'
                    : 'bg-[#EFE7DC] text-[#5C4535] hover:bg-[#E4D9CC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
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
                >
                  {/* Badge (Bestseller, Popular, etc.) */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-[#241710] text-[#E5A855] text-xs font-bold tracking-wider uppercase shadow">
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
                    title={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart
                      className={`w-4 h-4 ${inWishlist ? 'fill-rose-500 text-rose-500' : ''}`}
                    />
                  </button>

                  {/* Product Image: Direct Link to Dedicated Product Page */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative w-full h-full block overflow-hidden cursor-pointer group-hover:scale-105 transition-transform duration-500"
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <ProductImageFill src={product.image} alt={product.name} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" />

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                        View Piece
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                  {/* Category name */}
                  <span className="text-xs uppercase tracking-wider text-[#A67B52] font-bold">
                    {woodLabel(product.woodType)}
                  </span>

                  {/* Product Title: Direct Link to Dedicated Product Page */}
                  <Link
                    href={`/products/${product.id}`}
                    className="font-serif-display font-semibold text-sm sm:text-[15px] text-[#2A180E] group-hover:text-[#A67B52] transition-colors line-clamp-1 cursor-pointer mt-1 block"
                    title={product.name}
                  >
                    {product.name}
                  </Link>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 mt-1 sm:mt-2">
                    {product.reviewsCount > 0 ? (
                      <>
                        <div className="flex items-center text-amber-500">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                          {product.rating}
                        </span>
                        <span className="text-xs text-stone-500">
                          ({product.reviewsCount})
                        </span>
                      </>
                    ) : (
                      <span className="text-xs text-stone-500">No reviews yet</span>
                    )}
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="mt-2 pt-2 sm:mt-3 sm:pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
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

                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all shadow hover:shadow-md ${
                        addedId === product.id
                          ? 'bg-emerald-700 text-white scale-110'
                          : 'bg-[#4D2F1A] hover:bg-[#6E4526] active:scale-90 text-[#FAF6F0]'
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                      title={addedId === product.id ? 'Added!' : 'Add to Cart'}
                    >
                      {addedId === product.id ? (
                        <Check className="w-4 h-4 stroke-[3]" />
                      ) : (
                        <ShoppingBag className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Action Buttons: View Details (Colored Brand Button) & Buy Now (WhatsApp Green) in 2 Rows */}
                  <div className="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-2.5">
                    <Link
                      href={`/products/${product.id}`}
                      className="w-full py-2 sm:py-2.5 px-3 rounded-xl bg-[#3D2516] hover:bg-[#201309] text-[#FAF6F0] text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center cursor-pointer"
                    >
                      View Details
                    </Link>

                    <button
                      onClick={(e) => handleBuyNow(product, e)}
                      className="w-full py-2 sm:py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs sm:text-sm font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      title="Instant Buy Now"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
                      <span>Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore All Link Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#FAF0E4] hover:bg-[#3D2516] text-[#8C5E37] hover:text-white border border-[#DFD1C2] text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            Explore Complete Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}

