import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, ImageBackground, View} from 'react-native';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading'

import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import Colors from "./constants/colors";
export default function App() {

    const [userNum, setUserNum] = useState()
    const [gameIsOver, setGameIsOver] = useState(true)
    const [rounds, setRounds] = useState(0)

    const [fontsLoaded] = useFonts({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!fontsLoaded){
        return <AppLoading/>
    }
    function pickedNumHandler(pickedNum){
        setUserNum(pickedNum)
        setGameIsOver(false)
    }

    function gameOverHandler(numOfRounds){
        setGameIsOver(true)
        setRounds(numOfRounds)
    }

    function startNewGame(){
        setUserNum(null)
        setRounds(0)
    }

    let screen = <StartScreen startGame={pickedNumHandler}/>

    if(userNum){
        screen = (
            <GameScreen userNum={userNum} onGameOver={gameOverHandler}/>
        )
    }

    if(gameIsOver && userNum) {
        screen = <GameOverScreen userNum={userNum} rounds={rounds} startNewGame={startNewGame}/>
    }

    return (
        <LinearGradient colors={[Colors.secondary, Colors.primaryDarker]} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/dices.jpg')}
                resizeMode={"cover"}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <StatusBar style={'light'}/>
                <SafeAreaView>
                    <View style={styles.container}>
                        {screen}
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    rootScreen:{
        flex: 1,
    },
    backgroundImage:{
        opacity: .1,
    },
    container: {
        padding: 24,
    },
});
