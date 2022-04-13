import { StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Button from '../Button/Button';

const Footer = ({
    backgroundColor,
    leftButtonLabel = false,
    leftButtonPress = false,
    rightButtonLabel = false,
    rightButtonPress = false,
    // getStartedLabel = false,
    // getStartedPress = false,
}) => {

    const windowWidth = useWindowDimensions(). width;
    const HEIGHT = windowWidth;
    const FOOTER_PADDING = windowWidth;

  return (
    <View
    style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 70,
        backgroundColor,
        alignItems: 'center',
        
    }}
    >
        <Button label={leftButtonLabel} onPress={leftButtonPress}/>
        <Button label={rightButtonLabel} onPress={rightButtonPress} />
        {/* <Button label={getStartedLabel} onPress={getStartedPress}/> */}
    </View>
  );
};


const styles = StyleSheet.create({
    left: {
        color: 'white',
        fontSize: 23,
        borderRadius: 10,
        fontFamily: 'Haas Grot Text R Web',
        borderWidth: 1,
        borderColor: 'white',
    },
})

export default Footer;


