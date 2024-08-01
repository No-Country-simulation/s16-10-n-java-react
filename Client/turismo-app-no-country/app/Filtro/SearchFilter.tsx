import React, { useState } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LandscapeIcon from "@mui/icons-material/Landscape";
import ForestIcon from "@mui/icons-material/Forest";
import PaletteIcon from "@mui/icons-material/Palette";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

import {
  BuildingOfficeIcon,
  SunIcon,
  PlusIcon,
  PaperAirplaneIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

interface SearchFilterProps {
  onFilter: (key:any) => void;
  onClose: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilter, onClose }) => {
  const espacios = [
    {
      id: 1,
      icon: <LocationCityIcon />,
      title: "Ciudad",
    },
    {
      id: 2,
      icon: <BeachAccessIcon />,
      title: "Playa",
    },
    {
      id: 3,
      icon: <LandscapeIcon />,
      title: "Montaña",
    },
    {
      id: 4,
      icon: <ForestIcon />,
      title: "Campo",
    },
  ];

  const actividades = [
    {
      id: 1,
      icon: <PaletteIcon />,
      title: "Arte",
    },
    {
      id: 2,
      icon: <RestaurantIcon />,
      title: "Gourmet",
    },
    {
      id: 3,
      icon: <SelfImprovementIcon />,
      title: "Relax",
    },
    {
      id: 4,
      icon: <FitnessCenterIcon />,
      title: "Fitness",
    },
  ];

  const traslados = [
    {
      id: 1,
      icon: <DirectionsWalkIcon />,
      title: "Caminar",
    },
    {
      id: 2,
      icon: <DirectionsBikeIcon />,
      title: "Bicicleta",
    },
    {
      id: 3,
      icon: <DirectionsCarIcon />,
      title: "Carro",
    },
    {
      id: 4,
      icon: <DirectionsBusIcon />,
      title: "Bus",
    },
  ];

  const [selectedFilters, setSelectedFilters] = useState({
    name: "",
    address: "",
    price: "",
    tiempo: 0,
    distancia: 0,
  });

  const handleFilterChange = (key: string, value: string | number) => {
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  };

  const applyFilters = () => {
    onFilter(selectedFilters); // Emitir los filtros al componente padre
    onClose(); // Cerrar el filtro
  };

  return (
    <>
      <div className="flex justify-center items-center p-2 bg-derby">
        <h2 className="font-roboto m-0 text-sm">Filtros</h2>
      </div>
      <div className="px-5 py-6 flex flex-col gap-5">
        <div className="">
          <h3 className="m-0 text-sm font-roboto text-blackred">Espacio</h3>
          <div className="flex justify-between items-center">
            {espacios &&
              espacios.map((espacio) => (
                <div className="flex flex-col items-center" key={espacio.id}>
                  <div
                    className="bg-derby border border-solid border-primary p-4 rounded-md flex justify-center items-center cursor-pointer"
                    onClick={() => handleFilterChange("address", espacio.title)}
                  >
                    {espacio.icon}
                  </div>
                  <span className="text-xs font-light bg-primary text-white w-full text-center rounded mt-1">
                    {espacio.title}
                  </span>
                </div>
              ))}
            <ControlPointIcon className="text-primary cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="m-0 text-sm font-roboto text-black">Actividad</h3>
          <div className="flex justify-between items-center">
            {actividades &&
              actividades.map((actividad) => (
                <div className="flex flex-col items-center" key={actividad.id}>
                  <div
                    className="bg-derby border border-solid border-primary p-4 rounded-md flex justify-center items-center cursor-pointer"
                    onClick={() =>
                      handleFilterChange("address", actividad.title)
                    }
                  >
                    {actividad.icon}
                  </div>
                  <span className="text-xs font-light bg-primary text-white w-full text-center rounded mt-1">
                    {actividad.title}
                  </span>
                </div>
              ))}
            <ControlPointIcon className="text-primary cursor-pointer" />
          </div>
        </div>

        {/* Sección Tiempo */}
        <div className="">
          <label className="font-roboto text-black mb-2">Distancia</label>
          <input
            defaultValue={100}
            type="range"
            min={0}
            max={200}
            value={selectedFilters.distancia}
            onChange={(e) =>
              handleFilterChange("distancia", parseInt(e.target.value))
            }
            className="w-full accent-secondary cursor-pointer"
          />
          <div className="flex justify-between text-xs text-black">
            <span>0 km</span>
            <span>{selectedFilters.distancia || "100"} km</span>
            <span>200 km</span>
          </div>
        </div>
            <button className="rounded text-white bg-primary border-0 p-3 cursor-pointer">Filtros premium</button>
        <div className="">
          <label className="font-roboto text-blackred mb-2">Tiempo</label>
          <input
            type="range"
            min={0}
            max={24}
            value={selectedFilters.tiempo}
            onChange={(e) =>
              handleFilterChange("tiempo", parseInt(e.target.value))
            }
            className="w-full accent-secondary cursor-pointer"
          />
          <div className="flex justify-between text-xs text-blackred">
            <span>0 h</span>
            <span>{selectedFilters.tiempo} h</span>
            <span>24 h</span>
          </div>
        </div>
        <div>
        <h3 className="m-0 text-sm font-roboto text-blackred">Espacio</h3>
          <div className="flex justify-between items-center">
            {traslados &&
              traslados.map((traslado) => (
                <div className="flex flex-col items-center" key={traslado.id}>
                  <div
                    className="bg-derby border border-solid border-primary p-4 rounded-md flex justify-center items-center cursor-pointer"
                    onClick={() => handleFilterChange("address", traslado.title)}
                  >
                    {traslado.icon}
                  </div>
                  <span className="text-xs font-light bg-primary text-white w-full text-center rounded mt-1">
                    {traslado.title}
                  </span>
                </div>
              ))}
            <ControlPointIcon className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
