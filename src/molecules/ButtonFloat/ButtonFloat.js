import React, { Component } from "react";
import "./ButtonFloat.css";

// Import Material-UI
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";


export default class ButtonFloat extends Component {
  constructor() {
    super();
  }

  handleClick() {
    this.props.login();
  }

  render() {
    return (
      <Fab variant="extended" className="btn-addevent" aria-label="add ">
        <AddIcon />
        {this.props.text}
      </Fab>
    );
  }
}
