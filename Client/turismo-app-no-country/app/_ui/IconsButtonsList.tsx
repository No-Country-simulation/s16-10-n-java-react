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
    },

    {
        id: 2,
        children: <TerrainIcon />,
    },
    {
        id: 3,
        children: <LocationCityIcon />,
    },
    {
        id: 4,
        children: <ForestIcon />,
    },
    {
        id: 5,
        children: <ChurchIcon />,
    },
];

export const IconsButtonsList = () => {
    return (
        <div className="flex m-3 justify-evenly w-full max-w-[1400px] ">
            {iconList.map((element: any) => (
                <IconButtonComponent key={element.id}>
                    {element.children}
                </IconButtonComponent>
            ))}
        </div>
    );
};
