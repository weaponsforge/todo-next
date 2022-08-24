import Link from 'next/link'
import { useSelector } from 'react-redux'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import imageLoader from '@/utils/image/loader'
import styles from './styles'

// Icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import SimpleContainer from '@/layout/simplecontainer'

// Layout
import AppCard from '@/components/layout/appcard'
import AppContainer from '@/components/layout/appcontainer'
import AppIconButton from '@/layout/appiconbtn'

function Counter (props) {
  const { handleIncrement, handleDecrement } = props
  const count = useSelector((state) => state.counter.value)

  return (
    <AppContainer maxWidth='sm'>
      <AppCard>
        <Typography variant='h4'>Redux Counter</Typography>
        <Typography variant='subtitle'>A Synchronous Example</Typography>

        <Box sx={styles.divContainer}>
          <Image
            src="images/mtg_enamel_red.png"
            alt="red"
            width={80}
            height={80}
            loader={imageLoader}
          />
        </Box>

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

      <SimpleContainer>
        <Link href='/'>Home</Link>
      </SimpleContainer>
    </AppContainer>
  )
}

export default Counter
