/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: 'hsl(var(--color-primary))',
                secondary: 'hsl(var(--color-secondary))',
                success: 'hsl(var(--color-success))',
                warning: 'hsl(var(--color-warning))',
                purple: 'hsl(270, 60%, 60%)',
                orange: 'hsl(25, 95%, 53%)',
                background: 'hsl(var(--color-background))',
                'background-secondary': 'hsl(var(--color-background-secondary))',
                base: 'hsl(var(--color-base))',
                muted: 'hsl(var(--color-muted))',
                neutral: 'hsl(var(--color-neutral))',
            },
            fontFamily: {
                sans: ['Figtree', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-down': 'slideDown 0.4s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
                'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                'gradient-x': 'gradientX 3s ease infinite',
                'loader-pulse': 'loaderPulse 1.5s ease-in-out infinite',
                'loader-bar': 'loaderBar 1.2s ease-in-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                gradientX: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                loaderPulse: {
                    '0%, 100%': { opacity: '1', transform: 'scale(1)' },
                    '50%': { opacity: '0.6', transform: 'scale(0.95)' },
                },
                loaderBar: {
                    '0%': { width: '0%' },
                    '50%': { width: '70%' },
                    '100%': { width: '100%' },
                },
            },
            transitionDuration: {
                '400': '400ms',
            },
            scale: {
                '102': '1.02',
            },
            spacing: {
                '4.5': '1.125rem',
                '18': '4.5rem',
            },
        },
    },
    plugins: [],
}