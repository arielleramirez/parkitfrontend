import React, { Component } from "react";
import Result from "./Result";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

class SearchResults extends Component {
  render() {
    console.log(this.props.searchResults);
    return (
      <Card.Group itemsPerRow={3}>
        {this.props.searchResults.map((recipe, idx) => {
          return <Result key={idx} {...recipe} />;
        })}
      </Card.Group>
    );
  }
}

export default SearchResults;
// if (this.props.filter == space.state) {

//
// render() {
//   console.log(this.props.searchResults);
//   const results = this.props.searchResults.map((space, idx) => {
//     return <Result key={idx} {...space} />;
//   });
//   return <Card.Group itemsPerRow={3}>{results}</Card.Group>;
// }
