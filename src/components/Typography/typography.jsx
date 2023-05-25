import React from 'react';
import {View, Text} from 'react-native';
import {Constants} from '../../common';
import {styles} from './style';

let typeTypography = '';

const Typography = props => {
  const {type, text} = props;
  switch (type) {
    case Constants.component.typography.typeTypography.h1:
      typeTypography = styles.h1;
      break;
    case Constants.component.typography.typeTypography.h2:
      typeTypography = styles.h2;
      break;
    case Constants.component.typography.typeTypography.h3:
      typeTypography = styles.h3;
      break;
    case Constants.component.typography.typeTypography.paragraph:
      typeTypography = styles.paragraph;
      break;
    case Constants.component.typography.typeTypography.buttonText:
      typeTypography = styles.buttonText;
      break;
    default:
      break;
  }
  return (
    <View>
      <Text style={[typeTypography]}>{text}</Text>
    </View>
  );
};

export default Typography;
