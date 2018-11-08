import React, { Component, Fragment } from "react";
import Reservation from "./Reservation";
import { Card } from "semantic-ui-react";

class ReservationsList extends Component {
  render() {
    console.log(this.props);
    return (
      <Card.Group itemsPerRow={4} padded="horizontally" className="Grid1">
        {this.props.userReservations.map((recipe, idx) => {
          return (
            <Reservation
              key={idx}
              {...recipe}
              handleCancel={this.props.handleCancel}
            />
          );
        })}
      </Card.Group>
    );
  }
}

export default ReservationsList;
