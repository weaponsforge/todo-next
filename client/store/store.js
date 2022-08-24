import { configureStore } from '@reduxjs/toolkit'

// Reducers
import counterReducer from '@/pages/counter/counterSlice'
import todoReducer from '@/pages/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
})
