import { FavoriteIconButton } from '@/app/_ui/FavoriteIconButton';
import { ImageCarousel } from '@/app/_ui/ImageCarousel';
import { RouteDataDetails } from '@/app/_ui/RouteDataDetails';
import { RouteTimeLine } from '@/app/_ui/RouteTimeLine';
import Map from '@/app/map';

import data from '@/app/data/data';

import StarIcon from '@mui/icons-material/Star';



const page = async ({ params }: { params: { routeid: number } }) => {
    const { routeid } = params;

    const route = data.find((route) => route.id == routeid);

    if (!route) {
        return <div>Ruta no encontrada</div>;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center w-full max-w-[1400px] h-full px-7">
                    <div className="flex flex-col justify-center items-start w-full">
                        <div className="flex justify-start items-center gap-x-2">
                            <h1 className="font-semibold text-base m-0">
                                {route.title}
                            </h1>

                            <div className="flex justify-start items-center">
                                <p className="font-thin text-xs text-secondary m-0">
                                    {route.value}
                                </p>
                                <StarIcon className="text-yellow-400" />
                            </div>
                        </div>
                        <h2 className="font-normal text-secondary text-sm mb-4 mt-0">
                            {route.subTitle}
                        </h2>
                    </div>

                    <div className="relative w-full">
                        <FavoriteIconButton />
                        <ImageCarousel slides={route.slides}/>
                    </div>

                    <p>{route.description}</p>
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-x-4 w-full h-full mb-2">
                        <div className="flex flex-col gap-y-4 w-full h-full mb-4">
                            <RouteDataDetails {...route} />
                            <RouteTimeLine places={route.places} />
                        </div>
                        <div className="flex w-full h-full max-w-[400px] sm:max-w-full sm-min-w-full ">
                            <Map places={route.places} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
