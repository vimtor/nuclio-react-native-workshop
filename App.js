import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductFeed from "./src/pages/product-feed";
import ProductOverview from "./src/pages/product-overview";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={ProductFeed} options={{headerShown: false}}/>
                <Stack.Screen name="Product" component={ProductOverview}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

