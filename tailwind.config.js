/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js,hbs,handlebars}",
    "./src/**/*.{html,js,hbs,handlebars}"
  ], // Include .hbs files for Handlebars
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};
