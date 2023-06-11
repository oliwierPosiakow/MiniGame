import React from 'react';
import {View, StyleSheet} from "react-native";
import Colors from "../../constants/colors";
function Card({children}) {
    return (
        <View style={styles.cardContainer}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: "center",
        borderRadius: 9,
        padding: 16,
        backgroundColor: Colors.primary,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 2,
        shadowOpacity: .15,
    },
})