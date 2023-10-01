/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from 'react';
import { AnimalTO } from '../../../services/types';
import { StyledPresentPanel } from './styles';
import { BASE_SOCKET } from '../../../xhr/config';
import { Map } from '../../shared/Map/Map';
import { AnimalsBar } from '../../shared/AnimalsBar/AnimalsBar';
import { useUserContext } from '../../../contexts/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';

export const PresentPanel = () => {
  const [animals, setAnimals] = useState<AnimalTO[]>([]);
  const [selectedAnimalUUID, setSelectedAnimalUUID] = useState('');
  const { setUsername } = useUserContext();
  const navigate = useNavigate();

  const ws = useMemo(
    () =>
      new WebSocket(
        `${BASE_SOCKET}?token=` + localStorage.getItem('token')?.split(' ')[1]
      ),
    []
  );

  useEffect(() => {
    if (ws) {
      ws.onopen = (ev: Event) => {
        console.log(ev);
        ws.send('Connected');
      };

      ws.onmessage = (ev: MessageEvent<string>) => {
        setAnimals(JSON.parse(ev.data).results);
      };

      ws.onerror = () => {
        setUsername('');
        localStorage.removeItem('token');
        navigate(`/${ROUTES.LOGIN}`);
      };
    }
  }, [ws]);

  useEffect(() => {
    console.log(animals);
  }, [animals]);

  const handleResolveDetection = (uuid: string) => () => {
    ws.send(uuid);
  };

  return (
    <StyledPresentPanel>
      <Map
        points={animals}
        selectedAnimalUUID={selectedAnimalUUID}
        setSelectedAnimalUUID={setSelectedAnimalUUID}
      />
      <AnimalsBar
        animals={animals}
        selectedAnimalUUID={selectedAnimalUUID}
        setSelectedAnimalUUID={setSelectedAnimalUUID}
        handleResolveDetection={handleResolveDetection}
      />
    </StyledPresentPanel>
  );
};
