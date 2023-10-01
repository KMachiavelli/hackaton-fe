import L from 'leaflet';
import Cat from '../../../assets/map-icons/cat.png';
import Dog from '../../../assets/map-icons/dog.png';
import Fox from '../../../assets/map-icons/fox.png';
import Hog from '../../../assets/map-icons/hog.png';
import Hare from '../../../assets/map-icons/hare.png';

const ICON_SIZE = new L.Point(40, 50);

const cat = new L.Icon({
  iconUrl: Cat,
  //   iconRetinaUrl: require('../img/marker-pin-person.svg'),
  //   iconAnchor: null,
  //   popupAnchor: null,
  //   shadowUrl: null,
  //   shadowSize: null,
  //   shadowAnchor: null,
  iconSize: ICON_SIZE,
  className: 'leaflet-div-icon',
});

const dog = new L.Icon({
  iconUrl: Dog,
  iconSize: ICON_SIZE,
  className: 'leaflet-div-icon',
});

const fox = new L.Icon({
  iconUrl: Fox,
  iconSize: ICON_SIZE,
  className: 'leaflet-div-icon',
});

const hog = new L.Icon({
  iconUrl: Hog,
  iconSize: ICON_SIZE,
  className: 'leaflet-div-icon',
});

const hare = new L.Icon({
  iconUrl: Hare,
  iconSize: ICON_SIZE,
  className: 'leaflet-div-icon',
});

export const ICONS = { hog, fox, hare, dog, cat };
