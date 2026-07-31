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
        daisyui
    ],

    daisyui: {
        themes: [
        {
            suiTheme: {
                "primary": "#056839",           // primary base
                "primary-focus": "#034224",     // drimary dark (for hover)
                "primary-content": "#ffffff",   // text color for primary button
                "secondary": "#8A5F3C",         // secondary base
                "secondary-focus": "#593C25",   // secondary dark
                "secondary-content": "#ffffff", 
                "accent": "#3C8B60",            // primary mid
                "neutral": "#212523",           // neutral text
                "base-100": "#F8F9F6",          // main background color for website
                "base-200": "#EFECE6",          // main background color for card
                "base-300": "#D8D5CD",          // border color
            },
        },
        ],
    },
};

export default config;