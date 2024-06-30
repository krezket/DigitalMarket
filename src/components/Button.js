import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Button = (props) => {
    const { text } = props;
    console.log(text)
    const navigation = useNavigation();

    const handleSignUp = (text) => {
        text === "Sign Up" 
        ? 
        navigation.navigate('Signup') 
        :
        text === "Log In"
        ? 
        navigation.navigate('Login')
        :
        text === "Continue as Guest"
        ?
        setToken("guest")
        :
        console.log("Button not recognized");
        // if (text === "Sign Up") {
        //     navigation.navigate('Signup');
        // } else if (text === "Log In") {
        //     navigation.navigate('Login');
        // }

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
        width: 350, 
        height: 40,
        borderRadius: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
    },
    buttonText: {
        fontSize: 20,
        color: "white",
    },
});

export default Button;