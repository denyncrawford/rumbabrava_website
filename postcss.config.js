module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-font-magician': {
      variants: {
          'Montserrat': {
              '300': [],
              '400': [],
              '500': [],
              '600': [],
              '700': []
          }
      },
      foundries: ['google']
 }
  },
}
