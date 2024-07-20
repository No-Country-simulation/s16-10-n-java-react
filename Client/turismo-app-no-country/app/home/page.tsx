import { IconsButtonsList } from '../_ui/IconsButtonsList';
import { ImageCarousel } from '../_ui/ImageCarousel';
import RouteCard from '../_ui/RouteCard';
import { RouteCardContainer } from '../_ui/RouteCardContainer';

const routesSuggestions = [
    'Ruta de montaña',
    'Rutas de playa',
    'Rutas historicas',
    'Para amantes de la comida',
];
const page = () => {
    return (
        <div className="flex flex-col items-center ">
            <IconsButtonsList />
            <div className="max-w-[1400px] h-[250px] w-full ">
                <ImageCarousel />
            </div>
            {routesSuggestions.map((route) => (
                <RouteCardContainer key={route} title={route} />
            ))}
        </div>
    );
};

export default page;
