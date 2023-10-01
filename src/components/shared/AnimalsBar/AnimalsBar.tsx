import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from '@mui/material';
import { AnimalTO } from '../../../services/types';
import { StyledAnimalImage, StyledAnimalsBar } from './styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Dispatch, SetStateAction } from 'react';
import { hoursBetween } from './utils';

interface AnimalsBarI {
  animals: Array<AnimalTO>;
  selectedAnimalUUID: string;
  setSelectedAnimalUUID: Dispatch<SetStateAction<string>>;
  handleResolveDetection?: (uuid: string) => () => void;
}

export const AnimalsBar = ({
  animals,
  selectedAnimalUUID,
  setSelectedAnimalUUID,
  handleResolveDetection,
}: AnimalsBarI) => {
  const handleClick = (uuid: string) => () => {
    setSelectedAnimalUUID(uuid);
  };
  return (
    <StyledAnimalsBar>
      {animals.map(({ detectedAnimal, confidence, frame, timestamp, uuid }) => (
        <Accordion expanded={uuid === selectedAnimalUUID}>
          <AccordionSummary
            expandIcon={uuid !== selectedAnimalUUID && <ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            onClick={handleClick(uuid)}
          >
            <Typography variant="body1">{`${detectedAnimal} (${hoursBetween(
              new Date(),
              new Date(timestamp)
            )} hours ago)`}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Confidence: {`${confidence * 100}%`}</Typography>
            <StyledAnimalImage src={`data:image/png;base64,${frame}`} />
            <Typography>
              Date:
              {new Date(timestamp)
                .toISOString()
                .replace('T', ' ')
                .substring(0, 19)}
            </Typography>
            {handleResolveDetection && (
              <Button onClick={handleResolveDetection(uuid)}>Resolve</Button>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </StyledAnimalsBar>
  );
};
