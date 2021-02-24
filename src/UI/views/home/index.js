import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export const Home = ({navigation}) => {
  console.log('navigation -> ', navigation);

  return (
    <View style={styles.container}>
      <Text>home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MAP')}>
        <Text>go map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DETAIL')}>
        <Text>go detail</Text>
      </TouchableOpacity>
    </View>
  );
};
