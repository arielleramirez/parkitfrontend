import React, { Component } from "react";
import Result from "./Result";
import { Card } from "semantic-ui-react";

class SearchResults extends Component {
  render() {
    console.log(this.props);
    return (
      <Card.Group itemsPerRow={4} padded="horizontally" className="Grid1">
        {this.props.locationResults.map((parkingspace, idx) => {
          return (
            <Result
              key={idx}
              location_name={parkingspace.location_name}
              address={parkingspace.address}
              city={parkingspace.city}
              state={parkingspace.state}
              zip={parkingspace.zip}
              lat={parkingspace.lat}
              lng={parkingspace.lng}
              position={[parkingspace.lat, parkingspace.lng]}
            />
          );
        })}
      </Card.Group>
    );
  }
}

export default SearchResults;
