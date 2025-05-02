export default {
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow"', "sans-serif"],
        "barlow-condensed": ['"Barlow Condensed"', "sans-serif"],
        bellefair: ['"Bellefair"', "sans-serif"],
      },
    },
    animation: {
      rotate: "rotate 1.5s infinite linear",
    },
    keyframes: {
      rotate: {
        to: {
          transform: "rotate(1turn)",
        },
      },
    },
  },
};
