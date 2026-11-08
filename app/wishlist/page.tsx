'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Heart,
  ShoppingBag,
  Trash2,
  Star
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CheckoutModal from '@/components/CheckoutModal';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';

export default function WishlistPage() {
  const router = useRouter();
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart(product, 1);
    showToast({
      title: 'Added to Cart',
      message: `${product.name} (₹${product.price.toLocaleString('en-IN')})`,
      type: 'cart',
    });
    router.push('/cart');
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((p) => addToCart(p, 1));
    showToast({
      title: 'Added All to Cart',
      message: `${wishlist.length} items moved to your shopping cart.`,
      type: 'cart',
    });
    router.push('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => {}} />

      {/* Header Banner */}
      <section className="bg-[#180E09] text-white pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-[#311E13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">Wishlist</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#FAF5EE] tracking-tight">
            Your Saved Wishlist
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#D0BEB0] max-w-xl mx-auto">
            Handcrafted pieces you&apos;ve shortlisted for your home or thoughtful gifting.
          </p>
        </div>
      </section>

      {/* Main Wishlist Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1 w-full">
        {wishlist.length === 0 ? (
          /* Empty Wishlist State */
          <div className="py-20 text-center max-w-md mx-auto space-y-4 bg-white rounded-3xl p-8 sm:p-10 border border-[#EADBCC] shadow-sm">
            <div className="w-16 h-16 mx-auto rounded-full bg-rose-50 flex items-center justify-center text-rose-500">
              <Heart className="w-7 h-7 stroke-[1.5]" />
            </div>
            <h2 className="font-serif-display text-2xl font-bold text-[#2A180E]">
              Your wishlist is empty
            </h2>
            <p className="text-xs text-stone-500 leading-relaxed">
              Explore our handcrafted catalog and click the heart icon on any piece to save it here.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs sm:text-sm shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>Browse Products</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#DFD1C2]">
              <span className="text-xs sm:text-sm text-[#7A6454]">
                Showing <strong className="text-[#2A180E]">{wishlist.length}</strong> saved {wishlist.length === 1 ? 'item' : 'items'}
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddAllToCart}
                  className="px-4 py-2 rounded-full bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] font-bold text-xs shadow transition-colors flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add All to Cart</span>
                </button>

                <button
                  onClick={clearWishlist}
                  className="text-xs font-bold text-stone-400 hover:text-rose-600 transition-colors underline"
                >
                  Clear Wishlist
                </button>
              </div>
            </div>

            {/* Grid of Wishlist Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative"
                >
                  {/* Top Image: Edge-to-Edge */}
                  <div
                    className="relative w-full aspect-square overflow-hidden bg-[#FAF6F0]"
                    style={{ position: 'relative', width: '100%', height: '230px' }}
                  >
                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/90 text-rose-500 hover:bg-rose-50 transition-all shadow-sm"
                      title="Remove from wishlist"
                      aria-label="Remove from wishlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

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
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#A67B52] font-bold">
                        {product.woodType.split(' ')[0]} Wood
                      </span>
                      <Link
                        href={`/products/${product.id}`}
                        className="font-serif-display font-semibold text-sm sm:text-[15px] text-[#2A180E] hover:text-[#A67B52] transition-colors line-clamp-1 mt-1 block"
                      >
                        {product.name}
                      </Link>

                      <div className="flex items-center gap-1.5 mt-2">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs sm:text-sm font-bold text-[#2A180E]">
                          {product.rating}
                        </span>
                        <span className="text-xs text-stone-500">
                          ({product.reviewsCount})
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                      <span className="text-sm sm:text-base font-bold text-[#2A180E]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className="p-2.5 rounded-xl bg-[#3D2516] hover:bg-[#5C3B24] text-[#FAF6F0] hover:scale-105 active:scale-95 transition-all shadow"
                        title="Add to Cart"
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
      <CheckoutModal />
      <FloatingWhatsApp />
    </div>
  );
}

