import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import Tabs from "./src/components/Tabs";
import Signup from "./src/screens/InitialScreens/SignupScreens/Signup";
import Login from "./src/screens/InitialScreens/LoginScreens/Login";
import InitialScreen from "./src/screens/InitialScreens/InitialScreen";

import Constants from "expo-constants";

import { styles } from "./src/styles/AppStyles";

const Stack = createNativeStackNavigator();

const App = () => {
    const { container, stackContainer } = styles;
    const [token, setToken] = useState(null);

    if (token === null) {
        return (
            <View style={container}>
                <StatusBar hidden={true} />
                <NavigationContainer >
                    <Stack.Navigator style={stackContainer}>
                        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{title: 'Getting Started', headerBackTitle: 'Back'}} />
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}; 

export default App;