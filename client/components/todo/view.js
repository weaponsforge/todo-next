import { useSelector } from 'react-redux'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Layout
import AppContainer from '@/components/layout/appcontainer'
import AppCard from '@/layout/appcard'
import AppLoading from '@/layout/apploading'
import SimpleContainer from '@/layout/simplecontainer'

function ViewTodo () {
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
      <AppCard>
        <h1>Todo Item</h1>

        <Box sx={{ height: 400, width: '100%', textAlign: 'left' }}>
          {(loading === 'pending')
            ? <AppLoading />
            : (error !== '')
              ? <Typography variant='caption' sx={{ color: 'red' }}>
                {error}
              </Typography>
              : <Box>
                {Object.keys(titles).map((key, index) => (
                  <Box sx={{ display: 'flex' }} key={index}>
                    <Typography variant='subtitle2'>{titles[key]}: &nbsp;</Typography>
                    <span>
                      {['createdAt', 'updatedAt'].includes(key)
                        ? new Date(todo[key]).toDateString()
                        : todo[key]
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
      </AppCard>

      <SimpleContainer>
        <Link href='/'>Home</Link>&nbsp; | &nbsp;
        <Link href='/todo'>Todos</Link>
      </SimpleContainer>
    </AppContainer>
  )
}

export default ViewTodo
