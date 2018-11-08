import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Card, Image, Button } from "semantic-ui-react";
import Profile from "./Profile";
import MapComponent from "./MapComponent";
import usermarker from "../img/u.png";
import parkingspacemarker from "../img/marker.png";
import {
  LayersControl,
  BaseLayer,
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";

let myIcon = L.icon({
  iconUrl: usermarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

class Result extends Component {
  state = {
    isReserved: false,
    reserveSpot: [],
    lat: [],
    lng: []
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
        zip: this.props.zip,
        lng: this.props.lng,
        lat: this.props.lat
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

  render() {
    console.log(this.props);

    const { classes } = this.props;
    return (
      <Fragment>
        <Card style={{ width: 300, margin: 25 }}>
          <div className="map">
            <Map className="map" center={this.props.position} zoom={16}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={this.props.position} icon={myIcon}>
                <Popup>Your current location</Popup>
              </Marker>
            </Map>
          </div>
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
