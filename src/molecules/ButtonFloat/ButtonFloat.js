import React, { Component } from "react";
import "./ButtonFloat.css";

// Import Material-UI
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

export default class ButtonFloat extends Component {
  constructor(props) {
    super(props);

    this.state = {
        open: false
    }

      this.handleClickOpen = this.handleClickOpen.bind(this);

  }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

  render() {

    return (
      <div>
        <Fab
          variant="extended"
          className="btn-addevent"
          onClick={this.handleClickOpen}
        >
          <AddIcon />
          {this.props.text}
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          fullWidth
        >
          <DialogTitle id="form-dialog-title">
            Editar Contacto Monitor
          </DialogTitle>
          <DialogContent />
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleSendDatabase} color="primary">
              Guardar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
