import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import StackNavigator from "./src/StackNavigator";
import Constants from "expo-constants";
import { styles } from "./src/styles/AppStyles";
import useAuth, { AuthProvider } from "./src/hooks/useAuth";

const Stack = createNativeStackNavigator();

const App = () => {
    const { user } = useAuth();
    const { container, stackContainer } = styles;

    return (
        <View style={container}>
            <StatusBar hidden={true} />
            <NavigationContainer >
                <AuthProvider>
                    <StackNavigator />
                </AuthProvider>
            </NavigationContainer>
        </View>
    );
}

export default App;