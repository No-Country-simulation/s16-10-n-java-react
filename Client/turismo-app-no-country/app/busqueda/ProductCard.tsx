import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, Rating } from '@mui/material';
import { Button } from '@mui/material';

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  reach: string;
  price: string;
  color: string;
  coordinates: [number, number];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  // Verificar y mostrar las coordenadas en la consola
  console.log('Producto en ProductCard:', product);
  console.log('Coordenadas en ProductCard:', product.coordinates);

  const handleViewDetails = () => {
    console.log('Redirigiendo a detalles del producto con ID:', product.id); // Para depuración
    try {
      router.push(`/detalle/${product.id}`); // La URL debe ser correcta
    } catch (error) {
      console.error('Error al redirigir a la página de detalles del producto:', error);
    }
  };

  return (
    <Card key={product.id} className="group relative w-80 font-roboto">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={product.imageAlt}
          src={product.imageSrc}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between font-roboto">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              {product.name}
            </a>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{product.reach}</p>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
      <div className='flex items-center font-roboto'>
        <Rating name="read-only" value={4} readOnly />
        <Button className="mt-4 px-2 py-2 bg-primary text-white rounded font-roboto" onClick={handleViewDetails}>
          Detalles
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard;
