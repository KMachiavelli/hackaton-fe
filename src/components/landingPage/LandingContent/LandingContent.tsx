import { Typography } from '@mui/material';
import { LandingButtons } from '../LandingButtons/LandingButtons';
import { StyledLandingContent } from './styles';

export const LandingContent = () => {
  return (
    <StyledLandingContent>
      <Typography variant="body1">
        This application lets you find your lost pet, or help services tracking
        wild animals, thanks to cameras, AI and other poeple's submits.
      </Typography>
      <LandingButtons />
    </StyledLandingContent>
  );
};
