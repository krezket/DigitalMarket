import { StatusBar, View, Text, Pressable, StyleSheet, ImageBackground } from "react-native";
import Button from "../../components/Button";
import dragon from "../../../assets/gifs/SILVER.gif"

const InitialScreen = (props) => {
    console.log(props);

    const { main, container, backgroundImage } = styles;
    return (
        <ImageBackground source={dragon} style={backgroundImage}>
            <View style={main}>
                <StatusBar hidden={true} />
                <Text style={{ color: "white", fontSize: 30 }}>DIGITAL MARKET</Text>
                <View style={container}>
                    <Button text={'Log In'} />
                    <Button text={'Sign Up'} />
                    <Text style={{ color: "white" }}>or</Text>
                    <Button text={'Continue as Guest'} />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    container: {
        alignItems: "center",
        gap: 20,
        marginTop: 0,
    },
    backgroundImage: {
        flex: 1,
        zIndex: 100,
        resizeMode: "cover", 
        justifyContent: "center",
    },
});

export default InitialScreen;