import {Text, View, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView} from "react-native";

import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";
import Instruction from "../components/ui/Instruction";

function GameOverScreen({rounds, userNum, startNewGame}) {

    const {width, height} = useWindowDimensions()

    let imageSize = 300
    if(width < 380){
        imageSize = 150
    }
    if(height < 400) {
        imageSize = 100
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize/2
    }

    return (
        <ScrollView>
            < Title text={'Game Over'}/>
            <View style={[styles.successImgContainer, imageStyle]}>
                <Image style={styles.successImg} source={require('../assets/images/success.png')}/>
            </View>
            <Instruction style={styles.desc}>
                Your phone needed <Text style={styles.descSpan}>{rounds}</Text> rounds to guess the number <Text style={styles.descSpan}>{userNum}</Text>.
            </Instruction>
            <PrimaryButton onPress={startNewGame}>Start New Game</PrimaryButton>
        </ScrollView>

    );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    successImgContainer: {
        overflow: 'hidden',
        borderRadius: deviceWidth < 380 ? 75 : 150,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
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
        marginBottom: 24,
    },
    descSpan: {
        color: Colors.highlight,
        fontFamily: 'open-sans-bold'
    }
})