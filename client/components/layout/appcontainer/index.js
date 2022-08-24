import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const AppContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: 'center'
}))

export default AppContainer
