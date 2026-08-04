import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { ink: "#141514", muted: "#70736f", line: "#e8e9e6", lime: "#c8f247", canvas: "#f7f8f5" },
      boxShadow: { card: "0 1px 2px rgba(20,21,20,.04), 0 12px 28px rgba(20,21,20,.04)" }
    }
  },
  plugins: []
} satisfies Config;
