import React, { Component } from "react";
import "./TableRowContent.css";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/Delete";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  avatar: {
    display: "flex"
  },
  avatarText:{
    marginLeft:"1em"
  }
});

export default withStyles(styles)(
  class TableRowContent extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.props.login();
    }

    render() {
      const { classes } = this.props;
      return (
        <TableRow key={this.props.key}>
          <TableCell component="th" scope="row">
            <div className={classes.avatar}>
              <Avatar>{this.props.name[0] + this.props.name[1]}</Avatar>
              <h5 className={classes.avatarText}>{this.props.name}</h5>
            </div>
          </TableCell>
          <TableCell align="right">{this.props.carrera}</TableCell>
          <TableCell align="right">{this.props.semestre}</TableCell>
          <TableCell align="right">
            <ClearIcon />
          </TableCell>
        </TableRow>
      );
    }
  }
);
