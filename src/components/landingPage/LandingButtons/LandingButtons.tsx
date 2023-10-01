import {
  StyledIconButton,
  StyledLandingButton,
  StyledLandingButtons,
} from './styles';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../routing/routes';
import SupportIcon from '@mui/icons-material/Support';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';

export const LandingButtons = () => {
  return (
    <StyledLandingButtons>
      <Link to={ROUTES.SUBMIT_FORM}>
        <StyledLandingButton variant="contained">
          I want to report a wild animal
          <SupportAgentIcon />
        </StyledLandingButton>
      </Link>
      <Link to={ROUTES.FIND_LOST_PET}>
        <StyledLandingButton variant="contained">
          I've lost my buddy
          <NotListedLocationIcon />
        </StyledLandingButton>
      </Link>
      <Link to={ROUTES.LOGIN}>
        <StyledIconButton>
          I'm from services
          <SupportIcon />
        </StyledIconButton>
      </Link>
    </StyledLandingButtons>
  );
};
