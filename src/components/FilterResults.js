import React, { Component } from "react";
import Result from "./FilteredResult";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

class FilterResults extends Component {
  render() {
    console.log(this.props.searchResults);
    return (
      <Card.Group itemsPerRow={3}>
        {this.props.searchResults.map((recipe, idx) => {
          if (this.props.filter === recipe.state) {
            return <Result key={idx} {...recipe} />;
          }
        })}
      </Card.Group>
    );
  }
}

export default FilterResults;
