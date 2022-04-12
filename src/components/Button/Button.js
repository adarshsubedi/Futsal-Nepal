import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';


const Button = () => {
  return (
    <View>
      <TouchableOpacity style={styles.btn}>
        <Text>Skip</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({

})

export default Button;