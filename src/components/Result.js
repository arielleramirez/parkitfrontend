import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Card, Image, Button } from "semantic-ui-react";
import Profile from "./Profile";
import MapComponent from "./MapComponent";

class Result extends Component {
  state = {
    isReserved: false,
    reserveSpot: []
  };

  onReserve = event => {
    fetch(`http://localhost:3001/api/v1/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user_id, //fix user id to 1,recipes from api
        parkingspace_id: this.props.parkingspace_id,
        name: this.props.location_name,
        street: this.props.address,
        city: this.props.city,
        state: this.props.state,
        zip: this.props.zip
      })
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          reserveSpot: data,
          isReserved: true
        });
      });
  };

  // renderEachCoordinatePosition = stateObj => {
  //   return this.state.coords.map(cord => {
  //     var newPosition = [cord.lat, cord.lng];
  //     return (
  //       <Marker position={newPosition} icon={myIcon}>
  //         <Popup>
  //           <div className="pop">
  //             {cord.location_name}
  //             <br />
  //             {this.props.address}
  //             <br />
  //             {this.props.city}
  //           </div>
  //         </Popup>
  //       </Marker>
  //     );
  //   });
  // };

  render() {
    console.log(this.props);
    const { classes } = this.props;
    return (
      <Fragment>
        <Card style={{ width: 300, margin: 25 }}>
          <MapComponent locationResult={this.props.locationResults} />
          <Card.Content style={{ paddingLeft: 50 }}>
            <Card.Header>{this.props.location_name}</Card.Header>
            <Card.Description>
              {this.props.address}
              <br />
              {this.props.city}
              <br />
              {this.props.state}, {this.props.zip}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={this.onReserve}
              style={this.state.isReserved ? { color: "#FFD1DC" } : null}
              style={{ paddingLeft: 80, paddingRight: 80, marginLeft: 35 }}
            >
              Reserve
            </Button>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(state => ({ currentUser: state.currentUser }))(Result);
