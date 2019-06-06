import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.scss"; // webpack must be configured to do this

// Importar material UI
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

//Importar componentes externos
import firebase from "firebase";

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
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

    this.handleClose = this.handleClose.bind(this);
    this.handleSendDatabase = this.handleSendDatabase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.eventClick = this.eventClick.bind(this);
  }
  calendarRef = React.createRef();

  state = {};

  // Se ejecuta antes de todo
  componentWillMount() {
    const attemptEvents = firebase
      .database()
      .ref()
      .child("Evento");

    // Se realiza un snapshot a la base de datos
    attemptEvents.on("value", snapshot => {
      let auxEvents = [];
      snapshot.forEach(event => {
        let data = event.val();
        let jsonEven = {
          title: event.key,
          start: data.fechaInicioEvento + data.horaInicio,
          end: data.fechaFinEvento + data.horaFin
        };
        auxEvents.push(jsonEven);
      });
      console.log(auxEvents);
      this.setState({
        events: auxEvents
      });
    });
  }

  eventClick(info) {
    // alert("Event: " + info.event.title);
    // alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
    // alert("View: " + info.view.type);

    // // change the border color just for fun
    // info.el.style.borderColor = "red";
    const attemptEvents = firebase
      .database()
      .ref()
      .child("Evento/"+ info.event.title);

      
    // Se realiza un snapshot a la base de datos
    attemptEvents.on("value", snapshot => {

      this.setState({
        nameEvent: snapshot.key,
        dependence: snapshot.val().dependecia,
        nameCharge: snapshot.val().encargado.nombre,
        extent: snapshot.val().encargado.extension,
        cost: snapshot.val().centroDeCostos,
        rubro: snapshot.val().rubre,
        date1: snapshot.val().fechaInicioEvento,
        date2: snapshot.val().fechaFinEvento,
        observation: snapshot.val().observaciones,
        hour1: snapshot.val().horaInicio,
        hour2: snapshot.val().horaFin,
        open: true
      });
    });


    // this.setState({
    //   open: true
    // });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  // Envia los datos del modal a la base de datos
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
        observaciones: this.state.observation
      });
    this.setState({
      open: false
    });
  }

  // Permite la edición de los fieldtext
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <FullCalendar
          className="dmc-FullCalendar"
          defaultView="dayGridMonth"
          dateClick={this.handleDateClick}
          plugins={[dayGridPlugin]}
          events={this.state.events}
          eventClick={this.eventClick}
        />
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
              value={this.state.dependence}
              onChange={this.handleInputChange}
              type="text"
            />
            <TextField
              autoFocus
              margin="dense"
              name="nameCharge"
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
  handleDateClick = arg => {
    // bind with an arrow function
    alert(arg.dateStr);
  };

  someMethod() {
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.next();
  }
}
