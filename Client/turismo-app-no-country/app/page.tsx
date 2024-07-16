import { Button } from '@mui/material';

export default function Home() {
    return (
        <main>
            <div className='flex flex-row'>
                <h1>Nuevo proyecto</h1>
                <p className="text-blue-400">Este es un proyecto de turismo</p>
                <Button
                    variant="contained"
                    color="primary"
                    className="bg-red-100"
                >
                    Hola mundo desde MUIIIIIII
                </Button>
            </div>
        </main>
    );
}
