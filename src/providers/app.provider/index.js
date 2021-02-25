import * as React from 'react';
import {View} from 'react-native';
import {Loading} from '~/UI/components';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const AppProvider = ({children}) => {
  const loading = useSelector(({app}) => app.loading);
  return (
    <>
      {loading && <Loading />}
      <View style={styles.childrenContainer}>{children}</View>
    </>
  );
};
