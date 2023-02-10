/** @type {import('tailwindcss').Config} */

const breakerColors = {
  breaker: '#493272',
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...breakerColors,
      },
    },
  },
  plugins: [],
}
