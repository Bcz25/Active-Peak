/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,hbs,handlebars}"], // Include .hbs files for Handlebars
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};
