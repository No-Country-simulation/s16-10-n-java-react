"use client";
import React from "react";
import { useForm } from "react-hook-form";

const MisDatos = () => {
  const datos = [
    {
      id: 1,
      title: "Nombre completo",
      clave: "nombre",
      type: "text",
      placeholder: "Nombre completo"
    },
    {
      id: 2,
      title: "Fecha de nacimiento",
      clave: "nacimiento",
      type: "date",
      placeholder: ""
    },
    {
      id: 3,
      title: "Dirección",
      clave: "direccion",
      type: "text",
      placeholder: "Dirección"
    },
    {
      id: 4,
      title: "Email",
      clave: "email",
      type: "email",
      placeholder: "Email"
    }
  ]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Object) => console.log(data);
  console.log(errors);

  return (
    <section className="flex justify-center max-w-[1400px] mx-auto mt-4 sm:mt-9 lg:mt-14 sm:px-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-derby flex flex-col items-center gap-6 sm:gap-8 lg:gap-10 rounded-lg w-4/5 lg:w-full py-6 lg:py-10 "
      >
        <h1 className="w-full text-center m-0 text-base lg:text-2xl text-secondary">Mis datos</h1>
        {datos && datos.map((dato) => (
          <div className="flex flex-col w-3/5" key={dato.id}>
            <label className="mb-2 text-sm lg:text-base text-primary">{dato.title}</label>
            <input
              className="text-xs lg:text-sm p-1.5 rounded border border-solid border-primary shadow-md focus:ring-offset-0 focus:ring-0 focus:outline-none"
              type={dato.type}
              placeholder={dato.placeholder}
              {...register(dato.clave, { required: true })}
            />
            {errors[dato.clave]?.type === "required" && (
              <span className="text-xs text-pureRed">Este campo es requerido</span>
            )}
          </div>
        ))}
        <button type="submit" className="py-3 px-5 rounded border-none text-white bg-primary text-xs lg:text-sm">
          Guardar
        </button>
      </form>
    </section>
  );
};

export default MisDatos;
