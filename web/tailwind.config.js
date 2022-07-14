module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#141414',
          200: '#1F1F1F',
          300: '#333333',
          400: '#3c3c3c',
          10: '#ffffff',
          20: '#cbcbcb',
          30: '#afafaf'
        },
        light: {
          100: '#ffffff',
          200: '#f6f6f6',
          300: '#eeeeee',
          10: '#000000',
          20: '#545454', 
          30: '#6b6b6b' 
        },
        yellow: {
          dark: '#bc8b2c',
          light: '#ffc043'
        },
        red: {
          dark: '#ab1300',
          light: '#e11900'
        },
        green: {
          dark: '#03703c',
          light: '#048848'
        },
        blue: {
          default: '#276ef1',
          dark: '#276ef1',
          light: '#276ef1'
        },
        border: {
          dark: '#333333',
          light: '#e2e2e2'
        }
      }
    },
  },
  plugins: [],
}