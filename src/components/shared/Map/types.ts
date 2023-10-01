import { AnimalTO } from '../../../services/types';

export type MapPoint = Pick<
  AnimalTO,
  'detectedAnimal' | 'localization' | 'uuid'
>;

export enum AnimalType {
  DOG = 'dog',
  CAT = 'cat',
  DEER = 'deer',
  HARE = 'hare',
  HOG = 'hog',
  FOX = 'fox',
}
