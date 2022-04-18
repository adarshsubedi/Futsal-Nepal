import React, { useState, useContext, createContext, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  StyleSheet,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import HomeScreen from './src/components/HomeScreen';
import { AuthProvider } from './src/components/auth/AuthProvider';
import AdminLogin from './src/components/admin/AdminLogin';

import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from './src/components/ForgetPassword';


import SettingsScreen from './src/components/SettingsScreen';
import ProfileScreen from './src/components/ProfileScreen';
import FieldScreen from './src/components/FieldScreen';
import FirstScreen from './src/components/FirstScreen';
import Hello from './src/components/Hello';

import OnBoard from './src/components/OnBoard/OnBoard';
import StarterBoard from './src/components/StarterBoard/index';
// import OnBoard2 from './src/components/OnBoard/OnBoard2';
// import OnBoard3 from './src/components/OnBoard/OnBoard3';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const App = ({ navigation }) => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (user) {
    return (
      <View>
        <HomeScreen/>
      </View>
    )
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StarterBoard'>
        <Stack.Screen name='StarterBoard' component={StarterBoard} options={{ headerShown: false }} />
        <Stack.Screen name='OnBoard' component={OnBoard} options={{ headerShown: false }} />
        {/* <Stack.Screen name='OnBoard2' component={OnBoard2} options={{ headerShown: false }} />
        <Stack.Screen name='OnBoard3' component={OnBoard3} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Admin' component={AdminLogin} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Forget' component={ForgetPassword} />
        {/* <Stack.Screen name='Hi' component={Hello}/> */}
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})

export default App;

{/* <Text>Welcome {user.email}</Text> */ }