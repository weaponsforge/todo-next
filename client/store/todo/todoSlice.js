import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { listTodos } from '@/services/todo'

// Async thunks

// Fetch all Todos
export const fetchTodos = createAsyncThunk('todos/list', async(_, thunkAPI) => {
  // Set the loading state
  thunkAPI.dispatch(todosLoading())
  const response = await listTodos()
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
    loading: false,
    error: ''
  }),
  reducers: {
    todosLoading (state) {
      state.loading = true
      state.error = ''
    },
    todosReceived (state, action) {
      todosAdapter.setAll(state, action.payload)
      state.loading = false
    }
  },
  // extraReducers offers automated ways for monitoring Entity adapters
  // and adjusting the slice's states
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      const { ...changes } = payload
      state.loading = false
      todosAdapter.upsertMany(state, { ...changes })
    })

    builder.addCase(fetchTodos.rejected, (state, action) => {
      const { message } = action.error
      state.loading = false
      state.error = message
    })
  }
})

export const {
  todosLoading,
  todosReceived
} = todoSlice.actions

export default todoSlice.reducer
