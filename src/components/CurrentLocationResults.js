import React, { Component } from "react";
import Markers from "./Markers";

class CurrentLocationResults extends Component {
  render() {
    console.log(this.props.coords);
    return this.props.coords.map(parkingspace => {
      return (
        <Markers
          key={parkingspace.id}
          id={parkingspace.id}
          location_name={parkingspace.location_name}
          position={[parkingspace.lat, parkingspace.lng]}
        />
      );
    });
  }
}

export default CurrentLocationResults;
