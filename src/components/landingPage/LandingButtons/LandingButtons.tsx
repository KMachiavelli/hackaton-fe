import { IconButton } from "@mui/material";
import { StyledLandingButton, StyledLandingButtons } from "./styles";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routing/routes";
import SupportIcon from "@mui/icons-material/Support";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export const LandingButtons = () => {
  return (
    <StyledLandingButtons>
      <Link to={ROUTES.SUBMIT_FORM}>
        <StyledLandingButton variant="contained">
          I want to report a wild animal
          <SupportAgentIcon />
        </StyledLandingButton>
      </Link>
      <Link to={ROUTES.LOGIN}>
        <IconButton>
          I'm from services
          <SupportIcon />
        </IconButton>
      </Link>
    </StyledLandingButtons>
  );
};
