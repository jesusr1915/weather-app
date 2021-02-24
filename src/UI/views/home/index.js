import * as React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Header, BackgroundContainer} from '~/UI/components';
import {styles} from './styles';

export const Home = ({navigation}) => {
  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </BackgroundContainer>
  );
};

/**

 <Text>home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MAP')}>
        <Text>go map</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DETAIL')}>
        <Text>go detail</Text>
      </TouchableOpacity>


 */
