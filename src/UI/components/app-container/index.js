import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const AppContainer = () => {
  return (
    <View style={styles.container}>
      <Text>app-container</Text>
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
