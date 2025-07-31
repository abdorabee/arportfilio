import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black:{
          DEFAULT:"#000000",
          100:'#000319'
        }
      },
      fontFamily: {
        // Add custom fonts here
        // sans: ['Inter', 'system-ui', 'sans-serif'],
        // mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Add custom font sizes
        // 'xs': ['0.75rem', { lineHeight: '1rem' }],
        // '5xl': ['3rem', { lineHeight: '1.2' }],
      },
      spacing: {
        // Add custom spacing values
        // '18': '4.5rem',
        // '72': '18rem',
        // '84': '21rem',
        // '96': '24rem',
      },
      screens: {
        // Add custom breakpoints
        // 'xs': '475px',
        // '3xl': '1600px',
      },
      borderRadius: {
        // Add custom border radius values
        // 'xl': '0.75rem',
        // '4xl': '2rem',
      },
      boxShadow: {
        // Add custom shadows
        // 'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        // Add custom animations
        // 'fade-in': 'fadeIn 0.5s ease-in-out',
        // 'slide-up': 'slideUp 0.3s ease-out',
        // 'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        // Add custom keyframes for animations
        // fadeIn: {
        //   '0%': { opacity: '0' },
        //   '100%': { opacity: '1' },
        // },
        // slideUp: {
        //   '0%': { transform: 'translateY(100%)' },
        //   '100%': { transform: 'translateY(0)' },
        // },
      },
      backgroundImage: {
        // Add custom background images
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
}

export default config
