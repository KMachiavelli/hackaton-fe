import { IconButton, Typography } from "@mui/material";
import { StyledNavbar } from "./styles";
import PetsIcon from "@mui/icons-material/Pets";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <IconButton>
        <PetsIcon />
      </IconButton>
      <Typography variant="h2">Wild City</Typography>
    </StyledNavbar>
  );
};
