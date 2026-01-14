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
        // Concept B: Modern Institutional Color System
        brand: {
          gold: "#D4AF37",
          diamond: "#0EA5E9", // sky-500
          charcoal: "#1A1A1A",
          offwhite: "#FAFAFA",
          nearblack: "#0F0F0F",
          light: {
            text: "#1A1A1A",
            bg: "#FAFAFA",
            muted: "#E5E5E5",
            link: "#0EA5E9",
            border: "#D4D4D4",
          },
          dark: {
            text: "#FAFAFA",
            bg: "#0F0F0F",
            muted: "#404040",
            link: "#0EA5E9",
            border: "#262626",
          },
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        18: "4.5rem",   // 72px
        22: "5.5rem",   // 88px
        26: "6.5rem",   // 104px
        30: "7.5rem",   // 120px
        34: "8.5rem",   // 136px
        38: "9.5rem",   // 152px
        42: "10.5rem",  // 168px
        46: "11.5rem",  // 184px
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        "soft-sm": "0 2px 8px rgba(0, 0, 0, 0.04)",
        "soft-md": "0 4px 16px rgba(0, 0, 0, 0.06)",
        "soft-lg": "0 8px 24px rgba(0, 0, 0, 0.08)",
        "soft-xl": "0 12px 32px rgba(0, 0, 0, 0.10)",
        "glow-gold": "0 0 24px rgba(212, 175, 55, 0.3)",
        "glow-diamond": "0 0 24px rgba(14, 165, 233, 0.3)",
      },
      letterSpacing: {
        tighter: "-0.02em",
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-out",
        "slide-up": "slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down": "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

export default config
