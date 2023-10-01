import { styled } from '@mui/material';
import { flexCentered } from '../../../utils/style/predefinedCss';

export const StyledLandingContent = styled('div')`
  ${flexCentered}
  flex-direction: column;
  max-width: 500px;
  padding: ${({ theme }) => theme.spacing(2)};
`;
