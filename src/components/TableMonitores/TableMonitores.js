import React, { Component } from "react";
import "./TableMonitores.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableRowContent from "../../molecules/TableRowContent/TableRowContent";

import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  table: {
    fontFamily: theme.typography.fontFamily
  },
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  },
  tableHead: {
    backgroundColor: "#b71c1c"
  },
  tableHeadText: {
    color: "white"
  },
  top: {
    marginTop: "5em",
    marginLeft: "3em"
  }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

export default withStyles(styles)(
  class TableMonitores extends Component {
    constructor(props) {
      super(props);
      this.state = {};
      this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {}

    handleClick() {
      this.props.login();
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.top}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableHead}>
                  <TableCell className={classes.tableHeadText}>
                    Nombre
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Carrera
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Semestre
                  </TableCell>
                  <TableCell
                    align="right"
                    className={classes.tableHeadText}
                  >
                    Elimina o editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(this.props.users).map((key, i) => {
                  return (
                    <TableRowContent
                      name={
                        this.props.users[key].nombre +
                        " " +
                        this.props.users[key].apellido
                      }
                      carrera={this.props.users[key].carrera}
                      semestre={
                        this.props.users[key].semestre
                      }
                      key={i}
                      thisUser={this.props.users[key]}
                    />
                  );
                })}
                {/* rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                  </TableRow>
                )) */}
              </TableBody>
            </Table>
          </Paper>
          
        </div>
      );
    }
  }
);
