/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    'src/components/**/*.{js,ts,jsx,tsx,mdx}',
    'src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          whitePalo: '#EDE9E7',
          fullBlack: '#000',
          orageLife: '#FF7253'
        }
      },
      fontFamily: {
        sans: ['var(--font-graphik)', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-blacker-regular)']
      }
    }
  },
  plugins: []
}
