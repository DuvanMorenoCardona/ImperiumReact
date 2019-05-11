import React, { Component } from "react";
import "./TitleLoginForm.css";


export default class TitleLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="rel-title-login-form">
        <h1>¡Bienvenido!</h1>
        <p>Para continuar por favor iniciar sesión </p>
      </div>
    );
  }
}
