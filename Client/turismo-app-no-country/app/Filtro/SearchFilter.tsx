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
import CardFilter from "../_ui/CardFilter";

interface SearchFilterProps {
  onFilter: (filters: {
    name?: string;
    address?: string;
    price?: string;
    tiempo?: number;
  }) => void;
  onClose: () => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilter, onClose }) => {
  const spaces = [
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

  const activities = [
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

  const relocations = [
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
            {spaces &&
              spaces.map((space) => (
                <CardFilter card={space} handleFilterChange={handleFilterChange}/>
              ))}
            <ControlPointIcon className="text-primary cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="m-0 text-sm font-roboto text-black">Actividad</h3>
          <div className="flex justify-between items-center">
            {activities &&
              activities.map((activity) => (
                <CardFilter card={activity} handleFilterChange={handleFilterChange}/>
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
            {relocations &&
              relocations.map((relocation) => (
                <CardFilter card={relocation} handleFilterChange={handleFilterChange}/>
              ))}
            <ControlPointIcon className="text-primary cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchFilter;
