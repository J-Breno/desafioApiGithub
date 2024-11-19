/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        1251: "1251px",
        902: "902px",
        872: "872px",
      },
    },
  },
  plugins: [],
};
