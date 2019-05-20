import React, { Component } from "react";
import "./TableRowContent.css";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import ClearIcon from "@material-ui/icons/RemoveCircle";

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
        <TableRow key={this.props.row.id}>
          <TableCell component="th" scope="row">
            <div className={classes.avatar}>
              <Avatar>Du</Avatar>
              <h5 className={classes.avatarText}>Duvan Moreno</h5>
            </div>
          </TableCell>
          <TableCell align="right">{this.props.row.calories}</TableCell>
          <TableCell align="right">{this.props.row.fat}</TableCell>
          <TableCell align="right"><ClearIcon/></TableCell>
        </TableRow>
      );
    }
  }
);
