import { Avatar } from '@mui/material';
import Link from 'next/link';
import { MobileNav } from './MobileNav';
import SearchNav from '../busqueda/SearchNav';
import { Logo } from './Logo';

const headerNavLinks = [
    {
        id: 1,
        title: 'Home',
        href: '/home',
    },
    {
        id: 2,
        title: 'Perfil',
        href: '/perfil',
    },
    {
        id: 3,
        title: 'Mis rutas',
        href: '/rutas',
    },
    {
        id: 4,
        title: 'Premium',
        href: '/premium',
    },
];

const Header = () => {
    return (
        <>
            <nav>
                <div className="flex flex-row mx-4 justify-between items-center">
                    <MobileNav navList={headerNavLinks} />
                    <div className="hidden sm:flex">
                        <div className="hidden sm:flex justify-between items-center gap-x-2">
                            <p className="text-secondary font-medium text-xl m-0">
                                My routes
                            </p>
                            <Logo />
                        </div>
                        <div className="hidden sm:flex justify-between items-center">
                            {headerNavLinks.map((link) => (
                                <Link
                                    href={link.href}
                                    key={link.id}
                                    className="text-primary hover:text-secondary p-4 break-words font-medium no-underline"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <SearchNav />
                    <div className="flex sm:hidden justify-between items-center gap-x-1">
                        <p className="text-secondary font-medium text-lg">
                            My routes
                        </p>
                        <Logo />
                    </div>

                    <Avatar className="bg-secondary">H</Avatar>
                </div>
            </nav>
        </>
    );
};

export default Header;
