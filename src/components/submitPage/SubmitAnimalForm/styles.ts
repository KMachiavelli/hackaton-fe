import { Typography, styled } from '@mui/material';
import {
  absoluteCentered,
  flexCentered,
} from '../../../utils/style/predefinedCss';

export const StyledSubmitAnimalForm = styled('form')`
  ${flexCentered}

  video {
    @media (orientation: portrait) {
      display: none;
    }
  }
`;

export const StyledInfoDisplay = styled(Typography)`
  ${absoluteCentered}
  text-align:  center;
  @media (orientation: landscape) {
    display: none;
  }
`;

export const StyledSubtleInfo = styled(Typography)`
  ${absoluteCentered}
  text-align:  center;
  opacity: 0.7;
  color: white;
  @media (orientation: portrait) {
    display: none;
  }
`;
