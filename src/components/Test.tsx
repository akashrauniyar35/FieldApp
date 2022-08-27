import React, { useState } from "react";
import {
    View,
    Platform,
    UIManager,
    LayoutAnimation,
    StyleSheet,
    Button
} from "react-native";

if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const App = () => {
    const [secondBoxPosition, setSecondBoxPosition] = useState("left");

   

    const toggleSecondBox = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        setSecondBoxPosition(secondBoxPosition === "left" ? "right" : "left");
    };

  

    return (
        <View style={styles.container}>
         
            <View style={styles.buttonContainer}>
                <Button title="Linear" onPress={toggleSecondBox} />
            </View>
            <View
                style={[
                    styles.box,
                    secondBoxPosition === "left" ? null : styles.moveRight
                ]}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "center"
    },
    box: {
        height: 100,
        width: 100,
        borderRadius: 5,
        margin: 8,
        backgroundColor: "blue"
    },
    moveRight: {
        alignSelf: "flex-end"
    },
    buttonContainer: {
        alignSelf: "center"
    }
});

export default App;