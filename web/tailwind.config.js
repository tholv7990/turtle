module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1D2733',
          200: '#232D3B',
          300: '#1A232F',
          400: '#3c3c3c',
          10: '#E1E9F5',
          20: '#B9C8E0',
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
          dark: '#FF5972',
          light: '#CF304A'
        },
        green: {
          dark: '#30DEAB',
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