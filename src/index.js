import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ReduxProvider} from './providers/redux.provider';

export const WeatherApp = () => {
  return (
    <ReduxProvider>
      <View style={styles.container}>
        <Text>WeatherApp</Text>
      </View>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
