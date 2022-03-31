import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, Text, TextInput, TextButton, Image, Button, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid} from 'react-native';
import Auth from './auth/AuthProvider';
import auth from './auth/AuthProvider';

const LoginScreen = (props) => {
  
    const {navigation} = props

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={styles.container}>
                 
            
            <TextInput 
            style={styles.input} 
            value={email}
            
            onChangeText={e => setEmail(e)}
            placeholder={'Email'} 
            placeholderTextColor='black'
            />
            
            <TextInput 
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
            value={password} 

            style={styles.input} 
            placeholder={'Password'} 
            placeholderTextColor='black'
            /> 

            {/* <TextButton
            text='Forget Password'
            style={styles.forget}
            onPress={() => navigation.navigate('Forget Password?')}
            /> */}
                
                <View style={styles.views}>
                    <TouchableOpacity onPress= {() => Auth.signIn(email, password)}  
                    style={styles.button}>
                        <Text style={{textAlign: 'center', 
                        color: 'white', 
                        fontSize: 25,  
                        fontFamily: 'monospace',}}>Login</Text>
                    </TouchableOpacity>

                
                    <Text style={styles.text}>Don't have an account? </Text>

                    <TouchableOpacity 
                    onPress= {() => navigation.navigate('Register')}  
                    style={styles.button}>
                        <Text style={{textAlign: 'center', 
                        color: 'white', 
                        fontSize: 25,  
                        fontFamily: 'monospace',}}>Register</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>or sign in with </Text>


                    {/* <View style={styles.img}>
                        <Text>
                            <Image source={require('./images/futsal1.jpg')} 
                            style = {{ width: 940, height: 367 }}/>;
                        </Text>
                    </View> */}
                    
                    
                    {/* admin login  */}
                    <Text style={styles.admin}>Sign in as </Text>
                    <TouchableOpacity onPress= {() => navigation.navigate('Admin')}  style={styles.button}>
                        <Text style={{textAlign: 'center', 
                        color: 'white', 
                        fontSize: 25,  
                        fontFamily: 'monospace',}}>Admin</Text>
                    </TouchableOpacity>
                    
                
                </View>
            </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    );

};

const styles = StyleSheet.create({
    container: {
      
       
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
    input :{
        fontFamily: 'monospace',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 15,
        color: 'black',
        // fontFamily: 'rounded',
        // Add this to specify bottom border color
        borderBottomColor: '#000', 
        borderBottomWidth: 2
    },
    admin:{
        fontSize: 20,
        marginTop: 330,
        color: '#000',
        fontFamily: 'monospace',
    },
    forget:{
        color: 'black',
    }
})

export default LoginScreen;