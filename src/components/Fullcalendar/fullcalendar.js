import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.scss"; // webpack must be configured to do this

export default class DemoApp extends React.Component {
  calendarRef = React.createRef();

  render() {
    return (
      <FullCalendar
        defaultView="dayGridMonth"
        dateClick={this.handleDateClick}
        plugins={[dayGridPlugin]}
        events={[
          {
            title: "event 1",
            date: "2019-05-01"
          },
          { title: "event 2", date: "2019-05-02" }
        ]}
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
