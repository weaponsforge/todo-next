import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// Layout
import AppContainer from '@/components/layout/appcontainer'
import AppCard from '@/layout/appcard'
import SimpleContainer from '@/layout/simplecontainer'

function Todo () {
  const todos = useSelector((state) => state.todos)
  const router = useRouter()

  const columns = [
    { field: '_id', headerName: 'ID', width: 200 },
    { field: 'title', headerName: 'Title', width: 280 },
    { field: 'createdAt', headerName: 'Created', width: 180 },
    { field: 'updatedAt', headerName: 'Updated', width: 180 }
  ]

  return (
    <AppContainer maxWidth='md'>
      <AppCard>
        <h1>Todo List</h1>

        <Box sx={{ height: '100%', width: '100%', textAlign: 'left' }}>
          <Button
            variant='outlined'
            disableElevation
            onClick={() => {
              router.push('/todo/create')
            }}
            sx={{
              marginBottom: (theme) => theme.spacing(2)
            }}
          >
            Create Todo
          </Button>

          <Box sx={{ height: 450, width: '100%', textAlign: 'left' }}>
            <DataGrid
              rows={Object.values(todos.entities).map(x => ({
                ...x,
                createdAt: new Date(x.createdAt).toDateString(),
                updatedAt: new Date(x.updatedAt).toDateString()
              }))}
              columns={columns}
              getRowId={(row) => row._id}
              // autoHeight={rows.length >= 3}
              disableDensitySelector
              // pagination
              pageSize={7}
              rowsPerPageOptions={[3, 10, 20]}
              checkboxSelection
              disableSelectionOnClick
              loading={todos.loading === 'pending'}
              rowHeight={48}
              initialState={{
                columns: {
                  columnVisibilityModel: { _id: false }
                }
              }}
              components={{
                NoRowsOverlay: () => (
                  <Box
                    sx={{ display: 'grid', width: '100%', height: '100%', placeContent: 'center' }}
                    style={{ color: (todos.error !== '') ? 'red' : '#000' }}>
                    {todos.error !== ''
                      ? <Typography variant='caption'>{todos.error}</Typography>
                      : <Typography variant='caption'>No rows available</Typography>
                    }
                  </Box>
                )
              }}
              onRowClick={({ id }) => {
                router.push(`/todo/${id}`)
              }}
            />
          </Box>
        </Box>
      </AppCard>

      <SimpleContainer>
        <Link href='/'>Home</Link>
      </SimpleContainer>
    </AppContainer>
  )
}

export default Todo
