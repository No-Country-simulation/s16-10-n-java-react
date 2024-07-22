

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ForestIcon from '@mui/icons-material/Forest';
import ChurchIcon from '@mui/icons-material/Church';

import { IconButtonComponent } from './IconButton';

export const IconsButtonsList = () => {
    return (
        <div className="flex m-3 justify-center gap-x-4">
            <IconButtonComponent>
                <BeachAccessIcon />
            </IconButtonComponent>
            <IconButtonComponent>
                <TerrainIcon />
            </IconButtonComponent>
            <IconButtonComponent>
                <LocationCityIcon/>
            </IconButtonComponent>
            <IconButtonComponent>
                <ForestIcon/>
            </IconButtonComponent>
            <IconButtonComponent>
                <ChurchIcon/>
            </IconButtonComponent>
        </div>
    );
};
