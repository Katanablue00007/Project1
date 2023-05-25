import React from 'react';
import MainPageComponent from './src/screens/MainPage/MainPage.component';
import styles from './src/common/style';
import {View} from 'react-native';

const MainComponentApp = () => {
  return (
    <View style={styles.mainContiner}>
      <MainPageComponent />
    </View>
  );
};

export default MainComponentApp;