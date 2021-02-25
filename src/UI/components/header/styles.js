import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 8,
  },

  titleContainer: {
    flexGrow: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'white',
  },

  iconContainer: {
    width: 30,
    height: 30,
  },

  icon: {
    borderColor: 'blue',
    borderWidth: 1,
  },
});
