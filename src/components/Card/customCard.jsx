import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import Typography from '../Typography/typography';
import {Constants} from '../../common';
import CustomButton from '../CustomButton/customButton';

const CustomCard = props => {
  return (
    <View style={styles.borderCard}>
      <View style={styles.tittleCenter}>
        <Typography
          type={Constants.component.typography.typeTypography.h1}
          text={Constants.component.cards.Tittle}
        />
      </View>
      <View style={styles.imagesCenter}>
        <Image
          style={styles.ImageStyle}
          source={require('../../Images/dogImage.jpg')}
        />
      </View>
      <View style={styles.textCenter}>
        <Typography
          type={Constants.component.typography.typeTypography.paragraph}
          text={Constants.component.cards.Description}
        />
      </View>
      <View style={styles.buttonCenter}>
        <CustomButton></CustomButton>
      </View>
    </View>
  );
};

export default CustomCard;
