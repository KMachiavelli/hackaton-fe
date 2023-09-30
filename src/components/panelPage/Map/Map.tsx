import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { StyledMap, StyledMapContainer } from "./styles";

export const Map = () => {
  const position = [51.505, -0.09];
  return (
    <StyledMap>
      <StyledMapContainer center={[52.2, 21.09]} zoom={13}>
        <TileLayer
          //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[52.2, 21.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </StyledMapContainer>
    </StyledMap>
  );
};
