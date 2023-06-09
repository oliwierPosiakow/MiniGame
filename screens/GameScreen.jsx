import {View, Text, StyleSheet} from 'react-native'
import PrimaryButton from "../components/PrimaryButton";

function GameScreen(props) {
    return (
        <View style={styles.gameScreen}>
            <Text>Oponnents Guess</Text>
            <View>
                <Text>Higher or Lower?</Text>
                <PrimaryButton>Higher</PrimaryButton>
                <PrimaryButton>Lower</PrimaryButton>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    gameScreen:{
        padding: 16,
    }
})