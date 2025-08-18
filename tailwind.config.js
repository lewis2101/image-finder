/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "base": ["Inter", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "b-12": "0.75rem",
        "b-13": "0.8125rem",
        "b-14": "0.875rem",
        "b-16": "1rem",
        "b-22": "1.375rem",
        "b-24": "1.5rem",
        "b-32": "2rem",
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700"
      },
      lineHeight: {
        "14": "0.875rem",
        "16": "1rem",
        "20": "1.25rem",
        "24": "1.5rem",
        "32": "2rem",
        "full": "100%"
      },
      borderRadius: {
        "6": "6px",
        "12": "12px",
        "20": "20px"
      },
      colors: {
        base: {
          "black": "#000000",
          "gray": "#F1F1F2",
          "white": "#FFFFFF",
        },
        "primary": "#3E97FF",
        "primary-light": "#EEF6FF",
        "primary-active": "#2884EF",
        "error": "#F1416C",
        "gray-100": "#F9F9F9",
        "gray-200": "#F1F1F2",
        "gray-400": "#D8D8E5",
        "gray-500": "#A1A5B7",
        "gray-600": "#7E8299",
        "gray-800": "#3F4254",
        "gray-900": "#181C32"
      },
    },
  },
  plugins: [],
}

