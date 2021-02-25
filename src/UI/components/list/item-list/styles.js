import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginBottom: 12,
    borderRadius: 10,
    paddingVertical: 16,
  },
  name: {
    fontSize: 24,
    color: '#f6f6f6',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  temperature: {
    fontSize: 32,
    color: '#f6f6f6',
  },

  boldText: {
    fontWeight: 'bold',
  },

  selectedText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});
