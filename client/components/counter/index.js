import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import imageLoader from '@/utils/image/loader'
import styles from './styles'

// Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

// Layout
import AppCard from '@/components/layout/appcard'
import AppIconButton from '@/layout/appiconbtn'

import { useSelector } from 'react-redux'

function Counter (props) {
  const { handleIncrement, handleDecrement } = props
  const count = useSelector((state) => state.counter.value)

  return (
    <Container maxWidth='sm' sx={styles.container}>
      <AppCard>
        <Typography variant='h4'>
          Counter Sample
        </Typography>

        <Image
          src="images/mtg_enamel_red.png"
          alt="red"
          width={80}
          height={80}
          loader={imageLoader}
        />

        <Box sx={styles.counterContainer}>
          <AppIconButton onClick={handleDecrement}>
            <RemoveCircleOutlineIcon fontSize='large' />
          </AppIconButton>

          <span>{count}</span>

          <AppIconButton onClick={handleIncrement}>
            <AddCircleOutlineIcon fontSize='large' />
          </AppIconButton>
        </Box>
      </AppCard>
    </Container>
  )
}

export default Counter
