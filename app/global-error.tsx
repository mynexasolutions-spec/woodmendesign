'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF6F0] flex items-center justify-center p-6 text-center font-sans">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-[#DFD1C2] shadow-xl space-y-4">
          <h2 className="text-2xl font-bold text-[#2A180E]">Application Error</h2>
          <p className="text-xs text-stone-600 leading-relaxed">
            A critical application error occurred. Click below to reload.
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-full bg-[#3D2516] text-[#FAF6F0] text-xs font-bold shadow hover:bg-[#5C3B24] transition-colors"
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}

