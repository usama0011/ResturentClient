module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary-color': "#2074BB"
      },
      fontFamily: {
        'Snel-BT': "'Snel BT', serif",
        'Roboto': "Roboto, serif"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
