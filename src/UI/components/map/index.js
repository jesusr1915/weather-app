import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Map = () => {
  return (
    <View style={styles.container}>
      <Text>MAp</Text>
    </View>
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
