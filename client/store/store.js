import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/pages/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})
