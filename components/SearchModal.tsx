'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, X, Star } from 'lucide-react';
import { Product } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export default function SearchModal({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}: SearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = searchTerm.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.woodType.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FAF6F0] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#DFCFC0] overflow-hidden z-10">
        {/* Search Input Bar */}
        <div className="p-4 bg-white border-b border-[#EADBCC] flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-700 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search wooden bowls, roti casseroles, masala boxes, trays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-sm text-[#2A180E] placeholder-stone-400 focus:outline-none"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-stone-500 hover:text-stone-800"
          >
            Esc
          </button>
        </div>

        {/* Popular Tags */}
        <div className="p-3 bg-[#F4ECE3] border-b border-[#E8DD CE] flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
          <span className="text-stone-500 shrink-0">Popular:</span>
          {['Masala Box', 'Roti Casserole', 'Serving Bowl', 'Acacia Tray', 'Cake Stand'].map(
            (tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2.5 py-1 rounded-full bg-white border border-[#DFD1C2] text-[#3D2516] hover:bg-stone-50 shrink-0 text-[11px] font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>

        {/* Results Area */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          {searchTerm.trim() ? (
            results.length > 0 ? (
              results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#EADBCC] hover:border-[#A67B52] hover:shadow-md cursor-pointer transition-all group"
                >
                  <div
                    className="relative w-14 h-14 rounded-lg bg-[#FAF6F0] overflow-hidden shrink-0 p-1 flex items-center justify-center"
                    style={{ position: 'relative', width: '56px', height: '56px' }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="56px"
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-[#A67B52]">
                      {product.category}
                    </span>
                    <h4 className="font-serif-display text-xs sm:text-sm font-bold text-[#2A180E] group-hover:text-amber-800 transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-[11px] text-stone-500 block">
                      {product.woodType}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-sm font-bold text-[#2A180E] block">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-[11px] text-amber-500 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-stone-500 space-y-1">
                <p className="text-sm font-medium">No wooden products found for &quot;{searchTerm}&quot;</p>
                <p className="text-xs text-stone-400">
                  Try searching for &quot;bowl&quot;, &quot;tray&quot;, &quot;casserole&quot; or &quot;masala&quot;
                </p>
              </div>
            )
          ) : (
            <div className="py-6 text-center text-stone-500 text-xs">
              Type a product name or category above to begin searching.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

