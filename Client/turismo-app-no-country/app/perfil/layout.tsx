import React from "react";
import EditIcon from '@mui/icons-material/Edit';

const layoutPerfil = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-500 flex flex-col items-center justify-center py-2">
        <div className="relative w-28 h-28">
          <img
            src="https://previews.123rf.com/images/microphoto1981/microphoto19811710/microphoto1981171000024/88705547-icono-de-perfil-de-avatar-predeterminado-marcador-de-posici%C3%B3n-de-foto-gris-perfil-predeterminado.jpg"
            alt=""
            className="w-28 h-28 rounded-full"
          />
          <EditIcon className="absolute bottom-0 right-0 translate-x-1" />
        </div>
        <h5 className="m-0 mt-1 font-light text-sm">Nombre completo</h5>
      </section>
      {children}
    </div>
  );
};
export default layoutPerfil;
