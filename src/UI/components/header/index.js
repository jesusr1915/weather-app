import * as React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {BackIcon} from '~/assets/icons';
import {Icon} from './icon';

export const Header = ({
  title,
  backIconOnpress,
  rightIcon,
  rightIconOnPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {backIconOnpress && (
          <Icon source={BackIcon} onPress={backIconOnpress} />
        )}
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ?? ''}</Text>
      </View>

      <View style={styles.iconContainer}>
        {rightIcon && <Icon source={rightIcon} onPress={rightIconOnPress} />}
      </View>
    </View>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  backIconOnpress: PropTypes.func,
  rightIcon: PropTypes.func,
  rightIconOnPress: PropTypes.func,
};
