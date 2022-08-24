import { configureStore } from '@reduxjs/toolkit'

// Reducers
import counterReducer from '@/store/counter/counterSlice'
import todoReducer from '@/store/todo/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer
  },
})
