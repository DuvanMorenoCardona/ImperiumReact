import React, { Component } from "react";
import "./LoginForm.css";
import Grid from "@material-ui/core/Grid";

//ahgasdkasgdk
import ButtonTitle from "../../molecules/ButtonTitle/ButtonTitle";
import TitleLoginForm from "../../molecules/TitleLoginForm/TitleLoginForm";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid item xs={6} className="rel-title-login-form rel-pr-0 rel-pl-0">
        <TitleLoginForm />
            <ButtonTitle login={this.props.login}/>
      </Grid>
    );
  }
}
