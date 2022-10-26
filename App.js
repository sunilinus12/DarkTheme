import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './navigators/Stack'
import { Provider } from 'react-redux'
import { store } from './redux/Store'



export default function App() {


  return (


    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>

  )
}

