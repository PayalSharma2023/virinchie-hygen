/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '"./src/**/*.{html,js,tsx}"',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        primary: "#1a2a6c",
        secondary: "#4CAF50",
        accent: "#00b4d8",
        dark: "#212529",
        gray: "#6c757d",
        light: "#f8f9fa",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

