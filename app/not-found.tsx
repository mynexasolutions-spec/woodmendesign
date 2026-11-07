'use client';

import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#DFD1C2] shadow-xl space-y-4">
        <span className="text-4xl font-extrabold text-[#E5A855] block">404</span>
        <h2 className="text-2xl font-bold text-[#2A180E]">Page Not Found</h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          The handcrafted wooden page you are looking for doesn&apos;t exist or has moved.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block px-6 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold shadow hover:bg-[#5C3B24] transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

