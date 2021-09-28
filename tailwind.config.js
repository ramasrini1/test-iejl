const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins"],
        heading: ["DM Serif Display"],
      },
      colors: {
        black: {
          hakkei: "#1a1a1a",
          DEFAULT: "#000",
        },
        format: {
          background: "#F4F5F5",
          text: "#000000",
          primary: "#91ACB8",
          secondary: "#C75830",
        },
        current: "currentColor",
        white: {
          nav: "#FFFFFF",
          DEFAULT: colors.white,
        },
        gray: colors.blueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        blue: colors.blue,
        aqua: {
          DEFAULT: "#99ced3",
          dark: "#8abbbf",
        },
        navy: {
          light: "#99ced3",
          DEFAULT: "#2f415d",
          dark: "#1d2a3d",
          sky: "#00afffc2",
        },
        purple: colors.purple,
      },
      borderRadius: {
        "5xl": "5rem",
        "10xl": "10rem",
        "20xl": "50%",
      },
      height: {
        110: "28rem",
        120: "32rem",
        135: "36rem",
        150: "40rem",
        200: "60rem",
      },
      width: {
        110: "28rem",
        120: "32rem",
        135: "36rem",
        150: "40rem",
        200: "60rem",
      },
      margin: {
        110: "28rem",
        120: "32rem",
        135: "36rem",
        150: "40rem",
        200: "60rem",
      },
      padding: {
        80: "80px",
        120: "120px",
      },
      fontSize: {
        "heading-1": "70px",
        "heading-2": "60px",
        "heading-3": "40px",
        bold: "20px",
        medium: "15px",
        regular: "17px",
      },
      zIndex: {
        '75': 75,
        '100': 100,
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover']
    }    
  },
  plugins: [
    "gatsby-plugin-postcss",
    // require('@tailwindcss/forms'),
    // "@tailwindcss-neumorphism",
  ],
};
