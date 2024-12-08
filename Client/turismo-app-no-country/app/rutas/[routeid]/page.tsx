import { FavoriteIconButton } from '@/app/_ui/FavoriteIconButton';
import { ImageCarousel } from '@/app/_ui/ImageCarousel';
import { RouteDataDetails } from '@/app/_ui/RouteDataDetails';
import { RouteTimeLine } from '@/app/_ui/RouteTimeLine';
import Map from '@/app/map';
import { Category } from '@mui/icons-material';

import StarIcon from '@mui/icons-material/Star';

const route = {
    id: 1,
    title: 'Titulo de la ruta',
    subTitle: 'Subtitulo de la ruta',
    description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis consequuntur ipsum ullam voluptatibus rem asperiores vitae, adipisci corporis accusantium vel mollitia quas vero distinctio nemo iure ab quo quibusdam impedit.',
    location: {
        title: 'CABA',
        description: 'Monserrat / San Telmo',
    },
    seasson: {
        title: 'Todo el año',
        description: 'Paseo por la ciudad habilitado todo el año',
    },
    time: {
        title: '8 horas estimado',
        description: 'Dependiendo del ritmo quie se lleve',
    },
    warnings: {
        title: 'Cuidar pertenencias',
        description: 'no sobre exponerse',
    },
    distance: {
        title: '10 km',
        description: 'Paseo largo caminando',
    },
    places: [
        {
            id: 1,
            title: 'Plaza de mayo',
            description: 'Lugar histórico con la Casa Rosada, la Catedral Metropolitana y el Cabildo.',
            coordinates: [-34.60799899507934, -58.37236898127468],             
        },
        {
            id: 2,
            title: 'El zanjon de Granados',
            description: 'Un fascinante recorrido subterráneo por túneles del siglo XIX',
            coordinates: [-34.616424594459694, -58.372029949076605],
        },
        {
            id: 3,
            title: 'Calle defensa',
            description: 'Camina por esta calle hasta llegar al barrio de San Telmo. Encontrarás tiendas de antigüedades y el Mercado de San Telmo.',
            coordinates: [-34.61846488523988, -58.37323734392356],
        },
        {
            id: 4,
            title: 'Paza Dorrego',
            description: 'Punto central del barrio de San Telmo, famoso por su feria de antigüedades los domingos y sus espectáculos de tango',
            coordinates: [-34.62032806120157, -58.37175346441798],
        },

        {
            id: 5,
            title: 'Museo Histórico Nacional',
            description: 'Alberga objetos y documentos significativos de la historia argentina',
            coordinates: [-34.626815017120926, -58.370605293252886],
        },
    ],
};

const page = async ({ params }: { params: { routeid: string } }) => {
    const { routeid } = params;

    return (
        <>
            <div className="flex flex-col items-center h-full">
                <div className="flex flex-col items-center w-full max-w-[1400px] h-full px-7">
                    <div className="flex flex-col justify-center items-start w-full">
                        <div className="flex justify-start items-center gap-x-2">
                            <h1 className="font-semibold text-base m-0">
                                {`${route.title} ${routeid}`}
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
