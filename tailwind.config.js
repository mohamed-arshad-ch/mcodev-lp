/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2647', // Deep navy blue
          light: '#1A3A5F',
          dark: '#051C38',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E0C158',
          dark: '#B8971F',
        },
        background: {
          DEFAULT: '#F5F5F5', // Off-white
          dark: '#E5E5E5',
        },
      },
    },
  },
  plugins: [],
}

