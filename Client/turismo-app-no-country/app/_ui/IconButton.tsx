'use client';
import { Button, styled } from '@mui/material';

const IconButton = styled(Button)({
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
});

export const IconButtonComponent = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return <IconButton className="bg-primary shadow-primary/80 shadow-md">{children}</IconButton>;
};
