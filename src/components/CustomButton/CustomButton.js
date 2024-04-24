import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type, bgColor, fgColor }) => {
    return (
        <Pressable
            style={[
                    styles.container,
                    styles[`container_${type}`],
                    bgColor ? {backgroundColor: bgColor} : {},
                ]}

            onPress={onPress}>
            <Text
                style={[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {},
                ]}
                text={text}>
                {text}
            </Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',
        width: 350,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10,
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',

    },
    container_TERTIARY: {
        backgroundColor: 'transparent',
        // borderWidth: 1,
        // borderColor: '#3B71F3',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',

    },
    text_PRIMARY: {
        color: 'white',
    },
    text_TERTIARY: {
        color: '#3B71F3',
    }



})