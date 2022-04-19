import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthProvider } from './src/components/auth/AuthProvider';
import Auth from './auth/AuthProvider';

import Nav from './Apps';

import FieldScreen from './FieldScreen';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Fields')}>
        <Text>hello</Text>
        {/* /<Image source={require('./images/futsal2.jpg')} style={{ height: 100, width: 100 }} /> */}
      </TouchableOpacity>

      <TouchableOpacity>
        <Icon name='envelope' size={35} style={{
          marginLeft: 40,
        }}></Icon>
      </TouchableOpacity>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Auth.signOut()}>
          <Text style={styles.txt}>Logout</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  home_screen_wrapper: {
    height: '100%',
  },
  container: {
    alignItems: 'center',
  },
  btn: {
    width: '40%',
    backgroundColor: 'darkgreen',
    height: 50,
    borderRadius: 5,

  },
  txt: {
    color: 'red',
    textAlign: 'center',
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontSize: 30,
    fontFamily: 'monospace',
    height: '80%',
    display: 'flex'
  },
  tabnav: {
    backgroundColor: 'darkgreen',
    color: 'red',
  },
  icons: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;