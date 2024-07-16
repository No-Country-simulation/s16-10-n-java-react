import { Button } from '@mui/material';

export default function Home() {
    return (
        <main>
            <h1>Nuevo proyecto</h1>
            <Button variant="contained" color="primary" className='bg-red-400 rounded-3xl'>
                Hola mundo desde MUI
            </Button>
        </main>
    );
}
