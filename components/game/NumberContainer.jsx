import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
function NumberContainer({text}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.text,
        padding: 24,
        borderRadius: 7,
        alignItems: "center",
    },
    text: {
        color: Colors.text,
        fontSize: 32,
        fontWeight: "bold"
    }
})