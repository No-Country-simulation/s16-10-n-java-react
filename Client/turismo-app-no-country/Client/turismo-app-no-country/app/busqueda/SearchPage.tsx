"use client"; // Marcar el componente como un "Client Component"

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard'; // Ajuste de la ruta

interface Product {
  id: number;
  name: string;
  href: string;
  reach: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
}

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const products: Product[] = [
    {
      id: 1,
      name: 'Parque Central',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/248280/pexels-photo-248280.jpeg',
      imageAlt: 'Vista del Parque Central.',
      reach: "10k",
      price: 'Entrada gratuita',
      color: 'Verde',
    },
    {
      id: 2,
      name: 'Jardín Botánico',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1108595/pexels-photo-1108595.jpeg',
      imageAlt: 'Flores en el Jardín Botánico.',
      reach: "10k",
      price: '$10',
      color: 'Multicolor',
    },
    {
      id: 3,
      name: 'Museo de Historia',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/2595805/pexels-photo-2595805.jpeg',
      imageAlt: 'Fachada del Museo de Historia.',
      reach: "10k",
      price: '$5',
      color: 'Gris',
    },
    {
      id: 4,
      name: 'Playa del Sol',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3453335/pexels-photo-3453335.jpeg',
      imageAlt: 'Playa del Sol al atardecer.',
      reach: "10k",
      price: 'Entrada gratuita',
      color: 'Azul',
    },
    {
      id: 5,
      name: 'Parque Nacional',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1485772/pexels-photo-1485772.jpeg',
      imageAlt: 'Montañas en el Parque Nacional.',
      reach: "10k",
      price: '$20',
      color: 'Verde',
    },
    {
      id: 6,
      name: 'Centro Cultural',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/3738644/pexels-photo-3738644.jpeg',
      imageAlt: 'Eventos en el Centro Cultural.',
      reach: "10k",
      price: '$15',
      color: 'Beige',
    },
    {
      id: 7,
      name: 'Cascada de la Alegría',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/733865/pexels-photo-733865.jpeg',
      imageAlt: 'Cascada en el Parque Natural.',
      reach: "10k",
      price: 'Entrada gratuita',
      color: 'Azul',
    },
    {
      id: 8,
      name: 'Zona Arqueológica',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1625246/pexels-photo-1625246.jpeg',
      imageAlt: 'Ruinas en la Zona Arqueológica.',
      reach: "10k",
      price: '$12',
      color: 'Terracota',
    },
    {
      id: 9,
      name: 'Plaza Mayor',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1704125/pexels-photo-1704125.jpeg',
      imageAlt: 'Actividades en la Plaza Mayor.',
      reach: "10k",
      price: 'Entrada gratuita',
      color: 'Gris',
    },
    {
      id: 10,
      name: 'Mirador del Cielo',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1600790/pexels-photo-1600790.jpeg',
      imageAlt: 'Vista panorámica desde el mirador.',
      reach: "10k",
      price: '$8',
      color: 'Azul',
    },
    {
      id: 11,
      name: 'Parque de Atracciones',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1588606/pexels-photo-1588606.jpeg',
      imageAlt: 'Diversión en el Parque de Atracciones.',
      reach: "10k",
      price: '$30',
      color: 'Multicolor',
    },
    {
      id: 12,
      name: 'Bosque Encantado',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1603074/pexels-photo-1603074.jpeg',
      imageAlt: 'Senderos en el Bosque Encantado.',
      reach: "10k",
      price: 'Entrada gratuita',
      color: 'Verde',
    },
    {
      id: 13,
      name: 'Acantilados del Océano',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/2863534/pexels-photo-2863534.jpeg',
      imageAlt: 'Acantilados sobre el océano.',
      reach: "10k",
      price: '$10',
      color: 'Azul',
    },
    {
      id: 14,
      name: 'Parque de los Dinosaurios',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/1373604/pexels-photo-1373604.jpeg',
      imageAlt: 'Réplicas de dinosaurios en el parque.',
      reach: "10k",
      price: '$15',
      color: 'Verde',
    },
    {
      id: 15,
      name: 'Estadio Municipal',
      href: '#',
      imageSrc: 'https://images.pexels.com/photos/2062560/pexels-photo-2062560.jpeg',
      imageAlt: 'Eventos deportivos en el Estadio Municipal.',
      reach: "10k",
      price: '$20',
      color: 'Gris',
    },
  ];
 
 

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SearchBar onSearch={setSearchQuery} />
      <div className="container mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flex justify-center">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default SearchPage;