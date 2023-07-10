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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
