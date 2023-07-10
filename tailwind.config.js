module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        medium: '1200px'
      }
    },
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif'],
      'display': ['Custom Font', 'Other Font'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
