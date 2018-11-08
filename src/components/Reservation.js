import React, { Component, Fragment } from "react";
import { Card, Button, Image } from "semantic-ui-react";

const Reservations = props => {
  const onCancel = event => {
    props.handleCancel(props.id);
  };
  console.log(props);
  return (
    <Fragment>
      <Card style={{ width: 300, margin: 25 }}>
        <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
        <Card.Content style={{ paddingLeft: 50 }}>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
            {props.street}
            <br />
            {props.city}
            <br />
            {props.state}, {props.zip}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            onClick={onCancel}
            style={{ paddingLeft: 80, paddingRight: 80, marginLeft: 35 }}
          >
            Cancel Reservation
          </Button>
        </Card.Content>
      </Card>
    </Fragment>
  );
};

export default Reservations;
