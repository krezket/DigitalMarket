import { StatusBar, View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../../components/Button";

const InitialScreen = () => {

    const { main, container, button } = styles;
    return (
        <View style={main}>
            <StatusBar hidden={true} />
                <Text style={{ color: "white", fontSize: 30 }}>Welcome to the App!</Text>
            <View style={container}>
                <Button text={'Sign Up'} />
                <Button text={'Log In'} />
                <Button text={'Continue as Guest'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "space-around",
        alignItems: "center",
    },
    container: {
        gap: 20,
        marginTop: 0,
    },
});

export default InitialScreen;