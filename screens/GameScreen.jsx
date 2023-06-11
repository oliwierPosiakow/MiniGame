import {View, Text, StyleSheet, Alert} from 'react-native'
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title'
import Card from "../components/ui/Card";
import NumberContainer from "../components/game/NumberContainer";
import {useEffect, useState} from "react";
import Instruction from "../components/ui/Instruction";

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
    }, [currentGuess, userNum, onGameOver]);

    function nextGuess(direction) {
        // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNum) ||
            (direction === 'higher' && currentGuess > userNum)
        ) {
            Alert.alert(
                "Don't lie!",
                'Play along rules...',
                [{ text: 'Sorry!', style: 'cancel' }]
            );
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
        <View style={styles.gameContainer}>
            <Title text={"Opponent's turn"}/>
            <NumberContainer text={currentGuess}/>
            <Card>
                <Instruction>Higher or Lower?</Instruction>
                <View style={styles.buttonsWrapper}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'lower')}>Lower</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuess.bind(this, 'higher')}>Higher</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gameContainer:{
        gap: 20,
    },
    buttonsWrapper:{
        flexDirection: "row",
        gap: 16,
    },
    buttonContainer:{
        flex: 1,
    },
})