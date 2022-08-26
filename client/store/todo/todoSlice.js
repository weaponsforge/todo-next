import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

import {
  fetchTodos, fetchTodo, createNewTodo,  deleteExistingTodo, updateExistingTodo
} from './todoThunks'

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
        // Insert the new Todo to the collection of Todos
        todosAdapter.addOne(state, action.payload)
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
        todosAdapter.removeOne(state, action.payload._id)
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
        todosAdapter.setOne(state, action.payload)
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
