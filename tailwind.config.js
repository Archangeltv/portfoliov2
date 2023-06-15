/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        smm: "376px",
        sm2: "320px",
      },
    },
  },
  plugins: [],
};
