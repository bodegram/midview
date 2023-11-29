import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authSlice from './slices/authSlice'


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }

const rootReducer = combineReducers({
    auth: authSlice.reducer
})
   
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)

export default store