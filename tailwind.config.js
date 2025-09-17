/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                rosegold: {
                    DEFAULT: 'var(--primary)',       // #b76e79
                    light: 'var(--primary-light)',   // #f7e6e9
                    dark: 'var(--primary-dark)',     // #9a5963
                },
            },
            borderRadius: { '2xl': '1.25rem' },
        },
    },
    plugins: [],
};
