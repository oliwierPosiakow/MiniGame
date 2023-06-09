import {View, Text, StyleSheet, Alert} from 'react-native'
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title'
import NumberContainer from "../components/game/NumberContainer";
import {useEffect, useState} from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNum, onGameOver}) {
    const initialGuess = generateRandomBetween(
        1,
        100,
        userNum
    );
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNum) {
            onGameOver();
        }
        console.log('effect ran', currentGuess, userNum)
    }, [currentGuess, userNum, onGameOver]);

    function nextGuess(direction) {
        // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNum) ||
            (direction === 'greater' && currentGuess > userNum)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                { text: 'Sorry!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currentGuess
        );
        setCurrentGuess(newRndNumber);
    }
    return (
        <View>
            <Title text={"Opponent's turn"}/>
            <NumberContainer text={currentGuess}/>
            <View>
                <Text>Higher or Lower?</Text>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>Lower</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'higher')}>Higher</PrimaryButton>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    buttonsWrapper:{
        flexDirection: "row",
        gap: 16,
    },
    buttonContainer:{
        flex: 1,
    },


})