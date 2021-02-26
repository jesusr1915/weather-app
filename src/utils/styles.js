import {PixelRatio, Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const scale = SCREEN_WIDTH / 410;

export const adjustSize = (size) => {
  const newSize = size * scale;
  const scaleSize = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return Platform.OS === 'ios' ? scaleSize : scaleSize - 2;
};
