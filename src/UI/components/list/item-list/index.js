import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const ItemList = ({city, navigation}) => {
  const [celsius, setCelsius] = React.useState(true);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DETAIL', {city})}>
      <Text style={styles.name}>{city.name}</Text>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperature}>
          {celsius ? city.celsius : city.fahrenheit}°
        </Text>
        <TouchableOpacity onPress={() => setCelsius(true)}>
          <Text style={[styles.temperature, celsius && styles.selectedText]}>
            C
          </Text>
        </TouchableOpacity>
        <Text style={styles.temperature}> | </Text>
        <TouchableOpacity onPress={() => setCelsius(false)}>
          <Text style={[styles.temperature, !celsius && styles.selectedText]}>
            F
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

ItemList.propTypes = {
  city: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
