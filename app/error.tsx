'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled app error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#DFD1C2] shadow-xl space-y-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-900 text-2xl font-bold">
          !
        </div>
        <h2 className="text-2xl font-bold text-[#2A180E]">Something went wrong</h2>
        <p className="text-xs text-stone-600 leading-relaxed">
          An unexpected error occurred while loading this page. Please try refreshing.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold shadow hover:bg-[#5C3B24] transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-full border border-[#DFD1C2] text-[#2A180E] text-xs font-bold hover:bg-[#FAF6F0] transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

