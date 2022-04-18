import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import FirstScreen from './FirstScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';
import LoginScreen from '../LoginScreen';

const StarterBoard = () => {

    const [index, setIndex] = useState(1)

    const RenderElement = () => {
        if (index === 1) {
            return <FirstScreen />
        } else if (index === 2) {
            return <SecondScreen />
        } else if (index === 3) {
            return <ThirdScreen />
        } else {
            return <LoginScreen />
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#06001c', height: 1000 }}>
                <RenderElement />

                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.buttonStyleskip}
                        onPress={() => setIndex(index + 2)}>
                        <Text style={styles.buttontxtskip}>SKIP</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonStylenext}
                        onPress={() => setIndex(index + 1)}>
                        <Text style={styles.buttontxtnext}>NEXT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default StarterBoard;

const styles = StyleSheet.create({
    buttonStyleskip: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#06001c',
        color: 'white',
        height: 50,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontFamily: 'Haas Grot Text R Web',
        borderColor: 'white',
        borderWidth: 1,
        paddingRight: 5,
        margin: 7,
        
    },
    buttonStylenext: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        height: 50,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontFamily: 'Haas Grot Text R Web',
        borderColor: 'white',
        borderWidth: 1,
        margin: 7,
    },
    buttontxtskip: {
        color: 'white',
        paddingTop: 15,
        fontWeight: 'bold',
    },
    buttontxtnext: {
        color: 'black',
        paddingTop: 15,
        fontWeight: 'bold',
    },
    button: {
        flexDirection: 'row',
        paddingHorizontal: 25,
    },
})
