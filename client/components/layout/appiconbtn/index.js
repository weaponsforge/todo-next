import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

const AppIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main
}))

export default AppIconButton
