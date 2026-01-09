import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FDFBF7", 
        ink: "#1A2C35",
        sage: "#8da399",
        gold: "#C5A065",
        clay: "#A65D48", // <--- NOVO: O Terracota (Terra/Barro)
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"], 
        sans: ["var(--font-lato)", "sans-serif"],
      },
      // Vamos criar um espaçamento maior para o "respiro"
      spacing: {
        '32': '8rem', 
        '40': '10rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;