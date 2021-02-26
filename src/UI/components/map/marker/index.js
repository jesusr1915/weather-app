import * as React from 'react';
import PropTypes from 'prop-types';
import {Marker as PackageMarker} from 'react-native-maps';

export const Marker = ({city, onPress = () => {}}) => {
  return (
    <PackageMarker
      coordinate={{
        latitude: city.lat,
        longitude: city.lon,
      }}
      onPress={(event) => onPress(event, city)}
      title={city.name}
    />
  );
};
Marker.propTypes = {
  city: PropTypes.object.isRequired,
  onPress: PropTypes.func,
};
