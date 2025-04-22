/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary colors - Fun and vibrant
                primary: {
                    DEFAULT: 'hsl(280, 100%, 65%)', // Bright purple
                    light: 'hsl(280, 100%, 75%)',
                    dark: 'hsl(280, 100%, 55%)',
                },
                // Secondary colors - Playful and energetic
                secondary: {
                    DEFAULT: 'hsl(45, 100%, 60%)', // Sunny yellow
                    light: 'hsl(45, 100%, 70%)',
                    dark: 'hsl(45, 100%, 50%)',
                },
                // Accent colors - Fun and engaging
                accent: {
                    DEFAULT: 'hsl(160, 100%, 50%)', // Bright teal
                    light: 'hsl(160, 100%, 60%)',
                    dark: 'hsl(160, 100%, 40%)',
                },
                // Background colors - Clean and fresh
                background: 'hsl(0, 0%, 100%)',
                foreground: 'hsl(240, 10%, 20%)',
                card: 'hsl(0, 0%, 100%)',
                'card-foreground': 'hsl(240, 10%, 20%)',
                popover: 'hsl(0, 0%, 100%)',
                'popover-foreground': 'hsl(240, 10%, 20%)',
                primary: 'hsl(280, 100%, 65%)',
                'primary-foreground': 'hsl(0, 0%, 100%)',
                secondary: 'hsl(45, 100%, 60%)',
                'secondary-foreground': 'hsl(240, 10%, 20%)',
                accent: 'hsl(160, 100%, 50%)',
                'accent-foreground': 'hsl(240, 10%, 20%)',
                muted: 'hsl(240, 4%, 95%)',
                'muted-foreground': 'hsl(240, 4%, 45%)',
                border: 'hsl(240, 6%, 90%)',
                input: 'hsl(240, 6%, 90%)',
                ring: 'hsl(280, 100%, 65%)',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, hsl(280, 100%, 65%), hsl(280, 100%, 75%))',
                'gradient-primary-vertical': 'linear-gradient(to bottom, hsl(280, 100%, 65%), hsl(280, 100%, 75%))',
                'gradient-primary-radial': 'radial-gradient(circle, hsl(280, 100%, 65%), hsl(280, 100%, 75%))',
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)',
                'gradient-primary-vertical': 'linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)',
                'gradient-primary-radial': 'radial-gradient(circle at center, hsl(var(--primary)) 0%, hsl(var(--primary)) 100%)',
            },
            animation: {
                'fade-in': 'fade-in 0.5s ease-out',
                'slide-up': 'slide-up 0.5s ease-out',
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'slide-up': {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                }
            }
        },
    },
    plugins: [],
} 