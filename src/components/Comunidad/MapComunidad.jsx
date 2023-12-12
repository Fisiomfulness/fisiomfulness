"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const MapComunidad = () => {
  const custtomIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
    iconSize: [38, 38],
  });

  return (
    <div className="hidden md:w-1/2 md:flex h-screen">
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-full h-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="https://www.openstreetmap.org/copyright contributors"
        />
        <Marker position={[51.505, -0.09]} icon={custtomIcon}>
          <Popup>Profesional 1</Popup>
        </Marker>
        <Marker position={[51.5, -0.06]} icon={custtomIcon}>
          <Popup>Profesional 2</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComunidad;
