import React, { Component } from "react";
import Result from "./FilteredResult";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";
import FilteredResult from "./FilteredResult";

class FilterResults extends Component {
  render() {
    console.log(this.props.searchResults);
    return (
      <Card.Group itemsPerRow={3}>
        {this.props.searchResults.map((parkingspace, idx) => {
          if (this.props.filter === parkingspace.state) {
            return (
              <FilteredResult
                key={idx}
                {...parkingspace}
                position={[parkingspace.lat, parkingspace.lng]}
              />
            );
          }
        })}
      </Card.Group>
    );
  }
}

export default FilterResults;
