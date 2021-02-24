import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {styles} from './styles';

export const Header = ({icon}) => {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
    </View>
  );
};

Header.propTypes = {};
