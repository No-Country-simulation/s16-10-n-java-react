// app/Filtro/SearchFilter.tsx
import React, { useState } from 'react';
import {
  BuildingOfficeIcon,
  SunIcon,
  PlusIcon,
  HeartIcon,
  BellIcon,
  UserIcon,
  MapIcon,
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
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onFilter(selectedFilters); // Emitir los filtros al componente padre
    onClose(); // Cerrar el filtro
  };

  return (
    <div className="container mx-auto p-2">
      <div className="bg-gray-200 p-2 rounded-md max-h-[80vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filtros</h2>
        </div>

        {/* Sección Nombre */}
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">Nombre</label>
          <input
            type="text"
            value={selectedFilters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Buscar por nombre"
          />
        </div>

        {/* Sección Dirección */}
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2">Dirección</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Ciudad')}
              >
                <BuildingOfficeIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Ciudad</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Playa')}
              >
                <SunIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Playa</span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10 cursor-pointer"
                onClick={() => handleFilterChange('address', 'Añadir')}
              >
                <PlusIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Añadir</span>
            </div>
          </div>
        </div>

        {/* Sección Precio */}
        <div className="mb-4">
          <label className="block text-base font-semibold mb-2">Precio</label>
          <input
            type="number"
            value={selectedFilters.price}
            onChange={(e) => handleFilterChange('price', e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ingrese precio máximo"
          />
        </div>

        {/* Sección Tiempo */}
        <div className="my-4">
          <label className="block text-xs font-medium text-gray-700">Tiempo (horas)</label>
          <input
            type="range"
            min={0}
            max={24}
            value={selectedFilters.tiempo}
            onChange={(e) => handleFilterChange('tiempo', parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-xs">
            <span>0 h</span>
            <span>24 h</span>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={applyFilters}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
