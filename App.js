import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import StartScreen from "./screens/StartScreen";

export default function App() {
    return (
        <>
            <StatusBar style={'dark'}/>
            <SafeAreaView>
                <StartScreen/>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
