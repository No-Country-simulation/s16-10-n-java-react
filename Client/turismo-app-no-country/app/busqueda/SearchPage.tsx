"use client"; // Marcar el componente como un "Client Component"

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard'; // Ajuste de la ruta
import products from '../../public/products.json';

interface Product {
  id: number;
  name: string;
  href: string;
  reach: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
  coordinates: [number, number];
  address: string;
}

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtrar productos según la consulta de búsqueda
  const filteredProducts = products.filter((product: Product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SearchBar onSearch={setSearchQuery} />
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product: Product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
