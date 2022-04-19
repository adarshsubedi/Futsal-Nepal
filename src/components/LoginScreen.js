import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TextButton, Image, Button, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import Auth from './auth/AuthProvider';
import auth from './auth/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const LoginScreen = (props) => {

    const ref_to_input2 = useRef();
  

    const { navigation } = props

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <View style={styles.header}>
                            <Text style={styles.fan}>
                                F
                            </Text>
                            <Text style={styles.normal}>
                                UTSAL
                            </Text>
                            <Text style={styles.fan}>
                                N
                            </Text>
                            <Text style={styles.normal}>
                                EPAL
                            </Text>
                        </View>
                        <View style={styles.img}>
                            <Image source={require('./images/futsal2.jpg')}
                                style={{ width: 250, height: 250, resizeMode: 'cover', borderRadius: 200, alignSelf: 'center' }} />
                        </View>

                        {/* <View style={styles.firsticon}>
                            <Icon name='envelope' size={25} style={styles.icons}></Icon>
                        </View> */}

                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={e => setEmail(e)}
                            placeholder={'Email'}
                            placeholderTextColor='white'
                            color= 'white'
                        />

                        {/* <Icon name='key' size={25} style={styles.icons}></Icon> */}
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={e => setPassword(e)}
                            value={password}
                            style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor='white'
                            color= 'white'
                        
                        />


                        <TouchableOpacity onPress={() => navigation.navigate('Forget')} >
                            <Text style={{
                                //textAlign: 'center',
                                // color: 'black',
                                marginBottom: 15,
                                fontSize: 18,
                                color: 'white',
                                marginTop: 5,
                                textAlign: 'right',
                                marginRight: 10,
                                fontFamily: 'monospace'
                            }}>Forget Password?</Text>
                        </TouchableOpacity>

                        <View style={styles.views}>
                            <TouchableOpacity onPress={() => Auth.signIn(email, password)}
                                style={styles.button}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: 25,
                                    fontFamily: 'monospace',
                                }}>Login</Text>
                            </TouchableOpacity>

                            {/* <Text style={styles.text}>or sign in with </Text>

                            <View>
                                <View style={styles.socialiconfa}>
                                    <Icon.Button
                                        name='facebook'
                                        backgroundColor="#3b5998"> Facebook
                                        onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}

                                    </Icon.Button>
                                    <Icon.Button name='google' backgroundColor='grey'> Google </Icon.Button>
                                </View>
                            </View> */}




                            <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 18,
                                    color: 'white',
                                    marginTop: 5,
                                    fontFamily: 'monospace',
                                    marginTop: 70,
                                }}>Don't have an account? Register</Text>
                            </TouchableOpacity>


                            {/* admin login  */}

                            {/* <TouchableOpacity onPress={() => navigation.navigate('Admin')}  >
                                <Text style={{ fontSize: 20, color: 'white', fontFamily: 'monospace', marginTop: 0 }}>Sign in as Admin</Text>
                            </TouchableOpacity> */}


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#06001c',
        height: windowHeight,
        // flex: 1,

    },
    header: {
        flexDirection: 'row',
        paddingTop: 5,
        marginBottom: 30,
        color: 'white',
        fontFamily: 'monospace',
        justifyContent: 'center',
        margin: 15,

    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
        color: 'white',
        fontSize: 20,
        fontFamily: 'monospace',
    },
    views: {
        alignItems: 'center',

    },
    button: {
        marginTop: 15,
        width: '90%',
        backgroundColor: 'white',

        height: 50,
        fontSize: 30,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 5,

    },
    input: {
        fontFamily: 'monospace',
        alignItems: 'center',
        // marginTop: 10,
        marginHorizontal: 20,
        paddingLeft: 15,
        marginTop: 5,
        paddingBottom: 15,
        // Add this to specify bottom border color
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },

    forget: {
        color: 'black',
    },
    icons: {
        marginLeft: 10,
        marginTop: 10,
    },
    firsticon: {
        marginBottom: 5,
    },
    socialiconfa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: '60%',
    },
    socialicongo: {
        // marginLeft: 5,
        width: '40%',
    },
    fan:{
        fontSize: 55,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    normal:{
        fontSize: 30,
        color: 'white',
        marginTop: 22,
        fontFamily: 'monospace',
    },
})

export default LoginScreen;