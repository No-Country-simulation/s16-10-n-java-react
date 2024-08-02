import React from "react";

const CardFilter = ({card, handleFilterChange}) => {
  return (
    <div className="flex flex-col items-center" key={card.id}>
      <div
        className="bg-derby border border-solid border-primary p-4 rounded-md flex justify-center items-center cursor-pointer"
        onClick={() => handleFilterChange("address", card.title)}
      >
        {card.icon}
      </div>
      <span className="text-xs font-light bg-primary text-white w-full text-center rounded mt-1">
        {card.title}
      </span>
    </div>
  );
};

export default CardFilter;
