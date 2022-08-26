import { createAsyncThunk } from '@reduxjs/toolkit'
import { listTodos, getTodo, createTodo, deleteTodo, updateTodo } from '@/services/todo'
import { todosLoading } from './todoSlice'

// Async thunks

// Fetch all Todos
export const fetchTodos = createAsyncThunk('todos/list', async(_, thunkAPI) => {
  // Set the loading state using thunkAPI methods
  // With thunkAPI, there's no need to set the loading and error states
  // in extraReducers - fetchTodos.pending
  thunkAPI.dispatch(todosLoading(thunkAPI.requestId))
  const response = await listTodos()
  return response
})

// Fetch a single Todo
export const fetchTodo = createAsyncThunk(
  'todos/get',
  async(postId, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().todos

    // Fetch a Todo by ID with loading state, and only one request at a time
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return
    }

    const response = await getTodo(postId)
    return response
  })

// Create a new Todo
export const createNewTodo = createAsyncThunk(
  'todos/create',
  async(todo, thunkAPI) => {
    const { loading } = thunkAPI.getState().todos

    // Create a Todo if there are no previous create requests
    if (loading === 'pending') {
      return
    }

    thunkAPI.dispatch(todosLoading(thunkAPI.requestId))
    const response = await createTodo(todo)
    return response
  })

// Delete an existing Todo
export const deleteExistingTodo = createAsyncThunk(
  'todos/delete',
  async(todoId, thunkAPI) => {
    const { loading } = thunkAPI.getState().todos

    // Delete a Todo if there are no previous create requests
    if (loading === 'pending') {
      return
    }

    thunkAPI.dispatch(todosLoading(thunkAPI.requestId))
    const response = await deleteTodo(todoId)
    return response
  })

// Update an existing Todo
export const updateExistingTodo = createAsyncThunk(
  'todos/update',
  async(todo, thunkAPI) => {
    const { loading } = thunkAPI.getState().todos

    if (loading === 'pending') {
      return
    }

    thunkAPI.dispatch(todosLoading(thunkAPI.requestId))
    const response = await updateTodo(todo)
    return response
  }
)