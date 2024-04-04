import { View, Text, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Signin from "../screens/InitialScreens/Signin";
import Login from "../screens/InitialScreens/Login";

const Button = (props) => {
    const { text } = props;
    const navigation = useNavigation();

    const handleSignUp = (text) => {
        if (text === "Sign Up") {
            navigation.navigate({Signin});
        } else if (text === "Log In") {
            navigation.navigate({Login});
        }

        console.log(`Button with text ${text} has been pressed!`);
    }

    const { button } = styles;
    return (
        <Pressable
            onPress={() => {handleSignUp(text)}}
            style={button}
        >
            <Text>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 5,
        width: 200,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        backgroundColor: "silver",
    },
}); 

export default Button;