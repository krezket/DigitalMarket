import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = (props) => {
    const { text } = props;
    console.log(text)
    const navigation = useNavigation();

    const handleSignUp = (text) => {
        if (text === "Sign Up") {
            navigation.navigate('Signup');
        } else if (text === "Log In") {
            navigation.navigate('Login');
        }

        console.log(`Button with text ${text} has been pressed!`);
    }

    const { button, buttonText } = styles;
    return (
        <Pressable
            onPress={() => {handleSignUp(text)}}
            style={button}
        >
            <Text style={buttonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        width: 200,
        height: 50,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "silver",
    },
    buttonText: {
        fontFamily: "Arial",
        fontSize: 20,
        color: "black",
    },
}); 

export default Button;