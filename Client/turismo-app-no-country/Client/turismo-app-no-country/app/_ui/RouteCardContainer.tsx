import RouteCard from './RouteCard';

interface RouteCardContainerProps {
    title: string;
}

export const RouteCardContainer: React.FC<RouteCardContainerProps> = ({title}) => {
    return (
        <div className="flex flex-col">
            <h1 className='font-bold italic'>{title}</h1>
            <div className="flex flex-row gap-4">
                <RouteCard />
                <RouteCard />
                <RouteCard />
            </div>
        </div>
    );
};
