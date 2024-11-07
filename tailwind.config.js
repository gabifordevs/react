/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.zinc,
        secondary: colors.blue,
        destructive: colors.red,
        success: colors.green,
      },
    },
  },
  plugins: [],
};
