'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import Craftsmanship from '@/components/Craftsmanship';
import FeaturedProducts from '@/components/FeaturedProducts';
import WarmthBanner from '@/components/WarmthBanner';
import BrandShowcase from '@/components/BrandShowcase';
import Occasions from '@/components/Occasions';
import Testimonials from '@/components/Testimonials';
import TrustBar from '@/components/TrustBar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import ProductQuickViewModal from '@/components/ProductQuickViewModal';
import SearchModal from '@/components/SearchModal';
import CraftingVideoModal from '@/components/CraftingVideoModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS, Product } from '@/data/products';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCraftingModalOpen, setIsCraftingModalOpen] = useState(false);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShopNow = () => {
    const element = document.getElementById('products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#FAF6F0]">
      {/* Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onWatchCrafting={() => setIsCraftingModalOpen(true)}
        onExploreClick={handleShopNow}
      />

      {/* Our Wooden Collections Carousel */}
      <Collections
        activeCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* Craftsmanship Section */}
      <Craftsmanship />

      {/* Featured Products Section */}
      <FeaturedProducts
        products={PRODUCTS}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onQuickView={(prod) => setQuickViewProduct(prod)}
      />

      {/* Warmth of Wood Kitchen Callout Banner */}
      <WarmthBanner onShopNow={handleShopNow} />

      {/* Brand Showcase Section (Poster from Image 2) */}
      <BrandShowcase />

      {/* Made for Every Moment / Occasions */}
      <Occasions onSelectOccasion={handleSelectCategory} />

      {/* Loved by Our Customers / Testimonials */}
      <Testimonials />

      {/* 4 Pillars Trust Bar */}
      <TrustBar />

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

      {/* Slide-over Cart Drawer */}
      <CartDrawer />

      {/* Slide-over Wishlist Drawer */}
      <WishlistDrawer />

      {/* Checkout Modal */}

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
      />

      {/* Crafting Video / Artisan Journey Modal */}
      <CraftingVideoModal
        isOpen={isCraftingModalOpen}
        onClose={() => setIsCraftingModalOpen(false)}
      />

      {/* Floating Artisan Hotline & WhatsApp button */}
      <FloatingWhatsApp />
    </main>
  );
}

