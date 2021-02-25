import * as React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export const Detail = ({city, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DETAIL', {city})}>
      <Text style={styles.text}>{city.name}</Text>
      <Text style={styles.text}>{city.celsius}°C</Text>
    </TouchableOpacity>
  );
};

Detail.propTypes = {
  city: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
