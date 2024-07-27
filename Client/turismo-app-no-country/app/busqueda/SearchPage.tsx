// app/SearchPage.tsx
"use client"; // Marca el componente como Client Component

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard'; // Ajuste de la ruta
import products from '../../public/products.json';
import SearchFilter from '../Filtro/SearchFilter';

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
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filters, setFilters] = useState({
    reach: '',
    price: '',
    color: '',
    address: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    applyFilters(query, filters);
  };

  const handleFilter = (newFilters: { [key: string]: string }) => {
    setFilters(newFilters);
    applyFilters(searchQuery, newFilters);
  };

  const applyFilters = (query: string, filters: { [key: string]: string }) => {
    let updatedProducts = products;

    if (query) {
      updatedProducts = updatedProducts.filter((product: Product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filters.reach) {
      updatedProducts = updatedProducts.filter(product =>
        product.reach.toLowerCase().includes(filters.reach.toLowerCase())
      );
    }

    if (filters.price) {
      updatedProducts = updatedProducts.filter(product =>
        product.price.toLowerCase().includes(filters.price.toLowerCase())
      );
    }

    if (filters.color) {
      updatedProducts = updatedProducts.filter(product =>
        product.color.toLowerCase().includes(filters.color.toLowerCase())
      );
    }

    if (filters.address) {
      updatedProducts = updatedProducts.filter(product =>
        product.address.toLowerCase().includes(filters.address.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className='flex flex-row'>
        <SearchBar onSearch={handleSearch} />
        <button 
          onClick={toggleFilter} 
          className="ml-4 flex items-center justify-center bg-primary text-white rounded h-10 border-0"
        >
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
