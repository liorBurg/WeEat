import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import PropTypes from 'prop-types';

const googleKey = 'key=AIzaSyCMYVdjkRobvAvklIp0_GHqUNwUA_Zkxc0';
const googleMapURL = 'https://maps.googleapis.com/maps/api/js?'
  + googleKey + '&v=3.exp&libraries=geometry,drawing,places';
const MapItem = withScriptjs(withGoogleMap((props) =>
  (<GoogleMap
    defaultZoom={14}
    center={props.mark ? props.mark : { lat: 40.785, lng: -73.968 }}
  >
    <Marker position={props.mark ? props.mark : { lat: 40.785, lng: -73.968 }}/>
  </GoogleMap>)
));

function Map(props) {
  return (
    <div className="map">
      <MapItem
        mark={props.mark}
        googleMapURL={googleMapURL}
        loadingElement={<div className="loading-map" />}
        containerElement={<div className="map-container" />}
        mapElement={<div className="map-element"/>}
      />
    </div>
  );
}

export default Map;

Map.propTypes = {
  mark: PropTypes.object,
};
