/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        'rgb-primary': '#2E3440',
        'rgb-secondary': '#3B4252',
        'rgb-accent': '#88C0D0',
        'rgb-text': '#ECEFF4'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 