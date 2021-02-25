import * as React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

export const Icon = ({
  source: IconSource,
  onPress,
  width = 25,
  height = 25,
  fill = 'white',
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={onPress ? 0 : 1}>
      <IconSource width={width} height={height} fill={fill} />
    </TouchableOpacity>
  );
};

Icon.propTypes = {
  source: PropTypes.func.isRequired,
  onPress: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
};
