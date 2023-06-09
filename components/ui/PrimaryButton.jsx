import React from 'react';
import {View, Text, Pressable, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children, onPress}) {
    return (
        <View style={styles.buttonsOuterContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.pressed, styles.buttonContainer] : styles.buttonContainer} onPress={onPress}>
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
        backgroundColor: Colors.secondary,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "center",
    },
    pressed: {
        opacity: 0.8,
    }
})