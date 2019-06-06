import React, { Component } from "react";

// Importar Componentes de Material-Ui
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
    color: "#b71c1c"
  },
  textHorarioI: {
    width: "30%",
    marginLeft: "1em"
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
  class Home extends Component {
    constructor(props) {
      super(props);
      this.state = {
        codeStudent: "",
        horarioI: "",
        horarioF: "",
        date: ""
      };
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
      const target = event.target;
      const name = target.name;
      const value = target.type === "checkbox" ? target.checked : target.value;

      this.setState({
        [name]: value
      });
    }

    componentWillMount() {
      console.log(this.props.keyH)
    }
    render() {
      const { classes } = this.props;
      return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-simple">Dia</InputLabel>
            <Select
              value={this.state.date}
              onChange={this.handleInputChange}
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
          <TextField
            autoFocus
            margin="dense"
            name="horarioI"
            value={this.state.horarioI}
            label="Hora Inicio"
            type="time"
            className={classes.textHorarioI}
            onChange={this.handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="horarioF"
            value={this.state.horarioF}
            label="Hora Fin"
            type="time"
            className={classes.textHorarioI}
            onChange={this.handleInputChange}
          />
        </div>
      );
    }
  }
);
