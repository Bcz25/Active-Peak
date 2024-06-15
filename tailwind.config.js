/** @type {import('tailwindcss').Config} */
// This is the tailwind configuration file that is used to compile the CSS files.
module.exports = {
  // These content file paths are used to compile the CSS files.
  content: ["./public/**/*.{html,js,hbs,handlebars}",
    "./src/**/*.{html,js,hbs,handlebars}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  // These plugins are used to compile the CSS files.
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'),
  ],
};
