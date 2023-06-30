// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from "react";
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
} from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: "center",
                            marginBottom: 16,
                            color: "#fdeb63",
                            fontFamily: "Baskerville",
                        }}
                    >
                        Elden Ring Go
                    </Text>
                    <Image
                        style={styles.image}
                        source={require("./images/Logo.png")}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("MapStack", { screen: "Maps" })
                        }
                    >
                        <Text>Go to Map Tab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.navigate("SettingsStack", {
                                screen: "Settings",
                            })
                        }
                    >
                        <Text>Go to Settings Tab</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: "40%",
        height: "40%",
    },
    image2: {
        resizeMode: "",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#fdeb63",
        padding: 10,
        width: 300,
        marginTop: 16,
        color: "#022123",
    },
    container: {
        backgroundColor: "#022123",
        flex: 1,
    },
});
export default HomeScreen;
