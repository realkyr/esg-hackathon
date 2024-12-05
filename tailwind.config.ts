import type { Config } from "tailwindcss";
import { withOpacity} from "./utils/colors";

export const PRIMARY_COLOR = "#46A748";
export const SECONDARY_COLOR = "#0E76BE";
export const PRIMARY_RGB = {
  r: 70,
  g: 167,
  b: 72,
}

export const SECONDARY_RGB = {
  r: 14,
  g: 118,
  b: 190,
}


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
      },
      backgroundImage: {
        'gradient-footer': `linear-gradient(99deg, ${withOpacity(SECONDARY_RGB, 0.1)}, ${withOpacity(PRIMARY_RGB, 0.1)})`,
      },
      borderRadius: {
        'landing-section': '0px 0px 0px 90px',
        'leave': '6px 0px 6px 0px',
      },
      height: {
        '100dvh': '100dvh',
      },
      minHeight: {
        '100dvh': '100dvh',
      },
      maxHeight: {
        '100dvh': '100dvh',
      },
    },
  },
  plugins: [],
} satisfies Config;
