import * as React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {ItemList} from './item-list';
import {styles} from './styles';

export const List = ({navigation}) => {
  const cities = useSelector(({home}) => home.cities);
  const isCitiesDataValid = Boolean(cities.length);
  return (
    <View style={styles.container}>
      {isCitiesDataValid &&
        cities.map((city, index) => (
          <ItemList city={city} navigation={navigation} key={index} />
        ))}
    </View>
  );
};

List.propTypes = {
  navigation: PropTypes.object.isRequired,
};
