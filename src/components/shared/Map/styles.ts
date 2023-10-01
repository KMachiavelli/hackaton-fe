import { styled } from '@mui/material';
import { MapContainer } from 'react-leaflet';
import { flexCentered } from '../../../utils/style/predefinedCss';
import { THEMES } from '../../../contexts/AppContext/types';

interface StyledMapI {
  themeMode: THEMES;
}

export const StyledMap = styled('div')<StyledMapI>`
  height: 100%;
  width: 100%;
  ${flexCentered}
  justify-content: flex-start;

  ${({ themeMode }) =>
    themeMode === THEMES.DARK &&
    `.leaflet-layer,
  .leaflet-control-zoom-in,
  .leaflet-control-zoom-out,
  .leaflet-control-attribution {
    filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%);
  }`}

  .leaflet-marker-icon {
    background: transparent;
    border: none;
    ${({ themeMode }) =>
      themeMode === THEMES.DARK
        ? `filter: invert(71%) sepia(43%) saturate(554%) hue-rotate(210deg)
      brightness(106%) contrast(105%) drop-shadow(3px -3px 3px #f105f5);`
        : `filter: invert(31%) sepia(46%) saturate(2843%) hue-rotate(339deg) brightness(85%) 
        contrast(94%) drop-shadow(3px -1px 5px #000000);`}
  }
`;

export const StyledMapContainer = styled(MapContainer)`
  height: 100%;
  width: 100%;
  /* box-shadow: 7px 7px 20px 0px rgba(0, 0, 0, 0.87); */
`;
