import React from 'react'
import PropTypes from 'prop-types'
import {Dialog, Button, DialogTitle, DialogContent, DialogActions, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

export default function SubscribeModal(props) {

  return (
    <div>
      <div>Hello from subscribe modal.</div>
      <Dialog onClose={props.onClose} aria-labelledby="customized-dialog-title" open={props.open}>

      <DialogTitle id="customized-dialog-title" onClose={props.onClose}>Modal title</DialogTitle>

      <DialogContent dividers></DialogContent>

      <DialogActions>
        <Button autoFocus onClick={props.onClose} color="primary">Save changes</Button>
      </DialogActions>

    </Dialog>
  </div>
  )
} 

SubscribeModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}
