import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  coordinates?: [number, number]; // Coordenadas como números
}

const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Verifica que las coordenadas sean válidas
    if (!coordinates || coordinates.length !== 2) {
      console.error("Coordenadas inválidas o no proporcionadas:", coordinates);
      return;
    }

    const [lat, lng] = coordinates;

    // Verifica que los valores estén en el rango válido
    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
      console.error("Coordenadas inválidas:", coordinates);
      return;
    }

    // Inicializa el mapa solo si no está inicializado
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([lat, lng], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstanceRef.current);

      // Añadir un marcador en las coordenadas proporcionadas
      L.marker([lat, lng]).addTo(mapInstanceRef.current)
        .bindPopup('Ubicación')
        .openPopup();
    } else {
      // Si el mapa ya está inicializado, solo actualiza la vista
      mapInstanceRef.current.setView([lat, lng], 13);
    }
  }, [coordinates]);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
