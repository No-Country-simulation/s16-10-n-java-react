import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

const Perfil = () => {
  const rutas = [
    {
      id: 1,
      title: "Mis datos",

      href: "mis-datos",
    },
    {
      id: 2,
      title: "Mis rutas",

      href: "mis-rutas",
    },
    {
      id: 3,
      title: "Preferencias",
      href: "preferencias",
    },
    {
      id: 4,
      title: "Mi calendario",
      href: "mi-calendario",
    },
    {
      id: 5,
      title: "Mis tarjetas",
      href: "mis-tarjetas",
    },
  ];

  const carpetas = [
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
  ];

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-9 lg:gap-14 mt-4 sm:mt-9 lg:mt-14 max-w-[1024px] mx-auto">
      <section className="bg-derby flex flex-col items-center justify-center w-4/6 lg:w-full rounded">
        <h4 className="text-secondary m-5 lg:m-8 text-lg lg:text-2xl ">
          Bienvenido *****!
        </h4>
        <ul className="list-none font-extralight text-sm p-0 m-0 text-center w-full">
          {rutas &&
            rutas.map((ruta) => (
              <li
                key={ruta.id}
                className="py-4 text-primary hover:text-secondary hover:bg-yellowOrange shadow-md"
              >
                <Link
                  href={`/perfil/${ruta.href}`}
                  className="font-bold no-underline text-inherit text-base"
                >
                  {ruta.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      <section className="w-full flex flex-col items-center justify-center sm:gap-2 lg:gap-4">
        <h5 className="inline-block m-0 text-sm lg:text-base font-bold px-5 py-1 bg-derby rounded text-secondary">
          Rutas guardadas
        </h5>

        <div className="flex w-full justify-around mt-3">
          {carpetas &&
            carpetas.map((carpeta, index) => (
              <div>
                <div className="w-24 h-24 bg-derby rounded flex justify-center items-center cursor-pointer">
                  {index === 0 && (
                    <AddIcon className="text-6xl text-primary hover:scale-110" />
                  )}
                </div>
                <h6 className="m-0 text-xs font-normal text-center mt-1 text-secondary">
                  {carpeta.name}
                </h6>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Perfil;
