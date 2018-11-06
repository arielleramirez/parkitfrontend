import React, { Component, Fragment } from "react";
import { Card, Button, Image } from "semantic-ui-react";

class Reservations extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Card style={{ width: 300, margin: 25 }}>
          <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
          <Card.Content style={{ paddingLeft: 50 }}>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Description>
              {this.props.address}
              <br />
              {this.props.state}, {this.props.zip}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={this.onReserve}
              style={{ paddingLeft: 80, paddingRight: 80, marginLeft: 35 }}
            >
              Cancel Reservation
            </Button>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

export default Reservations;
