import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faSignIn} from '@fortawesome/free-solid-svg-icons';
import {faRegistered} from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <View style={styles.Icons}>
          <FontAwesomeIcon icon={faHome} size={20} color="blue" />
          <Text style={styles.textStyle}>Home</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Log-In')}>
        <View style={styles.Icons}>
          <FontAwesomeIcon icon={faSignIn} size={20} color="blue" />
          <Text style={styles.textStyle}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Sign-Up')}>
        <View style={styles.Icons}>
          <FontAwesomeIcon icon={faRegistered} size={20} color="blue" />
          <Text style={styles.textStyle}>Register</Text>
        </View>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('UserData')}>
        <View style={styles.Icons}>
          <FontAwesomeIcon icon={faPen} size={20} color="blue" />
          <Text style={styles.textStyle}>User</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    marginTop: 10,
    textTransform: 'uppercase',
    // marginBottom: 10,
  },
  Icons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

export default Menu;