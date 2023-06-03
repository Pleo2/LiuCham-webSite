/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      color: {
        whatEver: {
          whitePalo: '#fffbf6',
          vinoBrow: '#2f1a1e',
          orageLife: '#ff5939',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', ..._fontFamily.sans],
        display: ['var(--font-blacker)'],
      },
    },
  },
  plugins: [],
}
