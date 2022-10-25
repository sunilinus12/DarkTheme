
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home';
import DetailScreen from '../components/DetailScreen';

export default function Stack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
                options={{
                    title: "Detail",
                    headerTitleAlign: "center",
                    headerTitleStyle: {
                        fontSize: 14,
                        fontWeight: "100",
                        fontFamily: "sans-serif"
                    },
                    headerShadowVisible: false,

                }}

                name="detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}

