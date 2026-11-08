import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { WishlistProvider } from '@/context/WishlistContext';
import { ToastProvider } from '@/context/ToastContext';
import { FAVICON_DATA_URI } from '@/data/favicon-base64';

export const metadata: Metadata = {
  metadataBase: new URL('https://woodmendesign.vercel.app'),
  title: 'Woodmen Design Corporation | Handcrafted Solid Wood Kitchenware & Tableware',
  description:
    'Authentic Indian Sheesham & Acacia wooden utensils, roti casseroles, masala boxes, serving bowls & trays. Handcrafted in Saharanpur with direct artisan pricing.',
  keywords: [
    'woodmen design',
    'woodmen design corporation',
    'wooden utensils',
    'sheesham wood bowls',
    'wooden roti casserole',
    'wooden masala box',
    'wooden serving tray',
    'wooden cake stand',
    'handcrafted kitchenware India',
    'solid wood tableware',
    'saharanpur woodcraft',
  ],
  authors: [{ name: 'Woodmen Design Corporation', url: 'https://woodmendesign.vercel.app' }],
  creator: 'Woodmen Design Corporation',
  publisher: 'Woodmen Design Corporation',
  icons: {
    icon: [
      { url: FAVICON_DATA_URI, type: 'image/png' },
      { url: '/icon.png?v=5', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico?v=5', sizes: 'any' },
    ],
    shortcut: FAVICON_DATA_URI,
    apple: [
      { url: '/apple-touch-icon.png?v=5', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Woodmen Design Corporation | Handcrafted Solid Wood Tableware',
    description:
      'Authentic Indian Sheesham & Acacia wooden utensils, roti casseroles, masala boxes, serving bowls & trays. Handcrafted in Saharanpur with direct artisan pricing.',
    url: 'https://woodmendesign.vercel.app',
    siteName: 'Woodmen Design Corporation',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Woodmen Design Corporation - Handcrafted Wooden Tableware',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Woodmen Design Corporation | Handcrafted Solid Wood Tableware',
    description:
      'Authentic Indian Sheesham & Acacia wooden utensils, roti casseroles, masala boxes, serving bowls & trays. Handcrafted in Saharanpur with direct artisan pricing.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://woodmendesign.vercel.app',
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
        <link rel="icon" type="image/png" sizes="32x32" href={FAVICON_DATA_URI} />
        <link rel="shortcut icon" href={FAVICON_DATA_URI} />
        <link rel="icon" href="/favicon.ico?v=5" sizes="any" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon.png?v=5" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=5" />
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

