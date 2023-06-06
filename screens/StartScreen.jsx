import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen(props) {
    return (
        <View style={styles.startContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={'number-pad'}
                autoCapitalize={'none'}
                autoCorrect={false}

            />
            <View style={styles.buttonWrapper}>
                <PrimaryButton>Reset</PrimaryButton>
                <PrimaryButton>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    startContainer: {
        marginTop: 20,
        marginHorizontal: 24,
        borderRadius: 9,
        padding: 16,
        backgroundColor: 'rgb(182,194,175)',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 2,
        shadowOpacity: .15,
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    buttonWrapper:{
        gap: 10,
    }
})