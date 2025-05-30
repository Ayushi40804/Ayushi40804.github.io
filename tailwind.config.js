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
        // Existing orbit keyframes (for OrbitingCircles)
        orbit: {
          "0%": {
            transform: "rotate(0deg) translateY(calc(var(--radius) * -1)) rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) translateY(calc(var(--radius) * -1)) rotate(-360deg)",
          },
        },
        // Aurora text keyframes
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        // --- ADD THESE KEYFRAMES FOR ANIMATED GRADIENT TEXT ---
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0%",
          },
        },
        // --- END ANIMATED GRADIENT TEXT KEYFRAMES ---
      },
      animation: {
        // Existing orbit animation (for OrbitingCircles)
        orbit: "orbit var(--duration) linear infinite",
        // Aurora text animation
        aurora: "aurora 1.2s linear infinite",
        // --- ADD THESE ANIMATIONS FOR ANIMATED GRADIENT TEXT ---
        gradient: "gradient 8s linear infinite", // You can adjust the '8s' duration
        // --- END ANIMATED GRADIENT TEXT ANIMATIONS ---
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