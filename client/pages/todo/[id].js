import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import ViewTodo from '@/components/todo/view'

// Redux
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { fetchTodo, deleteExistingTodo } from '@/store/todo/todoSlice'

function ViewTodoContainer () {
  const dispatch = useDispatch()
  const router = useRouter()
  const mounted = useRef(null)

  useEffect(() => {
    if (
      mounted.current === null &&
      router.query.id !== undefined
    ) {
      mounted.current = true
      dispatch(fetchTodo(router.query.id))
    }
  }, [dispatch, router.query.id])

  const handleBackPress = () => {
    router.push('/todo')
  }

  const handleDelete = () => {
    dispatch(deleteExistingTodo(router.query.id))
      .then(unwrapResult)
      .then(() => {
        router.push('/todo')
      })
  }

  return (
    <ViewTodo
      onBackClick={handleBackPress}
      onDeleteClick={handleDelete}
    />
  )
}

export default ViewTodoContainer
