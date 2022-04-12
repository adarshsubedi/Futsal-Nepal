// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import React from 'react';
// import { Dimensions } from 'react-native';
// import Onboarding from 'react-native-onboarding-swiper';
// import ImageSlider from 'react-native-image-slider';
// import OnBoard from './OnBoard';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const OnBoard2 = (props) => {
//     const { navigation } = props
//     return (
//         <View style={styles.container}>
//             <View style={styles.image}>
//                 <Image source={require('../images/board2.jpg')}
//                     style={{ width: 320, height: 360, resizeMode: 'cover' }} />
//             </View>

//             <View>
//                 <Text style={styles.txts}>
//                     Achieve Your Goal
//                 </Text>

//                 <Text style={styles.txt}>
//                 It is just a simple text for testing screen nothing else you can relax and chill.
//                 </Text>

//                 <View style={styles.dots}>
                    
//                     <Text style={styles.dot}></Text>
//                     <Text style={styles.longdot}></Text>
//                     <Text style={styles.dot}></Text>
//                 </View>

//                 <View style={styles.btn}>
//                     <TouchableOpacity onPress={() => navigation.navigate('OnBoard3')}>
//                         <Text style={styles.skip}>SKIP</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate('OnBoard3')}>
//                         <Text style={styles.next}>NEXT</Text>
//                     </TouchableOpacity>
//                     {/* <TouchableOpacity onPress={() => navigation.navigate('OnBoard')}>
//                         <Text style={styles.next}>BK</Text>
//                     </TouchableOpacity> */}
//                 </View>

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

//     skip: {
//         color: 'white',
//         height: 55,
//         fontSize: 23,
//         // justifyContent: 'center',
//         // alignContent: 'center',
//         textAlign: 'center',
//         borderRadius: 10,
//         width: 150,
//         fontFamily: 'Haas Grot Text R Web',
//         paddingTop: 14,
//         marginRight: 7,
//         borderWidth: 1,
//         borderColor: 'white',

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
//         width: 150,
//     },

//     btn: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 70,
//         padding: 5,
//     },
//     dots: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginTop: 20,
//     },
//     longdot: {
//         fontSize: 2,
//         backgroundColor: 'white',
//         width: 25,
//         borderRadius: 5,
//         marginTop: 60,
//         marginHorizontal: 5,
//         // marginLeft: 125,
//     },
//     dot: {
//         fontSize: 2,
//         backgroundColor: 'white',
//         width: 7,
//         borderRadius: 5,
//         marginTop: 60,
    
//     },

// })

// export default OnBoard2;