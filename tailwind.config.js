/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'open-sans': ['"Open Sans"', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {
      colors: {
        'nav-link-color': '#fff'
      },
      screens: {
        'xs': '400px',
        '2xs': '300px'
      },
      boxShadow: {
        'base': '0px 0px 15px rgb(0 0 0 / 6%)',
      },
      backgroundImage: {
        'cta': "url('../src/assets/images/cta-bg.png')",
        'footer': "url('../src/assets/images/footer-bg.png')",
      },
      gridTemplateColumns: {
        'auto_2': 'repeat(2, max-content)',
      },
    },
  },
  plugins: [],
}
