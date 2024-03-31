import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";

const City = () => {
    const { container, image } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/jpg/wise.jpg')}
                style={image}
            >
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'white',
    },
    image: {
        flex: 1
    }
})
export default City;
