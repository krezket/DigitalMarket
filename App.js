import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={'current'} component={CurrentWeather} />
                <Tab.Screen name={'upcoming'} component={UpcomingWeather} />
                <Tab.Screen name={'city'} component={City} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;