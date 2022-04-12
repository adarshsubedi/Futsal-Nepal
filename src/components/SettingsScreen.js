import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

import {AuthProvider} from './src/components/auth/AuthProvider';
import Auth from './auth/AuthProvider';

const SettingsScreen = () => {
  return (
    <View>
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
  container: {
    alignItems: 'center',
   },
  btn: {
    width: '40%',
    backgroundColor: 'darkgreen',
    height: 45,
    borderRadius: 5,
  },
  txt: {
    textAlign: 'center',
    fontSize: 30, 
    color: 'white', 
    fontFamily: 'monospace',
    height: '100%',
  },
})
export default SettingsScreen;