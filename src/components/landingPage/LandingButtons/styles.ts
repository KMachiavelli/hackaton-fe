import { Button, IconButton, styled } from '@mui/material';

export const StyledLandingButtons = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  a {
    width: 100%;
    text-align: center;
  }
`;

export const StyledLandingButton = styled(Button)`
  width: 100%;
  gap: 10px;
`;

export const StyledIconButton = styled(IconButton)`
  border-radius: ${({ theme }) => theme.spacing(1)};
`;
