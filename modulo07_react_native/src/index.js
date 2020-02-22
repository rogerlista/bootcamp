import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import './config/reactotron'

import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}
