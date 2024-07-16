'use client'
import { Button, styled } from '@mui/material';

const IconButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
});

export const IconButtonComponent = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <IconButton>{children}</IconButton>;
};
