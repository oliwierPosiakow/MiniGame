import {Text, View, Image, StyleSheet} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Instruction from "../components/ui/Instruction";

function GameOverScreen({rounds, userNum, startNewGame}) {
    return (
        <View>
            < Title text={'Game Over'}/>
            <View style={styles.successImgContainer}>
                <Image style={styles.successImg} source={require('../assets/images/success.png')}/>
            </View>
            <Instruction style={styles.desc}>
                Your phone needed <Text style={styles.descSpan}>{rounds}</Text> rounds to guess the number <Text style={styles.descSpan}>{userNum}</Text>.
            </Instruction>
            <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
        </View>

    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    successImgContainer: {
        overflow: 'hidden',
        borderRadius: 200,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.secondary,
        margin: 36,
        alignSelf: "center",
    },
    successImg:{
        width: '100%',
        height: '100%',
    },
    desc:{
        color: Colors.text,
        fontFamily: 'open-sans',
        textAlign: "center",
        marginBottom: 36,
    },
    descSpan: {
        color: Colors.highlight,
        fontFamily: 'open-sans-bold'
    }
})