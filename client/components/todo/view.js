import { useState } from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup  from '@mui/material/ButtonGroup'
import CardActions  from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import styles from './styles'

// Layout
import AppContainer from '@/components/layout/appcontainer'
import AppCard from '@/layout/appcard'
import AppLoading from '@/layout/apploading'
import AppModal from '@/layout/appmodal'
import SimpleContainer from '@/layout/simplecontainer'

function ViewTodo ({
  isDeleted,
  onBackClick,
  onDeleteClick
}) {
  const [isModalOpen, setModalOpen] = useState(false)
  const { todo, loading, error } = useSelector((state) => state.todos)

  const titles = {
    title: 'Title',
    description: 'Description',
    createdAt: 'Created',
    updatedAt: 'Updated',
    _id: 'ID'
  }

  return (
    <AppContainer maxWidth='sm'>
      <AppModal
        isOpen={isModalOpen}
        titleText='Delete Todo'
        loading={loading === 'pending'}
        contentText={(isDeleted) ? 'The Todo was successfully deleted' : 'Do you want to delete this Todo?'}
        handleCancelCB={() => {
          if (isDeleted) {
            onBackClick()
          } else {
            setModalOpen(false)
          }
        }}
        handleConfirmCB={() => {
          if (isDeleted) {
            onBackClick()
          } else {
            onDeleteClick()
          }
        }}
      />

      <AppCard>
        <h1>Todo Item</h1>

        <Box sx={{ minHeight: 400, width: '100%', textAlign: 'left' }}>
          {(loading === 'pending')
            ? <AppLoading />
            : (error !== '')
              ? <Typography variant='caption' sx={{ color: 'red' }}>
                {error}
              </Typography>
              : <Box>
                {Object.keys(titles).map((field, index) => (
                  <Box sx={{ display: 'flex' }} key={index}>
                    <Typography variant='subtitle2'>
                      {titles[field]}: &nbsp;
                    </Typography>
                    <span>
                      {['createdAt', 'updatedAt'].includes(field)
                        ? new Date(todo[field]).toDateString()
                        : todo[field]
                      }
                    </span>
                  </Box>
                ))}

                <hr />

                <Box>
                  <Typography variant='subtitle2'>Content</Typography>
                  {todo.content}
                </Box>
              </Box>
          }
        </Box>

        <Box sx={{ textAlign: 'left', color: 'red' }}>
          <Typography variant='caption'>
            {error || '' || <br />}
          </Typography>
        </Box>

        <CardActions sx={styles.buttons}>
          <ButtonGroup
            variant='outlined'
            disabled={loading === 'pending'}
          >
            <Button
              onClick={() => setModalOpen(true)}
            >Delete
            </Button>
            <Button>Edit</Button>
            <Button
              onClick={onBackClick}
              variant='contained'>
              Back
            </Button>
          </ButtonGroup>
        </CardActions>
      </AppCard>

      <SimpleContainer>
        <Link href='/'>Home</Link>&nbsp; | &nbsp;
        <Link href='/todo'>Todos</Link>
      </SimpleContainer>
    </AppContainer>
  )
}

export default ViewTodo
