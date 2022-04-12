import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FieldScreen from './FieldScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';


const Stack = createNativeStackNavigator();
const Nav = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Fields'>
        <Stack.Screen name='Fields' component={FieldScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Account' component={ProfileScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({ })

export default Nav;