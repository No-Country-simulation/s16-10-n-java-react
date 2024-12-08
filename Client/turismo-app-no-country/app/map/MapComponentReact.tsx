'use client';

import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const myIcon = L.divIcon({
    className: 'my-icon',
    iconSize: [5, 5],
    iconAnchor: [0, 0],
});

const MyComponent: React.FC<Props> = ({ places }) => {
    const map = useMap();
    console.log('Mapa actual:', map);
    map.fitBounds([places.map((place: any) => place.coordinates)], {});
    return null;
};

interface Props {
    places: any;
}

const MapComponentReact: React.FC<Props> = ({ places }) => {
    console.log(places);
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
                <MyComponent places={places} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {places.map((place: any) => (
                    <Marker
                        key={place.id}
                        position={[place.coordinates[0], place.coordinates[1]]}
                        icon={myIcon}
                    >
                        <Popup>
                            {place.title} <br /> {place.description}.
                        </Popup>
                    </Marker>
                ))}
                {/* <Marker position={[51.505, -0.09]} icon={myIcon}>
                    <Popup>
                        HOLA <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[51.3, -0.05]} icon={myIcon}>
                    <Popup>
                        HOLA <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </>
    );
};

export default MapComponentReact;
