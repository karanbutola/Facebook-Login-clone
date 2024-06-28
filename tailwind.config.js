/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Helvetica', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '1px 1px 10px rgba(0,0,0,0.2)',
      },screens: {
        'tablet': '900px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

