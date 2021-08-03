import {ActivityIndicator, StyleSheet, View} from "react-native";
import React from "react";

export default function Spinner() {
    return (
        <View style={styles.spinner}>
            <ActivityIndicator color="red" size="large"/>
        </View>
    )
}

const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
