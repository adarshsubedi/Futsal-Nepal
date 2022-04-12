// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React, { useState } from 'react';
// import { Dimensions } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
// import ImageSlider from 'react-native-image-slider';
// import LoginScreen from '../LoginScreen';


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const OnBoard3 = (props) => {
//     const { navigation } = props
//     return (
//         <View style={styles.container}>
//             <View style={styles.image}>
//                 <Image source={require('../images/board3.jpg')}
//                     style={{ width: 290, height: 359, resizeMode: 'cover' }} />
//             </View>

//             <View>
//                 <Text style={styles.txts}>
//                     Increase Your Value
//                 </Text>
//                 <Text style={styles.txt}>
//                 It is just a simple text for testing screen nothing else you can relax and chill.
//                 </Text>
//             </View>

//             <View style={styles.btn}>
//                 <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                     <Text style={styles.next}>GET STARTED</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };


// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//         backgroundColor: '#06001c',
//         height: windowHeight,
//         width: windowWidth,


//     },

//     txt: {
//         color: 'white',
//         marginTop: 25,
//         fontSize: 20,
//         fontFamily: 'Haas Grot Text R Web',
//         textAlign: 'center',
//         marginLeft: 10,
//     },

//     txts: {
//         color: 'white',
//         textAlign: 'center',
//         fontSize: 28,
//         marginTop: 55,
//         fontFamily: 'Haas Grot Text R Web',
//         fontWeight: 'bold',

//     },


//     next: {
//         backgroundColor: 'white',
//         height: 55,
//         fontSize: 23,
//         borderRadius: 10,
//         textAlign: 'center',
//         fontFamily: 'Haas Grot Text R Web',
//         paddingTop: 14,
//         // marginTop: 5,
//         width: 325,
//     },

//     btn: {
//         alignItems: 'center',
//         marginTop: 150,
//         padding: 5,
        
//     },

// })

// export default OnBoard3;