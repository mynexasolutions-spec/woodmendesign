export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  product: string;
  quote: string;
  verified: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ankit Sharma',
    location: 'Jaipur, Rajasthan',
    avatar: 'https://ui-avatars.com/api/?name=Ankit+Sharma&background=3d2516&color=e5a855&bold=true',
    rating: 5,
    product: 'Masala Box (5 Compartments)',
    quote: 'Excellent quality and finish. The masala box is both beautiful and very useful in daily cooking.',
    verified: true,
  },
  {
    id: 'test-2',
    name: 'Priya Mehta',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://ui-avatars.com/api/?name=Priya+Mehta&background=4a2e1b&color=e5a855&bold=true',
    rating: 5,
    product: 'Roti Casserole (8.5 Inch)',
    quote: 'Superb craftsmanship! The wooden casserole keeps rotis warm for a long time.',
    verified: true,
  },
  {
    id: 'test-3',
    name: 'Rohan Verma',
    location: 'Bengaluru, Karnataka',
    avatar: 'https://ui-avatars.com/api/?name=Rohan+Verma&background=2c190f&color=e5a855&bold=true',
    rating: 5,
    product: 'Wooden Serving Bowl',
    quote: 'Loved the natural look and durability. Perfect addition to my kitchen.',
    verified: true,
  },
  {
    id: 'test-4',
    name: 'Meera Singhania',
    location: 'New Delhi',
    avatar: 'https://ui-avatars.com/api/?name=Meera+Singhania&background=3d2516&color=e5a855&bold=true',
    rating: 5,
    product: 'Wooden Cake Stand',
    quote: 'The pedestal cake stand was the talk of our anniversary dinner. The Sheesham wood grain is magnificent.',
    verified: true,
  },
  {
    id: 'test-5',
    name: 'Kavita Deshmukh',
    location: 'Pune, Maharashtra',
    avatar: 'https://ui-avatars.com/api/?name=Kavita+Deshmukh&background=4a2e1b&color=e5a855&bold=true',
    rating: 5,
    product: 'Round Serving Tray',
    quote: 'Replaced our synthetic trays with Woodmen. Guests constantly ask where we bought it!',
    verified: true,
  },
  {
    id: 'test-6',
    name: 'Rajesh Kulkarni',
    location: 'Hyderabad, Telangana',
    avatar: 'https://ui-avatars.com/api/?name=Rajesh+Kulkarni&background=3d2516&color=e5a855&bold=true',
    rating: 5,
    product: 'Handcrafted Chakla Belan',
    quote: 'The hand-turned Chakla Belan set is exceptional. Solid seasoned wood with zero wobbles, makes rolling rotis effortless.',
    verified: true,
  },
  {
    id: 'test-7',
    name: 'Sunita Agarwal',
    location: 'Kolkata, West Bengal',
    avatar: 'https://ui-avatars.com/api/?name=Sunita+Agarwal&background=4a2e1b&color=e5a855&bold=true',
    rating: 5,
    product: '2-Tier Serving Stand',
    quote: 'Ordered the 2-tier stand and dipping bowls for family dinners. Packaging was pristine, and the warm wood grain elevated our table instantly.',
    verified: true,
  },
  {
    id: 'test-8',
    name: 'Vikram Malhotra',
    location: 'Chandigarh, Punjab',
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Malhotra&background=2c190f&color=e5a855&bold=true',
    rating: 5,
    product: 'Acacia Cutlery Caddy',
    quote: 'Sturdy build with rich natural wood tones and food-safe finish. Keeps our dining table organized and looks premium.',
    verified: true,
  }
];
