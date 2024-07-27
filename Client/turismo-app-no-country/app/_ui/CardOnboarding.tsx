import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from './FormOnboarding'

interface Card {
  id: number;
  title: string;
  src: string;
  value: string;
}

interface CardOnboardingProps {
  card: Card;
  register: UseFormRegister<FormValues>;
}

const CardOnboarding: React.FC<CardOnboardingProps> = ({ card, register }) => {

  return (
    <label className="flex gap-3 cursor-pointer">
      <div className="flex flex-col gap-1 max-w-52 sm:max-w-[250px] lg:max-w-[270px]">
        <img src={card.src} alt="" className="rounded-xl border border-solid border-secondary w-full" />
        <h5 className="m-0 font-medium text-xs sm:text-sm">
          {card.title}
        </h5>
      </div>
      <input
        type="checkbox"
        value={card.value}
        {...register("options")}
        className="cursor-pointer checked:bg-secondary w-5 h-5 rounded-full m-0 border border-solid border-secondary self-center focus:ring-offset-0 focus:ring-0 focus:outline-none"
      />
    </label>
  );
};

export default CardOnboarding;
