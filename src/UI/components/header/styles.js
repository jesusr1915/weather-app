import {StyleSheet} from 'react-native';
import {adjustSize} from '~/utils';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: adjustSize(60),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: adjustSize(16),
    marginTop: adjustSize(8),
  },

  titleContainer: {
    flexGrow: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: adjustSize(19),
    fontWeight: 'bold',
    color: 'white',
  },

  iconContainer: {
    width: adjustSize(30),
    height: adjustSize(30),
  },
});
