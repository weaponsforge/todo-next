import { useEffect, useRef } from 'react'
import Todo from '@/components/todo'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '@/store/todo/todoSlice'

function TodoContainer () {
  const dispatch = useDispatch()
  const ids = useSelector((state) => state.todos.ids)
  const mounted = useRef(null)

  useEffect(() => {
    // Load the Todo list only once (initial load)
    if (mounted.current === null && ids.length === 0) {
      mounted.current = true
      dispatch(fetchTodos())
    }
  }, [dispatch, ids.length])

  return (
    <Todo />
  )
}

export default TodoContainer
