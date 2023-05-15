/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/hero-pattern.jpg')",
      },
      colors: {
        "discovery-orange": "#EA742E",
        "game-blue": "#403EC1",
        "play-green": "#7EC3A9",
        "track-pink": "#EB4983",
      },
    },
  },

  plugins: [],
};
