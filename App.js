import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location';
import { TEST_KEY } from '@env';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async() => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            } catch (error) {
                console.error("Error getting location:", error);
                setErrorMsg("Error getting location");
            }
        })()
    }, [])

    useEffect(() => {
        if (location) {
            console.log(location);
        } else {
            console.log("Location not found");
        }
    }, [location])

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="tomato" />
            </View>  
        )
    }
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default App;