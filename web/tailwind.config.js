/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Map directly to project-wide CSS variables
        abaBlue: "hsl(var(--main))",
        abaOrange: "hsl(var(--main-two))",
        abaGreen: "hsl(var(--main-three))",
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          150: "#e2e8f0",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          850: "var(--neutral-700)",
          900: "var(--neutral-900)",
        }
      },
      fontFamily: {
        // Map back to Inter to match the project's native typography and headers
        sans: ["Inter", "sans-serif"],
        heading: ["Inter", "sans-serif"],
      },
    },
  },
  corePlugins: {
    preflight: false, // Prevent Tailwind reset from overriding Bootstrap styles
  },
  plugins: [],
}
