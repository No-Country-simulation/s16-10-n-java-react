"use client";
import React, { useState, useEffect } from 'react';

const LocationTracker: React.FC = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);

  useEffect(() => {
    // Verificar si el navegador soporta la API de geolocalización
    if (navigator.geolocation) {
      // Solicitar la ubicación del usuario
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition(pos);
        },
        (err) => {
          setError(err);
        }
      );
    } else {
      setError({ code: 0, message: 'Geolocation is not supported by this browser.' });
    }
  }, []);

  const renderPosition = () => {
    if (position) {
      const { latitude, longitude } = position.coords;
      return (
        <div>
          <p><strong>Latitude:</strong> {latitude}</p>
          <p><strong>Longitude:</strong> {longitude}</p>
        </div>
      );
    }
    return null;
  };

  const renderError = () => {
    if (error) {
      return (
        <div>
          <p><strong>Error:</strong> {error.message}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-4">Ubicación del Usuario</h2>
      {renderPosition()}
      {renderError()}
    </div>
  );
};

export default LocationTracker;
