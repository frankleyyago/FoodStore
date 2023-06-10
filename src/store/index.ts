import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './reducers/modal'

export const store = configureStore({
  reducer: {
    modal: modalReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
