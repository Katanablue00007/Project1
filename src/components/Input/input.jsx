import React, { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/Feather';

const PasswordInput = props => {
    const [contraseña,setContraseña] = useState('Escriba aqui su contraseña');
    const [mostrarContraseña, setMostrarcontraseña] = useState(false);

  const toggleShowPassword = () => {
    setContraseña(!mostrarContraseña);
  };

   return (
    <view style={styles.container}>
      <TextInput
       style={styles.input}
       value={contraseña}
       onChangeText={setContraseña}
       secureTextEntry={setContraseña}
       placeholder='Ingresa aqui tu contraseña'
       color= 'Brown'
     />
    <TouchableOpacity onPress={toggleShowPassword}>
   
    <image
    source={
     mostrarContraseña
     ? require('../../Images/visual.png')
     : require('../../Images/invisible.png')

      } 
     />
     </TouchableOpacity>
    </view>
 );
};

export default PasswordInput;