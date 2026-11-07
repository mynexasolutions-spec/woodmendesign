export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'Wood Care & Restoration' | 'Artisan Heritage & Sourcing' | 'Kitchen Styling & Hosting' | 'Health & Non-Toxic Living';
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  badge?: string;
  featured?: boolean;
  takeaways: string[];
}

export const BLOG_CATEGORIES = [
  'All Articles',
  'Wood Care & Restoration',
  'Artisan Heritage & Sourcing',
  'Kitchen Styling & Hosting',
  'Health & Non-Toxic Living',
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    slug: 'why-sheesham-makes-the-best-roti-casseroles',
    title: "Why Indian Sheesham (Rosewood) Makes the World's Best Roti Casseroles",
    subtitle: 'The physics of steam, thermal equilibrium, and why traditional wood outclasses steel containers.',
    excerpt: 'Stainless steel and plastic boxes trap condensation, turning hot phulkas soggy in minutes. Discover how seasoned Sheesham hardwood naturally breathes—locking in radiant warmth while absorbing excess vapor.',
    category: 'Artisan Heritage & Sourcing',
    readTime: '5 min read',
    date: 'November 5, 2026',
    author: {
      name: 'Maheshwar Sharma',
      role: '4th-Gen Master Woodturner, Saharanpur',
    },
    image: '/images/about-modern-kitchen.jpg',
    badge: "Editor's Choice",
    featured: true,
    takeaways: [
      'Wood is a natural insulator that preserves heat without burning hands.',
      'Unlike metal, cellular wood pores gently absorb rising steam rather than dripping droplets back onto rotis.',
      'Solid-turned single log construction ensures zero chemical glue vapors in warm food.',
    ],
  },
  {
    id: 'post-2',
    slug: 'the-3-step-re-oiling-ritual',
    title: 'The 3-Step Re-Oiling Ritual: Keeping Wooden Bowls Lustrous for Decades',
    subtitle: 'A simple 5-minute seasonal spa treatment to revive grain depth and liquid resistance.',
    excerpt: 'Just like fine leather or skin, solid hardwood requires occasional hydration. Learn why cold-pressed walnut oil and raw beeswax outperform synthetic polyurethanes, and how to buff out dryness.',
    category: 'Wood Care & Restoration',
    readTime: '4 min read',
    date: 'October 28, 2026',
    author: {
      name: 'Pooja Singhania',
      role: 'Heritage Woodcraft Conservator',
    },
    image: '/images/about-oil-polish.jpg',
    takeaways: [
      'Clean and dry thoroughly before applying any oil.',
      'Always choose non-rancid drying oils like cold-pressed walnut, food-grade mineral, or organic coconut oil.',
      'Let the oil soak for 30 minutes, then buff in circular motions with a lint-free cotton cloth.',
    ],
  },
  {
    id: 'post-3',
    slug: 'zero-microplastics-kitchen-case',
    title: 'Zero Microplastics: The Urgent Health Case for Ditching Plastic & Melamine',
    subtitle: 'Why switching from plastic cutting boards to seasoned hardwood protects your family from endocrine toxins.',
    excerpt: 'Recent laboratory studies reveal that everyday plastic chopping boards shed up to 50,000 microplastic fragments into food every year. Discover why solid hardwood possesses natural antibacterial properties.',
    category: 'Health & Non-Toxic Living',
    readTime: '6 min read',
    date: 'October 19, 2026',
    author: {
      name: 'Dr. Ananya Varma',
      role: 'Environmental Health Researcher',
    },
    image: '/images/warmth-kitchen.jpg',
    takeaways: [
      'Polyethylene and melamine boards release microplastics when sliced by serrated blades.',
      'Acacia and Sheesham contain natural tannins and lignins that naturally suppress bacterial colonization.',
      'End-grain and edge-grain solid boards preserve knife edges, staying smooth for decades.',
    ],
  },
  {
    id: 'post-4',
    slug: 'turmeric-stain-removal-sunlight-lemon',
    title: 'Turmeric vs. Timber: The Sunlight & Lemon Secret to Erasing Curry Stains',
    subtitle: 'An ancient, chemical-free technique that naturally bleaches curcumin out of wooden utensils.',
    excerpt: 'Don’t panic when haldi leaves a vivid golden hue on your favorite sheesham spatula or bowl. The sun’s natural UV rays break down curcumin molecules in under two hours without harming the wood grain.',
    category: 'Wood Care & Restoration',
    readTime: '3 min read',
    date: 'October 12, 2026',
    author: {
      name: 'Kavita Rao',
      role: 'Culinary Historian & Cookbook Author',
    },
    image: '/images/prod-masala-box.jpg',
    takeaways: [
      'Apply a paste of coarse sea salt and fresh lemon juice over the turmeric spot.',
      'Gently rub in with a soft cellulose sponge—never use steel wool.',
      'Expose to bright natural midday sunlight for 90 minutes, then re-condition with coconut oil.',
    ],
  },
  {
    id: 'post-5',
    slug: 'styling-festive-grazing-table',
    title: 'Styling the Festive Grazing Table: Acacia Boards, Trays & Pedestal Cake Stands',
    subtitle: 'How to layer natural timber tones with brass accents and crisp linen for unforgettable banquets.',
    excerpt: 'From Diwali mithai arrangements to sourdough charcuterie boards, top Indian food stylists reveal how elevation, grain contrasts, and raw wood platters transform any dinner party into an artisan centerpiece.',
    category: 'Kitchen Styling & Hosting',
    readTime: '5 min read',
    date: 'September 30, 2026',
    author: {
      name: 'Rohan Deshmukh',
      role: 'Banquet Stylist & Culinary Director',
    },
    image: '/images/occasion-festive.jpg',
    takeaways: [
      'Create visual height using pedestal cake stands and tiered risers.',
      'Mix rich dark Sheesham trays with lighter Acacia bowls to highlight organic contrast.',
      'Garnish directly on seasoned wood with whole spices, cinnamon sticks, and edible leaves.',
    ],
  },
  {
    id: 'post-6',
    slug: 'inside-timber-seasoning-yard',
    title: 'Inside the Timber Seasoning Yard: Why 90-Day Air Curing Matters More Than Fast Kilns',
    subtitle: 'The patient science of wood relaxation, moisture equilibrium, and crack-free durability.',
    excerpt: 'Rushing green logs through fast industrial drying kilns creates internal wood stress, causing lids to warp when exposed to kitchen steam. Take an inside tour of Saharanpur’s open-air air-curing yards.',
    category: 'Artisan Heritage & Sourcing',
    readTime: '7 min read',
    date: 'September 15, 2026',
    author: {
      name: 'Maheshwar Sharma',
      role: '4th-Gen Master Woodturner, Saharanpur',
    },
    image: '/images/about-timber-seasoning.jpg',
    takeaways: [
      'Wood must achieve moisture equilibrium below 12% to resist seasonal contraction.',
      'Cross-stacked seasoning allows gentle northern breezes to draw out moisture without cell collapse.',
      'Patiently cured timber has a memory that stays flat and tight across monsoon and winter.',
    ],
  },
];

