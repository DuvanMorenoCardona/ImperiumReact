import React, { Component } from "react";
import "./Login.css";
import Grid from "@material-ui/core/Grid";
import * as firebase from "firebase";

//importar componentes

import LoginForm from "../../components/LoginForm/LoginForm";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit = event => {
      var me = this;
      var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
        if (result) {
          me.props.history.push("/Calendario");
        }
      })
      .catch(function(error) {});
  };
  render() {
    return (
      <Grid container className="rel-login" spacing={16}>
        <Grid className="rel-pl-0 rel-pr-0 rel-left-login-img" item xs={6}>
          <h1>IMPERIUM</h1>
        </Grid>
        <LoginForm login={this.handleSubmit} />
      </Grid>
    );
  }
}
