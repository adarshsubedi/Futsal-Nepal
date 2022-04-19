import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useContext, createContext, useEffect} from 'react';
import {View, Text, TextInput, Image, FormButton, Button, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import { authContext } from './auth/AuthProvider';
import auth from "@react-native-firebase/auth";
import Auth from './auth/AuthProvider';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RegisterScreen = (navigation) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView>
                            <View style={styles.container}>
                    
                                <Text style={styles.text}>
                                    Create Account
                                </Text>

                                <Image source={require('./images/ball.png')}
                                style={{ width: 150, height: 150,  borderRadius: 500, alignSelf: 'center' }} />

                            <View>
                                <TextInput 
                                style={styles.input} 
                                value={fullName}
                                placeholder={'Name'} 
                                placeholderTextColor='white'
                                onChangeText={e => setFullName(e)}
                                />

                                <TextInput 
                                style={styles.input} 
                                value={email}
                                placeholder={'Email'} 
                                placeholderTextColor='white'
                                onChangeText={e => setEmail(e)}
                                />
                                
                                <TextInput 
                                style={styles.input} 
                                value={password}
                                placeholder={'Password'}
                                placeholderTextColor='white'
                                secureTextEntry={true}
                                onChangeText={e => setPassword(e)}
                                />
                                
                                {/* <TextInput style={styles.input} placeholder={'Confirm Password'} placeholderTextColor='black'/> */}

                                {/* <TextInput style={styles.input} placeholder={'Pick a Date'} placeholderTextColor='black'/> */}

                            <View style={styles.views}>
                                <TouchableOpacity 
                                    onPress={ () => Auth.signUp(fullName, email, password)} 
                                    style={styles.button}>
                                    <Text style={{textAlign: 'center', color: 'black', fontSize: 25,  fontFamily: 'monospace',}}>Register</Text>
                                    {/* <Text>Alert.alert('Register Successfully')</Text> */}
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center',
        height: windowHeight,
        width: windowWidth,
        backgroundColor: '#06001c',
        
        
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 15,
        color: 'white',
        fontFamily: 'monospace',

    },
    texts: {
        // marginLeft: 10,
        // fontSize: 15,

    },
    views: {
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        fontFamily: 'monospace',
        paddingHorizontal: 15,
        borderBottomColor: 'white', 
        borderBottomWidth: 2,
        marginBottom: 8,
        marginHorizontal: 15,
        
    },
    button: {
        marginTop: 15,
        width: '92%',
        backgroundColor: 'white',
        height: 50,
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
    },
})

export default RegisterScreen;