import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Rating,
} from '@mui/material';

import data from '../data/data';

import { useRouter } from 'next/navigation';
import useTextShortener from '../hooks/useTextShortener';

interface RouteCardProps {
    route: any;
}

const RouteCard: React.FC<RouteCardProps> = ({ route }) => {
    const router = useRouter();
    const handleClick = () => {
        const isRouteExist = data.some((element) => route.id === element.id);

        if (isRouteExist) {
            router.push(`/rutas/${route.id}`);
        } else {
            router.push('/home');
        }
    };

    return (
        <Card className="h-full shadow-lg border-solid sm:border-[2.5px] border-2 border-primary rounded-lg" onClick={handleClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={route.src}
                    alt={route.title}
                    className="w-full sm:h-60 h-40 object-cover"
                />
                <CardContent>
                    <p className="font-roboto text-base m-0">
                        {`${useTextShortener((`${route.title} ${route.distance}`), 15)}`}
                    </p>
                    <Rating name="read-only" value={route.value} readOnly />
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default RouteCard;
