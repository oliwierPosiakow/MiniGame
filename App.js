import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, ImageBackground} from 'react-native';
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";

export default function App() {

    const [userNum, setUserNum] = useState(null)

    function pickedNumHandler(pickedNum){
        setUserNum(pickedNum)
    }

    let screen = <StartScreen startGame={pickedNumHandler}/>

    if(userNum){
        screen = <GameScreen/>
    }

    return (
        <LinearGradient colors={['#2d2d2d', '#70786c']} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/dices.jpg')}
                resizeMode={"cover"}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <StatusBar style={'light'}/>
                <SafeAreaView>
                    {screen}
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
