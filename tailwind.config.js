/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '40-r': '40rem',
        '35-r': '30rem',
      },
      height: {
        '40-r': '40rem',
        '35-r': '30rem',
      },
    },
  },
  plugins: [],
}

