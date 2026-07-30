import type { Config } from "tailwindcss";
import daisyui from "daisyui";

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
    plugins: [
        require("daisyui")
    ],

    daisyui: {
        themes: [
        {
            suiTheme: {
                "primary": "#056839",           // Primary Base
                "primary-focus": "#034224",     // Primary Dark (untuk hover)
                "primary-content": "#ffffff",   // Warna teks di atas tombol primary
                "secondary": "#8A5F3C",         // Secondary Base
                "secondary-focus": "#593C25",   // Secondary Dark
                "secondary-content": "#ffffff", 
                "accent": "#3C8B60",            // Primary Mid
                "neutral": "#212523",           // Neutral Text
                "base-100": "#F8F9F6",          // Background utama website
                "base-200": "#EFECE6",          // Background untuk card
                "base-300": "#D8D5CD",          // Border color
            },
        },
        ],
    },
};

export default config;