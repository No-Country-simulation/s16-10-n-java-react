import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MapIcon from '@mui/icons-material/Map';

export const RouteDataDetails = () => {
    return (
        <div className="flex flex-col items-center bg-derby rounded-xl w-full min-w-[200px] p-3">
            <h2 className="font-normal text-sm rounded-lg bg-slate-300 py-2 px-9 my-1 ">
                Datos de la ruta
            </h2>
            <dl className=" my-1">
                <dt className="font-semibold text-base flex items-center gap-x-3">
                    <LocationOnIcon />
                    <span>Locacion de la ruta</span>
                </dt>
                <dd className="text-base">Especificación</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3">
                    <DateRangeIcon />
                    <span>Tempordada ideal</span>
                </dt>
                <dd className="text-sm font-normal">Especificación</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3">
                    <QueryBuilderIcon />
                    <span>Duración de la ruta</span>
                </dt>
                <dd className="text-base">Especificación</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3">
                    <WarningAmberIcon />
                    <span>Advertencias</span>
                </dt>
                <dd className="text-base">Especificación</dd>
                <dt className="font-semibold text-base flex items-center gap-x-3">
                    <MapIcon />
                    <span>Extensión de la ruta</span>
                </dt>
                <dd className="text-base">Especificación</dd>
            </dl>
        </div>
    );
};
