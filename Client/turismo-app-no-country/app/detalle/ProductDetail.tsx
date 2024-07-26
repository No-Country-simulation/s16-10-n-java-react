import React from 'react';
import MapComponent from '../map/MapComponent';
import LocationTracker from '../map/LocationTracker';

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
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-600">{product.address}</p>
      <p className="text-gray-500">Alcance: {product.reach}</p>
      <p className="text-gray-500">Precio: {product.price}</p>
      {coordinates.length >= 2 && <MapComponent coordinates={coordinates} />}
    </div>
  );
};

export default ProductDetail;
