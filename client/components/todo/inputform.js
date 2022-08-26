import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup  from '@mui/material/ButtonGroup'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import styles from './styles'

// Layout
import AppModal from '@/layout/appmodal'
import AppFrame from '@/layout/appframe'

function TodoInputForm ({
  state,
  inputStatus,
  processFinished,
  title,
  onTextChange,
  onTextClick,
  onSaveClick,
  onResetClick,
  onCancelClick,
  onRedirectClick
}) {
  const [isModalOpen, setModalOpen] = useState(false)
  const { todo, loading, error } = useSelector((state) => state.todos)

  const navigation = [
    { href: '/', name: 'Home' },
    { href: '/todo', name: 'Todos' },
  ]

  useEffect(() => {
    if (processFinished) {
      setModalOpen(true)
    }
  }, [processFinished])

  return (
    <AppFrame
      maxWidth='sm'
      navigation={navigation}
    >
      <AppModal
        isOpen={isModalOpen}
        titleText='Success!'
        contentText='Successfully saved the Todo data.'
        handleCancelCB={() => setModalOpen(false)}
        handleConfirmCB={() => onRedirectClick(todo._id)}
      />

      <h1>{title || 'Create a Todo'}</h1>

      <Box sx={styles.inputContainer}>
        <TextField
          id='title'
          label='Title'
          placeholder='Enter a title'
          variant='outlined'
          disabled={loading === 'pending'}
          value={state.title}
          onChange={onTextChange}
          onClick={onTextClick}
        />

        <TextField
          id='description'
          label='Description'
          placeholder='Enter a description'
          variant='outlined'
          disabled={loading === 'pending'}
          value={state.description}
          onChange={onTextChange}
          onClick={onTextClick}
        />

        <TextField
          id='content'
          label='Content'
          placeholder='Enter content'
          variant='outlined'
          disabled={loading === 'pending'}
          value={state.content}
          onChange={onTextChange}
          onClick={onTextClick}
          multiline
          rows={9}
        />
      </Box>

      <Box sx={{ textAlign: 'left', color: 'red' }}>
        <Typography variant='caption'>
          {error || inputStatus || <br />}
        </Typography>
      </Box>

      <CardActions sx={styles.buttons}>
        <ButtonGroup
          variant='outlined'
          disabled={loading === 'pending'}
        >
          <Button onClick={onCancelClick}>Cancel</Button>
          <Button onClick={onResetClick}>Clear</Button>
          <Button
            variant='contained'
            onClick={onSaveClick}
          >
              Save
          </Button>
        </ButtonGroup>
      </CardActions>
    </AppFrame>
  )
}

TodoInputForm.propTypes = {
  /** Todo local states */
  state: PropTypes.object,
  /** Input validation message */
  inputStatus: PropTypes.string,
  /** Indicates if an async process on the container is finished */
  processFinished: PropTypes.bool,
  /** Page title */
  title: PropTypes.string,
  /** Updates the local Todo state */
  onTextChange: PropTypes.func,
  /** Clears the input on click */
  onTextClick: PropTypes.func,
  /** Calls the save Todo method */
  onSaveClick: PropTypes.func,
  /** Clears the content of all input */
  onResetClick: PropTypes.func,
  /** Redirect back to the Todos list page */
  onCancelClick: PropTypes.func,
  /** Rediect back to the view Todo page */
  onRedirectClick: PropTypes.func
}

export default TodoInputForm
