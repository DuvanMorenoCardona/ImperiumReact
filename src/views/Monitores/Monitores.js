import React, { Component } from "react";
import "./Monitores.css";

import TableMonitores from "../../components/TableMonitores/TableMonitores";

import { withStyles } from "@material-ui/core/styles";

import firebase from "firebase";

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 0,
    margin: 0,
    width: "100% !important",
    height: "100%"
  },
  LeftBar: {
    flexGrow: 0,
    padding: 0,
    margin: 0,
    height: "100%"
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  LeftAppBar: {
    height: "100%",
    padding: "0px !important",
    margin: "0px !important"
  },
  content: {
    marginTop: "6em",
    paddingLeft: "4em !important",
    paddingRight: "1em !important"
  }
});

export default withStyles(styles)(
  class Monitores extends Component {
    constructor(props) {
      super(props);
      this.state = {
        users: {}
      };
    }

    componentWillMount() {
      const attemptCard = firebase
        .database()
        .ref()
        .child("Monitor");
      attemptCard.on("value", snapshot => {
        this.setState({
          users: snapshot.val()
        });
      });

      /*  const socket = socketIOClient("http://localhost:8090");
      socket.emit("inicio");
        socket.on("entrar", data => {
        console.log(data);
      }); */
    }

    render() {
      return (
        <div>
          <TableMonitores users={this.state.users}/>
        </div>
      );
    }
  }
);

// <NavBar />
//   <Grid container className={classes.LeftBar} spacing={16}>
//     <Grid item xs={2} className={classes.LeftAppBar}>
//       <LeftAppBar />
//     </Grid>
//   </Grid>
