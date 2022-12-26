/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  }, daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#7d8bce",

          "secondary": "#4d7ddd",

          "accent": "#27ba89",

          "neutral": "#191820",

          "base-100": "#402B45",

          "info": "#43B9F4",

          "success": "#1DB98D",

          "warning": "#FCE369",

          "error": "#F94424",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
