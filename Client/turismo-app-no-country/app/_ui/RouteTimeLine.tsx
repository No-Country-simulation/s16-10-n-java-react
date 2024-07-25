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

export const RouteTimeLine = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-derby rounded-xl w-full min-w-[215px]  p-3">
                <div className=" border-0 border-l-8 border-secondary border-solid">
                    <ul className="flex flex-col list-none gap-y-12">
                        {RouteTimeLineItems.map((item) => (
                            <li key={item.id} className="relative">
                                <div className="absolute top-2 -left-[54px] w-5 h-5 bg-primary rounded-full"></div>
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
