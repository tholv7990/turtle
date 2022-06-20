module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#0B0E11',
          200: '#181a1f',
          300: '#333333',
          400: '#3c3c3c',
          10: '#fdfdfd',
          20: '#848e9c',
          30: '#67707b'
        },
        light: {
          100: '#ffffff',
          200: '#fafafa',
          300: '#e9ecef',
          10: '#1e2328',
          20: '#737d8d', 
          30: '#6f6f6f' 
        },
        yellow: {
          dark: '#f0b90ob',
          light: '#ecb708'
        },
        red: {
          dark: '#c9252d',
          light: '#CF304A'
        },
        green: {
          dark: '#2f9d78',
          light: '#10cb80'
        },
        blue: {
          default: '#0284ff',
          dark: '#2474e1',
          light: '#1273e6'
        }
      }
    },
  },
  plugins: [],
}