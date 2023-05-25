import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import Typography from '../../components/Typography/typography';
import {Constants} from '../../common';
import CustomButton from '../../components/CustomButton/customButton';
import CustomCard from '../../components/Card/customCard';
import PasswordInput from '../../components/Input/input';
import CaruselComponent from '../../components/Carusel/carusel';

const MainPageComponent = props => {
  const {} = props;

  const handleOnPress = () => {
    console.log('Hola mundo');
  };
  return (
    <View style={styles.position}>
      <View>
        {/*<Typography
          type={Constants.component.typography.typeTypography.h1}
          text={Constants.component.typography.typographyTexts.helloWorld}
        />*/}
      </View>
      <View>
        <CaruselComponent />
      </View>
    </View>
  );
};

export default MainPageComponent;
