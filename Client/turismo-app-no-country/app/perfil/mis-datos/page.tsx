import React from "react";

const MisDatos = () => {
  return (
    <>
      <section className="px-2 py-2 m-4 bg-gray-500 flex flex-col gap-4 rounded">
        <h1 className="m-0 font-light text-lg mt-3">Mis datos</h1>
        <ul className="list-none p-0 m-0 flex flex-col items-start">
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Nombre: Ejemplo Nombre
          </li>
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Edad: 34
          </li>
        </ul>

        <ul className="list-none p-0 m-0 flex flex-col justify-start items-start">
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Pais: Algun Lugar
          </li>
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Región: Más Específico
          </li>
        </ul>

        <ul className="list-none p-0 m-0 flex flex-col justify-start items-start">
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Email: ejemplo@gmail.com
          </li>
          <li className="inline-block my-2 bg-gray-700 p-2.5 rounded">
            Contraseña: ********
          </li>
        </ul>
      </section>
    </>
  );
};

export default MisDatos;
