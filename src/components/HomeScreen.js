import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Auth from './auth/AuthProvider';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button 
      title= 'Logout' onPress={() => Auth.signOut()}
        
        
        
      />
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({})