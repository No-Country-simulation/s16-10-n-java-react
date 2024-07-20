import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Rating,
    Typography,
} from '@mui/material';

interface RouteCardProps {}

const RouteCard: React.FC<RouteCardProps> = () => {
    return (
        <Card  className='h-full shadow-md'>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="beach"
                    className='w-full max-h-32'
                />
                <CardContent>
                    <p className='font-roboto text-base m-0'>
                        Ruta de playa (10km)
                    </p>
                    <Rating name="read-only" value={4} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RouteCard;
