import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState, useContext, createContext, useEffect} from 'react';
import {View, Text, TextInput, FormButton, Button, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
// import { useContext } from 'react/cjs/react.production.min';
import { AuthContext } from './auth/AuthProvider';
import HomeScreen from './HomeScreen';




const RegisterScreen = (navigation) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    
    // const [register] = useContext(AuthContext);

    const [name, setName] = useState ('');
    const [submitted, setSubmitted] = useState ('');
    // const {navigation} = props
    const window = useWindowDimensions();

    // const onPressHandler = () => {
        
    //     if (name.length >2) {
    //         setSubmitted(!submitted);
    //         } else {
    //       ToastAndroid.showWithGravity('Empty fields',
    //       ToastAndroid.LONG,
    //       ToastAndroid.BOTTOM,
    //       );

        
    //     };
        
    // };

    
    return(
        
        
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
            <View style={styles.container}>
               
                <Text style={styles.text}>
                    Create new account
                </Text>
                    <View>
                
                    {/* <TextInput style={styles.input} placeholder={'Name'} placeholderTextColor='black'/> */}
                    
                    <TextInput style={styles.input} placeholder={'Email'} placeholderTextColor='black'/>
                    
                    <TextInput style={styles.input} placeholder={'Password'} placeholderTextColor='black'/>
                    
                    <TextInput style={styles.input} placeholder={'Confirm Password'} placeholderTextColor='black'/>

                    {/* <TextInput style={styles.input} placeholder={'Pick a Date'} placeholderTextColor='black'/> */}

                    

                <View style={styles.views}>
                {() => register(email, password)}
                {/* {() => navigation.navigate('Home')} */}
                

                    <TouchableOpacity onPress= {() => register(email, password)}   style={styles.button}>
                        <Text style={{textAlign: 'center', color: 'white', fontSize: 25,  fontFamily: 'monospace',}}>Register</Text>
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
        justifyContent: 'center',
        marginTop:5,
        backgroundColor: 'white',
        
        
    },
    text: {
        textAlign: 'center',
        fontSize: 30,
        color: 'blue',
        marginBottom: 15,
        color: 'black',

    },
    texts: {
        marginLeft: 10,
        fontSize: 15,

    },
    views: {
        alert: 'Success',
        alignItems: 'center',
    },
    input: {
        // borderRadius: 25,
        borderColor: 'black',
        backgroundColor: 'white',
        color:'black',
        marginLeft: 10,
        marginRight: 10,
        // marginTop: 5,
        // marginBottom: 10,
        paddingLeft: 15,
        borderBottomColor: '#000', 
        borderBottomWidth: 2
        
    },
    button: {
        marginTop: 15,
        width: '50%',
        backgroundColor: 'darkgreen',
        height: 50,
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,
    },
})

export default RegisterScreen;