/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",],
    // safelist: [
    //   "border-border",
    //   "outline-ring/50",
    //   "bg-background",
    //   "text-foreground",
    // ],
  theme: {
    extend: {
      colors: {
        primary: "#b00746", // Amrita-theme pink
        background: "#f5f5f5", // Light grey
        surface: "#ffffff", // White
        "card-foreground": "#0a0a0a", // Black
        muted: "#6b7280", // Slate grey
        dark: "#000000", // Black
        border: "#ffffff1a", // White with 10% opacity
        ring: "#58595B73",  // Medium gray
        foreground: "#000000", // Black 
      }
    },
  },
  plugins: [],
}