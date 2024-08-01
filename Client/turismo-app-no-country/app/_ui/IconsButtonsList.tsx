import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ForestIcon from '@mui/icons-material/Forest';
import ChurchIcon from '@mui/icons-material/Church';

import { IconButtonComponent } from './IconButton';

const iconList = [
    {
        id: 1,
        children: <BeachAccessIcon />,
        label: 'Playa',
    },

    {
        id: 2,
        children: <TerrainIcon />,
        label: 'Montaña', 
    },
    {
        id: 3,
        children: <LocationCityIcon />,
        label: 'Ciudad',
    },
    {
        id: 4,
        children: <ForestIcon />,
        label: 'Bosque',
    },
    {
        id: 5,
        children: <ChurchIcon />,
        label: 'Pueblo',
    },
];

export const IconsButtonsList = () => {
    return (
        <div className="flex py-3 justify-evenly w-full max-w-[1400px]  overflow-hidden gap-x-1">
            {iconList.map((element: any) => (
                <IconButtonComponent key={element.id} label={element.label}>
                    {element.children}
                </IconButtonComponent>
            ))}
        </div>
    );
};
