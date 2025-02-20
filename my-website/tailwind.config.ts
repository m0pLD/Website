/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          light: '#3b82f6'
        },
        secondary: {
          DEFAULT: '#059669',
          dark: '#047857',
          light: '#10b981'
        },
        background: '#ffffff',
        foreground: '#111827',
        muted: '#6b7280'
      }
    },
  },
  plugins: [],
};