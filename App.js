import React, { useState, useEffect } from "react";
import { SafeAreaView, ActivityIndicator, StyleSheet } from "react-native";
import Tabs from "./src/components/Tabs";
import InitialScreen from "./src/screens/InitialScreens/InitialScreen";
import Signin from "./src/screens/InitialScreens/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
    const { container } = styles;
    const [token, setToken] = useState(null);

    if (token === null) {
        return (
            <SafeAreaView style={container}>
                <NavigationContainer style={container} >
                    <Stack.Navigator>
                        <Stack.Screen name="InitialScreen" component={InitialScreen} />
                        <Stack.Screen name="Signin" component={Signin} />

                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
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