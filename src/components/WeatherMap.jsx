import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Komponen bantu untuk update posisi peta saat prop lat/lon berubah
const RecenterMap = ({ lat, lon }) => {
  const map = useMap();
  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon], 10);
    }
  }, [lat, lon, map]);
  return null;
};

const WeatherMap = ({ lat, lon, city }) => {
  return (
    <MapContainer
      center={[lat, lon]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "300px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lon]}>
        <Popup>{city}</Popup>
      </Marker>
      <RecenterMap lat={lat} lon={lon} />
    </MapContainer>
  );
};

export default WeatherMap;
