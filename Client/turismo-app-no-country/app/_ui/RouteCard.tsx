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
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="beach"
                />
                <CardContent>
                    <p className='font-roboto text-2xl m-0'>
                        Ruta de playa (10km)
                    </p>
                    <Rating name="read-only" value={4} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RouteCard;
