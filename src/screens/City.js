import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, StatusBar } from "react-native";

const City = () => {
    const { container, image, titleFont, cityFont, tempFont, text } = styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/jpg/wise.jpg')}
                style={image}
            >
                <Text style={[text, titleFont]}>City</Text>
                <Text style={[text, cityFont]}>Seattle</Text>
                <Text style={[text, tempFont]}>40</Text>
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
    },
    titleFont: {
        fontSize: 30,
    },
    cityFont: {
        fontSize: 20,
    },
    tempFont: {
        fontSize: 50,
    },
    text: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white',
    }
})
export default City;
