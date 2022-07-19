module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          50: '#f6f6f6',
          100: '#eeeeee',
          200: '#e2e2e2',
          300: '#cbcbcb',
          400: '#afafaf',
          500: '#6b6b6b',
          700: '#333333',
          800: '#1F1F1F',
          900: '#141414'
        },
       red: {
        50: '#ffefed',
        100: '#fed7d2',
        200: '#f1998e',
        300: '#e85c4a',
        400: '#e11900',
        500: '#ab1300',
        600: '#870f00',
        700: '#5a0a00'
       },
       blue: {
        50: '#eff3fe',
        100: '#d4e2fc',
        200: '#a0bff8',
        300: '#5b91f5',
        400: '#276ef1',
        500: '#1e54b7',
        600: '#174291',
        700: '#102c60'
       },
       yellow: {
        50: '#fffaf0',
        100: '#fff2d9',
        200: '#ffe3ac',
        300: '#ffcf70',
        400: '#ffc043',
        500: '#bc8b2c',
        600: '#996f00',
        700: '#674d1b'
       },
       green: {
        50:'#e6f2ed',
        100: '#addec9',
        200: '#66d19e',
        300: '#06c167',
        400: '#048848',
        500: '#03703c',
        600: '#03582f',
        700: '#10462d'
       },
       black: '#000000',
       white: '#ffffff'
      }
    },
  },
  plugins: [],
}