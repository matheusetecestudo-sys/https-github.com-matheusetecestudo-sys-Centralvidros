/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#065f46',
                    secondary: '#064e3b',
                    accent: '#10b981',
                    whatsapp: '#16a34a',
                    light: '#f0fdf4',
                },
                neutral: {
                    main: '#020617',
                    text: '#334155',
                }
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
