import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { listTodos, getTodo, createTodo, deleteTodo, updateTodo } from '@/services/todo'

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

// Entity adapter - redux state of this slice
// By default, `createEntityAdapter` gives you `{ ids: [], entities: {} }`.
export const todosAdapter = createEntityAdapter({
  selectId: (todo) => todo._id
})

const todoSlice = createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    loading: 'idle',
    currentRequestId: null,
    error: '',
    todo: {}
  }),
  reducers: {
    todosLoading (state, action) {
      state.loading = 'pending'
      state.currentRequestId = action.payload || undefined
      state.error = ''
    },
    todosReset (state, action) {
      state.loading = 'idle'
      state.currentRequestId = action.payload || undefined
      state.error = ''
      state.todo = {}
    },
    todosReceived (state, action) {
      todosAdapter.setAll(state, action.payload)
      state.loading = 'idle'
      state.currentRequestId = undefined
    }
  },
  // extraReducers offers automated ways for monitoring Entity adapters
  // and adjusting the slice's states
  extraReducers: (builder) => {
    // Fetch all Todos
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.loading = 'idle'
      state.currentRequestId = undefined
      state.todo = {}
      todosAdapter.setAll(state, payload)
      // todosAdapter.upsertMany(state, { ...payload })
    })

    builder.addCase(fetchTodos.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
      state.todo = {}
    })

    // Fetch a single Todo
    builder.addCase(fetchTodo.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
        state.error = ''
        state.todo = {}
      }
    })

    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (
        state.loading === 'pending' &&
        state.currentRequestId === requestId
      ) {
        state.loading = 'idle'
        state.currentRequestId = undefined
        state.todo = action.payload
      }
    })

    builder.addCase(fetchTodo.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
    })

    // Handle the create new Todo events and state
    builder.addCase(createNewTodo.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (
        state.loading === 'pending' &&
        state.currentRequestId === requestId
      ) {
        state.loading = 'idle'
        state.currentRequestId = undefined
        state.todo = action.payload
      }
    })

    builder.addCase(createNewTodo.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
      state.todo = {}
    })

    // Handle the delete Todo events and state
    builder.addCase(deleteExistingTodo.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (
        state.loading === 'pending' &&
        state.currentRequestId === requestId
      ) {
        state.loading = 'idle'
        state.currentRequestId = undefined
        state.todo = {}
      }
    })

    builder.addCase(deleteExistingTodo.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
      state.todo = {}
    })

    // Handle the update existing Todo events and state
    builder.addCase(updateExistingTodo.fulfilled, (state, action) => {
      const { requestId } = action.meta
      if (
        state.loading === 'pending' &&
        state.currentRequestId === requestId
      ) {
        state.loading = 'idle'
        state.currentRequestId = undefined
        state.todo = action.payload
      }
    })

    builder.addCase(updateExistingTodo.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
      state.todo = {}
    })
  }
})

export const {
  todosLoading,
  todosReceived,
  todosReset
} = todoSlice.actions

export default todoSlice.reducer
