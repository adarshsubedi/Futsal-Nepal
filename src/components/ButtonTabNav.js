import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import ProfileScreen from './ProfileScreen';
import FieldScreen from './FieldScreen';
// import Auth from './auth/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createBottomTabNavigator();

const ButtonTabNav = () => {
  return (
   
    <NavigationContainer>
      <View style={styles.home_screen_wrapper}>

        <Tab.Navigator screenOptions={{ tabBarActiveTintColor: 'darkgreen' }} style={styles.tabnav}>
        
          {/* <Tab.Screen name="Fields" component={FieldScreen} options={{ headerShown: false }}
            options={{
              tabBarIcon: () => (<Image source={require('./images/fields.jpg')} style={{ width: 60, height: 35 }} />)
            }} />

          <Tab.Screen name="My Matches" component={FieldScreen} options={{headerShown: false}}
            options={{
              tabBarIcon: () => (<Image source={require('./images/mymatches.png')} style={{ width: 35, height: 35, backgroundColor: 'grey' }} />)
            }} /> */}

          <Tab.Screen name="Account" component={ProfileScreen}
            options={{
              tabBarIcon: () => (<Image source={require('./images/account.png')} style={{ width: 40, height: 35, backgroundColor: 'grey' }} />)
            }} />

          <Tab.Screen name="Settings" component={SettingsScreen}
            options={{
              tabBarIcon: () => (<Image source={require('./images/settings.png')} style={{ width: 35, height: 37, backgroundColor: 'grey' }} />)
            }} />

          {/* <Tab.Screen name="First" component={FirstScreen} options={{tabBarStyle: {display: 'none'}}}/> */}
        </Tab.Navigator>
      </View>
      
    </NavigationContainer>
   
    


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
})
      

export default ButtonTabNav;