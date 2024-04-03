import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = (props) => {
    console.log(props);

    const { text } = props;

    const handleSignUp = () => {
        console.log("Sign Up");
    }

    const { button } = styles;
    return (
        <Pressable
            style={button}
        >
            <Text>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        display: "flex",
        backgroundColor: "silver",
        padding: 5,
        borderRadius: 5
    },
}); 

export default Button;