import React from 'react';
import MapComponent from '../map/MapComponent';
import LocationTracker from '../map/LocationTracker';
import { Card, Rating } from '@mui/material';

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const [userLocation, setUserLocation] = React.useState<[number, number] | null>(null);

  // Obtén la ubicación del usuario y establece el estado
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error obteniendo la ubicación del usuario:", error);
        }
      );
    }
  }, []);

  const coordinates = userLocation ? [userLocation, product.coordinates] : [product.coordinates];

  return (
    <Card className="container flex flex-col ">
      <div className='w-full  border border-gray-300 rounded-lg shadow-md'>
        {coordinates.length >= 2 && <MapComponent coordinates={coordinates} />}
        </div>
        <div className='flex flex-row place-self-center items-center'> 
      <h2 className="text-xl font-bold ">{product.name}</h2>
      <Rating name="read-only" value={4} readOnly />
      <p className="text-gray-600">{product.reach}</p>
      </div>
      <Card className='w-96 h-96 p-8 rounded-lg bg-slate-50'>
      <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover rounded-lg" />
      <p className="text-gray-500">Alcance: {product.reach}</p>
      <p className="text-gray-500">Precio: {product.price}</p>
      <p className="text-gray-600">{product.address}</p>
      </Card>
      
    </Card>
  );
};

export default ProductDetail;
