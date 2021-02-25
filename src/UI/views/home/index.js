import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, BackgroundContainer, List, Map} from '~/UI/components';
import {MapIcon, ListIcon} from '~/assets/icons';
import {useHttp} from '~/hooks';
import {styles} from './styles';

export const Home = () => {
  const [listType, setListType] = React.useState(true);
  const {getCities} = useHttp();

  React.useEffect(() => {
    getCities();
  }, []);

  return (
    <BackgroundContainer>
      <SafeAreaView style={styles.container}>
        <Header
          title={listType ? 'List' : 'Map'}
          rightIcon={listType ? MapIcon : ListIcon}
          rightIconOnPress={() => setListType(!listType)}
        />
        {listType ? <List /> : <Map />}
      </SafeAreaView>
    </BackgroundContainer>
  );
};
