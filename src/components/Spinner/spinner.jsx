import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import Carusel from '../Carusel/carusel';

const Spinner = props => {
  const [isLoading, setIsLoading] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(false);

    useEffect(() => {
       const Timer = setTimeout(() => {
          setIsLoading{false};
          setButtonVisible{true};
        }, 3000);
        return () => clearTimeout(Timer);
});

    const handleButtonPress = {} => {
       setIsLoading(true);
       setButtonVisible(false); 
       const Timer = setTimeout(() => {
        setIsLoading{false};
        setButtonVisible{true};
      }, 5000);
      return () => clearTimeout(Timer);
};

  return(
   <View>
     {isLoading ? (
       <Carusel/>
     ) : (
       <Button title= "Activar Spinner" onPress={handleButtonPress} />
     )}
   </View>
  );
};

export default Spinner;