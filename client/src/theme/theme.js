import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#f57c00',
      light: '#ffad42',
      dark: '#bb4d00  '
    },
    secondary: {
      main: '#757575',
      light: '#a4a4a4',
      dark: '#494949'
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
