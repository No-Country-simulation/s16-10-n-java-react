import React from "react";
import BtnSiguiente from "./BtnNext";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormState } from "../home/onboarding/FormOnboardingContext";

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
      className="min-h-[590px] flex flex-col items-center justify-between pb-16 pt-40"
    >
      <div className="flex flex-col items-center gap-9">
        <h1 className="m-0 text-center lg:text-3xl">¡Bienvenido a My Route!</h1>
        <p className="w-3/4 font-medium text-center m-0 max-w-xl sm:text-lg lg:text-xl">
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
