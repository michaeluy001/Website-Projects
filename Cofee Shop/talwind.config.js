export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "soft-cream": "#FBF3C1",
        "mint-splash": "#64E2B7",
        "lavender-punch": "#DC8BE0",
        "bold-magenta": "#D50B8B",
      },
    },
  },
  plugins: [require("taos/plugin")], // Ensure TAOS is installed properly
  safelist: [
    "!duration-[0ms]",
    "!delay-[0ms]",
    'html.js :where([class*="taos:"]:not(.taos-init))',
  ],
};
