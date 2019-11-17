import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Dialog, Button, DialogTitle, DialogContent, DialogActions, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

class SubscribeModal extends Component {
  constructor(props) {
    super(props)
    this.handleClose = this.handleClose.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);

    this.state = {
      open: false
    }
  }

  handleClickOpen() { this.setState({open: true});}

  handleClose() { this.setState({open: false});}

  render() {
    return (
      <div>
        <div style={{padding: '20px'}}>Hello from subscribe modal.</div>
        <Button autoFocus onClick={this.handleClickOpen} color="primary">Free Ebook</Button>
        <Dialog  aria-labelledby="customized-dialog-title" open={this.state.open}>

        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>Modal title</DialogTitle>

        <DialogContent dividers>
          <h1>Email</h1>
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={this.handleClose} color="primary">Save changes</Button>
        </DialogActions>

        </Dialog>
      </div>
    )
  }
} 

export default SubscribeModal

SubscribeModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}
