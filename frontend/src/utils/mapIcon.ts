import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  
  iconSize: [40,45],
  iconAnchor: [20, 45],
  popupAnchor: [142, 14],
})

export default mapIcon