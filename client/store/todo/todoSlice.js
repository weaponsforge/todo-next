import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import { listTodos, getTodo } from '@/services/todo'

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
    todo: null
  }),
  reducers: {
    todosLoading (state, action) {
      state.loading = 'pending'
      state.currentRequestId = action.payload || undefined
      state.error = ''
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
      todosAdapter.upsertMany(state, { ...payload })
    })

    builder.addCase(fetchTodos.rejected, (state, action) => {
      const { message } = action.error
      state.loading = 'idle'
      state.error = message
      state.currentRequestId = undefined
    })

    // Fetch a single Todo
    builder.addCase(fetchTodo.pending, (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
        state.currentRequestId = action.meta.requestId
        state.error = ''
        state.todo = null
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
  }
})

export const {
  todosLoading,
  todosReceived
} = todoSlice.actions

export default todoSlice.reducer
