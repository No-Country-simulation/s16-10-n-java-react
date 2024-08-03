'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';

interface MapComponentProps {
    coordinates: [number, number][]; // Lista de coordenadas (mínimo dos puntos)
}

const myIcon = L.divIcon({
    className: 'my-icon',
    iconSize: [10, 10],
    iconAnchor: [20, 20],
});

const MapComponent: React.FC<MapComponentProps> = ({ coordinates }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);
    const mapInstanceRef = useRef<L.Map | null>(null);

    // useEffect(() => {
    //     if (!mapRef.current) return;

    //     // Verifica que las coordenadas sean válidas
    //     if (!coordinates || coordinates.length !== 2) {
    //         console.error(
    //             'Coordenadas inválidas o no proporcionadas:',
    //             coordinates
    //         );
    //         return;
    //     }

    //     const [lat, lng] = coordinates;

    //     // Verifica que los valores estén en el rango válido
    //     if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    //         console.error('Coordenadas inválidas:', coordinates);
    //         return;
    //     }

    //     // Inicializa el mapa solo si no está inicializado
    //     if (!mapInstanceRef.current) {
    //         mapInstanceRef.current = L.map(mapRef.current).setView(
    //             [lat, lng],
    //             13
    //         );

    //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             attribution:
    //                 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //         }).addTo(mapInstanceRef.current);

    //         // Añadir un marcador en las coordenadas proporcionadas
    //         L.marker([lat, lng], { icon: myIcon })
    //             .addTo(mapInstanceRef.current);
    //     } else {
    //         // Si el mapa ya está inicializado, solo actualiza la vista
    //         mapInstanceRef.current.setView([lat, lng], 13);
    //     }
    // }, [coordinates]);

    // useEffect(() => {

    //     if (!mapRef.current || coordinates.length < 2) return;

    //     // Inicializa el mapa solo si no está inicializado
    //     if (!mapInstanceRef.current) {
    //         mapInstanceRef.current = L.map(mapRef.current).setView(
    //             coordinates[0], // Inicializa con la primera coordenada
    //             13
    //         );

    //         L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //             attribution:
    //                 '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    //         }).addTo(mapInstanceRef.current);
    //     }

    //     // Limpiar el mapa si ya se ha inicializado
    //     if (mapInstanceRef.current) {
    //         mapInstanceRef.current.eachLayer((layer) => {
    //             if (layer instanceof L.Marker || layer instanceof L.Polyline) {
    //                 mapInstanceRef.current?.removeLayer(layer);
    //             }
    //         });
    //     }

    //     // Añadir marcadores para cada coordenada
    //     coordinates.forEach(([lat, lng]) => {
    //         L.marker([lat, lng], { icon: myIcon }).addTo(mapInstanceRef.current!);
    //     });

    //     // Dibujar la ruta si hay más de un punto
    //     if (coordinates.length > 1) {
    //         const control = L.Routing.control({
    //             waypoints: coordinates.map(([lat, lng]) => L.latLng(lat, lng)),
    //             lineOptions: {
    //                 styles: [{ color: '#FF5722', weight: 6 }] // Cambia el color y peso para mejorar la visibilidad
    //             },
    //             createMarker: () => null, // No mostrar marcadores en los puntos intermedios
    //             routeWhileDragging: false,
    //             collapsible: true, // Permite colapsar la información de la ruta
    //             geocoder: null, // Evita mostrar el geocodificador
    //             show: false // Oculta la información de la ruta
    //         }).addTo(mapInstanceRef.current);

    //         // Eliminar el contenedor de rutas después de que se genere
    //         control.on('routesfound', () => {
    //             const routingContainer = document.querySelector('.leaflet-routing-container');
    //             if (routingContainer) {
    //                 routingContainer.style.display = 'none';
    //             }
    //         });

    //         // También se puede intentar usar un selector CSS para ocultar el contenedor
    //         const style = document.createElement('style');
    //         style.innerHTML = `
    //             .leaflet-routing-container {
    //                 display: none !important;
    //             }
    //         `;
    //         document.head.appendChild(style);

    //     }
    // }, [coordinates]);

    return <div ref={mapRef} className="h-96 w-full relative"></div>;
};

export default MapComponent;
