import * as React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {styles} from './styles';

export const Loading = () => (
  <View style={styles.container}>
    <LottieView
      source={require('~/assets/lottie/loading.json')}
      autoPlay
      loop
    />
  </View>
);
