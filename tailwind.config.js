/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7f7",
          100: "#e6eceb",
          600: "#355c5a",
          700: "#274240",
          900: "#142624"
        },
        accent: "#b88a44"
      },
      boxShadow: {
        soft: "0 20px 45px -25px rgba(20, 38, 36, 0.25)"
      }
    }
  },
  plugins: []
};
