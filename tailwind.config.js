/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#514EF3',
        secondary: '#092C4C',
        iconscolor: '#7E92A2',
      },
    },
  },
  plugins: [],
}

