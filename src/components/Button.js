import { View, Text, Pressable, StyleSheet } from "react-native";

const Button = (props) => {
    console.log(props);

    const { text } = props;

    const handleSignUp = (text) => {

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
        padding: 5,
        width: 200,
        borderRadius: 5,
        display: "flex",
        alignItems: "center",
        backgroundColor: "silver",
    },
}); 

export default Button;