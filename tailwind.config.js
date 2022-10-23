/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    screens: {
      'xs':'340px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin:'spin 13s linear infinite'
      }

    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}