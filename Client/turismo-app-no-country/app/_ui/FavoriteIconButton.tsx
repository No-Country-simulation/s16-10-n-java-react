'use client';
import { IconButton } from '@mui/material';

import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import { useState } from 'react';

export const FavoriteIconButton = ({ id }: { id?: number }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <IconButton
            size="large"
            className="text-secondary p-1 bg-gray-300 shadow-lg rounded-xl absolute -top-4 -right-0 z-20"
            onClick={handleClick}
        >
            {isFavorite ? (
                <TurnedInIcon className="text-4xl m-0" />
            ) : (
                <TurnedInNotIcon className="text-4xl m-0" />
            )}
        </IconButton>
    );
};
