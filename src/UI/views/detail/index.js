import * as React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';
import {Header, BackgroundContainer} from '~/UI/components';
import {NativeViewDetail} from '~/UI/views';
import {styles} from './styles';

export const Detail = ({navigation, route}) => {
  const {city} = route.params;
  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <Header title={'Detail'} backIconOnpress={() => navigation.goBack()} />
        <NativeViewDetail
          cityName={city.name}
          temperature={`${city.celsius} °C`}
          style={styles.nativeView}
        />
      </SafeAreaView>
    </BackgroundContainer>
  );
};

Detail.propTypes = {
  navigation: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};
