// app/Filtro/SearchFilter.tsx
"use client"; // Marca el componente como Client Component

import React, { ChangeEvent, useState } from 'react';

interface SearchFilterProps {
  onFilter: (filters: { [key: string]: string }) => void;
  onClose: () => void; // Función para cerrar el modal
}

const SearchFilter: React.FC<SearchFilterProps> = ({ onFilter, onClose }) => {
  const [filters, setFilters] = useState<{ [key: string]: string }>({
    reach: '',
    price: '',
    color: '',
    address: '',
  });

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onFilter({
      ...filters,
      [name]: value
    });
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <input
        name="reach"
        placeholder="Reach"
        value={filters.reach}
        onChange={handleFilterChange}
        className="block mb-2 p-2 border rounded"
      />
      <input
        name="price"
        placeholder="Price"
        value={filters.price}
        onChange={handleFilterChange}
        className="block mb-2 p-2 border rounded"
      />
      <input
        name="color"
        placeholder="Color"
        value={filters.color}
        onChange={handleFilterChange}
        className="block mb-2 p-2 border rounded"
      />
      <input
        name="address"
        placeholder="Address"
        value={filters.address}
        onChange={handleFilterChange}
        className="block mb-2 p-2 border rounded"
      />
      <button
        onClick={onClose}
        className="mt-2 p-2 bg-red-500 text-white rounded"
      >
        Close
      </button>
    </div>
  );
};

export default SearchFilter;
