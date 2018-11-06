import React, { Component } from "react";

class Reservations extends Component {
  render() {
    console.log(this.props);
    return <div>{this.props.name}</div>;
  }
}

export default Reservations;
