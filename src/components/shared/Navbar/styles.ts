import { AppBar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { flexCentered } from '../../../utils/style/predefinedCss';

export const StyledNavbar = styled(AppBar)`
  position: relative;
  height: 100%;
  ${flexCentered}
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-family: 'Tropical';
  }

  a {
    height: 100%;
    align-self: center;
  }
`;

export const StyledLogoWrapper = styled('div')`
  display: flex;
  flex-direction: row;
`;

export const StyledNoPaddingIconButton = styled(IconButton)`
  padding: 0 ${({ theme }) => theme.spacing(2)};

  & button,
  svg {
    height: 100%;
    aspect-ratio: 1/1;
    min-width: 30px;
  }
`;
