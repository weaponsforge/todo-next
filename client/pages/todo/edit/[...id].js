import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { updateExistingTodo, todosReset, fetchTodo } from '@/store/todo/todoThunks'

import TodoInputForm from '@/components/todo/inputform'

const defaultState = {
  title: '', description: '', content: ''
}

function EditTodoContainer () {
  const [state, setState] = useState(defaultState)
  const [inputStatus, setStatus] = useState('')
  const [processFinished, setProcessFinished] = useState(false)
  const dispatch = useDispatch()
  const mounted = useRef(null)
  const router = useRouter()
  const { todo, error } = useSelector((states) => states.todos)

  useEffect(() => {
    if (Object.keys(todo).length > 0) {
      setState({ ...todo, id: todo._id })
    }
  }, [todo])

  useEffect(() => {
    if (
      mounted.current === null &&
      router.query.id !== undefined &&
      Object.keys(todo).length === 0
    ) {

      mounted.current = true
      dispatch(fetchTodo(router.query.id[0]))
    }
  }, [dispatch, router.query.id, todo])

  const resetErrorsMessages = () => {
    if (error !== '') {
      dispatch(todosReset())
    }

    if (inputStatus !== '') {
      setStatus('')
    }
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setState({ ...state, [id]: value })
    resetErrorsMessages()
  }

  const handleSave = () => {
    if (!Object.values(state).every(field => field !== '')) {
      setStatus('Please check your input.')
      return
    }

    dispatch(updateExistingTodo(state))
      .then(unwrapResult)
      .then(() => {
        setProcessFinished(true)
      })
  }

  const handleCancel = () => {
    router.push('/todo')
  }

  const handleReset = () => {
    dispatch(todosReset())
    setState(defaultState)
  }

  const handleInputClick = (e) => {
    const { id } = e.target
    setState({ ...state, [id]: '' })
    resetErrorsMessages()
  }

  const handleRedirect = (todoId) => {
    router.push(`/todo/${todoId}`)
  }

  return (
    <TodoInputForm
      state={state}
      inputStatus={inputStatus}
      processFinished={processFinished}
      content={{
        title: 'Edit Todo',
        mode: 'edit'
      }}
      onTextChange={handleInputChange}
      onTextClick={handleInputClick}
      onSaveClick={handleSave}
      onResetClick={handleReset}
      onCancelClick={handleCancel}
      onRedirectClick={handleRedirect}
    />
  )
}

export default EditTodoContainer
