import Image from "next/image";
import React from "react";

const Preferencias = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-2 m-4">
      <h5 className="inline-block m-0 text-sm lg:text-base font-bold px-10 py-0.5 bg-derby rounded text-secondary">
        Preferencias
      </h5>
      <Image width={230} height={230} src="/images/carpetas_perfil/preferencias.jpg" alt="" className="border-1 border-solid border-primary object-cover rounded-lg"/>
      <p className="w-5/6 text-xs text-center leading-5 font-semibold text-secondary m-0">
      Eres un turista apasionado por la historia y la cultura. Te encanta explorar museos, monumentos históricos y sitios emblemáticos que cuentan la historia de cada destino. Prefieres sumergirte en las tradiciones locales, aprender sobre el pasado y descubrir el patrimonio cultural de los lugares que visitas. Para ti, cada viaje es una oportunidad para enriquecer tus conocimientos y vivir experiencias significativas que conecten con la esencia de cada ciudad.
      </p>
      <button className="border-0 bg-primary text-white p-2 font-semibold rounded">Cambiar preferencias</button>
    </div>
  );
};

export default Preferencias;
