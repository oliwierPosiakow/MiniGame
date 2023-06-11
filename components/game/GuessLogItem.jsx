import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function GuessLogItem({roundNum, guess}) {
    return (
        <View style={styles.logContainer}>
            <Text style={styles.logText}>#{roundNum}</Text>
            <Text style={styles.logText}>Opponent's guess: {guess}</Text>
        </View>
    );
}

export default GuessLogItem;

const styles = StyleSheet.create({
    logContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        gap: 16,
        padding: 8,
        backgroundColor: Colors.primaryDarker,
        borderRadius: 7,
        marginBottom: 8,
    },
    logText:{
        color: Colors.text,
        fontFamily: 'open-sans'
    }
})