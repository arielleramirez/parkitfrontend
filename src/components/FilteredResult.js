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

class Result extends Component {
  state = {
    isReserved: false,
    reserveSpot: [],
    lat: [],
    lng: []
  };

  handleClick = () => this.setState({ isReserved: !this.state.isReserved });

  onReserve = event => {
    fetch(`http://localhost:3001/api/v1/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
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
    const { isReserved } = this.state;
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
            <Card.Header id="card-header">
              {this.props.location_name}
            </Card.Header>
            <Card.Description id="card-description">
              {this.props.address}
              <br />
              {this.props.city}
              <br />
              {this.props.state}, {this.props.zip}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              id="card-button"
              onClick={this.onReserve}
              isReserved={isReserved}
              style={{
                backgroundColor: isReserved ? "#a5456a" : null,
                color: isReserved ? "white" : null
              }}
            >
              {isReserved ? "Reserved" : "Reserve"}
            </Button>
          </Card.Content>
        </Card>
      </Fragment>
    );
  }
}

export default Result;
