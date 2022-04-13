import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Page = ({ backgroundColor, iconName, title, subtitle, img }) => {
    return (
        <View
            style={{
                // flex: 1,
                height: windowHeight * 0.91,
                width: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor,

            }}>

            <View>
                <Image source={require('../images/board1.jpg')}
                    style={{ width: 500, height: 450, resizeMode: 'contain' }} />
            </View> 

            <View style={{ marginTop: 70 }}>
                <Text style={{
                    fontFamily: 'Haas Grot Text R Web',
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 20,
                }}>
                    {title}
                </Text>

                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 170,
                }}>
                    {subtitle}
                </Text>
            </View>
        </View>
    );
};

export default Page;