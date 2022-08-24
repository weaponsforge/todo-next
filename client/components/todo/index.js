import { useSelector } from 'react-redux'
import Link from 'next/link'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { DataGrid } from '@mui/x-data-grid'

// Layout
import AppContainer from '@/components/layout/appcontainer'
import AppCard from '@/layout/appcard'
import SimpleContainer from '@/layout/simplecontainer'

function Todo () {
  const todos = useSelector((state) => state.todos)
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

        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={Object.values(todos.entities).map(x => ({
              ...x,
              createdAt: new Date(x.createdAt).toDateString(),
              updatedAt: new Date(x.updatedAt).toDateString()
            }))}
            columns={columns}
            getRowId={(row) => row._id}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            loading={todos.loading}
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
          />
        </Box>
      </AppCard>

      <SimpleContainer>
        <Link href='/'>Home</Link>
      </SimpleContainer>
    </AppContainer>
  )
}

export default Todo
