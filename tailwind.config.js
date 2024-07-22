/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'DM': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'fondo1': 'url("/fondo1.webp")',
        'fondo2': 'url("/fondo2.webp")',
        'fondo3': 'url("/fondo3.webp")',
        'fondo4': 'url("/fondo4.webp")',
      },
      colors: {
        main: "rgba(var(--main))",
        mainSection: "rgba(var(--mainSection))",
      },
    },
  },
  plugins: [],
};
