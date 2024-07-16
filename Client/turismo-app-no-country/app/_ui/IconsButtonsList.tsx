import { Button, Stack, styled } from '@mui/material';

import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { IconButtonComponent } from './IconButton';

export const IconsButtonsList = () => {
    return (
        <div className="m-3">
            <Stack direction={'row'} spacing={2}>
                <IconButtonComponent>
                    <BeachAccessIcon />
                </IconButtonComponent>
                <Button>
                    <BeachAccessIcon />
                </Button>
                <Button>
                    <BeachAccessIcon />
                </Button>
            </Stack>
        </div>
    );
};
