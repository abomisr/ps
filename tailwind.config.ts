import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode:"class",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "light-1":"#efeee9",
        "light-2":"#ffffff",

        "dark-1":"#1d1a2c",
        "dark-2":"#282637",
      }
    },
  },
  plugins: [],
}
export default config
