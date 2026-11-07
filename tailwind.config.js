/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          50: '#FBF8F5',
          100: '#F5ECE3',
          200: '#EBDBCE',
          300: '#DCC3AD',
          400: '#C59F7C',
          500: '#A67B52',
          600: '#8C5E37',
          700: '#6E4526',
          800: '#4D2F1A',
          900: '#2A1A10',
          950: '#1A1009',
        },
        gold: {
          400: '#F2C17D',
          500: '#E5A855',
          600: '#CB8C3B',
          700: '#A96E25',
        },
        parchment: {
          light: '#FAF6F0',
          DEFAULT: '#F5EFEB',
          dark: '#EAE1D6',
        }
      },
      fontFamily: {
        serif: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

