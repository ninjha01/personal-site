const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  important: true,
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
};
