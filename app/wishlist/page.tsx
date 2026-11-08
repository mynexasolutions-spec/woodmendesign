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

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

export default function WishlistPage() {
  const router = useRouter();
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart, setIsCheckoutOpen } = useCart();
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

  const handleBuyNow = (product: any) => {
    addToCart(product, 1);
    setIsCheckoutOpen(true);
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

                    {/* Action Buttons: View Details & Buy Now */}
                    <div className="grid grid-cols-2 gap-2 mt-2.5">
                      <Link
                        href={`/products/${product.id}`}
                        className="py-2 px-2 rounded-xl bg-[#3D2516] hover:bg-[#201309] text-[#FAF6F0] text-xs font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center cursor-pointer"
                      >
                        View Details
                      </Link>

                      <button
                        onClick={() => handleBuyNow(product)}
                        className="py-2 px-2 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold text-center transition-all shadow-sm hover:shadow active:scale-95 flex items-center justify-center gap-1 cursor-pointer"
                        title="Instant Buy Now"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                        <span>Buy Now</span>
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

