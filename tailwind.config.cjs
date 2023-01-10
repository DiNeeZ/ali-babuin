/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
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
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.25, 0.45, 0.45, 0.95)'
      },
      transitionDuration: {
        '6s': '6000ms'
      }
    }
  },
  plugins: []
};
