'use client';

import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import SearchNav from '../busqueda/SearchNav';

interface MobileNavProps {
    navList: any;
}

export const MobileNav: React.FC<MobileNavProps> = ({ navList }) => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };
    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                className="text-primary p-4 md:hidden"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <div className="flex flex-col justify-between items-end m-5 w-48">
                    {navList.map((link: any) => (
                        <Link
                            href={link.href}
                            key={link.id}
                            className="text-primary hover:text-secondary p-4 break-words font-medium no-underline"
                            onClick={toggleDrawer(false)}
                        >
                            {link.title}
                        </Link>
                    ))}
                    <SearchNav/>
                </div>
            </Drawer>
        </>
    );
};
