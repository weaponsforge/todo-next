import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const FullSizeBox = styled(Box)(() => ({
  display: 'grid',
  width: '100%',
  minHeight: '400px',
  height: '100%',
  placeContent: 'center',
  border: '1px solid rgba(224, 224, 224, 1)',
  borderRadius: 6
}))

function AppLoading ({ msgLoading = 'Loading...' }) {
  return (
    <FullSizeBox>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress color='primary' size={24} /> &nbsp;
        <Typography variant='subtitle2'>
          {msgLoading}
        </Typography>
      </Box>
    </FullSizeBox>
  )
}

AppLoading.propTypes = {
  /** Loading message text */
  msgLoading: PropTypes.string
}

export default AppLoading
