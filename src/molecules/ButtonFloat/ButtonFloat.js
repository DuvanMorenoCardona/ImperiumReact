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
import { withStyles } from "@material-ui/core/styles";

// importar componentes externos
import firebase from "firebase";

//se crean los estilos
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    width: "100% !important",
    height: "100%"
  },
  LeftBar: {
    flexGrow: 0,
    padding: 0,
    margin: 0,
    height: "100%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  LeftAppBar: {
    height: "100%",
    padding: "0px !important",
    margin: "0px !important"
  },
  content: {
    marginTop: "6em",
    paddingLeft: "4em !important",
    paddingRight: "1em !important"
  },
  textName: {
    width: "50% !important"
  },
  textCedula: {
    width: "60%",
    color: "#b71c1c !important"
  },
  textApellido: {
    width: "45%",
    marginLeft: "2em",
    color: "#b71c1c"
  },
  textHorario: {
    width: "100%",
    borderBottom: "1px solid #b71c1c",
    color: "#b71c1c",
    display: "flex",
    justifyContent:"space-between"
  },
  formControl: {
    margin: "1em",
    minWidth: 120
  },
  selectEmpty: {
    marginTop: "2em"
  },
  fab: {
    margin: "1em",
    position: "fixed",
    bottom: "1em",
    right: "1em",
    background: "#DB0517",
    "&:hover": {
      background: "#b71c1c"
    },
    color: "white"
  },
  extendedIcon: {
    marginRight: "0em"
  }
});

export default withStyles(styles) (class ButtonFloat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Variable para abrir cerrar Model
      open: false,
      // Variables de model
      nameEvent: "",
      dependence: "",
      change: "",
      nameCharge: "",
      extent: "",
      cost: "",
      rubro: "",
      date1: "",
      date2: "",
      observation: "",
      monitors: "",
      hour1: "",
      hour2: ""
    };
    
    // Funciones de model
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSendDatabase = this.handleSendDatabase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

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

  handleSendDatabase() {
    firebase
      .database()
      .ref("Evento/" + this.state.nameEvent)
      .set({
        nombreEvento: this.state.nameEvent,
        dependecia: this.state.dependence,
        encargado: {
          nombre: this.state.nameCharge,
          extension: this.state.extent
        },
        centroDeCostos: this.state.cost,
        rubro: this.state.rubro,
        fechaInicioEvento: this.state.date1,
        fechaFinEvento: this.state.date2,
        horaInicio: this.state.hour1,
        horaFin: this.state.hour2,
        observaciones: this.state.observation,
        cantidadMonitores:this.state.monitors
      });
    console.log("Enviado");

    this.setState({
      open: false
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
     const { classes } = this.props;
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
              name="nameEvent"
              clasName={classes.textName}
              value={this.state.nameEvent}
              label="Nombre de Evento"
              type="text"
              onChange={this.handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              name="dependence"
              label="Dependecia"
              clasName={classes.textName}
              value={this.state.dependence}
              onChange={this.handleInputChange}
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="nameCharge"
              clasName={classes.textName}
              value={this.state.nameCharge}
              onChange={this.handleInputChange}
              label="Encargado del Evento"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="cost"
              value={this.state.cost}
              onChange={this.handleInputChange}
              label="Centro de costos"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="rubro"
              value={this.state.rubro}
              onChange={this.handleInputChange}
              label="Rubro"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="extent"
              value={this.state.extent}
              onChange={this.handleInputChange}
              label="Extensión"
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="monitors"
              value={this.state.monitors}
              onChange={this.handleInputChange}
              label="Cantidad de monitores"
              type="number"
            />
            <TextField
              autoFocus
              margin="dense"
              name="date1"
              value={this.state.date1}
              onChange={this.handleInputChange}
              label="Fecha inicio"
              type="date"
            />
            <TextField
              autoFocus
              margin="dense"
              name="date2"
              value={this.state.date2}
              onChange={this.handleInputChange}
              label="Fecha fin"
              type="date"
            />
            <Typography>Horario</Typography>
            <TextField
              autoFocus
              margin="dense"
              name="hour1"
              value={this.state.hour1}
              onChange={this.handleInputChange}
              label="hora de inicio"
              type="time"
            />
            <TextField
              autoFocus
              margin="dense"
              name="hour2"
              value={this.state.hour2}
              onChange={this.handleInputChange}
              label="hora de fin"
              type="time"
            />
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
})
