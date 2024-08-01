const data = [
    {
        id: 1,
        title: 'Centro Histórico y San Telmo',
        subTitle: 'Ruta Turística (Historia)',
        value: 4,
        description:
            'Explora la histórica Plaza de Mayo, el epicentro político y social de Buenos Aires, con la Casa Rosada y la Catedral Metropolitana. Continúa hacia El Zanjón de Granados para descubrir los túneles subterráneos del siglo XIX. Pasea por la Calle Defensa, llena de tiendas de antigüedades y el vibrante Mercado de San Telmo. Disfruta de la Plaza Dorrego, famosa por su feria de antigüedades y espectáculos de tango. Termina en el Museo Histórico Nacional, que alberga importantes objetos y documentos de la historia argentina.',
        slides: [
            {
                id: 1,
                image: '/images/1-CentroHistoricoySanTelmo/1-Plaza de Mayo.jpg',
            },
            {
                id: 2,
                image: '/images/1-CentroHistoricoySanTelmo/2-El Zanjon de Granados.jpg',
            },
            {
                id: 3,
                image: '/images/1-CentroHistoricoySanTelmo/3-Calle Defensa.jpg',
            },
            {
                id: 4,
                image: '/images/1-CentroHistoricoySanTelmo/4-Plaza Dorrego.jpg',
            },
            {
                id: 5,
                image: '/images/1-CentroHistoricoySanTelmo/5-Museo Historico Nacional.jpg',
            },
        ],
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
                description:
                    'Lugar histórico con la Casa Rosada, la Catedral Metropolitana y el Cabildo.',
                coordinates: [-34.60799899507934, -58.37236898127468],
            },
            {
                id: 2,
                title: 'El zanjon de Granados',
                description:
                    'Un fascinante recorrido subterráneo por túneles del siglo XIX',
                coordinates: [-34.616424594459694, -58.372029949076605],
            },
            {
                id: 3,
                title: 'Calle defensa',
                description:
                    'Camina por esta calle hasta llegar al barrio de San Telmo. Encontrarás tiendas de antigüedades y el Mercado de San Telmo.',
                coordinates: [-34.61846488523988, -58.37323734392356],
            },
            {
                id: 4,
                title: 'Paza Dorrego',
                description:
                    'Punto central del barrio de San Telmo, famoso por su feria de antigüedades los domingos y sus espectáculos de tango',
                coordinates: [-34.62032806120157, -58.37175346441798],
            },

            {
                id: 5,
                title: 'Museo Histórico Nacional',
                description:
                    'Alberga objetos y documentos significativos de la historia argentina',
                coordinates: [-34.626815017120926, -58.370605293252886],
            },
        ],
    },
];

export default data;
