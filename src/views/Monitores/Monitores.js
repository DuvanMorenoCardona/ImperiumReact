import React, { Component } from "react";
import "./Monitores.css";

import TableMonitores from "../../components/TableMonitores/TableMonitores";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Fab from "@material-ui/core/Fab";
import NavigationIcon from "@material-ui/icons/Add";

import { withStyles, makeStyles } from "@material-ui/core/styles";

import firebase from "firebase";

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
    width: "45%"
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
    color:"#b71c1c"
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
    right: "1em"
  },
  extendedIcon: {
    marginRight: "1em"
  }
});

export default withStyles(styles)(
  class Monitores extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: {},
        open: false,
        name: "",
        lastName: "",
        email: "",
        dateAge: "",
        phone: "",
        program: "",
        cedula: "",
        celPhone: "",
        codeStudent: "",
        date: ""
      };
      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);

      this.name = React.createRef();
      this.lastName = React.createRef();
      this.email = React.createRef();
      this.dateAge = React.createRef();
      this.phone = React.createRef();
      this.program = React.createRef();
      this.cedula = React.createRef();
      this.celPhone = React.createRef();
      this.program = React.createRef();
      this.codeStudent = React.createRef();
      this.semestre = React.createRef();

      this.handleSendDatabase = this.handleSendDatabase.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
      const attemptCard = firebase
        .database()
        .ref()
        .child("Monitor");
      attemptCard.on("value", snapshot => {
        this.setState({
          users: snapshot.val()
        });
      });
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
      console.log(this.state.cedula);
      firebase
        .database()
        .ref("Monitor/" + this.state.cedula)
        .update({
          nombre: this.state.name,
          apellido: this.state.lastName,
          correo: this.state.email,
          cedula: this.state.cedula,
          carrera: this.state.program,
          celular: this.state.celPhone,
          fechaNacimiento: this.state.dateAge,
          semestre: this.state.semestre,
          codigo: this.state.codeStudent,
          horario:this.state.date
        });
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

    handleChange = name => event => {
      this.setState({ [name]: event.target.value });
    };

    render() {
      const { classes } = this.props;
      return (
        <div>
          <TableMonitores
            users={this.state.users}
            handleClickOpen={this.handleClickOpen}
            handleClose={this.handleClose}
          />
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth
          >
            <DialogTitle id="form-dialog-title">
              Editar Contacto Monitor
            </DialogTitle>
            <DialogContent>
              <Typography
                variant="subtitle1"
                component="h2"
                margin="dense"
                className={classes.textHorario}
              >
                Datos personales
              </Typography>
              <TextField
                autoFocus
                margin="dense"
                ref={this.name}
                name="name"
                value={this.state.name}
                label="Nombre"
                type="text"
                className={classes.textName}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                name="lastName"
                ref={this.lastName}
                value={this.state.lastName}
                label="Apellido"
                type="text"
                className={classes.textApellido}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.cedula}
                name="cedula"
                value={this.state.cedula}
                label="Cedula"
                type="text"
                className={classes.textCedula}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.dateAge}
                name="dateAge"
                value={this.state.dateAge}
                label="Fecha de Nacimiento"
                type="date"
                className={classes.textCedula}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.phone}
                name="phone"
                value={this.state.phone}
                label="Telefono"
                type="text"
                className={classes.textName}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.celPhone}
                name="celPhone"
                value={this.state.celPhone}
                label="Celular"
                type="text"
                className={classes.textApellido}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.email}
                name="email"
                value={this.state.email}
                label="Correo"
                type="email"
                className={classes.textCedula}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                name="program"
                ref={this.program}
                value={this.state.program}
                label="Programa"
                type="text"
                className={classes.textCedula}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.semestre}
                name="semestre"
                value={this.state.semestre}
                label="semestre"
                type="text"
                className={classes.textName}
                onChange={this.handleInputChange}
              />
              <TextField
                autoFocus
                margin="dense"
                ref={this.codeStudent}
                name="codeStudent"
                value={this.state.codeStudent}
                label="Codigo estudiantil"
                type="text"
                className={classes.textApellido}
                onChange={this.handleInputChange}
              />
              <Typography
                variant="subtitle1"
                component="h2"
                margin="dense"
                className={classes.textHorario}
              >
                Horario
              </Typography>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-simple">Dia</InputLabel>
                <Select
                  value={this.state.date}
                  onChange={this.handleChange("date")}
                  inputProps={{
                    name: "date",
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
          <Fab
            variant="extended"
            aria-label="Delete"
            className={classes.fab}
            onClick={this.handleClickOpen}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Monitor
          </Fab>
        </div>
      );
    }
  }
);
