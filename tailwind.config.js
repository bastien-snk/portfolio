const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // true/false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fira-code': ['"Fira Code"']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      orange: colors.orange,
      green: colors.green,
      theme: {
        white: {
          classic: '#F8F8F8',
          glass: '#E4E4E4',
        },
        yellow: {
          F7B23B: '#F7B23B',
          F6AA28: '#F6AA28',
          F49F0A: '#F49F0A',
        },
        gray: {
          250: '#292929',
          200: '#303030',
          150: '#3D3D3D',
          100: '#474747',
          50: '#7A7A7A',
        },
        dev: {
          orange: '#F6AA28',
          white: '#F8F8F8',
          yellow: '#FBD99D',
          green: '#7DCE82',
          blue: '#6A98F0',
          gray: '#C4C4C4',
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
