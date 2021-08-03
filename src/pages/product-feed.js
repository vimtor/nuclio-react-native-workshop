import React, {useEffect, useState} from "react";
import {fetchProducts} from "../utils/api";
import {StyleSheet, View} from "react-native";
import Header from "../components/header";
import ProductList from "../components/product-list";
import Spinner from "../components/spinner";

export default function ProductFeed() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetchProducts(search)
            .then((products) => {
                setLoading(false);
                setProducts(products);
                setRefreshing(false);
            })
            .catch(() => {
                setLoading(false);
                setRefreshing(false);
            })
    }, [search])

    return (
        <View style={styles.container}>
            <Header onSearch={setSearch} />
            {loading ? (
                <Spinner />
            ) : (
                <ProductList
                    data={products}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        fetchProducts(search)
                            .then((products) => {
                                setProducts(products);
                                setRefreshing(false);
                            })
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 32,
        paddingVertical: 12,
    },
});
