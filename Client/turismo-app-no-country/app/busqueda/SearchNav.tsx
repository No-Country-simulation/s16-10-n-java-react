// app/SearchNav.tsx
"use client"; // Marca el componente como Client Component

import React, { useState } from "react";
import SearchFilter from "../Filtro/SearchFilter";
import SearchBar from "../busqueda/SearchBar";
import TuneIcon from "@mui/icons-material/Tune";
import CancelIcon from "@mui/icons-material/Cancel";

const SearchNav: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleFilter = (filters: { [key: string]: string }) => {
    console.log("Filters applied:", filters);
  };

  return (
    <div className="relative flex flex-row place-self-center justify-center z-50 pr-4 py-4">
      <SearchBar onSearch={(query) => console.log(query)} />

      <button
        onClick={toggleFilter}
        className="cursor-pointer font-roboto bg-primary text-white rounded border-0 rounded-r-full flex justify-center items-center"
      >
        <TuneIcon />
      </button>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <SearchFilter onFilter={handleFilter} onClose={toggleFilter} />
            <CancelIcon
              className="text-black absolute top-1 right-1 text-3xl"
              onClick={toggleFilter}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchNav;
