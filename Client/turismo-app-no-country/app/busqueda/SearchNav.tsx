// app/SearchNav.tsx
"use client"; // Marca el componente como Client Component

import React, { useState } from 'react';
import SearchFilter from '../Filtro/SearchFilter';
import SearchBar from '../busqueda/SearchBar';

const SearchNav: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  const handleFilter = (filters: { [key: string]: string }) => {
    console.log('Filters applied:', filters);
  };

  return (
    <div className="relative flex flex-row place-self-center  justify-center  ">
      <SearchBar onSearch={(query) => console.log(query)} />
      <button 
        onClick={toggleFilter} 
        className="flex flex-row items-center justify-center  bg-primary text-white rounded h-10 border-0 rounded-r-full">
        {isFilterOpen ? (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" 
            />
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="h-6 w-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        )}
      </button>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow-lg relative">
            <SearchFilter onFilter={handleFilter} onClose={toggleFilter} />
            <button 
              onClick={toggleFilter} 
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
            
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SearchNav;
