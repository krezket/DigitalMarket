import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from "./components/Tabs";
import Signup from "./screens/InitialScreens/SignupScreens/Signup";
import SignupDOB from "./screens/InitialScreens/SignupScreens/SignupDOB";
import SignupNumber from "./screens/InitialScreens/SignupScreens/SignupNumber";
import Login from "./screens/InitialScreens/LoginScreens/Login";
import InitialScreen from "./screens/InitialScreens/InitialScreen";

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator style={stackContainer}>
            {user ?
                <Stack.Screen name="Tabs" component={Tabs} />
                :
                (
                    <>
                        <Stack.Screen name="InitialScreen" component={InitialScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="Signup" component={Signup} options={{ title: 'Getting Started', headerBackTitle: 'Back' }} />
                        <Stack.Screen name="SignupDOB" component={SignupDOB} options={{ title: 'Date of Birth', headerBackTitle: 'Back' }} />
                        <Stack.Screen name="SignupNumber" component={SignupNumber} options={{ title: 'Phone Number', headerBackTitle: 'Back' }} />

                        <Stack.Screen name="Login" component={Login} />
                    </>
                )
            }
        </Stack.Navigator>
    )
}

export default StackNavigator