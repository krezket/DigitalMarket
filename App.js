import React from "react";
import CurrentWeather from "./src/screens/CurrentWeather";
import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                }}
                >

                <Tab.Screen 
                    name={'current'}
                    component={CurrentWeather}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather 
                                name={'home'} 
                                size={24} 
                                color={focused ? 'tomato' : 'gray'} 
                            />
                        )
                    }} 
                />

                <Tab.Screen 
                    name={'upcoming'} 
                    component={UpcomingWeather}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather 
                                name={'list'} 
                                size={24} 
                                color={focused ? 'tomato' : 'gray'} 
                            />
                        )
                    }}  
                />

                <Tab.Screen 
                    name={'city'} 
                    component={City}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Feather 
                                name={'search'} 
                                size={24} 
                                color={focused ? 'tomato' : 'gray'} 
                            />
                        )
                    }}   
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App;