import * as React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {Header, BackgroundContainer} from '~/UI/components';
import {NativeViewDetail} from '~/UI/views';

export const Detail = ({navigation, route}) => {
  const {city} = route.params;
  console.log('city => ', city);

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <Header title={'Detail'} backIconOnpress={() => navigation.goBack()} />
        <NativeViewDetail
          cityName={city.name}
          temperature={`${city.celsius} °C`}
          style={{width: '100%', height: '100%'}}
        />
      </SafeAreaView>
    </BackgroundContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
