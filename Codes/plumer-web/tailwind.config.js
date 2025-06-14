/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
        secondary: "#ff9900",
        dark: "#333333",
        light: "#f5f5f5",
      },
    },
  },
  plugins: [],
}
