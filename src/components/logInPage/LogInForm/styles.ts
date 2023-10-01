import { styled } from '@mui/material';
import { flexCentered } from '../../../utils/style/predefinedCss';

export const StyledLogInForm = styled('form')`
  ${flexCentered}
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};
  /* border: solid 3px ${({ theme }) => theme.palette.info.dark};
  border-radius: 16px; */
  z-index: 101;
  button {
    margin-top: ${({ theme }) => theme.spacing(2)};
    width: 100%;
  }
`;
