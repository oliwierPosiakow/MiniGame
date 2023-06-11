import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
function Title({text}) {
    return (
        <View>
            <Text style={styles.title}>{text}</Text>
        </View>
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.primary,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 12,
    }
})