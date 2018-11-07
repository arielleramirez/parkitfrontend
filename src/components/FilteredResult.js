import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import PropTypes from "prop-types";

const Result = props => {
  console.log(props);
  const handleRes = event => {
    props.handleReservation(props.id);
  };

  return (
    <Card>
      <p>{props.location_name}</p>
      <p>{props.address}</p>
      <p>{props.state}</p>
      <Button onClick={handleRes}>Reserve</Button>
    </Card>
  );
};

export default Result;
