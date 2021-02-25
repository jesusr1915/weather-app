import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, BackgroundContainer} from '~/UI/components';

import {MapIcon, ListIcon} from '~/assets/icons';
import {styles} from './styles';

export const Home = ({navigation}) => {
  const [listType, setListType] = React.useState(true);

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <Header
          rightIcon={listType ? ListIcon : MapIcon}
          rightIconOnPress={() => setListType(!listType)}
        />
      </SafeAreaView>
    </BackgroundContainer>
  );
};
