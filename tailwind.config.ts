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
          DEFAULT: "#FBB03B",
          50: "#FFF9EF",
          100: "#FEF0DB",
          200: "#FDE0B3",
          300: "#FDD08B",
          400: "#FCC063",
          500: "#FBB03B",
          600: "#F99A05",
          700: "#C27804",
          800: "#8B5603",
          900: "#543402",
          950: "#382301",
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
