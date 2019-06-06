import React, { Component } from "react";

import AppBar from "../../molecules/AppBar/AppBar";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {

    return (
      <AppBar
        window={this.props.window}
        changeCalendarView={this.props.changeCalendarView}
      />
    );
  }
}
