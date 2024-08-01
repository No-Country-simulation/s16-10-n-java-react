import React from 'react';
import AddIcon from "@mui/icons-material/Add";
import Link from 'next/link';

const MisRutas = () => {

  const carpetas = [
    {
      id: 0,
      name: "Nueva carpeta",
    },
    {
      id: 1,
      name: "Nombre carpeta",
    },
    {
      id: 2,
      name: "Nombre carpeta",
    },
    {
      id: 3,
      name: "Nombre carpeta",
    },
    {
      id: 4,
      name: "Nombre carpeta",
    },
    {
      id: 5,
      name: "Nombre carpeta",
    },
    {
      id: 6,
      name: "Nombre carpeta",
    },
    {
      id: 7,
      name: "Nombre carpeta",
    },
    {
      id: 8,
      name: "Nombre carpeta",
    },
    {
      id: 9,
      name: "Nombre carpeta",
    },
    {
      id: 10,
      name: "Nombre carpeta",
    },
    {
      id: 11,
      name: "Nombre carpeta",
    },
    {
      id: 12,
      name: "Nombre carpeta",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-12 lg:gap-20 w-11/12 lg:max-w-[1400px] mx-auto mt-4 sm:mt-9 lg:mt-14 sm:px-2">
          {carpetas &&
            carpetas.map((carpeta, index) => (
              <div key={carpeta.id}>
                <Link href={index === 0 ? "" : "/perfil/mis-rutas/detalle"}>
                  <div className="w-24 h-24 sm:w-48 sm:h-48 lg:w-60 lg:h-60 bg-derby rounded flex justify-center items-center cursor-pointer">
                    {index === 0 && (
                      <AddIcon className="text-6xl text-primary hover:scale-110" />
                    )}
                  </div>
                </Link>
                <h6 className="m-0 text-xs sm:text-sm lg:text-base font-normal text-center mt-1 text-secondary">
                  {carpeta.name}
                </h6>
              </div>
            ))}
        </div>
  )
}

export default MisRutas