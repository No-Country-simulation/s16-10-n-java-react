import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './_ui/NavBar';

const inter = Inter({ subsets: ['latin'] });

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
        <html id='__next' lang="en">
            <body className={inter.className}>

                <NavBar />
                
                {children}
                
                </body>
        </html>
    );
}
