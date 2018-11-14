import React, { Component, Fragment } from "react";
import { Card, Button, Image } from "semantic-ui-react";
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

class Reservations extends Component {
  state = {};
  onCancel = event => {
    console.log(event.target);
    fetch(`http://localhost:3002/api/v1/reservations/${this.props.id}`, {
      method: "DELETE"
    });
    this.props.handleCancel(this.props.id);
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Card
          style={{
            width: 300,
            marginLeft: 130,
            marginRight: 25,
            marginTop: 50,
            zIndex: 5,
            border: 2
          }}
        >
          <div className="maps-container">
            <Map className="map" center={this.props.position} zoom={16}>
              <TileLayer
                attribution="&copy; <a href=&quot;http://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> &copy; <a href=&quot;https://carto.com/attributions&quot;>CARTO</a>"
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              />
              <Marker position={this.props.position} icon={myIcon}>
                <Popup>Your current location</Popup>
              </Marker>
            </Map>
          </div>
          <Card.Content style={{ paddingLeft: 50 }}>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Description>
              {this.props.street}
              <br />
              {this.props.city}
              <br />
              {this.props.state}, {this.props.zip}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={this.onCancel}
              id={this.props.id}
              style={{
                paddingLeft: 80,
                paddingRight: 80,
                marginLeft: 5
              }}
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
