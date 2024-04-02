import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";

const App = () => {

    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

export default App;