import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Alert} from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartScreen(props) {

    const [userInput, setUserInput] = useState('')

    function userInputHandler(enteredText){
        setUserInput(enteredText)
    }

    function resetInputHandler(){
        setUserInput('')
    }
    function confirmInput(){
        const chosenNum = parseInt(userInput)
        if(isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99){
            Alert.alert(
                'Wrong Input',
                'Must be a number in range 1-99',
                [{text: 'Okay', style:'destructive', onPress: resetInputHandler}]
            )
            return
        }
        props.startGame(userInput)
    }

    return (
        <View style={styles.startContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType={'number-pad'}
                autoCapitalize={'none'}
                autoCorrect={false}
                value={userInput}
                onChangeText={userInputHandler}
            />
            <View style={styles.buttonWrapper}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    startContainer: {
        alignItems: "center",
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
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonContainer: {
        flex: 1,
    }
})