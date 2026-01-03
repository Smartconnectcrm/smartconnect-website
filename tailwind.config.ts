const config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: {
            text: "#1f2937",     // slate-800
            bg: "#ffffff",
            muted: "#e5e7eb",    // gray-200
            link: "#003366",
            border: "#e5e7eb",
          },
          dark: {
            text: "#e5e7eb",     // gray-200
            bg: "#020617",       // slate-950
            muted: "#334155",    // slate-700
            link: "#38bdf8",     // sky-400
            border: "#1e293b",   // slate-800
          },
        },
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
}

export default config
