/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        dimgray: {
          "100": "#5b5b5b",
          "200": "#562727",
        },
        gainsboro: {
          "100": "#e5e5e5",
          "200": "#d9d9d9",
        },
        brown: "#800020",
        gray: "#fdfdfd",
        darkgray: {
          "100": "#9c9c9c",
          "200": "#9a9a9a",
          "300": "#999",
        },
        royalblue: "#4169e1",
        whitesmoke: {
          "100": "#f1ebeb",
          "200": "#eaeaea",
        },
        darkorange: {
          "100": "#ff8e26",
          "200": "#fb9600",
        },
        darkslategray: {
          "100": "#424242",
          "200": "#2e2e2e",
        },
      },
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "51xl": "70px",
        xl: "20px",
      },
    },
    fontSize: {
      "6xl": "25px",
      xl: "20px",
      "6xs": "7px",
      mini: "15px",
      "11xl": "30px",
      "21xl": "40px",
      lg: "18px",
      "5xl": "24px",
      sm: "14px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
