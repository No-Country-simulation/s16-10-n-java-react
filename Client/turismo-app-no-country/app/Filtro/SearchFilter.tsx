import React from 'react';
import {
  BuildingOfficeIcon,
  SunIcon,
  PlusIcon,
  HeartIcon,
  BellIcon,
  UserIcon, // Alternativa para caminar
  MapIcon, // Alternativa para bicicleta
  RocketLaunchIcon, // Nuevo ícono para 'Carro'
  TruckIcon // Alternativa para bus
} from '@heroicons/react/24/outline';

const SearchFilter = () => {
  return (
    <div className="container mx-auto p-2">
      <div className="bg-gray-200 p-2 rounded-md max-h-[80vh] overflow-auto"> {/* Ajuste de padding y altura */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Filtros</h2>
          
        </div>

        {/* Sección Espacio */}
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2">Espacio</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Ciudad</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <SunIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Playa</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <PlusIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Añadir</span>
            </div>
          </div>
        </div>

        {/* Sección Actividad */}
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2">Actividad</h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <BellIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Arte</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <BellIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Gourmet</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <HeartIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Relax</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <BellIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Fitness</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <PlusIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Añadir</span>
            </div>
          </div>
        </div>

        {/* Sección Traslado */}
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2">Traslado</h3>
          <div className="grid grid-cols-4 gap-2">
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <UserIcon className="h-5 w-5 text-gray-700" /> {/* Alternativa para caminar */}
              </div>
              <span className="text-xs">Caminar</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <MapIcon className="h-5 w-5 text-gray-700" /> {/* Alternativa para bicicleta */}
              </div>
              <span className="text-xs">Bicicleta</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <RocketLaunchIcon className="h-5 w-5 text-gray-700" /> {/* Reemplaza con el nuevo ícono */}
              </div>
              <span className="text-xs">Carro</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <TruckIcon className="h-5 w-5 text-gray-700" /> {/* Alternativa para bus */}
              </div>
              <span className="text-xs">Bus</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gray-300 p-1 rounded-md flex justify-center items-center w-10 h-10">
                <PlusIcon className="h-5 w-5 text-gray-700" />
              </div>
              <span className="text-xs">Añadir</span>
            </div>
          </div>
        </div>

        <div className="my-4">
          <label className="block text-xs font-medium text-gray-700">Distancia</label>
          <input type="range" min={0} max={100} className="w-full" />
          <div className="flex justify-between text-xs">
            <span>0 km</span>
            <span>100 km</span>
          </div>
        </div>

        <div className="my-4">
          <label className="block text-xs font-medium text-gray-700">Tiempo</label>
          <input type="range" min={0} max={24} className="w-full" />
          <div className="flex justify-between text-xs">
            <span>0 hs</span>
            <span>24 hs</span>
          </div>
        </div>

        <button className="w-full bg-gray-500 text-white py-2 rounded-md mt-4 text-sm">Filtros Premium</button>
      </div>
    </div>
  );
};

export default SearchFilter;
