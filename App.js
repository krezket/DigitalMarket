import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, ActivityIndicator, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tabs from "./src/components/Tabs";
import Signup from "./src/screens/InitialScreens/Signup";
import Login from "./src/screens/InitialScreens/Login";
import InitialScreen from "./src/screens/InitialScreens/InitialScreen";

import { styles } from "./src/styles/AppStyles";

const Stack = createNativeStackNavigator();

const App = () => {
    const { container, stackContainer } = styles;
    const [token, setToken] = useState(null);

    if (token === null) {
        return (
            <SafeAreaView style={container}>
                <NavigationContainer >
                    <Stack.Navigator style={stackContainer}>
                        <Stack.Screen name="InitialScreen" component={InitialScreen} />
                        <Stack.Screen name="Signup" component={Signup} />
                        <Stack.Screen name="Login" component={Login} />
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

export default App;