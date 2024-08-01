import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./FormOnboarding";
import Image from "next/image";

interface Card {
  id: number;
  title: string;
  src: string;
  value: string;
  icon: any;
}

interface CardOnboardingProps {
  card: Card;
  register: UseFormRegister<FormValues>;
}

const CardOnboarding: React.FC<CardOnboardingProps> = ({ card, register }) => {
  return (
    <>
      <div className="flex gap-3">
        <label className="flex gap-3">
          <div className="flex flex-col gap-1 max-w-52 sm:max-w-[250px] lg:max-w-[270px]">
            {card.src != "" ? (
              <Image
                width={200}
                height={90}
                src={card.src}
                alt=""
                className="rounded-xl border border-solid border-secondary w-[200px] h-[90px] sm:w-[250px] sm:h-[110px] lg:w-[270px] lg:h-[122px]  object-cover"
              />
            ) : (
              <span className="text-9xl py-2 px-4 flex justify-center items-center">{card.icon}</span>
            )}
            <h5 className="m-0 font-medium text-xs sm:text-sm">{card.title}</h5>
          </div>
        </label>
        <input
          type="checkbox"
          value={card.value}
          {...register("options")}
          className="cursor-pointer checked:bg-secondary w-5 h-5 rounded-full m-0 border border-solid border-secondary self-center focus:ring-offset-0 focus:ring-0 focus:outline-none hover:bg-yellowOrange"
        />
      </div>
    </>
  );
};

export default CardOnboarding;
