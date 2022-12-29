/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey_kf: {
          "0%, 100%": {
            tranform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      animation: {
        wavey: "wavey_kf 1000ms linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
  ],
};
