import { useState, useEffect } from 'react';
import { useAnimalService } from '../../../services/AnimalService/AnimalServiceContext';
import { AnimalTO } from '../../../services/types';
import { StyledFindLostPetSearchPanel } from './styles';
import { Map } from '../../shared/Map/Map';
import { AnimalsBar } from '../../shared/AnimalsBar/AnimalsBar';

export const FindLostPetSearchPanel = () => {
  const { getDomesticAnimals } = useAnimalService();
  const [animals, setAnimals] = useState<AnimalTO[]>([]);
  const [selectedAnimalUUID, setSelectedAnimalUUID] = useState('');

  useEffect(() => {
    getDomesticAnimals().then(setAnimals);
  }, []);

  return (
    <StyledFindLostPetSearchPanel>
      <Map
        points={animals}
        selectedAnimalUUID={selectedAnimalUUID}
        setSelectedAnimalUUID={setSelectedAnimalUUID}
      />
      <AnimalsBar
        animals={animals}
        selectedAnimalUUID={selectedAnimalUUID}
        setSelectedAnimalUUID={setSelectedAnimalUUID}
      />
    </StyledFindLostPetSearchPanel>
  );
};
