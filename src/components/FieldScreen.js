import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Auth from './auth/AuthProvider';

import FirstScreen from './FirstScreen';

const FieldScreen = ({ navigation }) => {
  // const { navigation } = props
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.views}> */}
        <TouchableOpacity onPress={() => navigation.navigate('First')} >
          <Image source={require('./images/futsal2.jpg')}
            style={{ width: 360, height: 210, resizeMode: 'cover' }} />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            // padding: 10,
          }}></Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('First')} >
          <Image source={require('./images/futsal2.jpg')}
            style={{ width: 360, height: 210, resizeMode: 'cover' }} />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            // padding: 10,
          }}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('First')} >
          <Image source={require('./images/futsal2.jpg')}
            style={{ width: 360, height: 210, resizeMode: 'cover' }} />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            // padding: 10,
          }}></Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('First')} >
          <Image source={require('./images/futsal2.jpg')}
            style={{ width: 360, height: 210, resizeMode: 'cover' }} />
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            // padding: 10,
          }}></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default FieldScreen;

const styles = StyleSheet.create({
  container: {

  },
  img: {
    height: 10,
    width: 6,
  },
})