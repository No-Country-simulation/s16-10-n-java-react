'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const myIcon = L.divIcon({
    className: 'my-icon',
    iconSize: [5, 5],
    iconAnchor: [20, 20],
});

const MyComponent = () => {
    const map = useMap();
    console.log('Mapa actual:', map);
    map.fitBounds([[51.5, -0.09], [51.3, -0.05]]);
    return null;
};

const MapComponentReact = () => {
    return (
        <>
            <MapContainer
                
                zoom={13}
                scrollWheelZoom={false}
                style={{
                    height: '700px',
                    width: '100%',
                    maxWidth: 'full',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                }}
                boundsOptions={{ padding: [50, 50] }}
            >
                <MyComponent />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={myIcon}>
                    <Popup>
                        HOLA <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[51.3, -0.05]} icon={myIcon}>
                    <Popup>
                        HOLA <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default MapComponentReact;
