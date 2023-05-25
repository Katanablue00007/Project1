import React from "react";
import {View, Text} from 'react-native';
import Swiper from "react-native-swiper";
import styles from "../../style";

const   CaruselComponent = props => {

   const imagenes =[
     {id: 1, source: require('../../Images/image1.jpg')},
     {id: 2, source: require('../../Images/image2.jpg')},
     {id: 3, source: require('../../Images/image3.jpg')},
     {id: 4, source: require('../../Images/image4.jpg')},
     {id: 5, source: require('../../Images/image5.jpg')},
     {id: 6, source: require('../../Images/image6.jpg')},
    ];

 return (
  <View style={styles.container}>
   <Swiper showsButtons={true}>
      {imagenes.nap( image => {
        <View key={image.id}>
          <Image source={image.source} style={styles.image} />
        </View>
      })}
    </Swiper>
  </View>
 );
};

export default Carusel;