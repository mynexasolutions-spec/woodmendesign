'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, ShoppingBag, Heart, Info, X } from 'lucide-react';

export interface Toast {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'cart' | 'wishlist' | 'info';
  actionLabel?: string;
  onAction?: () => void;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, 'id'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: Toast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Floating Toast Container */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => {
          return (
            <div
              key={toast.id}
              className="pointer-events-auto bg-[#241710] text-[#FAF3EB] border border-amber-500/40 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
                  {toast.type === 'cart' && <ShoppingBag className="w-4 h-4" />}
                  {toast.type === 'wishlist' && <Heart className="w-4 h-4 fill-amber-400" />}
                  {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  {toast.type === 'info' && <Info className="w-4 h-4 text-sky-400" />}
                  {!toast.type && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>

                <div>
                  <h5 className="text-xs font-bold text-[#F8EFE7]">
                    {toast.title}
                  </h5>
                  {toast.message && (
                    <p className="text-[11px] text-[#CDBBAE] leading-tight mt-0.5">
                      {toast.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {toast.actionLabel && toast.onAction && (
                  <button
                    onClick={() => {
                      toast.onAction?.();
                      removeToast(toast.id);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 text-[11px] font-bold transition-colors shrink-0"
                  >
                    {toast.actionLabel}
                  </button>
                )}

                <button
                  onClick={() => removeToast(toast.id)}
                  className="p-1 text-stone-400 hover:text-white transition-colors"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

