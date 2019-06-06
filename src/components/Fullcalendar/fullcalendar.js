import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.scss"; // webpack must be configured to do this

import firebase from "firebase";

export default class DemoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  calendarRef = React.createRef();

  state = {};

  // Se ejecuta antes de todo
  componentWillMount() {
    const attemptEvents = firebase
      .database()
      .ref()
      .child("Evento");

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
          this.setState(
            {
              events: auxEvents
            }
          );
    });
  }

  eventClick(info) {
    alert('Event: ' + info.event.title);
    alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    alert('View: ' + info.view.type);

    // change the border color just for fun
    info.el.style.borderColor = 'red';
  }

  render() {
    return (
      <FullCalendar
        className="dmc-FullCalendar"
        defaultView="dayGridMonth"
        dateClick={this.handleDateClick}
        plugins={[dayGridPlugin]}
        events={this.state.events}
        eventClick={this.eventClick}
      />
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
