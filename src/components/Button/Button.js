import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const Button = ({label, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={{
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 23,
        borderRadius: 7,
        
        borderWidth: 1,
        borderColor: 'white',
        width: 150,
        height: 55,
        marginBottom: 40,
        
      }}
      onPress={onPress}
      >
        <Text style={{fontSize: 22, color: 'white', fontWeight: 'bold', fontFamily: 'Haas Grot Text R Web',}}>
          {label}
        </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

})

export default Button;