import React from "react";
import {Image, StyleSheet, TextInput, View} from "react-native";

export default function Header({onSearch}) {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} resizeMode="contain" source={require('../images/logo.png')}/>
            <TextInput
                style={styles.input}
                placeholder="Search..."
                onEndEditing={(e) => onSearch(e.nativeEvent.text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16
    },
    logo: {
        flex: 1,
        height: 'auto',
        marginRight: 16,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        flex: 2
    }
});
