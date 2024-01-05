const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("autoprefixer"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
  daisyui: {
    logs: false,
    theme: false,
  },
};
