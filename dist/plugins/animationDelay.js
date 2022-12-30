const plugin = require("tailwindcss/plugin");

// exemplo criando classes dinamicas
const animationDelay = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      },
      {
        values: theme("animationDelay"),
      }
    );
  },
  {
    theme: {
      animationDelay: {
        100: "1000ms",
        200: "2000ms",
        300: "3000ms",
        400: "4000ms",
        500: "5000ms",
        600: "6000ms",
        700: "7000ms",
        800: "8000ms",
        900: "9000ms",
        1000: "10000ms",
      },
    },
  }
);

module.exports = animationDelay;
