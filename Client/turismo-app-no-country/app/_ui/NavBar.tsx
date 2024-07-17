import { Avatar, IconButton} from '@mui/material';
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
                        className='text-orange-500 p-4'
                    >
                        <MenuIcon />
                        
                    </IconButton>
                    <h1 className="font-bold text-base">Nav desde ui</h1>
                    <Avatar className='bg-green-500'>H</Avatar>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
