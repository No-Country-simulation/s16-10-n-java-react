"use client";
import React, { useState, useEffect } from 'react';

const LocationTracker: React.FC = () => {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [error, setError] = useState<GeolocationPositionError | null>(null);
  const [tracking, setTracking] = useState(false);

  useEffect(() => {
    let watchId: number | null = null;

    if (tracking) {
      if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(
          (pos) => {
            setPosition(pos);
          },
          (err) => {
            setError(err);
          },
          { enableHighAccuracy: true }
        );
      } else {
        // setError({
        //   code: 0,
        //   message: 'Geolocation is not supported by this browser.'
        // });
        console.error('Geolocation is not supported by this browser.');
      }
    }

    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [tracking]);

  const handleTrackLocation = () => {
    setTracking(true);
  };

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
      <button
        onClick={handleTrackLocation}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        disabled={tracking}
      >
        {tracking ? 'Tracking...' : 'Track Location'}
      </button>
    </div>
  );
};

export default LocationTracker;
