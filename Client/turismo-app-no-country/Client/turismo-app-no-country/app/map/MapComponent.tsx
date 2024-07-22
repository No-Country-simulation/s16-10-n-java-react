// components/MapComponent.tsx

'use client';  // Añadir esta línea para marcar el componente como del lado del cliente

import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = () => {
  useEffect(() => {
    const map = L.map('map').setView([-34.6037, -58.3816], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([-34.6037, -58.3816]).addTo(map)
      .bindPopup('Colocar direccion')
      .openPopup();

    // Cleanup function to remove map instance on unmount
    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map"className='w-80'  style={{ height: '500px', width: '30%' }}></div>
  );
};

export default MapComponent;
