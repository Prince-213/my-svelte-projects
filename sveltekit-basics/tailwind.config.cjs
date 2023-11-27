/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin'), require('flowbite-typography')],

  darkMode: 'class',

  theme: {
    fontFamily: {
      'clash' : ['ClashDisplay-Variable']
    },
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#DFDFDF',
          100: '#FBFBFB',
          200: '#263138',
          300: '#445964',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  }
};

module.exports = config;
