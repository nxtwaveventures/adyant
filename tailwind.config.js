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
                peacock: {
                    blue: '#005C97',    // Deep sapphire blue
                    teal: '#00B4DB',    // Bright teal
                    green: '#1CB5AB',   // Iridescent green
                    gold: '#FFD700',    // Accent gold
                }
            },
            backgroundImage: {
                'gradient-peacock': 'linear-gradient(135deg, #005C97, #00B4DB, #1CB5AB)',
                'gradient-peacock-vertical': 'linear-gradient(to bottom, #005C97, #00B4DB, #1CB5AB)',
                'gradient-peacock-radial': 'radial-gradient(circle at top left, #005C97, #00B4DB, #1CB5AB)',
            },
        },
    },
    plugins: [],
} 