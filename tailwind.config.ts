import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ============================================================================
      // INSTITUTIONAL PREMIUM (SOFT) COLOR SYSTEM
      // ============================================================================
      colors: {
        // Primary: Blue (trust, institutional, procurement)
        "sc-blue": {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6", // Primary blue
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
          950: "#172554",
        },
        // Secondary: Gold (premium, procurement accents)
        "sc-gold": {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#D4AF37", // Primary gold
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
          950: "#422006",
        },
        // Tertiary: Silver (technical, neutral UI accents)
        "sc-silver": {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B", // Primary silver
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#020617",
        },
        // Neutral scale (grayscale)
        "sc-neutral": {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#020617",
        },
        // Accent: Diamond (very light desaturated blue for highlights)
        "sc-diamond": {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9", // Primary diamond
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
          950: "#082F49",
        },
      },

      // ============================================================================
      // TYPOGRAPHY SYSTEM
      // ============================================================================
      fontFamily: {
        // Headings: Sora (geometric sans)
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        // Body: Inter (neutral sans)
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        // Technical/metadata: Space Mono (monospace)
        mono: ["var(--font-space-mono)", "Consolas", "Monaco", "monospace"],
      },
      fontSize: {
        // H1: 48–56px
        "sc-h1": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "sc-h1-mobile": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        // H2: 36–44px
        "sc-h2": ["2.75rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "sc-h2-mobile": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        // H3: 28–32px
        "sc-h3": ["2rem", { lineHeight: "1.25", fontWeight: "600" }],
        "sc-h3-mobile": ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }],
        // H4: 22–24px
        "sc-h4": ["1.5rem", { lineHeight: "1.3", fontWeight: "600" }],
        "sc-h4-mobile": ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        // Subtitle: 18–20px
        "sc-subtitle": ["1.25rem", { lineHeight: "1.4", fontWeight: "500" }],
        // Body: 16px
        "sc-body": ["1rem", { lineHeight: "1.5", fontWeight: "400" }],
        // Small/metadata: 13–14px
        "sc-meta": ["0.875rem", { lineHeight: "1.35", fontWeight: "500" }],
      },

      // ============================================================================
      // SPACING & LAYOUT
      // ============================================================================
      spacing: {
        // Section spacing
        "sc-section-y": "6rem", // 96px desktop
        "sc-section-y-mobile": "4rem", // 64px mobile
        // Component spacing
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "sc-container": "1280px", // 7xl
        "sc-prose": "65ch", // Optimal reading width
      },

      // ============================================================================
      // BORDER RADIUS
      // ============================================================================
      borderRadius: {
        "sc-sm": "0.5rem", // 8px
        "sc-md": "0.75rem", // 12px
        "sc-lg": "1rem", // 16px
        "sc-xl": "1.5rem", // 24px
      },

      // ============================================================================
      // SHADOWS (SOFT, INSTITUTIONAL)
      // ============================================================================
      boxShadow: {
        "sc-sm": "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        "sc-md": "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        "sc-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)",
        "sc-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
        "sc-focus": "0 0 0 3px rgba(59, 130, 246, 0.3)", // Blue focus ring
      },

      // ============================================================================
      // TRANSITIONS (SHORT, SMOOTH)
      // ============================================================================
      transitionDuration: {
        "sc-fast": "150ms",
        "sc-base": "200ms",
        "sc-slow": "250ms",
      },
      transitionTimingFunction: {
        "sc-ease": "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
      },

      // ============================================================================
      // ANIMATIONS (SUBTLE, PROFESSIONAL)
      // ============================================================================
      animation: {
        "sc-fade-in": "scFadeIn 200ms ease-out",
        "sc-slide-up": "scSlideUp 250ms ease-out",
        "sc-scale-in": "scScaleIn 200ms ease-out",
      },
      keyframes: {
        scFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scSlideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scScaleIn: {
          "0%": { transform: "scale(0.98)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
}

export default config
