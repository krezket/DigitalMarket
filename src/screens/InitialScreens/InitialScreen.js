import { SafeAreaView, View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../../components/Button";

const InitialScreen = () => {

    const { container, button } = styles;
    return (
        <SafeAreaView>
            <View style={container}>
                <Button text={'Sign Up'} />
                <Button text={'Log In'} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 20,
        marginTop: 500,
        justifyContent: "center",
        alignItems: "center"
    },
});

export default InitialScreen;