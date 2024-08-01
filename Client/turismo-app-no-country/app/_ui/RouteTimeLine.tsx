const RouteTimeLineItems = [
    {
        id: 1,
        title: 'Lugar',
        description: 'información',
    },
    {
        id: 2,
        title: 'Lugar',
        description: 'información',
    },
    {
        id: 3,
        title: 'Lugar',
        description: 'información',
    },
    {
        id: 4,
        title: 'Lugar',
        description: 'información',
    },
];

interface place {
    
    id: number;
    title: string;
    description: string;
    coordinates: number[];
    
}



interface Props {
    places: place[];
}

export const RouteTimeLine: React.FC<Props> = ({ places }) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center bg-derby rounded-xl w-full h-full p-3">
                <div className=" border-0 border-l-8 border-secondary border-solid">
                    <ul className="flex flex-col list-none gap-y-12">
                        {places.map((item) => (
                            <li key={item.id} className="relative">
                                <div className="absolute top-2 -left-[55px] w-6 h-6 bg-primary rounded-full shadow-lg"></div>
                                <h2 className="m-0 text-base">{item.title}</h2>
                                <p className="m-0 text-sm">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};
