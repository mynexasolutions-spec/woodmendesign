'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  TreeDeciduous,
  ShieldCheck,
  Hammer,
  Heart,
  Phone,
  CheckCircle2,
  Compass,
  Leaf,
  Scale,
  Award,
  ArrowRight,
  Clock,
  MapPin,
  Flame,
  Droplets
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

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Ethical Sourcing & 90-Day Air Seasoning',
    subtitle: 'Harvested only from mature Indian farm plantations, never wild primary forests.',
    desc: 'Each log of Indian Sheesham, Acacia, and Teak is inspected for density and balanced internal grain rings. Timber is slabbed and air-seasoned in Saharanpur open-air yards for up to 90 days, bringing moisture down below 12% to prevent any future warping, bending, or splitting.',
    image: '/images/about-timber-seasoning.jpg',
    tag: 'Seasoned Hardwood',
  },
  {
    step: '02',
    title: 'Single-Piece Lathe Turning & Contouring',
    subtitle: 'Sculpted from a single seamless solid block without glue lines or industrial joints.',
    desc: 'Using high-speed traditional lathes and hand-sharpened carbon chisels, 4th-generation master woodturners shape each bowl, casserole, and pedestal riser. Artisans read the timber’s natural grain orientation, contouring each rim with velvet-smooth symmetry.',
    image: '/images/craftsmanship-lathe.jpg',
    tag: 'Master Craftsmanship',
  },
  {
    step: '03',
    title: 'Hand-Rubbed Organic Oil & Beeswax Polish',
    subtitle: 'Zero toxic varnishes, lead lacquers, or petroleum-based sealants.',
    desc: 'We reject synthetic high-gloss polyurethanes that peel or leech chemicals. Every culinary piece is polished by hand with pure cold-pressed edible walnut oil and refined organic beeswax. The breathable oil cures deep within the wood pores, highlighting rich caramel hues.',
    image: '/images/about-oil-polish.jpg',
    tag: '100% Food-Safe',
  },
  {
    step: '04',
    title: 'Heirloom Tableware for Modern Living',
    subtitle: 'Built to grace family breakfasts, festive banquets, and daily dinners for generations.',
    desc: 'Tested for everyday temperature shifts and washed easily with mild soapy water. Unlike ceramic that chips or plastic that sheds microplastics, authentic solid wood ages gracefully, gaining a deeper, richer patina and character with every season of shared meals.',
    image: '/images/about-modern-kitchen.jpg',
    tag: 'Lifelong Durability',
  },
];

const WOOD_SPECIES = [
  {
    name: 'Indian Sheesham',
    scientific: 'Dalbergia sissoo (Indian Rosewood)',
    badge: 'Flagship Hardwood',
    color: 'Deep chestnut to dark chocolate with golden honey grain veins',
    characteristics: [
      'Exceptional structural density & hefty, grounded hand-feel',
      'Naturally resistant to termites, moisture shifts, and wood rot',
      'Complex multi-toned grain flows unique to every single piece',
      'The traditional wood of choice for heirloom phulka casseroles and spice caddies',
    ],
  },
  {
    name: 'Solid Acacia Hardwood',
    scientific: 'Acacia arabica (Babool)',
    badge: 'Culinary Master',
    color: 'Warm golden amber with shimmering, chatoyant light reflection',
    characteristics: [
      'Naturally antimicrobial and hygienic for fresh food contact',
      'Gentle on knife edges—won’t dull premium chef blades',
      'High natural oil content that resists drying and liquid absorption',
      'Perfect for deep salad bowls, serving platters, and heavy cutting blocks',
    ],
  },
  {
    name: 'Seasoned Teak & Mango',
    scientific: 'Tectona grandis & Mangifera indica',
    badge: 'Artisan Favorite',
    color: 'Soft caramel, muted olive, and warm buttery tan undertones',
    characteristics: [
      'Plantation-harvested after fruiting life cycle completes',
      'Naturally stable grain that resists warping across climatic extremes',
      'Velvety smooth tactile polish that feels warm to the touch',
      'Ideal for pedestal cake risers, handled breakfast trays, and cheese boards',
    ],
  },
];

