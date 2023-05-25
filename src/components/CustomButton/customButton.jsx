import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Typography from '../Typography/typography';
import {Constants} from '../../common';
import style, {styles} from './style';

const CustomButton = props => {
  const {onPress, type} = props;

  let textButtonView;
  switch (type) {
    case Constants.component.button.buttonTypes.flatButton:
      break;
    case Constants.component.button.buttonTypes.outlineButton:
      break;
    case Constants.component.button.buttonTypes.textButton:
      break;
    default:
      break;
  }

  return (
    <View>
      <Pressable style={styles.borderButton} onPress={onPress}>
        <Typography
          styles={styles.centerText}
          type={Constants.component.typography.typeTypography.h3}
          text={Constants.component.button.texts.netx}
        />
      </Pressable>
    </View>
  );
};

export default CustomButton;
