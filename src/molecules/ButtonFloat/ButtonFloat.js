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
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import NavigationIcon from "@material-ui/icons/Add";

export default class ButtonFloat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
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
          <DialogTitle id="form-dialog-title">Agregar Evento</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="name"
              label="Nombre de Evento"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Dependence"
              label="Dependecia"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Charge"
              label="Encargado del Evento"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Cost"
              label="Centro de costos"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Rubro"
              label="Rubro"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Extent"
              label="Extensión"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Monitors"
              label="Cantidad de monitores"
              type="number"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Extent"
              label="Extensión"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Date1"
              label="Fecha inicio"
              type="date"
            />
            <TextField
              autoFocus
              margin="dense"
              name="Date2"
              label="Fecha fin"
              type="date"
            />
            <Typography>Horario</Typography>

            <FormControl>
              <InputLabel htmlFor="age-simple">Day</InputLabel>
              <Select
                value={this.state.date}
                onChange={this.handleChange}
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Lunes"}>Lunes</MenuItem>
                <MenuItem value={"Martes"}>Martes</MenuItem>
                <MenuItem value={"Miercoles"}>Miércoles</MenuItem>
                <MenuItem value={"Jueves"}>Jueves</MenuItem>
                <MenuItem value={"Viernes"}>Viernes</MenuItem>
                <MenuItem value={"Sabado"}>Sabado</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
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
