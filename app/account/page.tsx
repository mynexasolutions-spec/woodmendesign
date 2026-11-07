'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  User,
  Package,
  Heart,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { useWishlist } from '@/context/WishlistContext';

export default function AccountPage() {
  const { totalWishlist } = useWishlist();

  const [userProfile, setUserProfile] = useState({
    name: 'Artisan Patron',
    phone: '+91 9720975271',
    email: 'patron@woodmendesign.com',
    city: 'Saharanpur, Uttar Pradesh',
  });

  const recentOrders = [
    {
      id: 'WM-849201',
      date: 'November 05, 2026',
      items: 'Roti Casserole (8.5 Inch) + Masala Box (5 Compartments)',
      amount: '₹2,798',
      status: 'In Transit',
      statusColor: 'text-amber-800 bg-amber-50 border-amber-200',
    },
    {
      id: 'WM-719302',
      date: 'October 18, 2026',
      items: 'Wooden Serving Bowl (Acacia Wood)',
      amount: '₹599',
      status: 'Delivered',
      statusColor: 'text-emerald-800 bg-emerald-50 border-emerald-200',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => {}} />

      {/* Header Banner */}
      <section className="bg-[#180E09] text-white pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-[#311E13] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-amber-200/70 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">My Account</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#FAF5EE] tracking-tight">
            My Account &amp; Orders
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-[#D0BEB0]">
            Manage your profile, view recent consignments, and track handcrafted orders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-7 border border-[#EADBCC] shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#180E09] text-[#E5A855] border-2 border-[#E5A855] flex items-center justify-center text-xl font-bold">
                WM
              </div>
              <div>
                <h2 className="font-serif-display text-lg font-bold text-[#2A180E]">
                  {userProfile.name}
                </h2>
                <span className="text-xs text-stone-500 font-mono">
                  {userProfile.phone}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F2ECE3] space-y-3 text-xs text-[#5C4535]">
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Email:</span>
                <span className="font-medium text-[#2A180E]">{userProfile.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Location:</span>
                <span className="font-medium text-[#2A180E]">{userProfile.city}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-stone-400">Saved Wishlist:</span>
                <Link href="/wishlist" className="font-bold text-[#A67B52] underline">
                  {totalWishlist} pieces
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/track-order"
                className="w-full py-2.5 rounded-full bg-[#FAF6F0] hover:bg-[#F0E6DB] text-[#2A180E] font-bold text-xs flex items-center justify-center gap-2 border border-[#DFD1C2] transition-colors"
              >
                <Package className="w-4 h-4 text-amber-800" />
                <span>Track Live Consignment</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Recent Orders */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#EADBCC] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE3]">
              <h3 className="font-serif-display text-xl font-bold text-[#2A180E]">
                Recent Orders
              </h3>
              <Link
                href="/track-order"
                className="text-xs font-bold text-[#A67B52] hover:text-[#2A180E] underline transition-colors"
              >
                Track by ID
              </Link>
            </div>

            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0] border border-[#EADBCC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#2A180E]">
                        {order.id}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#2A180E]">
                      {order.items}
                    </p>
                    <p className="text-[11px] text-stone-400">
                      Ordered on {order.date} • {order.amount}
                    </p>
                  </div>

                  <Link
                    href={`/track-order`}
                    className="px-4 py-2 rounded-full bg-white hover:bg-[#3D2516] text-[#2A180E] hover:text-white font-bold text-xs border border-[#DFD1C2] shadow-sm transition-colors shrink-0"
                  >
                    View Status
                  </Link>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-800 shrink-0 mt-0.5" />
              <div>
                <strong>Direct Artisan Guarantee</strong>
                <p className="text-[11px] text-stone-600 mt-0.5">
                  Every order ships directly from our family workshop in Saharanpur with transit insurance and tamper-proof eco-kraft packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

