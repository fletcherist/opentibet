import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#F3F4FB",
          100: "#E8E8F8",
          200: "#C9CAEE",
          300: "#AAACE4",
          400: "#7B7ED5",
          500: "#2E3192",
          600: "#2A2D84",
          700: "#232670",
          800: "#1D1F5D",
          900: "#14153E",
          950: "#000000",
        },
        yellow: {
          50: "#FFFDF0",
          100: "#FFFBDB",
          200: "#FFF5AD",
          300: "#FFF07A",
          400: "#FFE942",
          500: "#FFE100",
          600: "#E6CB00",
          700: "#CCB400",
          800: "#A89500",
          900: "#7A6C00",
          950: "#5C5100",
        },
        red: {
          50: "#FDF2F1",
          100: "#FCE5E4",
          200: "#F8CBC9",
          300: "#F3A9A5",
          400: "#ED7973",
          500: "#DA251C",
          600: "#C7221A",
          700: "#B01E17",
          800: "#951A13",
          900: "#63110D",
          950: "#510E0A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
