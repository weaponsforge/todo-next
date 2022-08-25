import { useEffect, useRef } from 'react'
import Todo from '@/components/todo'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, fetchTodo } from '@/store/todo/todoThunks'

function TodoContainer () {
  const dispatch = useDispatch()
  const ids = useSelector((state) => state.todos.ids)
  const mounted = useRef(null)

  useEffect(() => {
    // Load the Todo list only once
    if (mounted.current === null && ids.length === 0) {
      mounted.current = true
      dispatch(fetchTodos())
    }
  }, [dispatch, ids.length])

  const handleGetTodo = (id) => {
    dispatch(fetchTodo(id))
  }

  return (
    <Todo
      getTodo={handleGetTodo}
    />
  )
}

export default TodoContainer
