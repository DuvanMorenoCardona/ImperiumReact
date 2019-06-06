import React, { Component } from "react";
import "./calendario.css";

// Importar componentes
import ButtonFloat from "../../molecules/ButtonFloat/ButtonFloat";
import Fullcalendar from "../../components/Fullcalendar/fullcalendar";
import Grid from "@material-ui/core/Grid";
import NavBar from "../../components/NavBar/NavBar";
import LeftAppBar from "../../molecules/LeftAppBar/LeftAppBar";
import Model from "../../components/Model/Model";

// Importar componentes de Material-ui
import { withStyles } from "@material-ui/core/styles";

// Importar componentes externos
import firebase from "firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    width: "100% !important",
    height: "100%"
  }
});

export default withStyles(styles)(
  class Calendario extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Events: {}
      };
    }

    componentWillMount() {
      /* console.log(this.props.window); */
      this.props.changeViewFunction(this.props.window);
      const EventsFirebase = firebase
        .database()
        .ref()
        .child("Evento");
      var me = this;
      EventsFirebase.on("value", snapshot => {
        // console.log(snapshot.val());
        me.setState({
          Events: snapshot.val()
        });
      });
      console.log(this.state.Events);
    }

    render() {
      const { classes } = this.props;
      return (

        <div className="content-calendar">
          <Fullcalendar />
          <ButtonFloat  text="Evento" />
        </div>
      );
    }
  }
);
