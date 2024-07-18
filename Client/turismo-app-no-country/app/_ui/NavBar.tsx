import { Avatar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
    return (
        <>
            <nav>
                <div className="flex flex-row mx-4 justify-between items-center">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        className="text-primary p-4"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Avatar className="bg-green-500">H</Avatar>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
