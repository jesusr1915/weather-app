import {StyleSheet} from 'react-native';
import {adjustSize} from '~/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    paddingTop: adjustSize(8),
  },
  text: {
    fontSize: adjustSize(22),
    fontWeight: 'bold',
    color: '#212121',
  },
});
