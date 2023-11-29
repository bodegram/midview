import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store, {persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Navigator from './navigations/Navigator'

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor} loading={null}>
          <Navigator/>
       </PersistGate>
    </Provider>
  )
}
