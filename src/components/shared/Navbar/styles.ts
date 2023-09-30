import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { flexCentered } from "../../../utils/style/predefinedCss";

export const StyledNavbar = styled(AppBar)`
  position: relative;
  height: 100%;
  ${flexCentered}
  flex-direction: row;

  h2 {
    font-family: "Tropical";
  }
`;
