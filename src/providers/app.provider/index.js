import * as React from 'react';
import {View, StatusBar} from 'react-native';
import {Loading} from '~/UI/components';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const AppProvider = ({children}) => {
  const loading = useSelector(({app}) => app.loading);
  return (
    <>
      <StatusBar barStyle="light-content" />
      {loading && <Loading />}
      <View style={styles.childrenContainer}>{children}</View>
    </>
  );
};
