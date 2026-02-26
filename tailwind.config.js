/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          white: '#faf9f7',
          cream: '#f5f2ed',
          sand: '#e8e4dc',
          stone: '#c4beb4',
          brown: '#8b7355',
          charcoal: '#3d3632',
          ink: '#1a1a1a',
        },
        accent: {
          gold: '#b8860b',
          'gold-light': '#d4a84b',
          sage: '#6b7b6b',
          'sage-light': '#8f9e8f',
        },
      },
      fontFamily: {
        heading: ['Cormorant Garamond', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'fluid-lg': 'clamp(1.125rem, 2vw, 1.5rem)',
        'fluid-xl': 'clamp(1.5rem, 3vw, 2.25rem)',
        'fluid-2xl': 'clamp(2rem, 4vw, 3rem)',
        'fluid-3xl': 'clamp(2.5rem, 5vw, 4rem)',
        'fluid-4xl': 'clamp(3rem, 7vw, 5rem)',
        'fluid-5xl': 'clamp(3.5rem, 9vw, 6rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
