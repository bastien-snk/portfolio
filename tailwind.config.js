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
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
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
      },
      spacing: {
        '90': '344px',
      },
      boxShadow: {
        yellow: '0px 0px 17px 0 #F49F0A',
      },
      cursor: {
        none: "none",
      },
      animation: {
      }
    },

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
