import React, { Component } from "react";
import "./TableRowContent.css";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";

import firebase from "firebase";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  avatar: {
    display: "flex"
  },
  avatarText: {
    marginLeft: "1em"
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
    color: "red"
  },
  textHorario: {
    width: "100%",
    borderBottom: "1px solid #b71c1c",
    color: "#b71c1c"
  },
  formControl: {
    margin: "1em",
    minWidth: 120
  },
  selectEmpty: {
    marginTop: "2em"
  }
});

export default withStyles(styles)(
  class TableRowContent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        name: props.thisUser.nombre,
        lastName: props.thisUser.apellido,
        email: props.thisUser.correo,
        dateAge: props.thisUser.fechaNacimiento,
        phone: props.thisUser.telefono,
        program: props.thisUser.carrera,
        cedula: props.thisUser.cedula,
        celPhone: props.thisUser.celular,
        codeStudent: props.thisUser.codigo,
        semestre: props.thisUser.semestre,
        date: ""
      };
      this.handleClick = this.handleClick.bind(this);

      this.handleClickOpen = this.handleClickOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSendDatabase = this.handleSendDatabase.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick() {
      this.props.login();
    }
    editMonitor() {}

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

    handleDelete() {
      let r = window.confirm(
        "Seguro de que desea eliminar a " + this.props.thisUser.nombre
      );

      if (r === true) {
        alert("Se elimino a " + this.props.thisUser.nombre);
        firebase
          .database()
          .ref("Monitor/" + this.props.thisUser.cedula)
          .remove()
          .then(function() {
            console.log("Remove succeeded.");
          })
          .catch(function(error) {
            console.log("Remove failed: " + error.message);
          });
      } else {
        alert("No se elimino a " + this.props.thisUser.nombre);
      }
    }

    handleSendDatabase() {
      console.log(this.props.thisUser.cedula);
      firebase
        .database()
        .ref("Monitor/" + this.props.thisUser.cedula)
        .set({
          nombre: this.props.thisUser.nombre,
          apellido: this.props.thisUser.apellido,
          correo: this.props.thisUser.correo,
          cedula: this.props.thisUser.cedula,
          carrera: this.props.thisUser.carrera,
          celular: this.props.thisUser.celular,
          fechaNacimiento: this.props.thisUser.fechaNacimiento,
          semestre: this.props.thisUser.semestre,
          codigo: this.props.thisUser.codigo
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

    render() {
      const { classes } = this.props;
      return (
        <TableRow key={this.props.key}>
          <TableCell component="th" scope="row">
            <div className={classes.avatar}>
              <Avatar>{this.props.name[0] + this.props.name[1]}</Avatar>
              <h5 className={classes.avatarText}>{this.props.name}</h5>
            </div>
          </TableCell>
          <TableCell align="right">{this.props.carrera}</TableCell>
          <TableCell align="right">{this.props.semestre}</TableCell>
          <TableCell align="right">
            <ClearIcon onClick={this.handleDelete} />
            <EditIcon onClick={this.handleClickOpen} />
          </TableCell>
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
                color="primary"
                margin="dense"
                className={classes.textHorario}
              >
                Horario
              </Typography>
              {/* <FormControl className={classes.formControl}>
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
              </FormControl> */}
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
        </TableRow>
      );
    }
  }
);
