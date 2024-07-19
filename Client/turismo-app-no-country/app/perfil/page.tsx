import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Perfil = () => {
  return (
    <>
    <div className=" flex justify-center w-full">
      <section className="bg-gray-500 flex flex-col items-center justify-center w-4/6 rounded mt-4">
        <h4>Bienvenido *****!</h4>
        <ul className="list-none font-extralight text-sm p-0 m-0 text-center w-full">
          <li className="py-4 border-0 border-b-2 border-gray-600 border-solid">
            Mis datos
          </li>
          <li className="py-4 border-0 border-b-2 border-gray-600 border-solid">
            Mis rutas
          </li>
          <li className="py-4 border-0 border-b-2 border-gray-600 border-solid">
            Preferencias
          </li>
          <li className="py-4 border-0 border-b-2 border-gray-600 border-solid">
            Mi calendario
          </li>
          <li className="py-4 border-0 border-b-2 border-gray-600 border-solid">
            Mis tarjetas
          </li>
        </ul>
        <button
          type="button"
          className="my-4 p-3 bg-gray-600 border-0 rounded text-white"
        >
          Cerrar sesión
        </button>
      </section>
    </div>

      <section className="w-full flex flex-col items-center justify-center mt-4">
        <h5 className="inline-block m-0 text-sm font-light px-5 bg-gray-600 rounded">
          Rutas guardadas
        </h5>

        <div className="flex w-full justify-around mt-3">
          <div>
            <div className="w-24 h-24 bg-gray-400 rounded flex justify-center items-center">
              <AddIcon className="text-6xl text-gray-600" />
            </div>
            <h6 className="m-0 font-light text-s text-center mt-1">
              Nombre carpeta
            </h6>
          </div>
          <div>
            <div className="w-24 h-24 bg-gray-400 rounded"></div>
            <h6 className="m-0 font-light text-s text-center mt-1">
              Nombre carpeta
            </h6>
          </div>
          <div>
            <div className="w-24 h-24 bg-gray-400 rounded"></div>
            <h6 className="m-0 font-light text-s text-center mt-1">
              Nombre carpeta
            </h6>
          </div>
        </div>
      </section>
    </>
  );
};

export default Perfil;
