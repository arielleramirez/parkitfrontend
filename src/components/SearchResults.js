// import React, { Component } from "react";
// import Result from "./Result";
// import { Card } from "semantic-ui-react";
//
// class SearchResults extends Component {
//   render() {
//     const results = this.props.coords.map((data, idx) => {
//       return <Result key={idx} {...data} />;
//     });
//     return <Card.Group itemsPerRow={3}>{results}</Card.Group>;
//   }
// }
//
// export default SearchResults;

// <div className="flex-container">{results}</div>;

import React, { Component } from "react";
import Result from "./Result";
import { Card } from "semantic-ui-react";

class SearchResults extends Component {
  render() {
    const results = this.props.coords.map(space => {
      if (this.props.filter === space.state) {
        return (
          <Result
            key={space.location_id}
            address={space.address}
            location_name={space.location_name}
            state={space.state}
          />
        );
      }
    });
    return <Card.Group itemsPerRow={3}>{results}</Card.Group>;
  }
}

export default SearchResults;
