import React, { Component, Fragment } from "react";
import { Card, Button } from "semantic-ui-react";
import usermarker from "../img/u.png";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
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
    fetch(`http://localhost:3001/api/v1/reservations/${this.props.id}`, {
      method: "DELETE"
    });
    this.props.handleCancel(this.props.id);
  };

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Card id="card">
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
          <Card.Content>
            <Card.Header id="card-header">{this.props.name}</Card.Header>
            <Card.Description id="card-description">
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
                width: "100%"
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
