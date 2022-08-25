import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

function AppModal ({
  isOpen = false,
  titleText = 'Window Title',
  contentText = '',
  loading=false,
  handleCancelCB,
  handleConfirmCB
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  const handleClose = (event, reason) => {
    if (reason && reason === 'backdropClick') {
      return
    }

    if (handleCancelCB) {
      handleCancelCB()
    } else {
      setOpen(false)
    }
  }

  const handleConfirm = () => {
    if (handleConfirmCB) {
      handleConfirmCB()
    } else {
      setOpen(false)
    }
  }

  return (
    <div>
      <Dialog
        maxWidth='xs'
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {titleText}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {contentText}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            disabled={loading}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            onClick={handleConfirm}
            disabled={loading}
            autoFocus
            variant='contained'
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AppModal
