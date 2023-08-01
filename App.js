import { View, Text } from 'react-native'
import React from 'react'
import Route from './src/Navigation/Route'
import { Provider } from 'react-redux'
import store from './src/Store/store'

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  )
}