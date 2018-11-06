import React, { Component } from "react";
import Reservation from "./Reservation";

class ReservationsList extends Component {
  render() {
    console.log(this.props);
    return this.props.userReservations.map(reserve => {
      return <Reservation name={reserve.name} />;
    });
  }
}

export default ReservationsList;
