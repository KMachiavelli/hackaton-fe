import { styled } from "@mui/material";
import { MapContainer } from "react-leaflet";
import { flexCentered } from "../../../utils/style/predefinedCss";

export const StyledMap = styled("div")`
  height: 100%;
  width: 100%;
  ${flexCentered}
  justify-content: flex-start;
`;

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 70%;
  box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.87);
`;
