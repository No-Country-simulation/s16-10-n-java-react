import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

import { CssBaseline } from '@mui/material';
import Header from './_ui/Header';
import Footer from './_ui/Footer';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-roboto',
});

export const metadata: Metadata = {
    title: 'My route',
    description: 'Plataforma de rutas turísticas',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html id="__next" lang="en">
            <CssBaseline/>
            <body className={`${roboto.className} ${roboto.variable} pt-[64px] md:pt-[72px] min-h-screen`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
