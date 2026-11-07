import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ToastProvider } from '@/context/ToastContext';

export const metadata: Metadata = {
  title: 'Woodmen Design Corporation | Timeless Wooden Essentials for Your Home',
  description:
    'Handcrafted wooden utensils that bring nature, tradition and warmth to your everyday life. Solid Sheesham & Acacia wooden serving bowls, roti casseroles, masala boxes, trays, and cake stands.',
  keywords: [
    'wooden utensils',
    'woodmen design corporation',
    'sheesham wood bowls',
    'wooden roti casserole',
    'wooden masala box',
    'wooden serving tray',
    'wooden cake stand',
    'handcrafted kitchenware India',
  ],
  authors: [{ name: 'Woodmen Design Corporation' }],
  openGraph: {
    title: 'Woodmen Design Corporation | Timeless Wooden Essentials for Your Home',
    description: 'Crafted by Nature, Designed for You. Handcrafted in India.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/tailwind.css" />
        <style dangerouslySetInnerHTML={{ __html: `
          * {
            font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          img { max-width: 100%; }
          .relative { position: relative !important; }
        `}} />
      </head>
      <body className="bg-[#FAF6F0] text-[#20150F] antialiased selection:bg-[#E5A855] selection:text-[#1A1009]">
        <ToastProvider>
          <CartProvider>
            <WishlistProvider>
              {children}
            </WishlistProvider>
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}

