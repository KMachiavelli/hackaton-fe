/* eslint-disable @typescript-eslint/no-explicit-any */
import { Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { StyledMap, StyledMapContainer } from './styles';
import { useAppContext } from '../../../contexts/AppContext/AppContext';
import { MapPoint } from './types';
import { ICONS } from './icons';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { LatLngTuple } from 'leaflet';

interface MapI {
  points: Array<MapPoint>;
  selectedAnimalUUID: string;
  setSelectedAnimalUUID: Dispatch<SetStateAction<string>>;
}

export const Map = ({
  points,
  selectedAnimalUUID,
  setSelectedAnimalUUID,
}: MapI) => {
  const { themeMode } = useAppContext();
  const [centerPoint, setCenterPoint] = useState<LatLngTuple>([52, 21]);

  const handleMapClick = (uuid: string) => () => {
    setSelectedAnimalUUID(uuid);
  };

  useEffect(() => {
    const filtered = points.filter(
      (point) => point.uuid === selectedAnimalUUID
    );
    if (filtered.length) {
      console.log(filtered);
      setCenterPoint(filtered[0].localization);
    }
  }, [selectedAnimalUUID]);

  console.log(centerPoint);

  return (
    <StyledMap themeMode={themeMode}>
      <StyledMapContainer center={centerPoint} zoom={15}>
        <ChangeView center={centerPoint} />
        <TileLayer
          //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map(({ localization, detectedAnimal, uuid }) => (
          <Marker
            position={localization}
            icon={ICONS[detectedAnimal.toLowerCase() as 'hog']}
            eventHandlers={{ click: handleMapClick(uuid) }}
          ></Marker>
        ))}
      </StyledMapContainer>
    </StyledMap>
  );
};

const ChangeView = ({ center }: any) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center]);

  return null;
};
