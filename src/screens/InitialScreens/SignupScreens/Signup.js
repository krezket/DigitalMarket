import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";

const Signup = () => {
    const [name, setName] = useState('');

    const { main, buttonGray, buttonRed, inputStyle, buttonText } = styles;

    return (
        <View style={main}>
            <Text>What is your name?</Text>
            <TextInput
                style={inputStyle}
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
            <TouchableOpacity 
                style={name === '' ? buttonGray : buttonRed} 
                onPress={() => console.log(name)} 
                disabled={name === ''}
            >
                <Text style={buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
    },
    inputStyle: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
    },
    buttonGray: {
        backgroundColor: 'gray',
        padding: 10,
        alignItems: 'center',
    },
    buttonRed: {
        backgroundColor: 'red',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
});

export default Signup;