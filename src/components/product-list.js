import {FlatList} from "react-native";
import {fetchProducts} from "../utils/api";
import ProductCard from "./product-card";
import React from "react";

export default function ProductList({data, refreshing, onRefresh}) {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            refreshing={refreshing}
            onRefresh={onRefresh}
            renderItem={({item: product}) => (
                <ProductCard key={product.id} {...product} />
            )}
        />
    )
}