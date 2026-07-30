import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#056839',
                    dark: '#034224',
                    mid: '#3C8B60',
                    soft: '#E6F0EC',
                },
                secondary: {
                    DEFAULT: '#8A5F3C',
                    dark: '#593C25',
                    mid: '#B38968',
                    soft: '#F5EFEA',
                },
                neutral: {
                    base: '#F8F9F6',
                    card: '#EFECE6',
                    text: '#212523',
                    border: '#D8D5CD',
                }
            },
            fontFamily: {
                serif: ['var(--font-merriweather)', 'serif'],
                sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

export default config;