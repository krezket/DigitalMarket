import Home from "../screens/Home";
import Search from "../screens/Search";
import Notifications from "../screens/Notifications";
import Account from "../screens/Account";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
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
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'home'}
                            size={30}
                            color={focused ? 'black' : 'gray'}
                        />
                    )
                }}
            />


            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'search'}
                            size={30}
                            color={focused ? 'black' : 'gray'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'bell'}
                            size={30}
                            color={focused ? 'black' : 'gray'}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name={'user'}
                            size={30}
                            color={focused ? 'black' : 'gray'}
                        />
                    )
                }}
            />

        </Tab.Navigator>
    );
};

export default Tabs;