const VALUES = [
  {
    icon: Leaf,
    title: 'Zero Microplastics',
    desc: 'Every year, millions of plastic chopping boards and melamine plates shed toxic microplastic particles into hot food. Woodmen solid hardwood is 100% organic, biodegradable, and safe for your family.',
  },
  {
    icon: Heart,
    title: 'Dignified Artisan Guild',
    desc: 'By eliminating commercial middlemen, we channel fair-trade compensation directly to over 40 master woodturning families in Saharanpur, funding apprenticeships, healthcare, and heritage preservation.',
  },
  {
    icon: ShieldCheck,
    title: 'Human-Safe Edible Curing',
    desc: 'No chemical lacquers or petrochemical stains ever touch our timber. We use only human-edible walnut oil and natural forest beeswax, allowing warm rotis and curries to be served safely.',
  },
  {
    icon: Scale,
    title: 'Sustainable Plantation Timber',
    desc: 'We never harvest from wild virgin forests. All wood comes from licensed agroforestry farm plantations. For every mature tree harvested for our crafts, replacement saplings are planted.',
  },
];

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Hero Header */}
      <section className="bg-[#1E130D] text-white pt-24 sm:pt-28 pb-14 sm:pb-20 relative overflow-hidden border-b border-[#362215]">
        {/* Ambient Warm Radial Backlight */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/70 mb-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">About Heritage</span>
          </nav>

          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR HERITAGE &amp; ARTISAN MISSION</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-bold text-[#FBF6F0] leading-tight tracking-tight">
            Rooted in Woodcraft, <br />
            <span className="italic font-normal text-amber-300">Shaped by Generations</span>
          </h1>

          <p className="text-sm sm:text-base text-[#D4C3B4] font-light leading-relaxed max-w-2xl mx-auto">
            From the historic timber lanes of Saharanpur to dinner tables across India, Woodmen Design Corporation
            transforms seasoned natural hardwood into heirloom culinary artifacts built to last generations.
          </p>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 pt-6 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 block">400+</span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider block mt-1">Years Saharanpur Heritage</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 block">40+</span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider block mt-1">Artisan Families Supported</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 block">100%</span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider block mt-1">Solid Seasoned Wood</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-amber-300 block">0%</span>
              <span className="text-xs sm:text-sm text-stone-300 font-medium uppercase tracking-wider block mt-1">Toxic Varnishes / Polyurethane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Split */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-[#DFD1C2] shadow-2xl group">
              <div className="relative aspect-[4/3] w-full bg-[#180E08]">
                <Image
                  src="/images/craftsmanship-artisan.jpg"
                  alt="Master Woodturner at Saharanpur Lathe"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
                    SAHARANPUR ARTISAN GUILD
                  </span>
                  <p className="text-xs sm:text-sm text-stone-200 font-light mt-1">
                    Generational master woodturner shaping a solid sheesham roti casserole with hand-guided chisel.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold block mb-2">
                  THE SAHARANPUR LEGACY
                </span>
                <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] leading-tight">
                  Centuries of Hand-Carved Royalty, Redefined for Modern Homes
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed font-light">
                Nestled along the foothills of the Shivalik range in Uttar Pradesh, Saharanpur has been celebrated
                as India&apos;s woodcarving sanctuary since the Mughal era. For centuries, imperial palaces, courtiers,
                and temples commissioned Saharanpur artisans to sculpt ornate jaali lattice doors, royal thrones, and
                ceremonial feast platters.
              </p>

              <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed font-light">
                <strong>Woodmen Design Corporation</strong> was founded to bridge this timeless craftsmanship with
                clean, ergonomic kitchen design. We eliminated mass-market particle boards and toxic varnishes, returning
                to the authentic integrity of solid timber: seasoned natural Sheesham, durable Acacia, and sustainable Teak.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] space-y-1.5">
                  <TreeDeciduous className="w-5 h-5 text-amber-800" />
                  <h4 className="text-sm sm:text-base font-bold text-[#2A180E]">Single-Block Turning</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light">Carved seamlessly from solid logs—zero glue joints to peel or crack over time.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#EADBCC] space-y-1.5">
                  <ShieldCheck className="w-5 h-5 text-amber-800" />
                  <h4 className="text-sm sm:text-base font-bold text-[#2A180E]">Edible Oil Polished</h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-light">Natural beeswax and cold-pressed walnut oil ensure safe direct food contact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Process: Timber to Table */}
      <section className="py-16 sm:py-24 bg-[#FAF4EC] border-t border-b border-[#E8DCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>THE ARTISAN JOURNEY</span>
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              From Raw Timber to Your Dining Table
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#6B5547] font-light leading-relaxed">
              Every Woodmen piece passes through four meticulous stages of patient seasoning, woodturning, and organic curing before entering your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#EADBCC] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo Stage */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#180E08]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#180E08]/85 text-[#E5A855] text-xs font-bold font-mono tracking-wider backdrop-blur-md border border-white/10">
                      STAGE {item.step}
                    </span>
                    <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-2">
                    <h3 className="font-serif-display text-base sm:text-lg font-bold text-[#2A180E] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#8C5E37]">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-[#F5ECE3] flex items-center justify-between text-xs text-stone-500 font-medium">
                  <span>Saharanpur, UP</span>
                  <span className="text-[#8C5E37] font-bold">100% Handcrafted</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Species Exploration Guide */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
              <span>THE TIMBER CODE</span>
              <span className="w-6 h-[1px] bg-[#8C5E37]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#2A180E] tracking-tight">
              Our Certified Hardwoods
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6B5547] font-light leading-relaxed">
              We never use composite plywood, compressed MDF, or faux laminate wraps. Every product is turned from solid logs of certified Indian timbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {WOOD_SPECIES.map((wood, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#FAF6F0] p-6 sm:p-8 border border-[#EADBCC] flex flex-col justify-between hover:border-[#C49B74] transition-all hover:shadow-lg group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C5E37] text-xs font-bold uppercase tracking-wider">
                      {wood.badge}
                    </span>
                    <TreeDeciduous className="w-5 h-5 text-amber-800" />
                  </div>

                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2A180E]">
                      {wood.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-stone-500 italic block mt-0.5">
                      {wood.scientific}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#EADBCC] text-sm text-[#5C4535]">
                    <strong className="block text-[#2A180E] font-semibold text-xs uppercase tracking-wider mb-0.5">Natural Grain Profile</strong>
                    <span className="font-light">{wood.color}</span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    {wood.characteristics.map((char, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-6 border-t border-[#EADBCC] text-xs text-stone-500 font-light">
                  <span>Sustainably Harvested</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability & Values Manifesto */}
      <section className="py-16 sm:py-24 bg-[#1F140D] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E5A855] font-bold mb-2">
              <span className="w-6 h-[1px] bg-[#E5A855]/50" />
              <span>OUR GUIDING PRINCIPLES</span>
              <span className="w-6 h-[1px] bg-[#E5A855]/50" />
            </div>
            <h2 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#FAF3EB] tracking-tight">
              A Healthier Kitchen, A Sustained Craft
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#D4C3B4] font-light leading-relaxed">
              We measure our success not just by the beauty of our woodcraft, but by the health of the families who dine from it and the prosperity of the craftspeople who turn it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-[#291B12] border border-[#3E2719] space-y-3.5 hover:border-amber-400/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 text-[#E5A855] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-display text-lg font-bold text-white">
                    {val.title}
                  </h3>
                  <p className="text-xs text-[#C4B2A3] leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct Artisan Dial & Custom Commission Box */}
      <section className="py-14 sm:py-18 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#2D1B11] via-[#24160E] to-[#180E08] text-white border-2 border-amber-400/40 shadow-2xl text-center space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-amber-300 font-bold block">
              DIRECT ARTISAN DESK • SAHARANPUR, INDIA
            </span>

            <h3 className="font-serif-display text-2xl sm:text-4xl font-bold text-[#FAF3EB]">
              Speak Directly with Our Master Woodcrafter
            </h3>

            <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
              Have a custom dining set requirement, desire custom logo laser engraving, or seeking advice on natural wood maintenance? Our lead artisan is available via direct phone and WhatsApp.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9720975271"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Craftsman: 9720975271</span>
              </a>

              <a
                href="https://wa.me/919720975271?text=Hello%20Woodmen,%20I%20have%20an%20inquiry%20about%20your%20handcrafted%20wooden%20pieces."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-amber-200/90 font-medium">
              <span>✓ Direct Artisan Pricing</span>
              <span>✓ 100% Solid Certified Timber</span>
              <span>✓ Pan-India Safe Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Trust Bar */}
      <TrustBar />

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
