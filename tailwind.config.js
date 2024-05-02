/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Allura: ['var(--allura-font)'],
        Kaushan: ['var(--kaushan-font)'],
        Kalam: ['var(--kalam-font)'],
        Bad: ['var(--bad-font)'], 
        Playfair: ['var(--playfair-font)'],
        Montserrat: ['var(--montserrat-font)'],
        Raleway: ['var(--raleway-font)'],
        Caveat: ['var(--caveat-font)'],
        Poppins: ['var(--poppins-font)'],
        Inter: ['var(--inter-font)'],
        Raleway: ['var(--raleway-font)'],
        Outfit: ['var(--outfit-font)'],
        calligraffitti: ['var(--calli-font)'],
      },
      screens: {
        'xs': '480px',
        // => @media (min-width: 640px) { ... }
      },
      colors:{
        Primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // secondary: "#fff",
      },
    },    
  },
  darkMode: "class",
  plugins: [nextui()],
}

