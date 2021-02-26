import * as React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {BoxDetail} from './box-detail';
import {styles} from './styles';
import {Marker} from './marker';

export const Map = ({navigation}) => {
  const cities = useSelector(({home}) => home.cities);
  const initialRegion = {
    latitude: 22.19961217270042,
    longitude: -101.41680272296071,
    latitudeDelta: 17.427136548210935,
    longitudeDelta: 9.622691385447979,
  };

  const [region, setRegion] = React.useState(initialRegion);
  const [selectedCity, setSelectedCity] = React.useState(null);

  const onPressMarket = ({nativeEvent: {coordinate}}, city) => {
    setRegion({
      ...coordinate,
      latitudeDelta: 0.992,
      longitudeDelta: 0.05599,
    });
    setSelectedCity(city);
  };
  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        {cities.map((city, index) => (
          <Marker city={city} onPress={onPressMarket} key={index} />
        ))}
      </MapView>
      {selectedCity && (
        <BoxDetail city={selectedCity} navigation={navigation} />
      )}
    </View>
  );
};

Map.propTypes = {
  navigation: PropTypes.object.isRequired,
};
