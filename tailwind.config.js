/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'breakfastMenu': '#f0c38d',
        'pasteMenu': '#f5f5f5',
        'pizzaMenu': '#e59b4e',
        'coffeeMenu': '#6fc89b',
        'cocktailsMenu': '#252b33',
      },
      letterSpacing: {
        widest: '.45em'

      },
      backgroundImage: {
        'hero-pattern': "url('./assets/images/breakfast.PNG')",
      }
    },
  },
  plugins: [],
}

