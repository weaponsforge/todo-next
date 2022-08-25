import { useEffect, useRef } from 'react'
import Todo from '@/components/todo'

// Redux
import { useDispatch } from 'react-redux'
import { fetchTodos, fetchTodo } from '@/store/todo/todoSlice'

function TodoContainer () {
  const dispatch = useDispatch()
  const mounted = useRef(null)

  useEffect(() => {
    // Reload Todo list
    if (mounted.current === null) {
      mounted.current = true
      dispatch(fetchTodos())
    }
  }, [dispatch])

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
