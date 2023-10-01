/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { AnimalTO, SubmittedAnimalTO } from '../types';
import { BASE_URL, ENDPOINTS, METHODS } from '../../xhr/config';

export interface AnimalServiceI {
  getDomesticAnimals: () => Promise<AnimalTO[]>;
  postAnimal: (body: SubmittedAnimalTO) => Promise<Response>;
}

export const AnimalServiceContext = createContext<AnimalServiceI>(
  {} as AnimalServiceI
);

export const useAnimals = () => {
  const { POST, GET } = METHODS;
  const { DOMESTIC_ANIMAL, ANIMAL } = ENDPOINTS;

  const getDomesticAnimals: AnimalServiceI['getDomesticAnimals'] = () => {
    return GET(`${BASE_URL}${DOMESTIC_ANIMAL}`).then((response) =>
      response.json()
    );
  };
  const postAnimal: AnimalServiceI['postAnimal'] = (
    body: SubmittedAnimalTO
  ) => {
    return POST(`${BASE_URL}${ANIMAL}`, body);
  };

  return {
    getDomesticAnimals,
    postAnimal,
  };
};

interface AnimalServiceProviderI {
  children: React.ReactElement;
}

export const AnimalServiceProvider = ({ children }: AnimalServiceProviderI) => {
  return (
    <AnimalServiceContext.Provider value={useAnimals()}>
      {children}
    </AnimalServiceContext.Provider>
  );
};
export const useAnimalService = () => {
  return useContext(AnimalServiceContext);
};
