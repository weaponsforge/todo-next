import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { createNewTodo, todosReset } from '@/store/todo/todoThunks'

import TodoInputForm from '@/components/todo/inputform'

const defaultState = {
  title: '', description: '', content: ''
}

function CreateTodoContainer () {
  const [state, setState] = useState(defaultState)
  const [inputStatus, setStatus] = useState('')
  const [processFinished, setProcessFinished] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const error = useSelector((states) => states.todos.error)

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

    dispatch(createNewTodo(state))
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
        title: 'Create a Todo',
        mode: 'create'
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

export default CreateTodoContainer
