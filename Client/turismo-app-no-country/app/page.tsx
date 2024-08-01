import { Button } from '@mui/material';
import { redirect } from 'next/navigation';

async function getData() {
    const res = await fetch('https://s16-10-n-java-react-522u.onrender.com/api/v1/routes');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Home() {
    redirect('/home/onboarding');

    return (
        <main>
            <div className="flex flex-col justify-between items-center  m-5">
                <h1></h1>
                <p className="text-blue-400">Este es un proyecto de turismo</p>
                <Button variant="contained" className="bg-primary">
                    Hola mundo desde MUI
                </Button>
            </div>
        </main>
    );
}
