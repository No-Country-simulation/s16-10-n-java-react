import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useFormState } from "../home/onboarding/FormOnboardingContext";
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
      className="h-full flex flex-col justify-center items-center gap-6 sm:gap-10 lg:gap-12 text-xs pt-8 pb-4"
    >
      <h1 className="m-0 text-base font-bold text-center w-11/12 sm:text-lg lg:text-xl">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center gap-7 lg:gap-12 max-w-[375px] lg:max-w-[1024px]">
        {datos[step] &&
          datos[step].map((card) => (
            <CardOnboarding register={register} card={card} key={card.id} />
          ))}
      </div>
      <BtnSiguiente />
    </form>
  );
};

export default FormOnboarding;
