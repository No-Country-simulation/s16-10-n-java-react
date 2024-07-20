import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ForestIcon from '@mui/icons-material/Forest';
import ChurchIcon from '@mui/icons-material/Church';

import { IconButtonComponent } from './IconButton';

const iconList = [
    <BeachAccessIcon />,
    <TerrainIcon />,
    <LocationCityIcon />,
    <ForestIcon />,
    <ChurchIcon />,
];

export const IconsButtonsList = () => {
    return (
        <div className="flex m-3 justify-evenly w-full max-w-[1400px] ">
            {iconList.map((icon: any) => (
                <IconButtonComponent key={icon}>{icon}</IconButtonComponent>
            ))}
        </div>
    );
};
