import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, StatusBar, ActivityIndicator, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import Tabs from "./src/components/Tabs";
import Signup from "./src/screens/InitialScreens/SignupScreens/Signup";
import SignupDOB from "./src/screens/InitialScreens/SignupScreens/SignupDOB";
import SignupNumber from "./src/screens/InitialScreens/SignupScreens/SignupNumber";
import Login from "./src/screens/InitialScreens/LoginScreens/Login";
import InitialScreen from "./src/screens/InitialScreens/InitialScreen";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Notifications from "./src/screens/Notifications";
import Account from "./src/screens/Account";
import Constants from "expo-constants";
import { styles } from "./src/styles/AppStyles";

const Stack = createNativeStackNavigator();

const App = () => {
    const { container, stackContainer } = styles;
    const [user, setUser] = useState(false);

    return (
        <View style={container}>
            <StatusBar hidden={true} />
            <NavigationContainer >
                <Stack.Navigator style={stackContainer}>
                    {user ? 
                        <Stack.Screen name="Tabs" component={Tabs} /> 
                        : 
                        (
                            <>
                                <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
                                <Stack.Screen name="Signup" component={Signup} options={{title: 'Getting Started', headerBackTitle: 'Back'}} />
                                <Stack.Screen name="SignupDOB" component={SignupDOB} options={{title: 'Date of Birth', headerBackTitle: 'Back'}} />
                                <Stack.Screen name="SignupNumber" component={SignupNumber} options={{title: 'Phone Number', headerBackTitle: 'Back'}} />

                                <Stack.Screen name="Login" component={Login} /> 
                            </>
                        )
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
} 

export default App;