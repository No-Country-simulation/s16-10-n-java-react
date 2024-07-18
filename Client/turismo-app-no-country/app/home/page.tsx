import { IconsButtonsList } from '../_ui/IconsButtonsList';
import { ImageCarousel } from '../_ui/ImageCarousel';
import RouteCard from '../_ui/RouteCard';
import { RouteCardContainer } from '../_ui/RouteCardContainer';

const page = () => {
    return (
        <div className="flex flex-col items-center">
            <IconsButtonsList />
            <div className="max-w-[1400px] h-[250px] w-full ">
                <ImageCarousel />
            </div>
            <div className='flex flex-col gap-y-4'>
                <RouteCardContainer title="Recomendaciones para ti" />
                <RouteCardContainer title="Invierno" />
                <RouteCardContainer title="Verano" />
                <RouteCardContainer title="Caminata" />
            </div>
        </div>
    );
};

export default page;
