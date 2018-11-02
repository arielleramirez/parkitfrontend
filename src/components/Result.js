import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";

class Result extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <p>{this.props.location_name}</p>
        <p>{this.props.address}</p>
        <p>{this.props.state}</p>
        <Button>Reserve</Button>
      </Card>
    );
  }
}

export default Result;
