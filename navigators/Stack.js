
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../components/Home';
import DetailScreen from '../components/DetailScreen';
import { useSelector } from 'react-redux';

export default function Stack() {
    const Stack = createStackNavigator();
    const theme = useSelector(e => e.Darkmode.value);
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: theme ? 'black' : "white"
                },
                headerTitleAlign: "center",
                headerTitleStyle: {
                    fontSize: 16,
                    fontWeight: "100",
                    fontFamily: "sans-serif",
                    color: theme ? "white" : 'black',


                },
                headerShadowVisible: true,
                headerTintColor: theme ? "white" : 'black'
            }}
        >
            <Stack.Screen
                name="Home"


                component={Home} />
            <Stack.Screen
                options={{
                    title: "Detail",


                }}

                name="detail" component={DetailScreen} />
        </Stack.Navigator>
    )
}

