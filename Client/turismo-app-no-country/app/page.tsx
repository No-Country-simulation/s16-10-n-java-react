import { Button } from '@mui/material';

export default function Home() {
    return (
        <main>
            <div className='flex flex-col justify-between items-center  m-5'>
                <h1>Nuevo proyecto</h1>
                <p className="text-blue-400">Este es un proyecto de turismo</p>
                <Button
                    variant="contained"
                   
                    className="bg-primary"
                >
                    Hola mundo desde MUI
                </Button>
            </div>
        </main>
    );
}
