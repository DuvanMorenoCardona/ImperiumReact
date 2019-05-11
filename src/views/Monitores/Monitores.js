import React, { Component } from "react";
import "./Monitores.css";

export default class Monitores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render() {
    let divstylehp = {
      width: this.props.hp + "%"
    };
    return (
      <div className="rel-barHp-content">
        <div className="rel-barhp" style={divstylehp}>
          <h5>HP</h5>
        </div>
      </div>
    );
  }
}
