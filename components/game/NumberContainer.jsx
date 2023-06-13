import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.text,
        padding: deviceWidth < 380 ? 12: 24,
        borderRadius: 7,
        alignItems: "center",
    },
    text: {
        color: Colors.text,
        fontSize: deviceWidth < 380 ? 24: 32,
        fontWeight: "bold"
    }
})