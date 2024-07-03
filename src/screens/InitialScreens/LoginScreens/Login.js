import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Login = () => {
    const [name, setName] = useState('');

    const { main, buttonGray, buttonRed, inputStyle, buttonText } = styles;

    return (
        <View>
            <TextInput
                style={inputStyle}
                value={name}
                onChangeText={setName}
                placeholder="Username"
            />        
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

export default Login;