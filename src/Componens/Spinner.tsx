import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const Spinner = () => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="large" color="white" />
        </View>
    )
}
export default Spinner;

const styles = StyleSheet.create({
    container: {
        flex: 1,             
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
    }
})