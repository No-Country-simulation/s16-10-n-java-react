import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import NavBar from './_ui/NavBar';

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
            <body className={`${roboto.className} ${roboto.variable}`}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
