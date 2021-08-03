import {View, Alert, Button, Text, StyleSheet, Image} from 'react-native'
import {useRoute} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {fetchProduct} from "../utils/api";
import Spinner from "../components/spinner";

export default function ProductOverview() {
    const [product, setProduct] = useState(null)
    const route = useRoute()
    const productId = route.params.id;

    useEffect(() => {
        fetchProduct(productId)
            .then(product => setProduct(product))
    }, [productId])

    if (!product) {
        return <Spinner/>;
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: product.image}}/>
            <View style={styles.details}>
                <View style={styles.info}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
                <Text style={styles.description}>{product.description}</Text>
                <Button onPress={() => Alert.alert("Item added to the cart", "You can go back shopping")} title="Add to cart"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
    details: {
        flex: 2,
        padding: 24
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    price: {
        fontSize: 24,
    },
    description: {
        marginVertical: 16
    }
})