import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const FirstScreen = () => {
    return (
        <View>
            <Image source={require('./images/field1.jpg')}
                style={{ width: 360, height: 210, resizeMode: 'cover' }} />
            <Text style={styles.txt}>
               Ground Name: JoJo Futsal {'\n'}
               Location: Barcelona {'\n'}
               Description {'\n'}
            Located in the heart of Barcelona the futsal will fulfill your soccer experience from different level and excitment
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
        textAlign: 'left',
        // padding: 10,
        marginLeft: 10,
        marginTop: 10,
        marginRight: 10,

    },
})

export default FirstScreen;