import { title } from 'process';
import { IconsButtonsList } from '../_ui/IconsButtonsList';
import { ImageCarousel } from '../_ui/ImageCarousel';
import RouteCard from '../_ui/RouteCard';
import { RouteCardContainer } from '../_ui/RouteCardContainer';

const slides = [
    {
        id: 1,
        image: '/images/carrusel1.jpg',
        title: 'Slide 1',
    },
    {
        id: 2,
        image: '/images/carrusel2.jpg',
        title: 'Slide 2',
    },
    {
        id: 3,
        image: '/images/carrusel3.jpg',
        title: 'Slide 3',
    },
];

const routesSuggestions = [
    {
        title: 'Recomendaciones para ti',
        routes: [
            {
                id: 1,
                title: 'Centro Histórico',
                value: 4,
                src: 'images/CategoriasHome/1Recomendadosparati/1 Centro Histórico (con detalle).jpg',
                distance: '4 Km',
            },
            {
                id: 2,
                title: 'Costanera Sur',
                value: 5,
                src: 'images/CategoriasHome/1Recomendadosparati/2 Costanera Sur (con detalle).jpg',
                distance: '4 Km',
            },
            {
                id: 3,
                title: 'Museo de la Inmigración',
                value: 3,
                src: 'images/CategoriasHome/1Recomendadosparati/3 museo de la inmigración.jpg',
                distance: '0 Km',
            },
            {
                id: 4,
                title: 'Museo Larreta',
                value: 4.5,
                src: 'images/CategoriasHome/1Recomendadosparati/4 Museo Larreta.jpg',
                distance: '0 Km',
            },
            {
                id: 5,
                title: 'Calle Melián',
                value: 4,
                src: 'images/CategoriasHome/1Recomendadosparati/5 Calle Melián.jpeg',
                distance: '0 Km',
            },
        ],
    },
    {
        title: 'Especiales de Invierno',
        routes: [
            {
                id: 6,
                title: 'Nuñez y Belgrano',
                value: 4,
                src: 'images/CategoriasHome/2Especialesdeinvierno/1 Núñez y Belgrano (con detalle).jpg',
                distance: '0 Km',
            },
            {
                id: 7,
                title: 'La Boca',
                value: 5,
                src: 'images/CategoriasHome/2Especialesdeinvierno/2 La Boca (con detalle).jpg',
                distance: '0 Km',
            },
            {
                id: 8,
                title: 'Palermo Bares',
                value: 3,
                src: 'images/CategoriasHome/2Especialesdeinvierno/3 Palermo Bares.png',
                distance: '0 Km',
            },
            {
                id: 9,
                title: 'Teatro Cervantes',
                value: 4.5,
                src: 'images/CategoriasHome/2Especialesdeinvierno/4 Teatro Cervantes.jpg',
                distance: '0 Km',
            },
            {
                id: 10,
                title: 'Ecoparque',
                value: 4,
                src: 'images/CategoriasHome/2Especialesdeinvierno/5 Ecoparque.jpg',
                distance: '0 Km',
            },
        ],
    },

    {
        title: 'Rutas Históricas',
        routes: [
            {
                id: 11,
                title: 'Recoleta',
                value: 4,
                src: 'images/CategoriasHome/3Rutashistoricas/1 Recoleta (con detalle).jpg',
                distance: '4 Km',
            },
            {
                id: 12,
                title: 'Microcentro',
                value: 5,
                src: 'images/CategoriasHome/3Rutashistoricas/2 Microcentro (con detalle).jpg',
                distance: '4 Km',
            },
            {
                id: 13,
                title: 'Jardín Japonés',
                value: 3,
                src: 'images/CategoriasHome/3Rutashistoricas/3 Jardín Japonés.jpg',
                distance: '0 Km',
            },
            {
                id: 14,
                title: 'La Ideal',
                value: 4.5,
                src: 'images/CategoriasHome/3Rutashistoricas/4 La Ideal.jpg',
                distance: '0 Km',
            },
            {
                id: 15,
                title: 'Ateneo Grand Splendid',
                value: 4,
                src: 'images/CategoriasHome/3Rutashistoricas/5 Ateneo Grand Splendid.jpg',
                distance: '0 Km',
            },
        ],
    },
];
const page = () => {
    return (
        <div className="flex flex-col items-center p-2 ">
            <IconsButtonsList />

            <ImageCarousel slides={slides} />

            {routesSuggestions.map((route) => (
                <RouteCardContainer
                    key={route.title}
                    title={route.title}
                    routes={route.routes}
                />
            ))}
        </div>
    );
};

export default page;
