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
    <label className="flex items-center gap-3">
      <div className="flex flex-col max-w-52 sm:max-w-[300px]">
        <img src={card.src} alt="" className=" rounded-xl" />
        {card.title}
      </div>
      <input
        type="checkbox"
        value={card.value}
        {...register("options")}
        className="w-5 h-5 rounded-full m-0 border border-solid border-black"
      />
    </label>
  );
};

export default CardOnboarding;
