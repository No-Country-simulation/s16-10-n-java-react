import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    corePlugins: {
        preflight: false,
    },
    important: '#__next',
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: '#FF8A00',
                secondary: '#206F1E',
                apple:'#34D131',
                turbo: '#FFE500',
                pureRed: '#FF0000',
            },
            fontFamily: {
                roboto:[ 'var(--font-roboto)']
            },
        },
    },
    plugins: [],
};
export default config;
