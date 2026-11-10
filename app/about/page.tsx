'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Sparkles,
  TreeDeciduous,
  ShieldCheck,
  Heart,
  Phone,
  CheckCircle2,
  Leaf,
  Scale,
  ArrowRight,
  MapPin,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrustBar from '@/components/TrustBar';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import SearchModal from '@/components/SearchModal';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { PRODUCTS } from '@/data/products';

const STATS = [
  { value: '400+', label: 'Years Amroha Heritage' },
  { value: '40+', label: 'Artisan Families Supported' },
  { value: '100%', label: 'Solid Seasoned Wood' },
  { value: '0%', label: 'Toxic Varnishes' },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Ethical Sourcing & 90-Day Air Seasoning',
    subtitle: 'Harvested only from mature Indian farm plantations, never wild primary forests.',
    desc: 'Each log of Indian Sheesham, Acacia, and Teak is inspected for density and balanced internal grain rings. Timber is slabbed and air-seasoned in Amroha open-air yards for up to 90 days, bringing moisture down below 12% to prevent any future warping, bending, or splitting.',
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
    desc: 'By eliminating commercial middlemen, we channel fair-trade compensation directly to over 40 master woodturning families in Amroha, funding apprenticeships, healthcare, and heritage preservation.',
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

/** Small eyebrow label with flanking lines, reused by every section header. */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  const tone = dark ? 'text-[#E5A855]' : 'text-[#8C5E37]';
  const line = dark ? 'bg-[#E5A855]/50' : 'bg-[#8C5E37]/50';
  return (
    <div className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-bold ${tone}`}>
      <span className={`w-6 sm:w-8 h-px ${line}`} />
      <span>{children}</span>
      <span className={`w-6 sm:w-8 h-px ${line}`} />
    </div>
  );
}

export default function AboutPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0]">
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* ───────────── Hero ───────────── */}
      <section className="relative text-white pt-28 sm:pt-36 pb-14 sm:pb-24 overflow-hidden bg-[#160E08]">
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/images/about-hero-bg.jpg"
            alt="Amroha timber yard and heritage woodcraft workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#140C07]/65 via-[#140C07]/50 to-[#140C07]/90" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-amber-500/15 rounded-full blur-[130px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs text-amber-200/90 mb-5" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-medium">About Us</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-[11px] sm:text-xs uppercase tracking-[0.2em] text-amber-300 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage &amp; Artisan Mission
          </span>

          <h1 className="mt-5 font-serif-display text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight drop-shadow-lg">
            Rooted in Woodcraft,
            <br />
            <span className="italic font-normal bg-gradient-to-r from-[#F3C277] via-[#E5A855] to-[#C9842C] bg-clip-text text-transparent">
              Shaped by Generations
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-lg text-[#F3E9DE] leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            From the historic timber lanes of Amroha to dinner tables across India, Woodmen Design Corporation
            transforms seasoned natural hardwood into heirloom culinary artifacts built to last generations.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#E5A855] via-[#DF9D44] to-[#CC882E] text-[#180E09] font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
            >
              <span>Explore Our Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919720975271?text=Hello%20Woodmen,%20I%20would%20like%20to%20know%20more%20about%20your%20craft."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md text-white font-bold text-sm transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>Talk to Our Artisan</span>
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-10 sm:mt-14 max-w-4xl mx-auto rounded-3xl bg-black/45 border border-white/15 backdrop-blur-md shadow-2xl overflow-hidden grid grid-cols-2 md:grid-cols-4">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-3 py-5 sm:py-6 text-center border-white/10 ${
                  i % 2 === 0 ? 'border-r' : ''
                } ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''}`}
              >
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-amber-300 block leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-stone-300 font-semibold uppercase tracking-wider block mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Origin story ───────────── */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image composition */}
            <div className="lg:col-span-6 relative">
              <div className="hidden lg:block absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-2 border-[#E5A855]/40" />
              <div className="relative rounded-3xl overflow-hidden border border-[#DFD1C2] shadow-2xl group">
                <div className="relative aspect-[4/3] w-full bg-[#180E08]">
                  <Image
                    src="/images/craftsmanship-artisan.jpg"
                    alt="Master Woodturner at Amroha Lathe"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#160E08]/80 backdrop-blur-md border border-white/10 text-[#E5A855] text-[11px] font-bold uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    Amroha Artisan Guild
                  </span>
                  <p className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm text-stone-100 font-light leading-relaxed">
                    Generational master woodturner shaping a solid sheesham roti casserole with hand-guided chisel.
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#8C5E37] font-bold flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-[#8C5E37]/60" />
                  The Amroha Legacy
                </span>
                <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#2A180E] leading-tight tracking-tight">
                  Centuries of Hand-Carved Royalty, Redefined for Modern Homes
                </h2>
              </div>

              <p className="border-l-4 border-[#E5A855] pl-4 text-base sm:text-lg text-[#4A362A] leading-relaxed">
                Nestled in western Uttar Pradesh, Amroha has been celebrated as India&apos;s woodcarving sanctuary
                since the Mughal era. For centuries, imperial palaces, courtiers, and temples commissioned Amroha
                artisans to sculpt ornate jaali lattice doors, royal thrones, and ceremonial feast platters.
              </p>

              <p className="text-sm sm:text-base text-[#5C4535] leading-relaxed font-light">
                <strong className="font-semibold text-[#2A180E]">Woodmen Design Corporation</strong> was founded to
                bridge this timeless craftsmanship with clean, ergonomic kitchen design. We eliminated mass-market
                particle boards and toxic varnishes, returning to the authentic integrity of solid timber: seasoned
                natural Sheesham, durable Acacia, and sustainable Teak.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    icon: TreeDeciduous,
                    title: 'Single-Block Turning',
                    desc: 'Carved seamlessly from solid logs—zero glue joints to peel or crack over time.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Edible Oil Polished',
                    desc: 'Natural beeswax and cold-pressed walnut oil ensure safe direct food contact.',
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="p-5 rounded-2xl bg-white border border-[#EADBCC] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  >
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3C277] to-[#C9842C] text-[#2A180E] flex items-center justify-center shadow">
                      <f.icon className="w-5 h-5" />
                    </span>
                    <h4 className="mt-3 text-sm sm:text-base font-bold text-[#2A180E]">{f.title}</h4>
                    <p className="mt-1 text-xs sm:text-sm text-stone-600 font-light leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── Process: timber to table ───────────── */}
      <section className="py-16 sm:py-24 bg-[#F4ECE1] border-y border-[#E8DCCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
            <Eyebrow>The Artisan Journey</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A180E] tracking-tight">
              From Raw Timber to Your Dining Table
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6B5547] font-light leading-relaxed">
              Every Woodmen piece passes through four meticulous stages of patient seasoning, woodturning, and
              organic curing before entering your home.
            </p>
          </div>

          <div className="space-y-14 sm:space-y-20">
            {PROCESS_STEPS.map((item, idx) => {
              const flip = idx % 2 === 1;
              return (
                <div key={item.step} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
                  {/* Photo */}
                  <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-3xl overflow-hidden border border-[#DFD1C2] shadow-xl group">
                      <div className="relative aspect-[4/3] w-full bg-[#180E08]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#160E08]/85 backdrop-blur-md border border-white/10 text-[#E5A855] text-xs font-bold font-mono tracking-wider">
                          STAGE {item.step}
                        </span>
                        <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/95 text-[#2A180E] text-xs font-bold shadow">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
                    <span
                      aria-hidden="true"
                      className="font-serif-display text-7xl sm:text-8xl font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#E5A855]/60 to-[#E5A855]/5 select-none"
                    >
                      {item.step}
                    </span>
                    <h3 className="-mt-3 font-serif-display text-2xl sm:text-3xl font-bold text-[#2A180E] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base font-semibold text-[#8C5E37] leading-snug">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm sm:text-base text-[#5C4535] font-light leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EADBCC] text-xs font-semibold text-[#5C4535]">
                        <MapPin className="w-3 h-3 text-[#8C5E37]" /> Amroha, UP
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#EADBCC] text-xs font-semibold text-[#5C4535]">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> 100% Handcrafted
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Woods ───────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Eyebrow>The Timber Code</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2A180E] tracking-tight">
              Our Certified Hardwoods
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6B5547] font-light leading-relaxed">
              We never use composite plywood, compressed MDF, or faux laminate wraps. Every product is turned from
              solid logs of certified Indian timbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {WOOD_SPECIES.map((wood) => (
              <div
                key={wood.name}
                className="rounded-3xl bg-[#FAF6F0] border border-[#EADBCC] overflow-hidden flex flex-col hover:border-[#C49B74] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 sm:p-7 flex-1 flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-[#EFE4D6] text-[#8C5E37] text-[11px] font-bold uppercase tracking-wider">
                      {wood.badge}
                    </span>
                    <TreeDeciduous className="w-5 h-5 text-amber-800" />
                  </div>

                  <div>
                    <h3 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2A180E]">{wood.name}</h3>
                    <span className="text-xs sm:text-sm text-stone-500 italic block mt-0.5">{wood.scientific}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#EADBCC] text-sm text-[#5C4535]">
                    <strong className="block text-[#2A180E] font-semibold text-xs uppercase tracking-wider mb-0.5">
                      Natural Grain Profile
                    </strong>
                    <span className="font-light">{wood.color}</span>
                  </div>

                  <div className="space-y-2.5">
                    {wood.characteristics.map((char) => (
                      <div key={char} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span>{char}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-[#EADBCC] flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>Sustainably Harvested</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── Values ───────────── */}
      <section className="py-16 sm:py-24 bg-[#1A100A] text-white relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-amber-500/10 blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-700/10 blur-[110px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <Eyebrow dark>Our Guiding Principles</Eyebrow>
            <h2 className="mt-3 font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF3EB] tracking-tight">
              A Healthier Kitchen, A Sustained Craft
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D4C3B4] font-light leading-relaxed">
              We measure our success not just by the beauty of our woodcraft, but by the health of the families who
              dine from it and the prosperity of the craftspeople who turn it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="relative p-6 rounded-3xl bg-gradient-to-b from-[#2B1C12] to-[#22150D] border border-[#3E2719] hover:border-amber-400/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute top-3 right-4 font-serif-display text-5xl font-bold text-white/5 select-none">
                    0{idx + 1}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F3C277] to-[#C9842C] text-[#2A180E] flex items-center justify-center shadow-lg shadow-black/30">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="mt-4 font-serif-display text-lg font-bold text-white">{val.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#C4B2A3] leading-relaxed font-light">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────────── Contact the artisan ───────────── */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#2D1B11] via-[#24160E] to-[#180E08] text-white border border-amber-400/30 shadow-2xl text-center space-y-5">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-48 bg-amber-500/20 blur-[90px] pointer-events-none" />

            <span className="relative text-xs uppercase tracking-[0.25em] text-amber-300 font-bold block">
              Direct Artisan Desk • Amroha, India
            </span>

            <h3 className="relative font-serif-display text-3xl sm:text-4xl font-bold text-[#FAF3EB] leading-tight">
              Speak Directly with Our Master Woodcrafter
            </h3>

            <p className="relative text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-light leading-relaxed">
              Have a custom dining set requirement, desire custom logo laser engraving, or seeking advice on natural
              wood maintenance? Our lead artisan is available via direct phone and WhatsApp.
            </p>

            <div className="relative pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
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
                <WhatsAppIcon className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="relative pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-amber-200/90 font-medium">
              <span>✓ Direct Artisan Pricing</span>
              <span>✓ 100% Solid Certified Timber</span>
              <span>✓ Pan-India Safe Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <Footer />
      <CartDrawer />
      <WishlistDrawer />
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
