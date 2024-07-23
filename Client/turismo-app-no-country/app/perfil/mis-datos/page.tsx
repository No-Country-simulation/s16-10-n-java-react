"use client";
import React from "react";
import { useForm } from "react-hook-form";

const MisDatos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Object) => console.log(data);
  console.log(errors);

  return (
    <section className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-500 flex flex-col items-center gap-8 rounded-lg mt-4 w-4/5 py-6 "
      >
        <h1 className="w-full text-center mt-0 text-base">Mis datos</h1>
        <div className="flex flex-col w-3/5">
          <label className="mb-4 text-xs">Nombre completo</label>
          <input
            className="text-xs p-1.5 rounded border-0 focus:outline-none border border-solid border-gray-700 shadow-sm shadow-black"
            type="text"
            placeholder="Nombre completo"
            {...register("nombre", { required: true })}
          />
          {errors.nombre?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col w-3/5">
          <label className="mb-4 text-xs">Fecha de nacimiento</label>
          <input
            className="text-xs p-1.5 rounded border-0 focus:outline-none border border-solid border-gray-700 shadow-sm shadow-black"
            type="date"
            placeholder="Fecha de nacimiento"
            {...register("nacimiento", { required: true })}
          />
          {errors.nacimiento?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col w-3/5">
          <label className="mb-4 text-xs">Dirección</label>
          <input
            className="text-xs p-1.5 rounded border-0 focus:outline-none border border-solid border-gray-700 shadow-sm shadow-black"
            type="text"
            placeholder="Dirección"
            {...register("direccion", { required: true })}
          />
          {errors.direccion?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
        </div>
        <div className="flex flex-col w-3/5">
          <label className="mb-4 text-xs">Email</label>
          <input
            className="text-xs p-1.5 rounded border-0 focus:outline-none border border-solid border-gray-700 shadow-sm shadow-black"
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email?.type === "required" && (
            <span>Este campo es requerido</span>
          )}
          {errors.email?.type === "pattern" && <span>Formato incorrecto</span>}
        </div>

        <input
          type="submit"
          value="Guardar datos"
          className="text-xs w-3/5 py-3 mt-4 bg-gray-600 rounded border-0 focus:outline-none"
        />
      </form>
    </section>
  );
};

export default MisDatos;
