import React, {useState, useContext, createContext, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  StyleSheet,
} from 'react-native';


import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import HomeScreen from './src/components/HomeScreen';
import {AuthProvider} from './src/components/auth/AuthProvider';

import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AdminLogin from './src/components/admin/AdminLogin';


const Stack = createNativeStackNavigator();

const App = ({navigation}) => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  
  const onAuthStateChanged = (user) => {
      setUser(user);
       if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
      }, []);

      if(initializing) return null;

      if (user) {
        return (
          <View>
            <HomeScreen/>
          </View>
        )
      }


  return (


    <NavigationContainer>
      

      <Stack.Navigator initialRouteName='FirstScreen'>
        <Stack.Screen name='Login'  component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Admin' component={AdminLogin}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create ({
  img:{
    
  },
})

export default App;
