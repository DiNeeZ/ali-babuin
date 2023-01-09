/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      small: '320px',
      mobile: '640px',
      tablet: '960px',
      desktop: '1280px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        mobile: '2rem',
        tablet: '4rem',
        desktop: '5rem'
      }
    },
    extend: {
      fontFamily: {
        catamaran: ['Catamaran', 'sans-serif']
      }
    }
  },
  plugins: []
};
