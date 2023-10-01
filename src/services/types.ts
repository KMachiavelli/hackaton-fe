export type AnimalTO = {
  detectedAnimal: string;
  timestamp: Date;
  localization: [number, number];
  confidence: number;
  frame: string;
  uuid: string;
};

export type SubmittedAnimalTO = {
  localization: [number, number];
  frame: Blob;
  reportedAnimal?: string;
};

export type UserAuthTO = {
  username: string;
  password: string;
};

export type UserAuthBackTO = {
  token: string;
  username: string;
};
