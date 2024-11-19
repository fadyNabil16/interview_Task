/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cairo: ["Cairo", "sans"],
    },
    extend: {
      colors: {
        bgc: {
          bgreen: "#36b500ff",
          bred: "#f50004ff",
          bgray: "#fafafaff",
          byellow: "#fabc02ff",
        },
      },
    },
  },
  plugins: [],
};
