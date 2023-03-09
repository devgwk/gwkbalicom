/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const gwktheme = require('./theme')

module.exports = {

  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  fontFamily: {
    // fontFamily: gwktheme.fontFamily,
    //sans: ['Inter', ...defaultTheme.fontFamily.sans],
    sans: ['Proxima-Nova', ...defaultTheme.fontFamily.sans],
  },
  theme: {
    extend: 
    {
      backgroundImage: {
        'HeroSection1Background': "url('./assets/gwk-bali.jpg')",
      },
      colors:
      { 'yellow 400': '#ecc94b',
        'gray 900': '#171923',
        'gray 200': '#e2e8f0',
        'yellow 500': '#000000',
        'gold 500': '#FFD700',
        white: '#ffffff' },
     fontSize:
      { xs:'0.7rem',
        sm: '0.75rem',
        base: '0.875rem',
        lg: '1rem',
        xl: '1.125rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        '4xl': '1.875rem',
        '5xl': '2.25rem',
        '6xl': '3rem',
        '7xl': '3.75rem',
        '8xl': '4.5rem' },
     borderRadius:
      { none: '0',
        xs: '0.5rem',
        sm: '0.625rem',
        default: '0.6875rem',
        lg: '3.4375rem',
        full: '9999px' }    
    },
  },
  plugins: [],
}
