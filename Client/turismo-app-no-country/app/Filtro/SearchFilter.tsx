import React, { useState } from 'react';

import {
  BuildingOfficeIcon,
  SunIcon,
  PlusIcon,
  PaperAirplaneIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

interface SearchFilterProps {
  onFilter: (filters: { name?: string; address?: string; price?: string; tiempo?: number }) => void;
  onClose: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilter, onClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    name: '',
    address: '',
    price: '',
    tiempo: 0,
  });

  const handleFilterChange = (key: string, value: string | number) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onFilter(selectedFilters); // Emitir los filtros al componente padre
    onClose(); // Cerrar el filtro
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-turbo p-2 rounded-md max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-roboto text-white">Filtros</h2>
        </div>
         {/* Sección Dirección */}
         <div className="mb-4">
          <h3 className="font-roboto text-white">Espacio</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Ciudad')}
              >
                <BuildingOfficeIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Ciudad</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Playa')}
              >
                <SunIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Playa</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Añadir')}
              >
                <PlusIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Añadir</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-roboto text-white">Actividad</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'arte')}
              >
                <PaintBrushIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Arte</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Relax')}
              >
                <PaperAirplaneIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Relax</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Añadir')}
              >
                <PlusIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Añadir</span>
            </div>
          </div>
        </div>


        {/* Sección Tiempo */}
        <div className="my-4">
  <label className="font-roboto text-white mb-2">Distancia</label>
  <input
    type="range"
    min={0}
    max={20}
    value={selectedFilters.distancia}
    onChange={(e) => handleFilterChange('distancia', parseInt(e.target.value))}
    className="w-full"
  />
  <div className="flex justify-between text-xs text-white">
    <span>0 km</span>
    <span>{selectedFilters.distancia} km</span>
    <span>20 km</span>
  </div>
  </div>


        <div className="my-4">
          <label className="font-roboto text-white mb-2">Tiempo</label>
          <input
            type="range"
            min={0}
            max={24}
            value={selectedFilters.tiempo}
            onChange={(e) => handleFilterChange('tiempo', parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-white">
            <span>0 h</span>
            <span>{selectedFilters.tiempo} h</span>
            <span>24 h</span>
          </div>
        </div>


        {/* Sección Nombre */}
        <div className="mb-4">
          <label className="font-roboto text-white mb-2">Nombre</label>
          <input
            type="text"
            value={selectedFilters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            className="w-full p-2 border font-roboto text-gray-950 mb-2 border-0 rounded-md"
            placeholder="Buscar por nombre"
          />
        </div>

       

        {/* Sección Precio */}
        <div className="mb-4">
          <label className="font-roboto text-white">Precio</label>
          <input
            type="number"
            value={selectedFilters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
            className="w-full p-2 border font-roboto text-gray-950 border-0 rounded-md"
            placeholder="Ingrese precio máximo"
          />
        </div>


        <div className="mb-4">
          <h3 className="font-roboto text-white">Traslado</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Bici')}
              >
                <RocketLaunchIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Bici</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Playa')}
              >
                <TruckIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Auto</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-primary p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Añadir')}
              >
                <PlusIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xs text-white">Añadir</span>
            </div>
          </div>
        </div>

        



        <div className="flex justify-end">
          <button
            onClick={applyFilters}
            className="bg-primary text-white px-4 py-2 rounded-md border-0"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
