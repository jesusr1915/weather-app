import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';

export const Map = () => {
  const cities = useSelector(({home}) => home.cities);

  const [region, setRegion] = React.useState({
    latitude: 25.488,
    longitude: -103.2633,
    latitudeDelta: 24.9951,
    longitudeDelta: 14.249,
  });

  console.log('region => ', region);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        initialRegion={region}>
        {cities.map((city, index) => {
          console.log('test ', city);

          return (
            <Marker
              key={index}
              coordinate={{
                latitude: city.lat,
                longitude: city.lon,
              }}
              title={city.name}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
