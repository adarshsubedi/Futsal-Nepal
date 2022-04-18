import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ThirdScreen = (props) => {

  const { navigation } = props

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require('../images/board3.jpg')}
          style={{ width: 355, height: 430 }} />
      </View>

      <Text style={styles.header}>
        Increases Your Value
      </Text>

      <Text style={styles.subheader}>
        It is just a simple text for testing screen nothing else you can relax and chill.
      </Text>



      <TouchableOpacity style={styles.getStarted}
        // onPress={() => navigation.navigate('Login')}
        >
        <Text style={styles.get}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06001c',
  },
  header: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 50,
    fontWeight: 'bold',
  },
  subheader: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Haas Grot Text R Web',
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 95,
    // paddingBottom: 980,
  },
  getStarted: {
    color: 'white',
    paddingBottom: 20,
  },
  get: {
    color: 'black',
    textAlign: 'center',
    paddingTop: 13,
    fontWeight: 'bold',
    fontSize: 19,

    backgroundColor: 'white',
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    fontFamily: 'Haas Grot Text R Web',
    borderColor: 'white',
    borderWidth: 1,
    margin: 7,
  },
})

export default ThirdScreen;