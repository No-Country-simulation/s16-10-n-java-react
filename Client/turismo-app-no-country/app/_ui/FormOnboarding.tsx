import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormState } from "./FormContext";
import datos from "../home/onboarding/datos.json";
import CardOnboarding from "./CardOnboarding";
import BtnSiguiente from "./BtnNext";
import ProgressIdentifier from "./ProgressIdentifier";

export type FormValues = {
  options: string[];
};

interface FormOnboardingProps {
  title: string;
}

const FormOnboarding: React.FC<FormOnboardingProps> = ({ title }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const { onHandleNext, step } = useFormState();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    onHandleNext();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full flex flex-col items-center gap-6 text-xs pt-8 pb-4"
    >
      <h3 className="m-0 text-base font-bold text-center w-11/12">{title}</h3>
      {datos[step] &&
        datos[step].map((card) => <CardOnboarding register={register} card={card} key={card.id} />)}
      {<BtnSiguiente />}
    </form>
  );
};

export default FormOnboarding;
