/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#173D32',
          dark: '#0e261f',
          light: '#235747',
        },
        charcoal: {
          DEFAULT: '#171B19',
          light: '#252b28',
        },
        beige: {
          DEFAULT: '#E9E1D3',
          light: '#f4efe8',
        },
        cream: {
          DEFAULT: '#F8F7F3',
        },
        gold: {
          DEFAULT: '#C5A36A',
          light: '#d7be92',
          dark: '#a68349',
        },
        sage: {
          DEFAULT: '#A8B5A0',
          light: '#c7d1c1',
          dark: '#7e8e75',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
    },
  },
  plugins: [],
}
