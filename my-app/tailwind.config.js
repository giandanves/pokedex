module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: "#2B3140",
      gray: "#D1D7E5",
      "black-700": "#4F586E",
      "black-500": "#6E7A96",
      "black-300": "#99A2B8",
      "black-100": "#D1D7E5",
      "black-50": "#EDEEF8",
      bug: "#5BC468",
      dragon: "#FF5775",
      fairy: "#F19AB5",
      fire: "#EF8148",
      ghost: "#7E67F6",
      ground: "#B94D2A",
      normal: "#C5CCDC",
      psychic: "#F5629D",
      steel: "#8698C6",
      dark: "#687289",
      electric: "#F6C94F",
      fighting: "#E3524A",
      flying: "#599BD9",
      grass: "#3F8A84",
      ice: "#78B6FF",
      poison: "#A87EF7",
      rock: "#A3A3AB",
      water: "#77D4F5",
      white: "#FFFFFF",
      primary: "#3156C6",
      success: "#1CBB30",
      danger: "#E3190E",
      lightgrey: "#D1D7E5",
    },
    extend: {
      fontSize: {
        heading: "24px",
        "body-01": "16px",
        "body-02": "14px",
        "body-03": "12px",
        subtitle: "10px",
      },
      fontFamily: { nunito: "Nunito" },
      height: {
        card: "204px",
        avatar: "104px",
        add: "14px",
        fav: "18px",
      },
      width: {
        card: "148px",
      },
      lineHeight: {
        subtitle: "12px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
