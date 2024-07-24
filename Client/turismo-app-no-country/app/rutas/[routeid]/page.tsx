import { ImageCarousel } from '@/app/_ui/ImageCarousel';
import { RouteDataDetails } from '@/app/_ui/RouteDataDetails';
import StarIcon from '@mui/icons-material/Star';

const page = async ({ params }: { params: { routeid: string } }) => {
    const { routeid } = params;

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center w-full max-w-[1400px] px-7">
                    <div className="flex justify-start items-center gap-3 w-full">
                        <h1 className="font-semibold text-base">
                            Titulo de la ruta{` ${routeid}`}
                        </h1>
                        <div className="flex justify-start items-center">
                            <p className="font-thin text-xs">4,5</p>
                            <StarIcon className="text-yellow-400" />
                        </div>
                    </div>
                    <ImageCarousel />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Blanditiis quam repudiandae libero commodi, voluptatum
                        in sit corporis laudantium impedit rem quidem. Porro ab,
                        eius impedit itaque sunt sed delectus velit.
                    </p>
                    <div className="flex justify-start items-center gap-x-5 w-full">
                        <RouteDataDetails/>
                        <div className="bg-slate-500 rounded-xl h-80 w-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
