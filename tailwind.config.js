/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js,hbs,handlebars}",
    "./src/**/*.{html,js,hbs,handlebars}",
    "./node_modules/flowbite/**/*.js",
  ], // Include .hbs files for Handlebars
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};
