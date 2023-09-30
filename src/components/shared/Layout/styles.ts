import { styled } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import { absoluteCentered } from "../../../utils/style/predefinedCss";

export const StyledMain = styled("main")`
  div {
    z-index: 11;
  }
`;

export const StyledBackground = styled(PetsIcon)`
  ${absoluteCentered}
  z-index: 1;
  color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0.2;
  width: 70vmin;
  height: 70vmin;
`;

export const StyledLayout = styled("div")`
  display: grid;
  grid-template-rows: 50px 1fr 0px;
  min-height: 100vh;
  min-width: 100vw;
`;
