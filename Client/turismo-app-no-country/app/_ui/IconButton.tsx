'use client';
import { Button, styled } from '@mui/material';

const IconButton = styled(Button)({
    border: 0,
    borderRadius: 2,
    color: 'white',
    height: 48,
    padding: '30px 30px',
});

export const IconButtonComponent = ({
    children,
    label,
}: {
    children: React.ReactNode;
    label: string;
}) => {
    return (
        <IconButton className="bg-primary shadow-primary/80 shadow-md px-1  sm:px-8 min-w-[80px] max-w-[90px] ">
            <div className="flex flex-col justify-center items-center">
                {children}
                <span className="font-roboto text-xs sm:text-sm">{label}</span>
            </div>
        </IconButton>
    );
};
