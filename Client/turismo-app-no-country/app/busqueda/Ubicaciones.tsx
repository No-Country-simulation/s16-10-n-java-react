import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  reach: string;
  price: string;
  color: string;
}

interface UbicacionesProps {
  products: Product[];
}

const Ubicaciones: React.FC<UbicacionesProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No hay productos disponibles.</div>; // Manejo de caso sin productos
  }

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Ubicaciones;