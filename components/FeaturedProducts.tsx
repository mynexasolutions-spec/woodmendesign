'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingBag, Heart, Eye } from 'lucide-react';
import { Product, CATEGORIES } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useToast } from '@/context/ToastContext';

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
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const { showToast } = useToast();

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
                  style={{ position: 'relative', width: '100%', height: '230px' }}
                >
                  {/* Badge (Bestseller, Popular, etc.) */}
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
                    title={inWishlist ? 'Remove from wishlist' : 'Save to wishlist'}
                  >
                    <Heart
                      className={`w-4 h-4 ${inWishlist ? 'fill-rose-500 text-rose-500' : ''}`}
                    />
                  </button>

                  {/* Product Image: Direct Link to Dedicated Product Page */}
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

                    {/* Quick View Button on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all">
                        View Piece
                      </span>
                    </div>
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  {/* Category name subtle */}
                  <span className="text-[10px] uppercase tracking-wider text-[#A67B52] font-bold">
                    {product.woodType.split(' ')[0]} Wood
                  </span>

                  {/* Product Title: Direct Link to Dedicated Product Page */}
                  <Link
                    href={`/products/${product.id}`}
                    className="font-serif-display font-semibold text-xs sm:text-sm text-[#2A180E] group-hover:text-[#A67B52] transition-colors line-clamp-1 cursor-pointer mt-0.5 block"
                    title={product.name}
                  >
                    {product.name}
                  </Link>

                  {/* Rating & Reviews */}
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </div>
                    <span className="text-xs font-bold text-[#2A180E]">
                      {product.rating}
                    </span>
                    <span className="text-[11px] text-stone-400">
                      ({product.reviewsCount})
                    </span>
                  </div>

                  {/* Price & Add to Cart button */}
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
                      className="w-8 h-8 rounded-lg bg-[#4D2F1A] hover:bg-[#6E4526] active:scale-90 text-[#FAF6F0] flex items-center justify-center transition-all shadow hover:shadow-md"
                      aria-label={`Add ${product.name} to cart`}
                      title="Add to Cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

