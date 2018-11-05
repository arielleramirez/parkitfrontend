import React, { Component } from "react";
import Result from "./Result";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

class SearchResult extends Component {
  render() {
    console.log(this.props.searchResult);
    return (
      <Card.Group itemsPerRow={4} padded="horizontally" className="Grid1">
        {this.props.searchResult.map((recipe, idx) => {
          return <Result key={idx} {...recipe} />;
        })}
      </Card.Group>
    );
  }
}

export default SearchResult;

// if (this.props.filter == space.state) {

//
// render() {
//   console.log(this.props.searchResults);
//   const results = this.props.searchResults.map((space, idx) => {
//     return <Result key={idx} {...space} />;
//   });
//   return <Card.Group itemsPerRow={3}>{results}</Card.Group>;
// }
