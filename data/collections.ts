export interface Collection {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  tagline: string;
}

export const COLLECTIONS: Collection[] = [
  {
    id: 'col-1',
    name: 'Bowls & Serving',
    slug: 'Bowls & Serving',
    image: '/images/cat-bowl.jpg',
    itemCount: 18,
    tagline: 'Salad bowls, snack platters & dipping cups',
  },
  {
    id: 'col-2',
    name: 'Roti Casseroles',
    slug: 'Roti Casseroles',
    image: '/images/cat-casserole.jpg',
    itemCount: 12,
    tagline: 'Warmth-locking wooden phulka & naan boxes',
  },
  {
    id: 'col-3',
    name: 'Masala Boxes',
    slug: 'Masala Boxes',
    image: '/images/cat-masala-box.jpg',
    itemCount: 9,
    tagline: '5 & 7 compartment aromatic spice chests',
  },
  {
    id: 'col-4',
    name: 'Serving Trays',
    slug: 'Serving Trays',
    image: '/images/cat-tray.jpg',
    itemCount: 24,
    tagline: 'Breakfast platters & round cocktail trays',
  },
  {
    id: 'col-5',
    name: 'Cake Stands',
    slug: 'Cake Stands',
    image: '/images/cat-cake-stand.jpg',
    itemCount: 8,
    tagline: 'Pedestal dessert risers & party centerpieces',
  },
  {
    id: 'col-6',
    name: 'Chopping Boards',
    slug: 'Chopping Boards',
    image: '/images/wood-group.jpg',
    itemCount: 14,
    tagline: 'End-grain teak cutting & paddle cheese boards',
  },
  {
    id: 'col-7',
    name: 'Pooja & Decor',
    slug: 'Pooja & Decor',
    image: '/images/products/ganesha-laxmi-tea-light-1.jpg',
    itemCount: 4,
    tagline: 'Ganesha, Laxmi & Ram Darbar tea-light holders',
  },
  {
    id: 'col-8',
    name: 'Kitchen Utensils',
    slug: 'Kitchen Utensils',
    image: '/images/products/wooden-utensil-set-1.jpg',
    itemCount: 1,
    tagline: 'Natural wood spoons, spatulas & holders',
  },
];

