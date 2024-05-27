import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

const Signup = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { main, inputStyle } = styles;

    return (
        <View style={main}>
            <Text>What is your name?</Text>
            <TextInput
                style={inputStyle}
                value={name}
                onChangeText={setName}
                placeholder="Name"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    inputStyle: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
    },
});

export default Signup;