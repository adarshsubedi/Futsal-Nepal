import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, TextInput, TextButton, Image, Button, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';
import Auth from './auth/AuthProvider';
import auth from './auth/AuthProvider';
import Icon from 'react-native-vector-icons/FontAwesome';


const LoginScreen = (props) => {

    const { navigation } = props

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <View styles={styles.header}>

                        </View>
                        <View style={styles.img}>
                            <Image source={require('./images/futsal2.jpg')}
                                style={{ width: 360, height: 210, resizeMode: 'cover' }} />
                        </View>

                        {/* <View style={styles.firsticon}>
                            <Icon name='envelope' size={25} style={styles.icons}></Icon>
                        </View> */}

                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={e => setEmail(e)}
                            placeholder={'Email'}
                            placeholderTextColor='black'
                        />

                        {/* <Icon name='key' size={25} style={styles.icons}></Icon> */}
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={e => setPassword(e)}
                            value={password}
                            style={styles.input}
                            placeholder={'Password'}
                            placeholderTextColor='black'
                        />


                        <TouchableOpacity onPress={() => navigation.navigate('Forget')} >
                            <Text style={{
                                textAlign: 'center',
                                color: 'black',
                                fontSize: 20,
                                color: 'darkgreen',
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
                                    color: 'white',
                                    fontSize: 25,
                                    fontFamily: 'monospace',
                                }}>Login</Text>
                            </TouchableOpacity>

                            <Text style={styles.text}>or sign in with </Text>

                            <View>
                                <View style={styles.socialiconfa}>
                                    <Icon.Button
                                        name='facebook'
                                        backgroundColor="#3b5998"> Facebook
                                        {/* onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))} */}

                                    </Icon.Button>
                                    <Icon.Button name='google' backgroundColor='grey'> Google </Icon.Button>
                                </View>
                            </View>




                            <TouchableOpacity
                                onPress={() => navigation.navigate('Register')}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: 20,
                                    color: 'darkgreen',
                                    // borderBottomColor: 'darkgreen', 
                                    // borderBottomWidth: 2,
                                    marginTop: 5,
                                    fontFamily: 'monospace',
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>Don't have an account? Register</Text>
                            </TouchableOpacity>

                            {/* <TouchableOpacity
                                onPress={() => navigation.navigate('Hi')}>
                                <Text style={{
                                    textAlign: 'center',
                                    color: 'black',
                                    fontSize: 20,
                                    color: 'darkgreen',
                                    // borderBottomColor: 'darkgreen', 
                                    // borderBottomWidth: 2,
                                    marginTop: 5,
                                    fontFamily: 'monospace',
                                    marginBottom: 10,
                                    marginTop: 10,
                                }}>Touch to see hello</Text>
                            </TouchableOpacity> */}




                            {/* admin login  */}

                            <TouchableOpacity onPress={() => navigation.navigate('Admin')}  >
                                <Text style={{ fontSize: 20, color: 'darkgreen', fontFamily: 'monospace', marginTop: 0 }}>Sign in as Admin</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 2,

    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'darkgreen',
        height: 20,
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontSize: 20,
        fontFamily: 'monospace',
    },
    views: {
        alignItems: 'center',
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
    input: {
        fontFamily: 'monospace',
        alignItems: 'center',
        // marginTop: 10,
        marginHorizontal: 20,
        paddingLeft: 15,
        color: 'black',
        // Add this to specify bottom border color
        borderBottomColor: '#000',
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
})

export default LoginScreen;