import React from "react";
import CurrentWeather from "../screens/CurrentWeather"
import UpcomingWeather from "../screens/UpcomingWeather";
import City from "../screens/City";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: 'white',
                },
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                    color: 'red'
                }
            }}
        >

            <Tab.Screen
                name={'Home'}
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
                name={'Search'}
                component={UpcomingWeather}
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

            <Tab.Screen
                name={'Account'}
                component={City}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'user'}
                            size={24}
                            color={focused ? 'tomato' : 'gray'}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default Tabs;