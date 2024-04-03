import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import InitialScreen from "./src/screens/InitialScreens/InitialScreen";

const App = () => {
    const [token, setToken] = useState(null);
    
    if (token === null) {
        return (
            <View style={styles.container}>
                <InitialScreen />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black"
    }
});

export default App;