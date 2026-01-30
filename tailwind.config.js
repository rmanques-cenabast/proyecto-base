/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00135A',
          light: '#002060',
          dark: '#092039',
        },
        accent: '#0051A8',
        success: {
          DEFAULT: '#4CAF50',
          light: '#E8F5E9',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#666666',
        },
        border: '#CCCCCC',
      },
      spacing: {
        'header': '60px',
        'sidebar': '300px',
        'sidebar-item': '284px',
        'sidebar-item-h': '40px',
        'dropdown-item': '260px',
        'dropdown-h': '168px',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'Inter', 'sans-serif'],
        display: ['Roboto Slab', 'serif'],
      },
      boxShadow: {
        'soft': '0px 1px 2px rgba(16, 24, 40, 0.05)',
        'dropdown': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      keyframes: {
        dropdownIn: {
          'from': {
            opacity: '0',
            transform: 'translateY(-6px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
  },
  plugins: [],
}
