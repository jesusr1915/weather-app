import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export const Loading = () => (
  <View style={styles.container}>
    <LottieView
      source={require('~/assets/lottie/loading.json')}
      autoPlay
      loop
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
