import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, ImageBackground} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function ProductCard({id, title, price, image}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Product', { id })} style={styles.card}>
            <ImageBackground source={{uri: image}} style={styles.image} resizeMode="cover">
                <View style={styles.banner}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>${price}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 200,
        marginBottom: 24,
        flex: 1,
        elevation: 4
    },
    banner: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 'bold',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})