import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MapIcon from '@mui/icons-material/Map';

interface RouteDataDetailsProps {
    location: {
        title: string;
        description: string;
    };
    seasson: {
        title: string;
        description: string;
    };
    time: {
        title: string;
        description: string;
    };
    warnings: {
        title: string;
        description: string;
    };
    distance: {
        title: string;
        description: string;
    };
}

export const RouteDataDetails: React.FC<RouteDataDetailsProps> = ({
    location,
    seasson,
    time,
    warnings,
    distance,
}) => {
    return (
        <div className="flex flex-col items-center bg-derby rounded-xl w-full  p-3">
            <h2 className="font-normal text-sm rounded-lg bg-slate-300 py-2 px-9 mb-4 mt-0 ">
                Datos de la ruta
            </h2>
            <dl className=" my-1">
                <dt className="font-semibold text-base flex items-center gap-x-3 my-1">
                    <LocationOnIcon />
                    <span>{location.title}</span>
                </dt>
                <dd className="text-sm font-normal">{location.description}</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3 my-1">
                    <DateRangeIcon />
                    <span>{seasson.title}</span>
                </dt>
                <dd className="text-sm font-normal">{seasson.description}</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3 my-1">
                    <QueryBuilderIcon />
                    <span>{time.title}</span>
                </dt>
                <dd className="text-sm font-normal">{time.description}</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3 my-1">
                    <WarningAmberIcon />
                    <span>{warnings.title}</span>
                </dt>
                <dd className="text-sm font-normal">{warnings.description}</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3 my-1">
                    <MapIcon />
                    <span>{distance.title}</span>
                </dt>
                <dd className="text-sm font-normal">{distance.description}</dd>
            </dl>
        </div>
    );
};
