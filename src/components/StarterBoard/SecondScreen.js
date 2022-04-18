import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require('../images/board2.jpg')}
          style={{ width: 355, height: 430 }} />
      </View>
      
        <Text style= {styles.header}>
        Achieve Your Goal
        </Text>

        <Text style= {styles.subheader}>
        It is just a simple text for testing screen nothing else you can relax and chill.
        </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06001c',
  },
  header:{
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 50,
    fontWeight: 'bold',
  },
  subheader:{
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 35,
    paddingHorizontal: 20,
    paddingBottom: 95,
  },
})

export default SecondScreen;