import React, { Component, Fragment } from "react";
import Reservation from "./Reservation";
import { Card } from "semantic-ui-react";

class ReservationsList extends Component {
  render() {
    console.log(this.props.userReservations);
    return (
      <Card.Group itemsPerRow={4} padded="horizontally" className="Grid1">
        {this.props.userReservations.map((parkingspace, idx) => {
          return (
            <Reservation
              key={idx}
              id={parkingspace.id}
              {...parkingspace}
              handleCancel={this.props.handleCancel}
              position={[parkingspace.lat, parkingspace.lng]}
            />
          );
        })}
      </Card.Group>
    );
  }
}

export default ReservationsList;
//
// <Card.Group itemsPerRow={4} padded="horizontally" className="Grid1">
//   {this.props.locationResults.map((parkingspace, idx) => {
//     return (
//       <Result
//         key={idx}
//         location_name={parkingspace.location_name}
//         address={parkingspace.address}
//         city={parkingspace.city}
//         state={parkingspace.state}
//         zip={parkingspace.zip}
//         position={[parkingspace.lat, parkingspace.lng]}
//       />
//     );
//   })}
// </Card.Group>;
