const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // true/false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      }
    },
    colors: {
      theme: {
        white: '#F8F8F8',
        yellow: {
          50: '#F49F0A'
        },
        gray: {
          clear: '#292929',
          dark: '#3D3D3D',
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
