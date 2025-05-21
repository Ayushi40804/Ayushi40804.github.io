// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      keyframes: {
        orbit: {
          "0%": {
            // THIS IS THE CRUCIAL PART:
            // 1. rotate(0deg) - initial rotation of the element container around its parent's center
            // 2. translateY(calc(var(--radius) * -1)) - move the element container UPWARDS by the radius amount
            // 3. rotate(0deg) - initial rotation of the element itself (to keep it upright)
            transform: "rotate(0deg) translateY(calc(var(--radius) * -1)) rotate(0deg)",
          },
          "100%": {
            // 1. rotate(360deg) - full rotation of the element container around its parent's center
            // 2. translateY(calc(var(--radius) * -1)) - keep it at the same radial distance
            // 3. rotate(-360deg) - counter-rotate the element itself to keep the icon upright
            transform: "rotate(360deg) translateY(calc(var(--radius) * -1)) rotate(-360deg)",
          },
        },
      },
      animation: {
        orbit: "orbit var(--duration) linear infinite",
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        }
      }
    }
  },
  plugins: [
    require("tailwindcss-animate")
  ],
};