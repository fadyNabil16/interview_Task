/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
          bdarkgray: "#edededff",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  safelist: ["bg-bgc-bred", "bg-bgc-bgreen", "bg-bgc-bgray", "bg-bgc-byellow"],
};
