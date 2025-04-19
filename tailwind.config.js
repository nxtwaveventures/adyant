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
                primary: {
                    light: '#4b6cb7',
                    dark: '#182848',
                }
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(to right, #4b6cb7, #182848)',
                'gradient-primary-vertical': 'linear-gradient(to bottom, #4b6cb7, #182848)',
            },
        },
    },
    plugins: [],
} 