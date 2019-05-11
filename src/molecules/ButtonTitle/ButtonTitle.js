import React, { Component } from "react";
import "./ButtonTitle.css";

import Button from "@material-ui/core/Button";

export default class ButtonTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    this.props.login();
  }

  render() {
    return (
      <div className="">
        <Button
          variant="contained"
          color="default"
          className="rel-button-login"
          onClick={this.handleClick}
        >
          <img
            className="rel-icon-google"
            src="./assets/img/google.svg"
            alt="Icono de google"
          />
          Iniciar sesión con GOOGLE
        </Button>
      </div>
    );
  }
}
