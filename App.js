import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './navigators/Stack'


export default function App() {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>

  )
}

