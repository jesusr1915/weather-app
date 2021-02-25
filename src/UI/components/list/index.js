import * as React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {ItemList} from './item-list';

export const List = ({navigation}) => {
  const cities = useSelector(({home}) => home.cities);

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '95%', flex: 1}}>
        {Boolean(cities.length) &&
          cities.map((city) => (
            <ItemList city={city} navigation={navigation} key={city.name} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 16,
  },
});
