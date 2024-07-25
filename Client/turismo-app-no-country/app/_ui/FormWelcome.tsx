import React from "react";
import BtnSiguiente from "./BtnNext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormState } from "./FormContext";

type FormValues = {
  options: string[];
};

const Bienvenida = () => {
  const { handleSubmit } = useForm<FormValues>();
  const { onHandleNext, step } = useFormState();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    onHandleNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-[590px] flex flex-col items-center justify-between pb-20 pt-24"
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="m-0 text-center">¡Bienvenido a My Route!</h1>
        <p className="w-5/6 text-center m-0">
          Para comenzar te realizaremos algunas preguntas, queremos conocerte
          mejor y así ofrecerte mejores rutas especialmente pensadas para
          vos....
        </p>
      </div>
      {<BtnSiguiente />}
    </form>
  );
};

export default Bienvenida;
