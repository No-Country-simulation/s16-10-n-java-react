import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CarpetaRuta = () => {
  const rutas = [
    {
      id: 1,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 4.5,
    },
    {
      id: 2,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 3,
    },
    {
      id: 3,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 5,
    },
    {
      id: 4,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 4.5,
    },
    {
      id: 5,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 3.5,
    },
    {
      id: 4,
      src: "https://img.freepik.com/foto-gratis/disparo-alto-angulo-camino-madera-parque-nacional-lagos-plitvice-croacia_181624-20391.jpg",
      title: "Nombre ruta",
      location: "Locación",
      valuation: 3.5,
    },
  ];

  return (
    <div className=" flex flex-col mt-5 lg:mt-12 w-11/12 max-w-[1040px] mx-auto">
      <h5 className="mx-auto m-0 text-sm lg:text-base font-bold px-5 py-1 bg-derby rounded text-secondary">
        Rutas guardadas
      </h5>
      <div className="flex flex-wrap justify-center items-center mt-3 lg:mt-12 gap-2 sm:gap-4 lg:gap-8">
        {rutas &&
          rutas.map((ruta) => (
            <div>
              <div className="w-80 h-16 lg:w-96 sm:h-20 lg:h-24 rounded-t-lg">
                <img
                  src={ruta.src}
                  alt={ruta.title}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col justify-evenly h-16 sm:h-20 lg:h-24 px-2.5 sm:px-3 rounded-b-lg border border-solid border-gray-400 bg-derby">
                <h5 className="m-0 text-xs sm:text-sm lg:text-base font-semibold text-secondary">
                  {ruta.title}
                </h5>
                <h6 className="m-0 text-xs sm:text-sm lg:text-base font-medium flex items-center gap-1 text-secondary">
                  {ruta.location}
                  <LocationOnIcon className="text-base text-primary" />
                </h6>
                <h6 className="m-0 text-xs sm:text-sm lg:text-base font-medium flex items-center gap-1 text-secondary">
                  {ruta.valuation}
                  <StarBorderIcon className="text-base text-primary" />
                </h6>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarpetaRuta;
