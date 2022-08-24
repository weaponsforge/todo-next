import { useEffect, useRef } from 'react'
import Todo from '@/components/todo'

// Redux
import { useDispatch } from 'react-redux'
import { fetchTodos } from '@/store/todo/todoSlice'

function TodoContainer () {
  const dispatch = useDispatch()
  const mounted = useRef(null)

  useEffect(() => {
    if (mounted.current === null) {
      mounted.current = true
      dispatch(fetchTodos())
    }
  }, [dispatch])

  return (
    <Todo />
  )
}

export default TodoContainer
