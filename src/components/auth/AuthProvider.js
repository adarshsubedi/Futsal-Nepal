import React, {useState, createContext, useContext, useEffect} from 'react';
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../HomeScreen';
// import RegisterScreen from '../RegisterScreen';
import {View, Text, TextInput, Alert, FormButton, Button, StyleSheet, TouchableOpacity, useWindowDimensions, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ToastAndroid } from 'react-native';


const signUp = (fullName, email, password) => {
    console.log('values:', fullName, email, password);
    if(!fullName || !email || !password){
        Alert.alert('Empty fields');
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;
        auth().currentUser.updateProfile({
            displayName: fullName

        });

        return uid;
    })
    .catch(
        err => {
            console.log("Error: ", err)
            Alert.alert(err.code, err.message)}
    );
};

const signIn = (email, password) => {
    if(!email || !password){
       Alert.alert('Empty fields') 
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const forgetPassword = (email) => {
    if(!email){
        Alert.alert('Please enter email')
    }

    return auth().sendPasswordResetEmail(email);
}

const signOut = () => {
    return auth().signOut()

}

const Auth = {
    signUp,
    signIn,
    forgetPassword,
    signOut

}

export default Auth;