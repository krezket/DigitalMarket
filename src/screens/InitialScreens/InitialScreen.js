import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../../components/Button";

const InitialScreen = () => {

    const handleSignUp = () => {
        console.log("Sign Up");
    }

    const { container, button } = styles;
    return (
        <SafeAreaView>
            <View style={container}>
                <Button text={'Sign Up'} />
                <Button text={'Sign In'} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default InitialScreen;