import React from 'react';
import MapComponent from '../map/MapComponent';

// Definimos la interfaz para los productos
interface Product {
  id: number;
  name: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  reach: string;
  price: string;
  color: string;
  address: string;
  coordinates: [number, number]; // Coordenadas como una tupla de dos números
}

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.address}</p>
      <p className="text-gray-500">Alcance: {product.reach}</p>
      <p className="text-gray-500">Precio: {product.price}</p>
      <p className="text-gray-500">Color: {product.color}</p>

      <MapComponent coordinates={product.coordinates} />
    </div>
  );
};

export default ProductDetail;
