import * as React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {adjustSize} from '~/utils';

export const Icon = ({
  source: IconSource,
  onPress,
  width = adjustSize(25),
  height = adjustSize(25),
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
