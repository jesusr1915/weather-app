import * as React from 'react';
import {View, Platform} from 'react-native';
import {Loading} from '~/UI/components';
import {styles} from './styles';
import {useSelector} from 'react-redux';

export const AppProvider = ({children}) => {
  const loading = useSelector(({app}) => app.loading);
  console.log('loading ', loading);

  console.log(Platform.OS === 'ios' ? 'iOS' : 'Android');

  return (
    <>
      {loading && <Loading />}
      <View style={styles.childrenContainer}>{children}</View>
    </>
  );
};
