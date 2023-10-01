import { styled } from '@mui/material/styles';
import { flexCentered } from '../utils/style/predefinedCss';

export const StyledFullPage = styled('div')`
  width: 100%;
  height: 100%;
  z-index: 101;
  position: relative;
`;

export const StyledCenteredPage = styled(StyledFullPage)`
  ${flexCentered}
  justify-content: center;
`;
