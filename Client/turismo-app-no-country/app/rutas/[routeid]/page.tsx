import { FavoriteIconButton } from '@/app/_ui/FavoriteIconButton';
import { ImageCarousel } from '@/app/_ui/ImageCarousel';
import { RouteDataDetails } from '@/app/_ui/RouteDataDetails';
import { RouteTimeLine } from '@/app/_ui/RouteTimeLine';
import Map from '@/app/map';

import StarIcon from '@mui/icons-material/Star';

const page = async ({ params }: { params: { routeid: string } }) => {
    const { routeid } = params;

    return (
        <>
            <div className="flex flex-col items-center h-full">
                <div className="flex flex-col items-center w-full max-w-[1400px] h-full px-7">
                    <div className="flex flex-col justify-center items-start w-full">
                        <div className="flex justify-start items-center gap-x-2">
                            <h1 className="font-semibold text-base m-0">
                                Titulo de la ruta{` ${routeid}`}
                            </h1>

                            <div className="flex justify-start items-center">
                                <p className="font-thin text-xs m-0">4,5</p>
                                <StarIcon className="text-yellow-400" />
                            </div>
                        </div>
                        <h2 className="font-normal text-sm mb-4 mt-0">
                            Subtítulo de la ruta {` ${routeid}`}
                        </h2>
                    </div>

                    <div className="relative w-full">
                        <FavoriteIconButton />
                        <ImageCarousel />
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis quam repudiandae libero commodi, voluptatum
                        in sit corporis laudantium impedit rem quidem. Porro ab,
                        eius impedit itaque sunt sed delectus velit.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-start items-center gap-x-4 w-full h-full mb-2">
                        <div className="flex flex-col gap-y-4 w-full h-full mb-4">
                            <RouteDataDetails />
                            <RouteTimeLine />
                        </div>
                        <div className="flex w-full h-full max-w-[400px] sm:max-w-full sm-min-w-full ">
                            <Map />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
