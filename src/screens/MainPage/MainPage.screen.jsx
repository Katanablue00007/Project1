import React from 'react';
import MainPageComponent from './MainPage.component';

const MainPageScreen = props => {
  const handleOnPress = () => {
    console.log('Hola mundo');
  };

  return <MainPageComponent handleOnPress={handleOnPress} />;
};

export default MainPageScreen;
