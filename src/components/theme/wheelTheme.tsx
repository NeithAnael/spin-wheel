export const wheelTheme = {
  title: "Christmas Roulette",
  tagline: "Every spin comes with a surprise.",
  backgroundImage: "/images/bg-xmas2.jpg", 

   // ----- WHEEL -----
wheelOptions: [
  { option: "Try again", weight: 25 },

  { option: "10% OFF any purchase", weight: 12 },
  { option: "$10 OFF", weight: 12 },
  { option: "10% OFF human hair", weight: 5 },

  { option: "Better luck next time", weight: 10 },
  { option: "15% OFF any purchase", weight: 8 },
  { option: "$15 OFF", weight: 8 },
  { option: "15% OFF synthetic hair", weight: 6 },

  { option: "Not today, beauty", weight: 10 },
  { option: "FREE RANDOM GIFT", weight: 5 },
  { option: "$20 OFF", weight: 3 },
  { option: "20% OFF any purchase", weight: 3 },
],
  
  // ----- HEADER/FOOTER -----
  header: {
    bg: "white/10",
    blur: "backdrop-blur-md",
    borderColor: "white/20",
    titleColor: "white",
    titleFontWeight: "600",
    taglineFontWeight: "400",
    taglineColor: "#9c8b53",
  },
  footer: {
    bg: "white/10",
    blur: "backdrop-blur-md",
    borderColor: "white/20",
    textColor: "white/80",
  },

  // ----- FONTS -----
  fonts: {
    titleWeight: "600",
    taglineWeight: "400",
    textFontClass: "font-sans",
  },

  // ----- WHEEL COLORS -----
  wheelColors: {
    backgroundColors: ["#3f3f3f", "#e5e5e5", "#9c8b53", "#ffffff"],
    textColors: ["#ffffff", "#3f3f3f"],
    borderColor: "#222222",
    centerCircleColor: "#3f3f3f",
    pointerColor: "#9c8b53",
  },

  // ----- POPUP -----
  popup: {
    background: "#9c8b53",
    textColor: "#ffffff",
    borderColor: "#ffffff33",
  },

  // ----- BUTTONS -----
  button: {
    background: "#3f3f3f",
    textColor: "#ffffff",
    hoverBackground: "#9c8b53",
  },
};


