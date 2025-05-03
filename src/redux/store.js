import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'

const userPersistConfig = {
  key: 'user',
  storage,
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  cart: cartReducer 
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/REGISTER',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE'
        ]
      }
    })
})

export const persistor = persistStore(store)
