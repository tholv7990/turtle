module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1e1e1e',
          200: '#252526',
          300: '#333333',
          400: '#3c3c3c',
          10: '#e5e5e5',
          20: '#838d9b',
          30: '#67707b'
        },
        light: {
          100: '#ffffff',
          200: '#f5f5f5',
          300: '#e5e5e5',
          10: '#2c2c2c',
          20: '#4b4b4b', 
          30: '#6f6f6f' 
        },
        yellow: {
          dark: '#d2a700',
          light: '#e78619'
        },
        red: {
          dark: '#c9252d',
          light: '#b20002'
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