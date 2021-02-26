import * as React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';
import {backgroundImage} from '~/assets/images';

export const BackgroundContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.childContainer}>{children}</View>
      <Image style={styles.background} source={backgroundImage} />
    </View>
  );
};
