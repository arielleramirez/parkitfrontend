import React, { Component } from "react";
import CurrentLocationResult from "./CurrentLocationResult";

class CurrentLocationResults extends Component {
  render() {
    console.log(this.props);
    return this.props.coords.map((parkingspace, idx) => {
      return (
        <CurrentLocationResult
          key={idx}
          id={parkingspace.id}
          {...parkingspace}
          position={[parkingspace.lat, parkingspace.lng]}
        />
      );
    });
  }
}

export default CurrentLocationResults;
