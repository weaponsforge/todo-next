import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useRouter } from 'next/router'
import { createNewTodo, todosReset } from '@/store/todo/todoSlice'

import CreateTodo from '@/components/todo/create'

const defaultState = {
  title: '', description: '', content: ''
}

function CreateTodoContainer () {
  const [state, setState] = useState(defaultState)
  const [inputStatus, setStatus] = useState('')
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
      .then((todo) => {
        router.push(`/todo/${todo._id}`)
      })
  }

  const handleCancel = () => {
    router.push('/todo')
  }

  const handleReset = () => {
    resetErrorsMessages()
    setState(defaultState)
  }

  const handleInputClick = (e) => {
    const { id } = e.target
    setState({ ...state, [id]: '' })
    resetErrorsMessages()
  }

  return (
    <CreateTodo
      state={state}
      inputStatus={inputStatus}
      onTextChange={handleInputChange}
      onTextClick={handleInputClick}
      onSaveClick={handleSave}
      onResetClick={handleReset}
      onCancelClick={handleCancel}
    />
  )
}

export default CreateTodoContainer
