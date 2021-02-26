import * as React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';
import {Header, BackgroundContainer, List, Map} from '~/UI/components';
import {MapIcon, ListIcon} from '~/assets/icons';
import {useHttp} from '~/hooks';
import {styles} from './styles';
import {ScrollView} from 'react-native-gesture-handler';

export const Home = ({navigation}) => {
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

        {listType ? (
          <ScrollView style={styles.scroll}>
            <List navigation={navigation} />
          </ScrollView>
        ) : (
          <Map navigation={navigation} />
        )}
      </SafeAreaView>
    </BackgroundContainer>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
