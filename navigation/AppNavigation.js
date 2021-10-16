import React from 'react';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProductScreen from "../screens/ProductScreen/ProductScreen";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={({ navigation, route }) => ({
                        gestureEnabled: true,
                        headerShown: false,

                    })}
                />
                <Stack.Screen
                    name='ProductScreen'
                    component={ProductScreen}
                    options={({ navigation, route }) => ({
                        headerShown: false,
                        gestureEnabled: true,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;