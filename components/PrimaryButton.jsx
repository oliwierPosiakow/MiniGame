import React from 'react';
import {View, Text, Pressable, StyleSheet} from "react-native";


function PrimaryButton({children}) {
    return (
        <View style={styles.buttonsOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.buttonContainer] : styles.buttonContainer}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonsOuterContainer:{
        borderRadius: 50,
        overflow: 'hidden',
    },
    buttonContainer: {
        backgroundColor: '#2d2d2d',
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.8,
    }
})