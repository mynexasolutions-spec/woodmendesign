'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  BookOpen,
  Clock,
  User,
  Search,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  X,
  Phone,
  ArrowRight,
  ShieldCheck,
  Heart,
  Droplets,
  Share2,
  Calendar,
  Tag
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import CheckoutModal from '@/components/CheckoutModal';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { PRODUCTS } from '@/data/products';
import { BLOG_POSTS, BLOG_CATEGORIES, BlogPost } from '@/data/blog';

const CARE_DOS = [
  'Hand wash promptly with mild, eco-friendly dish soap and a soft sponge under lukewarm water.',
  'Dry immediately with a clean cotton towel. Never allow water puddles to sit on the surface.',
  'Air-dry upright in a well-ventilated open area before storing in enclosed cabinets.',
  'Re-season every 2–3 months with a drop of coconut oil, walnut oil, or organic beeswax.',
];

const CARE_DONTS = [
  'NEVER put in a dishwasher. The steam cycle and harsh chemicals cause timber warping and cracks.',
  'Do not soak overnight in kitchen sinks or standing water basins.',
  'Avoid microwave or oven heating. High heat dehydrates cellular wood moisture.',
  'Never use wire scrubbers or metal abrasive pads that scratch the polished grain.',
];

const CARE_FAQS = [
  {
    q: 'Can I put wooden bowls or roti casseroles in the dishwasher?',
    a: 'Never. Dishwashers subject wood to 70°C+ scalding steam, aggressive alkaline detergent salts, and prolonged submersion. This strips the protective beeswax and causes natural hardwood to warp or develop hairline fissures. Hand washing takes under 30 seconds!',
  },
  {
    q: 'How do I remove bright yellow turmeric (haldi) stains from wood?',
    a: 'Sprinkle coarse sea salt and squeeze fresh lemon juice over the spot. Gently massage with a soft sponge, then leave the piece in bright direct midday sunlight for 1 to 2 hours. Natural ultraviolet rays naturally break down curcumin pigments without damaging timber grain.',
  },
  {
    q: 'Which oil is best for re-hydrating wooden kitchenware at home?',
    a: 'We recommend pure food-grade mineral oil, organic cold-pressed walnut oil, or virgin coconut oil. Avoid standard cooking oils like canola or soybean, which oxidize and develop an unpleasant rancid odor over time.',
  },
  {
    q: 'Are your wooden items safe for hot gravies, dal, and boiling soups?',
    a: 'Yes, absolutely. Our 100% natural oil finish is heat-tolerant and certified food-safe. Furthermore, wood is an exceptional natural insulator that keeps warm meals steaming hot much longer than ceramic or stainless steel, while remaining cool and comfortable to the touch.',
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter posts
  const filteredPosts = useMemo(() => {
    let list = [...BLOG_POSTS];

    if (selectedCategory !== 'All Articles') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.author.name.toLowerCase().includes(q)
      );
    }

    return list;
  }, [selectedCategory, searchQuery]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-14 sm:pb-20 relative overflow-hidden border-b border-[#362215]">
        {/* Warm Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-4 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">Artisan Journal &amp; Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE WOODMEN JOURNAL</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FBF6F0] leading-tight tracking-tight">
            Stories of Timber, Heritage <br />
            <span className="italic font-normal text-amber-300">&amp; Culinary Warmth</span>
          </h1>

          <p className="text-xs sm:text-base text-[#D4C3B4] font-light max-w-2xl mx-auto leading-relaxed">
            Essential care guides, timber science, heirloom recipes, and behind-the-scenes dispatches from the
            400-year-old woodturning cluster of Saharanpur, India.
          </p>
        </div>
      </section>

      {/* Featured Editorial Spotlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 relative z-20 w-full">
        <div className="bg-white rounded-3xl border border-[#EADBCC] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Photo */}
            <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[420px] w-full overflow-hidden bg-[#180E08]">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1E130D]/90 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md border border-white/10">
                EDITOR&apos;S SPOTLIGHT
              </span>
            </div>

            {/* Right Story Details */}
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-stone-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#EFE4D6] text-[#8C5E37] font-bold text-[10px] uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2A180E] leading-tight group-hover:text-amber-800 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-xs sm:text-sm text-stone-600 font-light leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="space-y-1.5 pt-2">
                  {featuredPost.takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#F0E4D7] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#20140D] text-amber-300 font-bold flex items-center justify-center text-xs">
                    MS
                  </div>
                  <div>
                    <strong className="text-xs text-stone-900 block">{featuredPost.author.name}</strong>
                    <span className="text-[10px] text-stone-500 block">{featuredPost.author.role}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredPost)}
                  className="px-4 py-2 rounded-full bg-[#3D2516] hover:bg-[#52331F] text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-md active:scale-95"
                >
                  <span>Read Article</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-4 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#E3D6C8] pb-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {BLOG_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-[#3D2516] text-[#FAF6F0] shadow-md scale-105'
                      : 'bg-white/80 text-[#5C4535] hover:bg-white hover:text-[#2A180E] border border-[#E3D6C8]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles &amp; care guides..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-[#DFD1C2] text-xs text-[#2A180E] placeholder-stone-400 focus:outline-none focus:border-amber-700 shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Main Articles Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        {filteredPosts.length === 0 ? (
          <div className="py-20 text-center max-w-md mx-auto space-y-3 bg-white rounded-3xl p-8 border border-[#EADBCC]">
            <BookOpen className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="font-serif-display text-xl font-bold text-[#2A180E]">No Articles Found</h3>
            <p className="text-xs text-stone-500">
              We couldn&apos;t find any stories matching &ldquo;{searchQuery}&rdquo;. Try another topic or view all articles.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Articles');
              }}
              className="px-5 py-2 rounded-full bg-[#3D2516] text-white text-xs font-bold hover:bg-[#52331F] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#180E08]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[#2A180E] text-[10px] font-bold shadow-sm">
                      {post.category}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-[#180E08]/80 backdrop-blur-md text-amber-300 text-[10px] font-mono">
                      {post.readTime}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-2.5">
                    <div className="text-[11px] text-stone-400 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-amber-700" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2A180E] leading-snug group-hover:text-amber-800 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs text-stone-600 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Strip */}
                <div className="p-6 pt-3 border-t border-[#F5ECE3] flex items-center justify-between">
                  <div className="text-[11px] text-stone-600">
                    <span className="font-bold text-[#2A180E] block">{post.author.name}</span>
                    <span className="text-[10px] text-stone-400 block truncate max-w-[150px]">{post.author.role}</span>
                  </div>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF6F0] hover:bg-[#3D2516] text-[#8C5E37] hover:text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                  >
                    <span>Read Story</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* Quick Care & Maintenance Cheat-Sheet Section */}
      <section className="py-14 sm:py-20 bg-[#FAF4EC] border-t border-[#E8DCCE]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>THE HEIRLOOM CARE GUIDE</span>
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Simple Rules for a Lifetime of Wood Lustre
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B5547] font-light">
              Solid seasoned timber is living, breathing nature. Here is the daily checklist to keep your bowls and casseroles in prime condition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* The Do's */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/80 border border-emerald-200 space-y-4">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                <span>WHAT TO DO (BEST PRACTICES)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-emerald-950 font-light">
                {CARE_DOS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-emerald-700 shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Don'ts */}
            <div className="p-6 sm:p-8 rounded-3xl bg-rose-50/80 border border-rose-200 space-y-4">
              <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
                <AlertTriangle className="w-5 h-5 text-rose-700" />
                <span>WHAT TO AVOID (CRITICAL)</span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-rose-950 font-light">
                {CARE_DONTS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-rose-700 shrink-0">✗</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#E8DCCE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Frequently Asked Care Questions
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B5547] font-light">
              Clear answers on haldi stain removal, food compatibility, and dishwasher warnings.
            </p>
          </div>

          <div className="space-y-3.5">
            {CARE_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#FAF6F0] border border-[#EADBCC] shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#2A180E] hover:text-amber-800 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-800' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t border-[#EADBCC]/60 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Box */}
      <section className="py-14 sm:py-20 bg-[#1E130D] text-white border-t border-[#362215] relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4 relative z-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 font-bold block">
            THE SLOW LIVING GAZETTE
          </span>
          <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#FAF3EB]">
            Join 12,000+ Connoisseurs of Handcrafted Living
          </h2>
          <p className="text-xs sm:text-sm text-[#D4C3B4] font-light max-w-lg mx-auto">
            Receive monthly artisan dispatches, seasonal timber recipes, and private early access to limited edition carving drops.
          </p>

          {subscribed ? (
            <div className="p-4 rounded-2xl bg-emerald-900/60 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm font-semibold max-w-md mx-auto">
              ✓ Welcome to Woodmen Journal. Check your inbox for our Heritage Wood Guide!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-xs text-white placeholder-stone-400 focus:outline-none focus:border-amber-400 shadow-inner"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-xs whitespace-nowrap hover:scale-105 active:scale-95 transition-all shadow-lg"
              >
                Subscribe Free
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <TrustBar />

      {/* Article Reading Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#EADBCC] shadow-2xl relative">
            {/* Close Button */}
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 border border-stone-200 hover:bg-stone-100 flex items-center justify-center text-stone-700 transition-colors shadow-sm"
              aria-label="Close article"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full bg-[#180E08]">
              <Image
                src={activeArticle.image}
                alt={activeArticle.title}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 text-amber-300 text-xs font-bold backdrop-blur-md border border-white/10">
                {activeArticle.category}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-3 text-xs text-stone-500">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
                <span>•</span>
                <span className="font-semibold text-stone-800">{activeArticle.author.name}</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#2A180E] leading-tight">
                {activeArticle.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-[#8C5E37]">
                {activeArticle.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light">
                {activeArticle.excerpt}
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0] border border-[#EADBCC] space-y-2.5">
                <strong className="text-xs uppercase tracking-wider text-[#2A180E] font-bold block">
                  Key Artisan Takeaways:
                </strong>
                {activeArticle.takeaways.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F0E4D7] flex items-center justify-between">
                <Link
                  href="/products"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded-full bg-[#3D2516] hover:bg-[#52331F] text-white text-xs font-bold transition-all shadow-md"
                >
                  Explore Handcrafted Collection
                </Link>

                <button
                  onClick={() => setActiveArticle(null)}
                  className="text-xs font-bold text-stone-500 hover:text-stone-800"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
      <CheckoutModal />
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => (window.location.href = `/products/${p.id}`)}
      />
      <FloatingWhatsApp />
    </div>
  );
}
