import {StyleSheet} from 'react-native';
import {adjustSize} from '~/utils';

export const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: adjustSize(120),
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.45)',
    marginBottom: adjustSize(12),
    borderRadius: adjustSize(10),
    paddingVertical: adjustSize(16),
  },
  name: {
    fontSize: adjustSize(24),
    color: '#f6f6f6',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  temperature: {
    fontSize: adjustSize(32),
    color: '#f6f6f6',
  },

  boldText: {
    fontWeight: 'bold',
  },

  selectedText: {
    fontSize: adjustSize(36),
    fontWeight: 'bold',
  },
});
